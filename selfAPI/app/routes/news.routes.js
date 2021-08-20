module.exports = function(app) {

    var news = require('../controllers/news.controller.js');

    // Create a new Customer
    app.post('/api/news', news.create);

    // Retrieve all Customer
    app.get('/api/news', news.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/news/:id', news.findOne);

    // Update a Customer with Id
    app.put('/api/news/:id', news.update);

    // Delete a Customer with Id
    app.delete('/api/news/:id', news.delete);
}