function updateChart()
{
    var items1st = localStorage.getItem("item1Local");
    var items2nd = localStorage.getItem("item2Local");

    items1st = items1st.split(',');
    items2nd = items2nd.split(',');
    for (i=0;i<6;i++) {
        chart.data.labels.pop();
        chart.data.datasets[0].data.pop();
    }
    for (i=0;i<6;i++) {
        chart.data.labels.push(items1st[i]);
        chart.data.datasets[0].data.push(items2nd[i]);
    }
    chart.update();
}

function update24H() {
    var now = Date.now();
    now = now - 86400000;
    var bgPage = chrome.extension.getBackgroundPage();
    bgPage.getHistory(now);
    pushTime();
    updateChart();
}
function update7D() {
    var now = Date.now();
    now = now - 604800000;
    var bgPage = chrome.extension.getBackgroundPage();
    bgPage.getHistory(now);
    pushTime();
    updateChart();
}
function update12M() {
    var now = Date.now();
    now = now - 31104000000;
    var bgPage = chrome.extension.getBackgroundPage();
    bgPage.getHistory(now);
    pushTime();
    updateChart();
}

document.getElementById('button24H').addEventListener('click', update24H);
document.getElementById('button7D').addEventListener('click', update7D);
document.getElementById('button12M').addEventListener('click', update12M);
