function addReminder(reminder) {
  let reminders = loadData("reminders");
  reminders.push(reminder);
  saveData("reminders", reminders);
}

function getReminders() {
  return loadData("reminders");
}

function showReminder(message) {
  alert("⏰ Reminder: " + message);
}
