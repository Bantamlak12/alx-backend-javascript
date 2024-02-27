class AppController {
  static getHomepage(req, res) {
    if (req.url === '/') {
      return res.status(200).send('Hello Holberton School!');
    }
    return res.status(404);
  }
}

export default AppController;
