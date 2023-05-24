// Données des performances des marques de PC gamer en 2022
var marqueLabels = ['Alienware', 'ASUS ROG', 'MSI', 'RAZER'];
var ventes = [80, 60, 75, 65]; // Performances des ventes 
var satisfaction = [70, 80, 85, 75]; // Performances de la satisfaction client 

// Création du graphique en radar
var ctx = document.getElementById('radar-chart').getContext('2d');
var radarChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: marqueLabels,
    datasets: [
      {
        label: 'Performances des ventes',
        data: ventes,
        borderColor: 'rgba(54, 162, 235, 1)', // Couleur de la ligne pour les ventes
        borderWidth: 2,
        backgroundColor: 'rgba(54, 162, 235, 0.3)', // Couleur de l'aire pour les ventes
        pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Couleur des points pour les ventes
      },
      {
        label: 'Performances de satisfaction client',
        data: satisfaction,
        borderColor: 'rgba(255, 99, 132, 1)', // Couleur de la ligne pour la satisfaction client
        borderWidth: 2,
        backgroundColor: 'rgba(255, 99, 132, 0.3)', // Couleur de l'aire pour la satisfaction client
        pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Couleur des points pour la satisfaction client
      }
    ]
  },
  options: {
    scale: {
      ticks: { beginAtZero: true, max: 100 },
      angleLines: { color: 'rgba(0, 0, 0, 0.2)' },
      gridLines: { color: 'rgba(0, 0, 0, 0.1)' },
      pointLabels: { fontSize: 12, fontColor: 'rgba(0, 0, 0, 0.8)' }
    },
    plugins: {
      title: {
        display: true,
        text: "Répartition des ventes de PC gamer par performances de vente et avis client en 2022",
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    }
  }
});