const businessService  = require('../service/business.service');
const logger = require('../logger/api.logger');

class BusinessController {
    
    async saveRequest(req, res) {
        const result = await businessService.saveRequest(req, res);
    
        return result
    }

}

module.exports = new BusinessController();