let history = [];
const total = document.getElementById("total");
const historyElement = document.getElementById("history");

function updateTotal() {
    let runningTotal;
    if (history.length === 0) {
        runningTotal = 0;
    } else {
        runningTotal = history.reduce((acc, val) => acc + val);
    }
    total.innerHTML = runningTotal.toString();
    
    historyElement.replaceChildren(...history.map(e => {
        let newHist = document.createElement('span'):
        newHist.innerHTML = e.toString();
        newHist.className = "historyTile";
        return newHist;
    }));
}

function onPress(num) {
    history.push(num);
    updateTotal();
}

function back() {
    if (history.length > 0) {
        history.pop();
        updateTotal();
    }
}

function clears() {
    history = [];
    updateTotal();
}
