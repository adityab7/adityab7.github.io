var answers = ["conscience, religion", "thought, belief, opinion, expression", "peaceful assembly, assembly", "association"];
var mobilityAnswers = ["stay, remain", "enter", "leave, exit"];
var legalAnswers = ["search", "seizure", "imprisonment, incarceration, arrest"];
var equalityAnswers = ["race, colour", "religion, belief, faith", "gender, sex", "age"];

var correct = 0;
var total = 0;
var page = "0";

function clearResultHistory() {
    localStorage.clear();
    document.getElementById("history").innerText = "No results were found. (you might have cleared browser history)";
}

function displayResults() {
    var results = localStorage.getItem("results");
    if (results === null) {
        document.getElementById("history").innerText = "No results were found. (you might have cleared browser history)";
    } else {
        var list = results.split(",");
        var string = "";
        for (var n = 0; n < list.length; n++) {
            var test = list[n];
            string = string + test + "\n";
        }
        document.getElementById("history").innerText = string;
    }
}

function resetScore() {
    correct = 0;
    total = 0;
    sessionStorage.setItem("correct", correct.toString());
    sessionStorage.setItem("total", total.toString());
}

function setProgress(currentPage) {
    correct = parseInt(sessionStorage.getItem("correct"));
    total = parseInt(sessionStorage.getItem("total"));
    page = currentPage;
    var decimal = (correct/total)*100;
    var percentValue = Math.round(decimal);
    document.getElementById("progress").innerText = "Score: " + correct + "/" + total + " (" + percentValue + "%) | Progress: page " + page + "/7";
    if (page === "99") {
        document.getElementById("progress").innerText = "Score: " + correct + "/" + total + " (" + percentValue + "%)";
        var date = new Date();
        var storeString = "Humanities | Charter of Rights and Freedoms |" + correct + "/" + total + " | " + percentValue + "%" + " | " + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        if (localStorage.getItem("results") !== null) {
            var results = localStorage.getItem("results");
            results = results + "," + storeString;
            localStorage.setItem("results", results);
        } else {
            localStorage.setItem("results", storeString);
        }
    }
}

function saveProgress() {
    sessionStorage.setItem("correct", correct.toString());
    sessionStorage.setItem("total", total.toString());
    var decimal = (correct/total)*100;
    var percentValue = Math.round(decimal);
    document.getElementById("progress").innerText = "Score: " + correct + "/" + total + " (" + percentValue + "%) | Progress: page " + page + "/7";
}

function submit(maxAnswers, requiresCheat) {
    var number = 0;
    while (number < maxAnswers) {
        number++;
        var answer = document.getElementById("answer" + number.toString()).value.toLowerCase();
        if (answer.trim() === getAnswer(number, false)) {
            document.getElementById("result" + number.toString()).innerText = "Correct";
            document.getElementById("result" + number.toString()).style.color = "green";
            correct++;
        } else {
            if (requiresCheat) {
                document.getElementById("result" + number.toString()).innerText = "Incorrect, answer: " + getAnswer(number, true);
            } else {
                document.getElementById("result" + number.toString()).innerText = "Incorrect, answer: " + getAnswer(number, false);
            }
            document.getElementById("result" + number.toString()).style.color = "red";
        }
        total++;
        document.getElementById("submit").style.display = "none";
        document.getElementById("next").style.display = "block";
    }
    saveProgress();
}

