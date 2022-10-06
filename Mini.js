const express = require("express");

const app = express();

app.use(express.json())

const port = 4000;


app.put('/', (req, res) => {
	res.send("hello from a put method route!");
})

app.delete('/', (req, res) => {
	res.send("hello from a delete method route!");
})


app.listen(port, () => console.log(`Express API running at port 4000`));