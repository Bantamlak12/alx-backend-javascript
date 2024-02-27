const fs = require('fs');

const readDatabase = async (filePath) => new Promise((resolve, reject) => {
  fs.access(filePath, (err) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const lines = data.trim().split('\n');
          const header = lines[0];
          const database = {};

          lines.forEach((line) => {
            if (line !== header) {
              const lineArray = line.split(',');
              const field = lineArray[lineArray.length - 1];
              const firstname = lineArray[0];

              if (!database[field]) {
                database[field] = [];
              }
              database[field].push(firstname);
            }
          });
          resolve(database);
        }
      });
    }
  });
});

module.exports = readDatabase;

// const path = process.argv[2];

// readDatabase(path).then((data) => {
//   const msg = 'This is the list of our students';
//   console.log(msg);
//   for (const [key, value] of Object.entries(data)) {
//     console.log(
//       `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`
//     );
//   }
// });
