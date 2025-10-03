function addGoal(goal) {
  let goals = loadData("goals");
  goals.push(goal);
  saveData("goals", goals);
}

function getGoals() {
  return loadData("goals");
}

function markGoalCompleted(index) {
  let goals = loadData("goals");
  goals[index].status = "Completed";
  saveData("goals", goals);
}
