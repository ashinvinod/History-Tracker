var items1 = [], items2 = [];
function pushTime()
{
    var itemsA;
    var i;
    items1 = [];
    items2 = [];
    var itemsA = localStorage.getItem("vOneLocalStorage");
    itemsA = itemsA.split(',');
    for(i = 0; i < itemsA.length; i++) {
      if (i%2==0) {
          items1.push(itemsA[i]);
      }
      else {
          items2.push(itemsA[i]);
      }
    }
    localStorage.setItem('item1Local', items1);
    localStorage.setItem('item2Local', items2);
}

pushTime();
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data:
    {
        labels: items1,
        datasets:
        [{
            data: items2,
            backgroundColor:
            [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },

    options:
    {
        responsive: false,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 13
            }
        },
        legend: {
            position: 'bottom',
            align: 'start'
        }
    }
});
