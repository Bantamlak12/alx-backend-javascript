const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf-8');
  const lines = data.split('\n');

  let totalStudent = 0;
  const studentByField = {};
  const names = {};

  for (let i = 1; i < lines.length; i += 1) {
    if (lines[i] !== '') {
      const fields = lines[i].split(',');
      const field = fields[3].trim();
      const firstName = fields[0].trim();

      totalStudent += 1;
      if (studentByField[field] === undefined) {
        studentByField[field] = 1;
        names[field] = [firstName];
      } else {
        studentByField[field] += 1;
        names[field].push(firstName);
      }
    }
  }

  console.log(totalStudent);
  for (const field in studentByField) {
    if (field) {
      console.log(
        `Number of students in ${field}: ${
          studentByField[field]
        }. List: ${names[field].join(', ')}`,
      );
    }
  }
};

module.exports = countStudents;
