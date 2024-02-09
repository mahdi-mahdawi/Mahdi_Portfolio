const fs = require('fs');
const path = require('path');

// Define paths
const buildPath = path.resolve(__dirname, 'build');
const rootPath = __dirname;

// Move all files and folders from build to the root directory
fs.readdirSync(buildPath).forEach((file) => {
    const filePath = path.resolve(buildPath, file);
    const destPath = path.resolve(rootPath, file);

    fs.renameSync(filePath, destPath);
});

console.log('All files and folders moved to the root directory.');
