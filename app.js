function loadPage(page) {
  const content = document.getElementById("content");
  if (page === "dashboard") renderDashboard(content);
  if (page === "goals") renderGoals(content);
  if (page === "schedule") renderSchedule(content);
  if (page === "reminders") renderReminders(content);
  if (page === "progress") renderProgress(content);
}

window.onload = () => loadPage("dashboard");
