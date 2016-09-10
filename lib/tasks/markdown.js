 var gulp = require('gulp');
var markdownToJSON = require('gulp-markdown-to-json');
var concatJson = require("gulp-concat-json");
var jsonTransform = require('gulp-json-transform');
var _ = require('underscore');
var html2json = require('html2json').html2json;
var hljs = require('highlight.js');
var fa = require('markdown-it-fontawesome');
var blockImagePlugin = require("markdown-it-block-image");

gulp.task('markdown', function() {
  return gulp.src("markdown/**/*.md")
    .pipe(markdownToJSON(renderer))
    .pipe(jsonTransform(transformData))
    .pipe(concatJson("all.json"))
    .pipe(jsonTransform(transformMenu))
    .pipe(gulp.dest('temp/json'))
});

function renderer(string) {
  var md = require('markdown-it')({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>';
        } catch (__) {}
      }
      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  });
  var markdownItAttrs = require('markdown-it-attrs');
  md.use(markdownItAttrs);
  // md.use(fa)
  md.use(require('markdown-it-icon'));
  md.renderer.rules.emoji = function(tokens, idx) {
    var shortname = tokens[idx].markup;
    if(shortname.startsWith('ion-')) {
      return '<i class="icon ' + shortname + '"></i>';
    }
    return '<i class="fa ' + shortname + '"></i>';
  }
  md.use(blockImagePlugin, {
    outputContainer: "div",
    containerClassName: "image"
  });
  md.use(require('markdown-it-container'), 'img', {

    validate: function(params) {
      return params.trim().match(/^img\s+(.*)$/);
    },

    render: function (tokens, idx) {
      var m = tokens[idx].info.trim().match(/^img\s+(.*)$/);

      if (tokens[idx].nesting === 1) {
        // opening tag
        return '<div class="img"><img src="' + md.utils.escapeHtml(m[1]) + '" /></div>\n';

      } else {
        // closing tag
        return '';
      }
    }
  });
  return md.render(string)
}

function transformData(data, file) {
  const folders = file.relative.split("/")
  return _.extend(data, {
    data: html2json(data.body),
    file: file.relative.replace(".json", ".html"),
    folder: folders.length > 1 ? folders[0] : null,
    level: folders.length > 1 && folders[1] != "index.json" ? folders[0] : "root"
  });
}

function transformMenu(data, file) {
  const menu = getMenu(data)
  return _.map(data, function(item) {
    return _.extend(item, {
      menuList: menu
    })
  })
}

function getMenu(data) {
  const rootMenu = _.filter(data, function(item) { return item.level == "root" })
  const menu = _.map(rootMenu, function(item) {
    const subFolders = getSubmenu(_.filter(data, function(sub) { return item.folder == sub.level }))
    
    return {
      order: item.order,
      title: item.menu,
      icon: item.icon,
      url: "/" + item.file,
      submenu: item.level == "root" && item.folder == null ? [] : subFolders
    }
  })

  return _.sortBy(menu, function(o) { return o.order })
}

function getSubmenu(data) {
  return _.map(data, function(item) {
    return {
      order: item.order,
      icon: item.icon,
      url: "/" + item.file,
      title: item.menu
    }
  });
}