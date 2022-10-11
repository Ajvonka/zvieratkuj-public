import { ActionTypes } from "../constants/action-types";
export const setTask = (tasks) => {
  return {
    type: ActionTypes.SET_TASK,
    payload: tasks,
  };
};

export const selectedTask = (task) => {
  return {
    type: ActionTypes.SELECTED_TASK,
    payload: task,
  };
};

export const addSelectedTask = (taskId) => {
  return {
    type: ActionTypes.ADD_SELECTED_TASK,
    payload: taskId,
  };
};

export const editSelectedTask = (taskId) => {
  return {
    type: ActionTypes.EDIT_SELECTED_TASK,
    payload: taskId,
  };
};

export const removeSelectedTask = (taskId) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_TASK,
    payload: taskId,
  };
};
