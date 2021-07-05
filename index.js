// instantiate express modules
const express = require("express");
const router = require("./src/routes");

// define the server port
const PORT = 5000;

// use express in app variable
const app = express();
app.use(express.json());
app.use("/api/v1", router);

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}!`);
});
