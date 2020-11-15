// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to QuoteHub crafted with love!',
    });
});
// Import controller
var controller = require('./controller');
router.route('/quotes')
    .get(controller.index)
    .post(controller.new);
router.route('/quotes/:quote_id')
    .get(controller.view)
    .patch(controller.update)
    .put(controller.update)
    .delete(controller.delete);
// Export API routes
module.exports = router;