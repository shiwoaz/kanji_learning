const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/draw/:kanji", (req, res) => {
	const json = require("cnchar-data/draw/" + req.params.kanji);
	res.end(JSON.stringify(json));
});

app.get("/voice/:kanji", (req, res) => {
	const mp3 =
		`${__dirname}/../node_modules/cnchar-data/voice/` + req.params.kanji;
	const st = fs.createReadStream(mp3);
	st.pipe(res);
});

app.listen("3002");
