/*function renderSchedule(content) {
  content.innerHTML = `
    <h2>Study Schedule</h2>
    <div id="calendar"></div>
    <h3>Pomodoro Timer</h3>
    <div id="timer">25:00</div>
    <button onclick="startPomodoro(25)">Start Pomodoro</button>
  `;

  // Initialize FullCalendar
  let calendarEl = document.getElementById("calendar");
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    selectable: true,
    editable: true,
    dateClick: function(info) {
      let task = prompt("Enter study task for " + info.dateStr);
      if (task) {
        calendar.addEvent({
          title: task,
          start: info.dateStr
        });
      }
    }
  });
  calendar.render();
}*/
function renderSchedule(content) {
  content.innerHTML = `
    <h2>📅 Study Schedule</h2>
    <div id="calendar"></div>

    <div class="task-input">
      <input type="date" id="taskDate" />
      <input type="text" id="taskText" placeholder="Enter your task..." />
      <button id="addTaskBtn">➕ Add Task</button>
    </div>

    <h3>Scheduled Tasks</h3>
    <ul id="taskList"></ul>
  `;

  loadScheduledTasks();

  // Add new task
  document.getElementById("addTaskBtn").addEventListener("click", () => {
    let date = document.getElementById("taskDate").value;
    let text = document.getElementById("taskText").value;

    if (!date || !text) {
      alert("⚠️ Please select a date and enter a task!");
      return;
    }

    let tasks = JSON.parse(localStorage.getItem("scheduledTasks")) || [];
    tasks.push({ date, text });
    localStorage.setItem("scheduledTasks", JSON.stringify(tasks));

    document.getElementById("taskText").value = "";
    loadScheduledTasks();
  });
}

// Load tasks below calendar
function loadScheduledTasks() {
  let tasks = JSON.parse(localStorage.getItem("scheduledTasks")) || [];
  let taskList = document.getElementById("taskList");

  if (!taskList) return; // Prevent error if element not yet rendered

  taskList.innerHTML = tasks.map((t, i) => `
    <li>
      <strong>${t.date}:</strong> ${t.text}
      <button onclick="deleteScheduledTask(${i})">❌</button>
    </li>
  `).join("");
}

// Delete a task
function deleteScheduledTask(index) {
  let tasks = JSON.parse(localStorage.getItem("scheduledTasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("scheduledTasks", JSON.stringify(tasks));
  loadScheduledTasks();
}

