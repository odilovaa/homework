const  Genres = require("../model/genre");

const create = async (req, res) =>
{
    try 
    {
        const {title} = req.body;

        const data = new Genres({title});

        await data.save();

        res.json({message: data});

    }catch(error)
    {
        res.status(500).json({message: "Internal Server Error"});
    }
};

const getAll = async (req, res) =>
{
    try 
    {
        const data = await Genres.find();

        res.json({data});
    }catch(error)
    {
        res.status(500).json({message: "Internal Server Error"});
    }
};

module.exports = { create, getAll }