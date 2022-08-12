const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema(
    {
        values: [Number],
        createDate: Date,
        updatedDate: Date,
        createdBy: String,
        updatedBy: String
    },
    { timestamps: { createDate: 'created_at', updatedDate: 'updated_at' } });

const Request = mongoose.model('requests', requestSchema);

module.exports = {
    Request
}