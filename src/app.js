const express = require("express");
const fileUpload = require("express-fileupload");
const {connect} = require("mongoose");

const routes = require("./router");
const config = require("../config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload());
app.use("/api", routes);

const bootstrap = async () => {
    await connect("mongodb://127.0.0.1:27017/filter");
  
    console.log("Connect to DB...");
  
    app.listen(config.port, () => {
      console.log(config.port);
    });
};
  
bootstrap();
