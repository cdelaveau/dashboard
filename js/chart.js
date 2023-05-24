// Données des ventes mensuelles de PC gamer en 2022
var mois = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];
var ventes = [500, 750, 600, 900, 1200, 800, 1100, 950, 700, 850, 1000, 1300];

// Création du graphique à barres
var ctx = document.getElementById('bar-chart').getContext('2d');
var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: mois,
    datasets: [{
      label: 'Ventes mensuelles de pc gamer',
      data: ventes,
      backgroundColor: 'rgba(54, 162, 235, 0.7)', // Couleur des barres
      borderColor: 'rgba(54, 162, 235, 1)', // Couleur des bordures
      borderWidth: 1
    }]
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
        text: "Évolution des ventes mensuelles de PC gamer en 2022",
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    }
  }
});