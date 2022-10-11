import { ActionTypes } from "../constants/action-types";
export const setPayment = (costs) => {
  return {
    type: ActionTypes.SET_PAYMENT,
    payload: costs,
  };
};

export const selectedPayment = (cost) => {
  return {
    type: ActionTypes.SELECTED_PAYMENT,
    payload: cost,
  };
};

export const addSelectedPayment = (costId) => {
  return {
    type: ActionTypes.ADD_SELECTED_PAYMENT,
    payload: costId,
  };
};

export const editSelectedPayment = (costId) => {
  return {
    type: ActionTypes.EDIT_SELECTED_PAYMENT,
    payload: costId,
  };
};

export const removeSelectedPayment = (costId) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PAYMENT,
    payload: costId,
  };
};

export const updateChart = (costId) => {
  return {
    type: ActionTypes.UPDATE_CHART,
    payload: costId,
  };
};
