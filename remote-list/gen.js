var path = require('path');
var fs = require('fs-extra');

var distPath = path.resolve(process.cwd(), './dist');

fs.moveSync(`${distPath}/demo/index.html`, `${distPath}/demo.html`);
// fs.moveSync(`${distPath}/static/x`, `${distPath}/x`);