const requestService = require('./request.service');

class BusinessService {

    constructor() { }

    async saveRequest(req, res) {
        const bashId = req.headers['bash-id'];
        const req_param = req.body['number'];
        var request;

        if (bashId) {
            const oldRequest = await requestService.getRequest(bashId);
            if (oldRequest) {
                oldRequest.values.push(req_param);
                oldRequest.values.sort((n1, n2) => n1 - n2);

                await requestService.updateRequest(
                    { "_id": oldRequest['_id'] },
                    { "values": oldRequest['values'] }
                );

                request = await requestService.getRequest(bashId);

                res.set('bash-id', String(request._id))
                return await this.getAllRequestValues();
            }

            request = await this.#createNewRequest(req_param);
            res.set('bash-id', String(request._id));
            return await this.getAllRequestValues();
        }

        request = await this.#createNewRequest(req_param);
        res.set('bash-id', String(request._id));
        return await this.getAllRequestValues();
    }

    async #createNewRequest(number) {
        const result = await requestService.createRequest(
            {
                "values": [number]
            }
        );

        return result
    }

    async getAllRequestValues() {
        var result = []
        const allRequests = await requestService.getRequests()
        allRequests.forEach((element) => {
            result = [...result, ...element.values]
        });

        return result
    }
}

module.exports = new BusinessService();