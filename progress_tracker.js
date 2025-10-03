function calculateProgress() {
  let goals = getGoals();
  if (goals.length === 0) return 0;
  let completed = goals.filter(g => g.status === "Completed").length;
  return Math.round((completed / goals.length) * 100);
}
document.addEventListener("DOMContentLoaded", () => {
  let percentage = localStorage.getItem("progress") || 0;
  document.getElementById("progressText").innerText = percentage + "%";
  document.getElementById("progressCircle").style.background = 
    `conic-gradient(#4CAF50 ${percentage}%, #ddd ${percentage}%)`;
});
document.addEventListener("DOMContentLoaded", () => {
  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  let completed = goals.filter(g => g.completed).length;
  let total = goals.length;

  const ctx = document.getElementById("progressChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Completed", "Pending"],
      datasets: [{
        data: [completed, total - completed],
        backgroundColor: ["#4CAF50", "#FF9800"],
        borderWidth: 2
      }]
    },
    options: {
      cutout: "60%",
      plugins: {
        legend: { position: "right" },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.raw} tasks`
          }
        }
      }
    }
  });
});
