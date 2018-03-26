class MenuController {
  order(req, res) {
    console.log('got request for menu-items');

    res.json([]);
  }

  get(req, res) {
    const id = Number(req.params.id);
    console.log('got request for one menu-item with id ', id);

    res.json({
      id
    });
  }

  add(req, res) {
    const data = req.body;
    console.log('got request for add menu item ', data);
    data.id = Date.now();
    
    res.json(data);
  }

  update(req, res) {
    const data = req.body;
    console.log('got request for update menu item ', data);
    
    res.json(data);
  }

  delete(req, res) {
    const id = Number(req.params.id);
    console.log('got request for delete menu item ', id);
    
    res.json(id);
  }

}

module.exports = new MenuController;