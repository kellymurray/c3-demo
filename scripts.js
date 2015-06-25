$(function() {

  var state = ['pie', 'donut', 'bar'];
  var currentState = 0;

  var chart = c3.generate({
      data: {
          columns: [
              ['Gamers', 200],
              ['Other People', 90],
          ],
          type : 'pie',
          colors: {
            'Gamers': '#B9375C',
            'Other People': '#593F73'
          },
          //onclick: function (d, i) { console.log("onclick", d, i); },
          onclick: function(d, i) {
            currentState = (currentState + 1) % state.length;
            chart.transform(state[currentState]); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
  });
});
