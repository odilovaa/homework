const Authors = require("../model/author");

const create = async (req, res) =>
{
    try 
    {
        const {title} = req.body;

        const data = new Authors({title});

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
        const data = await Authors.find();

        res.json({data});
    }catch(error)
    {
        res.status(500).json({message: "Internal Server Error"});
    }
};

module.exports = { create, getAll }