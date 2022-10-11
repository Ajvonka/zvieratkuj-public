import { ActionTypes } from "../constants/action-types";

const KEYS = {
  tasks: "tasks",
  tasksId: "tasksId",
};

let initialState = JSON.parse(localStorage.getItem(KEYS.tasks));

console.log('KEYS.tasks containes: ', localStorage.getItem(KEYS.tasks));
console.log('IS KEYS.tasks empty? ', localStorage.getItem(KEYS.tasks) == null);

if (localStorage.getItem(KEYS.tasks) == null) {
  localStorage.setItem(KEYS.tasks, JSON.stringify([]));
  initialState = JSON.parse(localStorage.getItem(KEYS.tasks));
}

export function generateTaskId() {
  if (localStorage.getItem(KEYS.tasksId) == null)
    localStorage.setItem(KEYS.tasksId, "0");
  var id = parseInt(localStorage.getItem(KEYS.tasksId));
  localStorage.setItem(KEYS.tasksId, (++id).toString());
  return id;
}

export const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TASK:
      return { ...state, tasks: payload };

    default:
      return state;
  }
};

export const selectedTaskReducer = (
  state = initialState,
  { type, payload }
) => {
  let tasks;
  switch (type) {
    case ActionTypes.SELECTED_TASK:
      return { ...state, ...payload };

    case ActionTypes.ADD_SELECTED_TASK:
      tasks = [...state];
      payload["id"] = generateTaskId();
      tasks.push(payload);
      localStorage.setItem(KEYS.tasks, JSON.stringify(tasks));
      return tasks;

    case ActionTypes.EDIT_SELECTED_TASK:
      tasks = [...state];
      let recordIndex = tasks.findIndex((x) => x.id === payload.id);
      tasks[recordIndex] = { ...payload };
      localStorage.setItem(KEYS.tasks, JSON.stringify(tasks));
      return tasks;

    case ActionTypes.REMOVE_SELECTED_TASK:
      tasks = JSON.parse(localStorage.getItem(KEYS.tasks)).filter(
        (item) => item.id !== payload
      );
      localStorage.setItem(KEYS.tasks, JSON.stringify(tasks));
      return tasks;

    default:
      return state;
  }
};
