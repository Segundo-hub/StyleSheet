const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    title: { required: true, type: String },
    body: { required: true, type: String },
    comment: String,
    date: { type: Date, default: Date.now },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
});


module.exports = model('Task', TaskSchema);