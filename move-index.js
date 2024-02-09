const fs = require('fs');
const path = require('path');

// Define paths
const buildPath = path.resolve(__dirname, 'build');
const filesToMove = fs.readdirSync(buildPath);

// Move files to the root directory
filesToMove.forEach((file) => {
    const sourcePath = path.resolve(buildPath, file);
    const destinationPath = path.resolve(__dirname, file);

    fs.renameSync(sourcePath, destinationPath);
    console.log(`${file} moved to the root directory.`);
});
