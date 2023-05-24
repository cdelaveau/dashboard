// Données de la répartition des ventes de PC gamer par marque en 2022
var marques = ['Alienware', 'ASUS ROG', 'MSI', 'RAZER'];
var ventesParMarque = [30, 20, 25, 15];

// Création du graphique en secteurs
var ctx = document.getElementById('pie-chart').getContext('2d');
var pieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: marques,
    datasets: [{
      data: ventesParMarque,
      backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(255, 205, 86, 0.7)'] // Couleurs des secteurs
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Répartition des ventes de PC gamer par marque en 2022",
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    }
  }
});