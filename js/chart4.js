// Données de l'évolution des ventes de PC gamer en 2022
var mois = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];
var ventesSegmentA = [500, 700, 600, 800, 1000, 900, 1100, 950, 800, 850, 1000, 1200];
var ventesSegmentB = [300, 400, 350, 450, 600, 500, 700, 550, 450, 500, 550, 650];
var ventesSegmentC = [200, 250, 300, 350, 400, 350, 400, 350, 300, 320, 350, 400];

// Création du graphique en aires
var ctx = document.getElementById('area-chart').getContext('2d');
var areaChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: mois,
    datasets: [
      {
        label: 'gamme haut de gamme',
        data: ventesSegmentA,
        backgroundColor: 'rgba(54, 162, 235, 0.3)', // Couleur de l'aire haut de gamme
        borderColor: 'rgba(54, 162, 235, 1)', // Couleur de l'aire haut de gamme
        borderWidth: 2,
        fill: 'start' // Remplissage jusqu'à l'axe y
      },
      {
        label: 'gamme intermédiaire',
        data: ventesSegmentB,
        backgroundColor: 'rgba(255, 99, 132, 0.3)', // Couleur de l'aire intermédiaire
        borderColor: 'rgba(255, 99, 132, 1)', // Couleur de l'aire intermédiaire
        borderWidth: 2,
        fill: 'start' // Remplissage jusqu'à l'axe y
      },
      {
        label: 'gamme entrée de gamme',
        data: ventesSegmentC,
        backgroundColor: 'rgba(75, 192, 192, 0.3)', // Couleur de l'aire entrée de gamme
        borderColor: 'rgba(75, 192, 192, 1)', // Couleur de l'aire entrée de gamme
        borderWidth: 2,
        fill: 'start' // Remplissage jusqu'à l'axe y
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 200 // Espacement entre les valeurs de l'axe y
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: "Évolution des ventes de PC gamer par gamme en 2022",
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    }
  }
});