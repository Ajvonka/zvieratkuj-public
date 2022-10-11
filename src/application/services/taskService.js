const KEYS = {
  tasks: "tasks",
  tasksId: "tasksId",
};

export function insertTask(data) {
  let tasks = getAllTasks();
  data["id"] = generateTaskId();
  tasks.push(data);
  localStorage.setItem(KEYS.tasks, JSON.stringify(tasks));
}

export function updateTask(data) {
  let tasks = getAllTasks();
  let recordIndex = tasks.findIndex((x) => x.id === data.id);
  tasks[recordIndex] = { ...data };
  localStorage.setItem(KEYS.tasks, JSON.stringify(tasks));
}

export function deleteTask(data) {
  let tasks = this.getAllTasks().filter((item) => item.id !== data.id);
  localStorage.setItem(KEYS.tasks, JSON.stringify(tasks));
}

export function generateTaskId() {
  if (localStorage.getItem(KEYS.tasksId) == null)
    localStorage.setItem(KEYS.tasksId, "0");
  var id = parseInt(localStorage.getItem(KEYS.tasksId));
  localStorage.setItem(KEYS.tasksId, (++id).toString());
  return id;
}

export function getAllTasks() {
  if (localStorage.getItem(KEYS.tasks) == null)
    localStorage.setItem(KEYS.tasks, JSON.stringify([]));
  let tasks = JSON.parse(localStorage.getItem(KEYS.tasks));
  return tasks;
}
