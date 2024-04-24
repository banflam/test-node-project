const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
	res.send(`Welcome to the server! 
	This is the homepage on port ${port}`)
	});

app.get("/", (req, res) => {
	res.send(`Hello ${req.param.name} `);
	});
