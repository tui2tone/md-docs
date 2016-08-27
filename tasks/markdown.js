'use strict';

import gulp from "gulp";
import markdownToJSON from 'gulp-markdown-to-json';
import concatJson from "gulp-concat-json";
import jsonTransform from 'gulp-json-transform';
import _ from 'underscore';
import { html2json } from 'html2json';
import marked from 'marked';
import hljs from 'highlight.js';

function renderer(string) {
  var md = require('markdown-it')({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
                 hljs.highlight(lang, str, true).value +
                 '</code></pre>';
        } catch (__) {}
      }

      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  });
  var markdownItAttrs = require('markdown-it-attrs');
  md.use(markdownItAttrs);
  return md.render(string)
}

gulp.task('markdown', () => {
  return gulp.src("./src/markdown/**/*.md")
    .pipe(markdownToJSON(renderer))
    .pipe(jsonTransform((data, file) => {
      const folders = file.relative.split("/")

      return {
        ...data,
        data: html2json(data.body),
        file: file.relative.replace(".json", ".html"),
        folder: folders.length > 1 ? folders[0] : null ,
        level: folders.length > 1 && folders[1] != "index.json" ? folders[0] : "root"
      };
    }))
    .pipe(concatJson("all.json"))
    .pipe(jsonTransform((data, file) => {
      const menu = getMenu(data)
      return data.map((item) => {
        return {
          ...item,
          menu: menu
        }
      })
    }))
    .pipe(gulp.dest('temp/json'))
});

function getMenu(data) {
  const rootMenu = _.filter(data, (item) => { return item.level == "root" })

  return _.sortBy(rootMenu.map((item) => {
    const subFolders = _.filter(data, (item) => { return item.folder == item.level })
                        .map((sub) => {
                          return {
                            ...sub,
                            index: sub.index,
                            url: "/" + sub.file,
                            title: sub.menu
                          }
                        })

    // const submenu = _.filter(item.data.child, (item) => { return item.tag == "h2" })
    //                   .map((sub) => {
    //                     return {
    //                       url: "/" + item.file + "#" + sub.attr.id,
    //                       title: sub.child[0].text
    //                     }
    //                   })

    return {
      index: item.index,
      title: item.menu,
      url: "/" + item.file,
      submenu: item.level == "root" && item.folder == null ? [] : subFolders
    }
  }), (o) => { return o.index })
}