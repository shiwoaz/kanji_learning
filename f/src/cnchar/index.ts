import cnchar from "cnchar";
import draw from "cnchar-draw";
import voice from "cnchar-voice";
import words from "cnchar-words";

draw.setResourceBase("http://localhost:3002/draw/");
voice.setResourceBase("http://localhost:3002/voice/");
cnchar.use(draw, voice, words);

export default cnchar;
