let history = [];
let runningTotal = 0;
const total = document.getElementById("total");
const historyElement = document.getElementById("history");

function newHistElement(num) {
    let newHist = document.createElement('span');
    newHist.innerHTML = num.toString();
    newHist.className = "historyTile";
    return newHist;
}

function onPress(num) {
    history.push(num);
    runningTotal += num;
    total.innerHTML = runningTotal.toString();
    const newHist = newHistElement(num);
    historyElement.appendChild(newHist);
}

function back() {
    if (history.length > 0) {
        let oldNum = history.pop();
        runningTotal -= oldNum;
        total.innerHTML = runningTotal.toString();
        historyElement.removeChild(historyElement.lastElementChild);
    }
}

function clears() {
    history = [];
    runningTotal = 0;
    total.innerHTML = "0";
    historyElement.innerHTML = "";
}

window.addEventListener("scroll", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
});
