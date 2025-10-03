/*function renderDashboard(content) {
  const progress = calculateProgress();
  content.innerHTML = `
    <div class="dashboard">
      <div class="card">
        <h2>Quick Stats</h2>
        <p>Progress: ${progress}%</p>
      </div>
      <div class="card">
        <h2>Motivation</h2>
        <p>"Success is the sum of small efforts repeated daily." 💡</p>
      </div>
    </div>
  `;
}
document.addEventListener("DOMContentLoaded", () => {
  let percentage = localStorage.getItem("progress") || 0;
  let bar = document.getElementById("dashboardProgressBar");

  if (bar) {
    bar.style.width = percentage + "%";
    bar.innerText = percentage + "%";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  let completed = goals.filter(g => g.completed).length;
  let total = goals.length;
  let percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  // update progress bar
  let bar = document.getElementById("dashboardProgressBar");
  if (bar) {
    bar.style.width = percentage + "%";
    bar.innerText = percentage + "%";
  }

  // pie chart
  const ctx = document.getElementById("dashboardChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Completed", "Pending"],
      datasets: [{
        data: [completed, total - completed],
        backgroundColor: ["#4CAF50", "#FF9800"],
        borderWidth: 1
      }]
    },
    options: {
      cutout: "70%",
      plugins: {
        legend: { position: "bottom" }
      }
    }
  });
});
*/


function renderDashboard(content) {
  const progress = calculateProgress();
  content.innerHTML = `
    <div class="dashboard">
      <div class="card">
        <h2>Quick Stats</h2>
        <div class="progress-container">
          <div id="dashboardProgressBar" class="progress-bar">${progress}%</div>
        </div>
        <canvas id="dashboardChart" width="150" height="150"></canvas>
      </div>
      <div class="card">
        <h2>Motivation</h2>
        <p>"Success is the sum of small efforts repeated daily." 💡</p>
      </div>
    </div>
  `;
  updateDashboardCharts();
}

function calculateProgress() {
  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  let completed = goals.filter(g => g.status === "completed").length;
  let total = goals.length;
  return total > 0 ? Math.round((completed / total) * 100) : 0;
}

function updateDashboardCharts() {
  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  let completed = goals.filter(g => g.status === "completed").length;
  let total = goals.length;
  let percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  // update progress bar
  let bar = document.getElementById("dashboardProgressBar");
  if (bar) {
    bar.style.width = percentage + "%";
    bar.innerText = percentage + "%";
  }

  // pie chart
  const ctx = document.getElementById("dashboardChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Completed", "Pending"],
      datasets: [{
        data: [completed, total - completed],
        backgroundColor: ["#4CAF50", "#FF9800"],
        borderWidth: 1
      }]
    },
    options: {
      cutout: "70%",
      plugins: { legend: { position: "bottom" } }
    }
  });
}
