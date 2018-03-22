class UsersController {
  list(req, res){
    console.log('request for users');

    res.json([]);
  }

  get(req, res) {
    const id = Number(req.params.id);
    console.log('request for one user with id ' + id);

    res.json({
      id
    });
  }

  add(req, res) {
    const data = req.body;
    console.log('request for new user: ' + data);
    data.id = Date.now();

    res.json(data);
  }

  update(req, res) {
    const data = req.body;
    console.log('request for update user: ' + data);

    res.json(data);
  }

  delete(req, res) {
    const id = Number(req.params.id);
    console.log('request for delete user with id ' + id);

    res.json({
      id
    });
  }

  
}

module.exports = new UsersController;