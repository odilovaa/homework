const {Schema, model} = require("mongoose")


const schema = new Schema
(
    {
        name: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        genre_id: {
            type: Schema.Types.ObjectId,
            ref: "genre",
            required: true,
        },
        publisher_id: {
            type: Schema.Types.ObjectId,
            ref: "publisher",
            required: true,
        },
        wrapper_id: {
            type: Schema.Types.ObjectId,
            ref: "wrapper",
            required: true,
        },
        language_id: {
            type: Schema.Types.ObjectId,
            ref: "language",
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }

);

module.exports = model("book", schema);