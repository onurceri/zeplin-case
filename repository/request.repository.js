const { connect, disconnect } = require('../config/db.config');
const { Request } = require('../model/request.model');
const logger = require('../logger/api.logger');

class RequestRepository {

    constructor() {
        connect();
    }

    async getRequests() {
        const requests = await Request.find({}).sort({createdAt: 'asc'});
        return requests;
    }

    async getRequest(requestId) {
        const request = await Request.findById({ _id: requestId });
        return request;
    }

    async createRequest(request) {
        let data = {};
        try {
            data = await Request.create(request);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateRequest(filter, update) {
        let data = {};
        try {
            data = await Request.findOneAndUpdate(filter, update);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteRequest(requestId) {
        let data = {};
        try {
            data = await Request.deleteOne({ _id: requestId });
        } catch (err) {
            logger.error('Error::' + err);
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

}

module.exports = new RequestRepository();