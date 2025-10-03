function renderReminders(content) {
  let tasks = JSON.parse(localStorage.getItem("scheduledTasks")) || [];

  content.innerHTML = `
    <h2>⏰ Set Reminders</h2>
    <div class="reminder-list">
      ${tasks.length === 0 ? "<p>No scheduled tasks available.</p>" : tasks.map((t, i) => `
        <div class="reminder-item">
          <strong>${t.date}:</strong> ${t.text}
          <input type="time" id="reminderTime-${i}" />
          <button onclick="setReminder(${i})">Set Reminder</button>
        </div>
      `).join("")}
    </div>
  `;
}

function setReminder(index) {
  let tasks = JSON.parse(localStorage.getItem("scheduledTasks")) || [];
  let timeInput = document.getElementById(`reminderTime-${index}`).value;

  if (!timeInput) {
    alert("⚠️ Please select a time!");
    return;
  }

  let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
  reminders.push({ ...tasks[index], time: timeInput });
  localStorage.setItem("reminders", JSON.stringify(reminders));

  alert(`✅ Reminder set for ${tasks[index].text} at ${timeInput}`);

  // Start reminder checking loop
  startReminderCheck();
}

// Check reminders every minute
function startReminderCheck() {
  setInterval(() => {
    let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
    let now = new Date();
    let currentTime = now.toTimeString().slice(0, 5);

    reminders.forEach(r => {
      if (r.time === currentTime) {
        let user = JSON.parse(localStorage.getItem("userDetails")) || {};
        alert(`🔔 Reminder: ${r.text} (Date: ${r.date}) \n📧 Sent to: ${user.email} \n📱 Sent to: ${user.phone}`);

        // Later: Replace alert() with real SMS/email API call
      }
    });
  }, 60000); // check every minute
}
