const express = require("express");
const apiMocker = require("connect-api-mocker");
const port = 9000;
const app = express();

app.use("/api", apiMocker("mock-api"));
app.listen(port, ()=> {
    console.log("Your app is listening on port " + port)
});