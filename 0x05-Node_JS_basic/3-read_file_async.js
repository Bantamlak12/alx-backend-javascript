const fs = require('fs').promises;

const countStudents = async (path) => {
  try {
    // check if the file exists
    await fs.access(path);

    // Read if the file exists
    const dataPromise = await fs.readFile(path);
    const data = dataPromise.toString();

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

    let response = `Number of students: ${totalStudent}\n`;
    console.log(`Number of students: ${totalStudent}`);
    for (const field in studentByField) {
      if (field) {
        response += `Number of students in ${field}: ${
          studentByField[field]
        }. List: ${names[field].join(', ')}\n`;

        console.log(
          `Number of students in ${field}: ${
            studentByField[field]
          }. List: ${names[field].join(', ')}`,
        );
      }
    }
    return response;
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    } else {
      console.log(err);
      return '';
    }
  }
};

module.exports = countStudents;
