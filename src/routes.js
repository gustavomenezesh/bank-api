const {Router} = require('express');
const accountController = require('./Controllers/accountController')

const routes = Router();

routes.post('/', accountController.init);
routes.post('/deposit', accountController.deposit);
routes.post('/draw', accountController.draw);
routes.post('/transfer', accountController.transfer);
routes.post('/private', accountController.private);

routes.get('/balance', accountController.consultBalance);
routes.get('/agencyAverage', accountController.agencyAverage);
routes.get('/nLessBalances', accountController.nLessBalance);
routes.get('/nBiggerBalances', accountController.nBiggerBalance);

routes.delete('/delete', accountController.deleteAccount);

module.exports = routes;