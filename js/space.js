var questions = ["technologies for space", "reference frames for describing position and motions in space", "satellites and orbits", "distribution of matter through space",
    "composition and characteristics of bodies in space", "life-support technologies", "communications technologies", "frame of reference", "constellations", "celestial bodies", "planets", "azimuth", "altitude"
    , "altitude-azimuth coordinates", "astrolabe", "compass", "earth-centered or geocentric", "sun-centered or heliocentric", "telescope", "objective lens", "ocular lens", "eyepiece", "resolving power", "refracting"
    , "ellipse", "universal gravitation", "spectrum", "spectroscope", "spectral lines", "spectroscopy", "emission or bright line spectrum", "continuous spectrum", "absorption or dark line spectrum", "diffraction grating"
    , "spectral analysis", "Doppler effect", "red shifted", "adaptive optics", "triangulation", "parallax technique", "astronomical unit", "light-year", "electromagnetic radiation", "radio astronomy", "radio objects"
    , "interferometry", "very long baseline interferometry (VLBI)", "payload", "exhaust velocity", "staged rocket", "ballistic missile", "rocket", "staged rocket", "cosmonaut", "gravitational assist"
    , "charge coupled devices (CCDs)", "artificial satellite", "low Earth orbit", "geosynchronous orbit", "remote sensing", "global positioning system (GPS)", "solar wind", "inner planets", "outer planets", "suborbital"
    , "microgravity"];

var answers = ["Answer 1", "Answer 2", "Answer 3", "Answer 4",
    "Answer 5", "Answer 6", "Answer 7", "Answer 8", "Answer 9", "Answer 10", "Answer 11", "Answer 12", "Answer 13"
    , "Answer 14", "Answer 15", "Answer 16", "Answer 17", "Answer 18", "Answer 19", "Answer 20", "Answer 21", "Answer 22", "Answer 23", "Answer 24"
    , "Answer 25", "Answer 26", "Answer 27", "Answer 28", "Answer 29", "Answer 30", "Answer 31", "Answer 32", "Answer 33", "Answer 34"
    , "Answer 35", "Answer 36", "Answer 37", "Answer 38", "Answer 39", "Answer 40", "Answer 41", "Answer 42", "Answer 43", "Answer 44", "Answer 45"
    , "Answer 46", "Answer 47", "Answer 48", "Answer 49", "Answer 50", "Answer 51", "Answer 52", "Answer 53", "Answer 54", "Answer 55"
    , "Answer 56", "Answer 57", "Answer 58", "Answer 59", "Answer 60", "Answer 61", "Answer 62", "Answer 63", "Answer 64", "Answer 65"
    , "Answer 66"];

var questionNumber = 1;
var wrong = 0;

function submit() {
    document.getElementById("switch-answer").innerText = answers[questionNumber - 1];

    document.getElementById("switch-button").style.display = "inline-block";
    document.getElementById("switch-answer").style.display = "inline";
    document.getElementById("submit").style.display = "none";
}

function nextQuestion(isRight) {
    document.getElementById("question").innerText = questions[questionNumber];
    if (!isRight) {
        document.getElementById("concepts").innerText = document.getElementById("concepts").innerText + " (" + questionNumber +") " + questions[questionNumber - 1] + ",";
        wrong++;
    }
    document.getElementById("switch-button").style.display = "none";
    document.getElementById("switch-answer").style.display = "none";
    document.getElementById("submit").style.display = "block";

    document.getElementById("cue-answer").value = "";
    questionNumber++;
    document.getElementById("question-number").innerText = questionNumber.toString();
}
