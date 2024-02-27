const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;
const DATABASE_PATH = process.argv[2];

const countStudents = async (DATABASE_PATH) => {
  try {
    // check if the file exists
    await fs.access(DATABASE_PATH);

    // Read if the file exists
    const dataPromise = await fs.readFile(DATABASE_PATH);
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
    for (const field in studentByField) {
      if (Object.prototype.hasOwnProperty.call(studentByField, field)) {
        response += `Number of students in ${field}: ${
          studentByField[field]
        }. List: ${names[field].join(', ')}\n`;
      }
    }
    return response;
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    }
  }
  return '';
};

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const msg = 'This is the list of our students\n';
    countStudents(DATABASE_PATH)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(msg);
        res.end(data.trim());
      })
      .catch((err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`${msg}${err.message}`);
      });
  }
});

app.listen(PORT);

module.exports = app;
