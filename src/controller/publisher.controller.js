const  Publishers = require("../model/publisher");

const create = async (req, res) =>
{
    try 
    {
        const {title} = req.body;

        const data = new Publishers({title});

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
        const data = await Publishers.find();

        res.json({data});
    }catch(error)
    {
        res.status(500).json({message: "Internal Server Error"});
    }
};

module.exports = { create, getAll }