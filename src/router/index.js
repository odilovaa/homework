const authorRouter = require("./author.route");
const bookRouter = require("./book.route");
const genreRouter = require("./genre.route");
const languageRouter = require("./language.route");
const wrapperRouter = require("./wrapper.route");
const publisherRouter = require("./publisher.route");

module.exports = [authorRouter, bookRouter, genreRouter, languageRouter, wrapperRouter, publisherRouter];
