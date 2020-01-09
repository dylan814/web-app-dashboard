const alertBanner = document.getElementById("alert");


alertBanner.addEventListener( 'click' , e => {
    const element = e.target;
    if (element.classList.contains( "alert-banner-close" )) {
    alertBanner.style.display = "none"
    }

});


trafficCanvas = document.getElementById("traffic-chart");


let trafficData = {
    labels: [ "16-22" , "23-29" , "30-5" , "6-12" , "13-19" , "20-26" , "27-3" ,
    "4-10" , "11-17" , "18-24" , "25-31" ],
    datasets: [{
    data: [ 750 , 1250 , 1000 , 2000 , 1500 , 1750 , 1250 , 1850 , 2250 , 1500 ,
    2500 ],
    backgroundColor: 'rgba(116, 119, 191, .3)' ,
    borderWidth: 1 ,
    }]
    };


let trafficOptions = {
    aspectRatio: 2.5 ,
    animation: {
    duration: 0
    },
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero: true
    }
    }]
    },
    legend : {
    display: false
    }
    }


    let trafficChart = new Chart(trafficCanvas, {
        type: 'line' ,
        data: trafficData,
        options: trafficOptions
        });



        const dailyCanvas = document.getElementById("daily-chart");


        const dailyData = {
            labels: [ "S" , "M" , "T" , "W" , "T" , "F" , "S" ],
            datasets: [{
            label: '# of Hits' ,
            data: [ 75 , 115 , 175 , 125 , 225 , 200 , 100 ],
            backgroundColor: '#7477BF',
            borderWidth: 1
            }]
            };


            const dailyOptions = {
            scales: {
            yAxes: [{
            ticks: {
            beginAtZero: true
            }
            }]
            },
            legend : {
            display: false
            }
            }


            let dailyChart = new Chart(dailyCanvas, {
                type: 'bar' ,
                data: dailyData,
                options: dailyOptions
                });




        const mobileCanvas = document.getElementById( "mobile-chart" );



        const mobileData = {
            labels: [ "Desktop" , "Tablet" , "Phones" ],
            datasets: [{
            label: '# of Users' ,
            data: [ 2000 , 550 , 500 ],
            borderWidth: 0 ,
            backgroundColor: [
            '#7477BF' ,
            '#78CF82' ,
            '#51B6C8'
            ]
            }]
            }



        const mobileOptions = {
                legend: {
                position: 'right' ,
                labels: {
                boxWidth: 20 ,
                fontStyle: 'bold'
                }
                }
                }


        let mobileChart = new Chart(mobileCanvas, {
                    type: 'doughnut' ,
                    data: mobileData,
                    options: mobileOptions
                    });



        const send = document.getElementById("send");
        const user = document.getElementById("userField");
        const message = document.getElementById("messageField");


        send.addEventListener( 'click' , (e) => {
                        // ensure user and message fields are filled out
                        if (user.value === "" && message.value === "" ) {
                        alert( "Please fill out user and message fields before sending" );
                        } else if (user.value === "" ) {
                        alert( "Please fill out user field before sending" );
                        } else if (message.value === "" ) {
                        alert( "Please fill out message field before sending" );
                        } else {
                        alert( `Message successfully sent to: ${user.value}` );
                        }
                        e.preventDefault();
                        });

// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });



// var ctx = document.getElementById('myChart');
// var ctx2 = document.getElementById('myChart2');

// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(0, 0, 0, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });


// var myPieChart = new Chart(ctx2, {
//     type: 'pie',
//     data:  {
//         datasets: [{
//             data: [10, 20, 30],
//             backgroundColor: [
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)'
//             ],
//         }],
//         labels: [
//             'Red',
//             'Yellow',
//             'Blue'
//         ],

       

//     }
// });