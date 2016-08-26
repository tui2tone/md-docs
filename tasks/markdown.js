'use strict';

import gulp from "gulp";
import markdown from "gulp-markdown-to-json";
import concatJson from "gulp-concat-json";
import jsonTransform from 'gulp-json-transform';
import _ from 'underscore';
import { html2json } from 'html2json';


gulp.task('markdown', () => {
  return gulp.src("./src/markdown/**/*.md")
    .pipe(markdown({
      pedantic: true,
      smartypants: true
    }))
    .pipe(jsonTransform((data, file) => {
      return {
        ...data,
        data: html2json(data.body),
        file: file.relative.replace(".json", ".html")
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
  return _.sortBy(data.map((item) => {
    const submenu = _.filter(item.data.child, (item) => { return item.tag == "h2" })

    return {
      index: item.index,
      title: item.menu,
      url: item.file,
      submenu: submenu.map((sub) => {
        return {
          id: item.file + "#" + sub.attr.id,
          title: sub.child[0].text
        }
      })
    }
  }), (o) => { return o.index })
}