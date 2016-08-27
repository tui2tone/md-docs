var ncp = require('ncp').ncp;
var getInstalledPath = require('get-installed-path')
var installedPath = getInstalledPath('mdoc')
var minimist = require('minimist')
var fs = require('fs');

ncp.limit = 16;

function init() {
  const cmd = minimist(process.argv.slice(2))._;
  const src = installedPath + "/src";
  const app = cmd[1]
  const appSrc = app + "/src"


  if(app != undefined) {
    fs.mkdir(app);
    fs.mkdir(appSrc);

    ncp(src, appSrc, function (err) {
     if (err) {
       return console.error(err);
     }
     console.log('done!');
    });
    console.log(installedPath)
  } else {
    console.log("following command 'mdoc init name'")
  }
}

exports.init = init;