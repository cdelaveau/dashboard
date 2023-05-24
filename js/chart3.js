// Données de la répartition des ventes de PC gamer par catégorie de prix en 2022
var categoriesPrix = ['Moins de 1000€', '1000€ - 1500€', '1500€ - 2000€', 'Plus de 2000€'];
var ventesParCategoriePrix = [40, 25, 20, 15];

// Création du graphique en anneau
var ctx = document.getElementById('doughnut-chart').getContext('2d');
var doughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: categoriesPrix,
    datasets: [{
      data: ventesParCategoriePrix,
      backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(255, 205, 86, 0.7)'] // Couleurs des anneaux
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Répartition des ventes de PC gamer par catégorie de prix en 2022",
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    }
  }
});