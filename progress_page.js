/*function renderProgress(content) {
  const progress = calculateProgress();
  const goals = getGoals();
  const completed = goals.filter(g => g.status === "Completed").length;
  const pending = goals.length - completed;

  content.innerHTML = `
    <h2>Progress Tracker</h2>
    <div class="progress-bar">
      <div style="width:${progress}%"></div>
    </div>
    <p>${progress}% Completed</p>
    <canvas id="progressChart" width="400" height="200"></canvas>
  `;

  // Chart.js Bar Chart
  const ctx = document.getElementById('progressChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Completed', 'Pending'],
      datasets: [{
        label: 'Goals Status',
        data: [completed, pending],
        backgroundColor: ['#4a90e2', '#e74c3c']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true }
      }
    }
  });
}

*/



function renderProgress(content) {
  const progress = calculateProgress();
  const goals = JSON.parse(localStorage.getItem("goals")) || [];
  const completed = goals.filter(g => g.status === "completed").length;
  const pending = goals.length - completed;

  content.innerHTML = `
    <h2>Progress Tracker</h2>
    <div class="progress-bar">
      <div style="width:${progress}%">${progress}%</div>
    </div>
    <p>${progress}% Completed</p>
    <canvas id="progressChart" width="400" height="200"></canvas>
  `;

  // Chart.js Bar Chart
  const ctx = document.getElementById('progressChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Completed', 'Pending'],
      datasets: [{
        label: 'Goals Status',
        data: [completed, pending],
        backgroundColor: ['#4a90e2', '#e74c3c']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
}
