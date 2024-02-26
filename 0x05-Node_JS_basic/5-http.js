const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;

const path = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(path)
      .then((data) => {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.end(data);
      })
      .catch((err) => {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end(err.message);
      });
  }
});

app.listen(PORT);

module.exports = app;
