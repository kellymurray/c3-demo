var state = ['pie', 'donut'];
var currentState = 0;

var chart = c3.generate({
    data: {
        columns: [
            ['Gamers', 200],
            ['Other People', 90],
        ],
        type : 'pie',
        //onclick: function (d, i) { console.log("onclick", d, i); },
        onclick: function(d, i) { chart.transform('donut'); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});
//setTimeout(function () {
    //chart.transform('donut');
//}, 2000);
