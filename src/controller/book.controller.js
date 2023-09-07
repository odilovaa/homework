const Books = require("../model/book.model");

const create = async (req, res) =>
{
    try 
    {
        const {name, photo, author_id, price, genre_id, publisher_id, wrapper_id, language_id, description, year} = req.body;

        const findBook = await Books.findOne({name, price});

        if(findBook)
            return res.json({message: 'This book already added!'});

        const newBook = new Books({name, photo, author_id, price, genre_id, publisher_id, wrapper_id, language_id, description, year});

        await newBook.save();

        res.json({message: 'success', newBook});

    }catch(error)
    {
        console.log(error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
};


const update = async (req, res) =>
{
    try 
    {
        const {id} = req.params;
        const {name, photo, author_id, price, genre_id, publisher_id, wrapper_id, language_id, description, year} = req.body;

        const newBook = await Books.findByIdAndUpdate({name, photo, author_id, price, genre_id, publisher_id, wrapper_id, language_id, description, year});

        res.json({message: newBook});

    }catch(error)
    {
        console.log(error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
};


const getAll = async (req, res) =>
{
    try 
    {
        const data = await Books.find().populate(["genre_id", "language_id", "publisher_id", "wrapper_id", "author_id"]);

        res.json({data});

    }catch(error)
    {
        console.log(error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
};


const getbyid = async (req, res) =>
{
    try 
    {
        const {name, photo, author_id, price, genre_id, publisher_id, wrapper_id, language_id, description, year} = req.body;

        const filter = {}

        if(publisher_id)
            filter.publisher_id = Books.find({publisher_id})

        if(genre_id)
            filter.genre_id = Books.find({genre_id})

        if(author_id)
            filter.author_id = Books.find({author_id})

        if(wrapper_id)
            filter.wrapper_id = Books.find({wrapper_id})

        if(language_id)
            filter.language_id = Books.find({language_id})


        const data = Books.find({filter}).populate(["genre_id", "language_id", "publisher_id", "wrapper_id", "author_id"]);

        res.json({data});

    }catch(error)
    {
        console.log(error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
};


const remove = async (req, res) =>
{
    try 
    {
        const {id} = req.params;

        await Books.findByIdAndDelete(id);

        res.json({message: 'success'});

    }catch(error)
    {
        console.log(error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
};


module.exports = {
    create, update, getAll, getbyid, remove
};