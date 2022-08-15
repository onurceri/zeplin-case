var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;
var assert = chai.assert;

const mongoose = require("mongoose");

const { Request } = require("../model/request.model");

const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

before(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);
});

after(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("...", () => {
  it("...", async () => {
    var Request = mongoose.model(
      "Request",
      new mongoose.Schema({ values: [Number] })
    );
    const cnt = await Request.count();
    expect(cnt).to.equal(0);
  });
});

describe("Request Operations", () => {
  var requestId = "";
  const mockValues = [1, 2, 3];
  const mockUpdatedValues = [5, 6, 7, 8, 9];

  it("Create request should work", async () => {
    const createdRequest = await Request.create({
      values: mockValues,
    });
    requestId = createdRequest._id;
    assert(createdRequest != null);
  });

  it("Get all requests should work", async () => {
    const allRequests = await Request.find({}).sort({ createdAt: "asc" });
    assert(allRequests.length == 1);
  });

  it("Get request should work", async () => {
    const request = await Request.findById((id = requestId));
    assert(request.id == requestId);
    assert(request.values.length === mockValues.length);
  });

  it("Update request should work", async () => {
    await Request.findOneAndUpdate(
      { _id: requestId },
      { values: mockUpdatedValues }
    );
    const request = await Request.findById((id = requestId));
    assert(request.id == requestId);
    assert(request.values.length === mockUpdatedValues.length);
  });

  it("Delete request should work", async () => {
    const result = await Request.deleteOne({ _id: requestId });
    assert(result);
    const allRequests = await Request.find({}).sort({ createdAt: "asc" });
    assert(allRequests.length == 0);
  });
});
