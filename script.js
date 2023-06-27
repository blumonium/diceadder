let history = [];
const total = document.getElementById("total");

function updateTotal() {
    let runningTotal;
    if (history.length === 0) {
        runningTotal = 0;
    } else {
        runningTotal = history.reduce((acc, val) => acc + val);
    }
    total.innerHTML = runningTotal.toString();
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
