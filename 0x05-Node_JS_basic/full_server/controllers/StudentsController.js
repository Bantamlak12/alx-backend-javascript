import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res, databasPath) {
    readDatabase(databasPath)
      .then((data) => {
        const msg = 'This is the list of our students';
        const response = [msg];
        for (const [key, value] of Object.entries(data)) {
          response.push(
            `Number of students in ${key}: ${value.length}. List: ${value.join(
              ', ',
            )}`,
          );
        }
        res.status(200).send(response.join('\n'));
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res, databasPath) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(databasPath)
        .then((data) => {
          const names = data[major];
          res.status(200).send(`List: ${names.join(', ')}`);
        })
        .catch(() => {
          res.status(500).send('Cannot load the database');
        });
    }
  }
}

export default StudentsController;
