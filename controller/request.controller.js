const requestService  = require('../service/request.service');
const logger = require('../logger/api.logger');

class RequestController {

    async getRequests() {
        logger.info('Controller: getRequests')
        return await requestService.getRequests();
    }

    async createRequest(request) {
        logger.info('Controller: createRequest', request);
        return await requestService.createRequest(request);
    }

    async updateRequest(request) {
        logger.info('Controller: updateRequest', request);
        return await requestService.updateRequest(request);
    }

    async deleteRequest(requestId) {
        logger.info('Controller: deleteRequest', requestId);
        return await requestService.deleteRequest(requestId);
    }
}

module.exports = new RequestController();