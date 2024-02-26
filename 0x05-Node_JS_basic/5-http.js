const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const PATH = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(PATH)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.end(data.trim());
      })
      .catch((err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(err.message);
      });
  }
  // res.writeHead(404, { 'Content-Type': 'text/plain' });
  // res.end();
});

app.listen(PORT);

module.exports = app;
