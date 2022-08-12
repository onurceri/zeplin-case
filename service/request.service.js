const requestRepository  = require('../repository/request.repository');

class RequestService {

    constructor() {}

    async getRequests() {
        return await requestRepository.getRequests();
    }

    async getRequest(requestId) {
        return await requestRepository.getRequest(requestId);
    }

    async createRequest(request) {
        return await requestRepository.createRequest(request);
    }

    async updateRequest(filter, update) {
        return await requestRepository.updateRequest(filter, update);
    }

    async deleteRequest(requestId) {
        return await requestRepository.deleteRequest(requestId);
    }

}

module.exports = new RequestService();