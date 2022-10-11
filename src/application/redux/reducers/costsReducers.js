import { ActionTypes } from "../constants/action-types";

const KEYS = {
  costs: "costs",
  costId: "costId",
};

let initialState = JSON.parse(localStorage.getItem(KEYS.costs));;

console.log('KEYS.costs containes: ', localStorage.getItem(KEYS.costs));
console.log('IS KEYS.costs empty? ', localStorage.getItem(KEYS.costs) == null);

if (localStorage.getItem(KEYS.costs) == null) {
  localStorage.setItem(KEYS.costs, JSON.stringify([]));
  initialState = JSON.parse(localStorage.getItem(KEYS.costs));
}

export function generatePaymentId() {
  if (localStorage.getItem(KEYS.costId) == null)
    localStorage.setItem(KEYS.costId, "0");
  var id = parseInt(localStorage.getItem(KEYS.costId));
  localStorage.setItem(KEYS.costId, (++id).toString());
  return id;
}

export const costsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PAYMENT:
      return { ...state, costs: payload };

    default:
      return state;
  }
};

export const selectedCostsReducer = (
  state = initialState,
  { type, payload }
) => {
  let costs;
  switch (type) {
    case ActionTypes.SELECTED_PAYMENT:
      return { ...state, ...payload };

    case ActionTypes.ADD_SELECTED_PAYMENT:
      costs = [...state];
      payload["id"] = generatePaymentId();
      costs.push(payload);
      localStorage.setItem(KEYS.costs, JSON.stringify(costs));
      return costs;

    case ActionTypes.EDIT_SELECTED_PAYMENT:
      costs = [...state];
      let recordIndex = costs.findIndex((x) => x.id === payload.id);
      costs[recordIndex] = { ...payload };
      localStorage.setItem(KEYS.costs, JSON.stringify(costs));
      return costs;

    case ActionTypes.REMOVE_SELECTED_PAYMENT:
      costs = JSON.parse(localStorage.getItem(KEYS.costs)).filter(
        (item) => item.id !== payload
      );
      localStorage.setItem(KEYS.costs, JSON.stringify(costs));
      return costs;

    default:
      return state;
  }
};
