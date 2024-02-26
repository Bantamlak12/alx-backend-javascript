const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const PATH = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(PATH)
      .then((data) => {
        res.write('This is the list of our students\n');
        res.end(data.trim());
      })
      .catch((err) => {
        res.end(err.message);
      });
  }
});

app.listen(PORT);

module.exports = app;
