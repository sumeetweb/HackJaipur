 google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Individuals',     20.8 ],
          ['Multiple Industries',      15.6],
          ['Public adminstration and defence',  14.6],
          ['Defence', 11.5],
          ['It sectors',    8.3],
          ['Fintech',7.3],
          ['Financial and insurance activities',5.2],
          ['Wholesale and retail trade',4.2],
          ['Arts entertainment and recreation',3.1],
          ['Professional scientific and technical activities',2.1],
          ['Information and Communication',2.1],
          ['Adminstrative and support service activities',1.0],
        ]);

        var options = {
          title: 'Distribution of Targets',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }