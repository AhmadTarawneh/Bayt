// Pie chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#simple-pie-chart");

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
    };
    const pieLables = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"];
    const piedata = [85, 65, 34, 45, 35, 55];
    const pieBackGroundColor = ['#00A5A8', '#626E82', '#FF7D4D','#FF4558', '#28D094', '#28a394'];
    // Chart Data
    var chartData = {
        labels: pieLables,
        datasets: [{
            label: "My First dataset",
            data: piedata,
            backgroundColor: pieBackGroundColor,
        }]
    };

    var config = {
        type: 'pie',

        // Chart Options
        options : chartOptions,
        data : chartData
    };

    // Create the chart
    var pieSimpleChart = new Chart(ctx, config);
});