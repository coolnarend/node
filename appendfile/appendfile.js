// Create Files
// The File System module has methods for creating new files:

// fs.appendFile()
// fs.open()
// fs.writeFile()

// ------------------------------------------------

// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', ' again Hello content modified!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// ----------------------------

// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// ----------------------------

// The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// --------------------------
// --------------------------

// Update Files
// The File System module has methods for updating files:

// fs.appendFile()
// fs.writeFile()


// Append "This is my text." to the end of the file "mynewfile1.txt":

// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });

// --------------------------

// The fs.writeFile() method replaces the specified file and content:

// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });

// --------------------------
// --------------------------

// Delete Files

// To delete a file with the File System module,  use the fs.unlink() method.
// The fs.unlink() method deletes the specified file:

// Delete "mynewfile2.txt":

// var fs = require('fs');

// fs.unlink('mynewfile2.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });

// --------------------------
// --------------------------

// Rename Files
// To rename a file with the File System module,  use the fs.rename() method.
// The fs.rename() method renames the specified file:

// Rename "mynewfile1.txt" to "myrenamedfile.txt":

// var fs = require('fs');
// fs.rename('myrenamedfile.txt', 'myrenamedfile2.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

// --------------------------
// --------------------------