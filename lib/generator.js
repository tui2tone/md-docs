var ncp = require('ncp').ncp;
var getInstalledPath = require('get-installed-path')
var installedPath = getInstalledPath('mdoc')
var minimist = require('minimist')
var fs = require('fs');
var run = require('node-cmd');

ncp.limit = 16;

function init() {
  const cmd = minimist(process.argv.slice(2))._;
  const src = installedPath;
  const app = cmd[1]

  if(app != undefined) {
    if (!fs.existsSync(app)){
      fs.mkdir(app);
    } else {
      console.log("folder '" + app + "' is already exist")
      return null
    }

    component(src, app,  "components")
    component(src, app,  "layouts")
    component(src, app,  "markdown")
    component(src, app,  "styles")
    copy(src, "init.json", app, "package.json")
    copy(src, ".gitignore", app, ".gitignore")
  } else {
    console.log("following command 'mdoc init name'")
  }
}

exports.init = init;

function component(src, app, path) {
  ncp(src + "/" + path, app + "/" + path, function (err) {
    if (err) {
      return console.error(err);
    }
    run.get('cd ' + app + ' && npm install', function(data){
      console.log("create: '" + path + "' done.");
    });
  });
}

function copy(src, file, app, newfile) {
  fs.createReadStream(src + "/" + file).pipe(fs.createWriteStream(app + "/" + newfile));
  console.log("create: '" + newfile + "' done.");
}