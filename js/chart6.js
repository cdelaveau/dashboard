var categories = ['Jeux de tir', 'Jeux de rôle', 'Jeux de sport', 'Jeux de stratégie', 'Jeux d\'aventure'];
var salesData = [30, 20, 15, 10, 25];

    var ctx = document.getElementById('polar-area-chart').getContext('2d');
    var polarAreaChart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: categories,
        datasets: [{
          data: salesData,
          backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)', 'rgba(255, 159, 64, 0.7)'],
          borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Répartition des ventes de PC gamer par catégorie de jeux en 2022",
            font: {
              size: 16,
              weight: 'bold'
            }
          }
        }
      }
    });