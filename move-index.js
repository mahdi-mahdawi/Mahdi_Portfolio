const fs = require('fs');
const path = require('path');

// Define paths
const buildPath = path.resolve(__dirname, 'build');
const indexPath = path.resolve(buildPath, 'index.html');
const newIndexLocation = path.resolve(__dirname, 'index.html');

// Move index.html to the root directory
fs.rename(indexPath, newIndexLocation, (err) => {
    if (err) {
        console.error('Error moving index.html:', err);
    } else {
        console.log('index.html moved to the root directory successfully.');
    }
});