function getAnswer(number, isCheat) {
    if (document.getElementById("section").innerText === "Overview") {
        if (number === 1) {
            return "4";
        } else if (number === 2) {
            return "2";
        } else if (number === 3) {
            return "2";
        } else if (number === 4) {
            return "2";
        } else if (number === 5) {
            return "1";
        }
    }
    if (document.getElementById("section").innerText === "Fundamental Freedoms") {
        var answer = document.getElementById("answer" + number.toString()).value.trim().toLowerCase();
        for (var x = 0; x < answers.length; x++) {
            if (answers[x] !== null) {
                var list = answers[x].split(", ");
                for (var n = 0; n < list.length; n++) {
                    var possibleAnswer = list[n];
                    if (answer === possibleAnswer) {
                        answers[x] = null;
                        return possibleAnswer;
                    } else if (isCheat) {
                        var cheatAnswer = answers[x];
                        answers[x] = null;
                        return cheatAnswer;
                    }
                }
            }
        }
    }
    if (document.getElementById("section").innerText === "Democratic Rights") {
        var answer = document.getElementById("answer" + number.toString()).value.trim().toLowerCase();
        if (number === 1) {
            return "house of commons and provincial legislature";
        }
        if (number === 2) {
            if (answer.toLowerCase() === "five") {
                return answer;
            } else {
                return "5";
            }
        }
        if (number === 3) {
           if (answer.toLowerCase() === "twelve") {
                return answer;
            } else {
                return "12";
            }
        }
    }
    if (document.getElementById("section").innerText === "Mobility Rights") {
        var answer = document.getElementById("answer" + number.toString()).value.trim().toLowerCase();
        if (number <= 3) {
            for (var x = 0; x < mobilityAnswers.length; x++) {
                if (mobilityAnswers[x] !== null) {
                    var list = mobilityAnswers[x].split(", ");
                    for (var n = 0; n < list.length; n++) {
                        var possibleAnswer = list[n];
                        if (answer === possibleAnswer) {
                            mobilityAnswers[x] = null;
                            return possibleAnswer;
                        } else if (isCheat) {
                            var cheatAnswer = mobilityAnswers[x];
                            mobilityAnswers[x] = null;
                            return cheatAnswer;
                        }
                    }
                }
            }
        }
        if (number === 4) {
            if (answer === "province") {
                return answer;
            } else {
                return "provinces";
            }
        }
        if (number === 5) {
            if (answer === "wage") {
                return answer;
            } else {
                return "living";
            }
        }
    }
    if (document.getElementById("section").innerText === "Legal Rights") {
        var answer = document.getElementById("answer" + number.toString()).value.trim().toLowerCase();
        if (number <= 3) {
            for (var x = 0; x < legalAnswers.length; x++) {
                if (legalAnswers[x] !== null) {
                    var list = legalAnswers[x].split(", ");
                    for (var n = 0; n < list.length; n++) {
                        var possibleAnswer = list[n];
                        if (answer === possibleAnswer) {
                            legalAnswers[x] = null;
                            return possibleAnswer;
                        } else if (isCheat) {
                            var cheatAnswer = legalAnswers[x];
                            legalAnswers[x] = null;
                            return cheatAnswer;
                        }
                    }
                }
            }
        }
        if (number === 4) {
            if (answer === "fast") {
                return answer;
            } else {
                return "quick";
            }
        }
        if (number === 5) {
            return "innocent";
        }
        if (number === 6) {
            return "guilty";
        }
    }
    if (document.getElementById("section").innerText === "Equality Rights") {
        var answer = document.getElementById("answer" + number.toString()).value.trim().toLowerCase();
        if (number === 1 || number === 4 || number === 5 || number === 6) {
            for (var x = 0; x < equalityAnswers.length; x++) {
                if (equalityAnswers[x] !== null) {
                    var list = equalityAnswers[x].split(", ");
                    for (var n = 0; n < list.length; n++) {
                        var possibleAnswer = list[n];
                        if (answer === possibleAnswer) {
                            equalityAnswers[x] = null;
                            return possibleAnswer;
                        } else if (isCheat) {
                            var cheatAnswer = equalityAnswers[x];
                            equalityAnswers[x] = null;
                            return cheatAnswer;
                        }
                    }
                }
            }
        }
        if (number === 2) {
            if (answer === "ethnic") {
                return answer;
            } else {
                return "national";
            }
        }
        if (number === 3) {
            if (document.getElementById("answer2").value.trim().toLowerCase() === "ethnic") {
                return "national";
            } else {
                return "ethnic";
            }
        }
        if (number === 7) {
            if (answer === "mental") {
                return answer;
            } else {
                return "physical";
            }
        }
        if (number === 8) {
            if (document.getElementById("answer7").value.trim().toLowerCase() === "mental") {
                return "physical";
            } else {
                return "mental";
            }
        }
    }
    if (document.getElementById("section").innerText === "Exceptions") {
        var answer = document.getElementById("answer" + number.toString()).value.trim().toLowerCase();
        if (number === 1) {
            if (answer === "the nonwithstanding clause") {
                return answer;
            } else {
                return "nonwithstanding clause";
            }
        }
        if (number === 2) {
            if (answer === "democratic") {
                return answer;
            } else {
                return "mobility";
            }
        }
        if (number === 3) {
            if (document.getElementById("answer2").value.trim().toLowerCase() === "democratic") {
                return "mobility";
            } else {
                return "democratic";
            }
        }
    }
}

function choose(id, answer) {
    document.getElementById(id).value = answer;
}
