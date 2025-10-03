/*function renderGoals(content) {
  const goals = getGoals();
  content.innerHTML = `
    <h2>Study Goals</h2>
    <input type="text" id="goalInput" placeholder="Enter new goal"/>
    <button onclick="handleAddGoal()">Add Goal</button>
    <div class="goals-list">
      ${goals.map((g,i) => `
        <div class="goal">
          <p>${g.text} - <b>${g.status}</b></p>
          <button onclick="markGoalCompleted(${i}); renderGoals(content);">Complete</button>
        </div>
      `).join("")}
    </div>
  `;
}
function handleAddGoal() {
  const input = document.getElementById("goalInput");
  if (input.value.trim() !== "") {
    addGoal({ text: input.value, status: "Pending" });
    renderGoals(document.getElementById("content"));
  }
}
function markGoalCompleted(index) {
  let goals = getGoals();
  goals[index].status = "Completed";
  saveGoals(goals);
  alert("🎉 Congratulations! You completed a goal!");
  loadPage("goals");

  // Show curiosity booster
  setTimeout(() => {
    alert("🏅 New Achievement Unlocked! Check your Badges Page.");
  }, 1000);
}


*/
/*

function renderGoals(content) {
  content.innerHTML = `
    <h2>🎯 Study Goals</h2>
    <ul id="goalsList"></ul>
  `;

  loadGoals();
}

// Load goals from scheduled tasks
function loadGoals() {
  let tasks = JSON.parse(localStorage.getItem("scheduledTasks")) || [];
  let goals = JSON.parse(localStorage.getItem("goals")) || [];

  // Sync schedule tasks into goals (avoid duplicates)
  tasks.forEach(task => {
    if (!goals.some(g => g.date === task.date && g.text === task.text)) {
      goals.push({ ...task, status: "pending" });
    }
  });

  localStorage.setItem("goals", JSON.stringify(goals));
  displayGoals();
}

// Display goals
function displayGoals() {
  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  let goalsList = document.getElementById("goalsList");

  if (!goalsList) return;

  goalsList.innerHTML = goals.map((g, i) => `
    <li class="${g.status}">
      <span>
        <strong>${g.date}:</strong> ${g.text}
      </span>
      <div class="goal-actions">
        <button onclick="markGoalCompleted(${i})">✔ Completed</button>
        <button onclick="deleteGoal(${i})">❌ Delete</button>
      </div>
    </li>
  `).join("");
}

// Mark as completed
function markGoalCompleted(index) {
  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals[index].status = "completed";
  localStorage.setItem("goals", JSON.stringify(goals));
  displayGoals();
}

// Delete a goal
function deleteGoal(index) {
  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals.splice(index, 1);
  localStorage.setItem("goals", JSON.stringify(goals));
  displayGoals();
}


*/

function renderGoals(content) {
  content.innerHTML = `
    <h2>🎯 Study Goals</h2>
    <ul id="goalsList"></ul>
  `;
  loadGoals();
}

// Load goals from scheduled tasks
function loadGoals() {
  let tasks = JSON.parse(localStorage.getItem("scheduledTasks")) || [];
  let goals = JSON.parse(localStorage.getItem("goals")) || [];

  // Sync schedule tasks into goals (avoid duplicates)
  tasks.forEach(task => {
    if (!goals.some(g => g.date === task.date && g.text === task.text)) {
      goals.push({ ...task, status: "pending" });
    }
  });

  localStorage.setItem("goals", JSON.stringify(goals));
  displayGoals();
}

// Display goals
function displayGoals() {
  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  let goalsList = document.getElementById("goalsList");

  if (!goalsList) return;

  goalsList.innerHTML = goals.map((g, i) => `
    <li class="${g.status}">
      <span>
        <strong>${g.date}:</strong> ${g.text} 
        <em>(${g.status})</em>
      </span>
      <div class="goal-actions">
        <button onclick="markGoalCompleted(${i})">✔ Completed</button>
        <button onclick="deleteGoal(${i})">❌ Delete</button>
      </div>
    </li>
  `).join("");

  updateProgress(); // update dashboard & progress tracker
}

// Mark as completed
function markGoalCompleted(index) {
  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals[index].status = "completed";
  localStorage.setItem("goals", JSON.stringify(goals));
  displayGoals();
}

// Delete a goal
function deleteGoal(index) {
  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals.splice(index, 1);
  localStorage.setItem("goals", JSON.stringify(goals));
  displayGoals();
}

// Update overall progress and save
function updateProgress() {
  let goals = JSON.parse(localStorage.getItem("goals")) || [];
  let completed = goals.filter(g => g.status === "completed").length;
  let total = goals.length;
  let percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  localStorage.setItem("progress", percentage);
}





