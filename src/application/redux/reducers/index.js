import { combineReducers } from "redux";
import { petReducer, selectedPetReducer } from "./petReducers";
import { taskReducer, selectedTaskReducer } from "./taskReducers";
import { costsReducer, selectedCostsReducer } from "./costsReducers";

const reducers = combineReducers({
  allPets: petReducer,
  pet: selectedPetReducer,
  allTasks: taskReducer,
  task: selectedTaskReducer,
  allPaym: costsReducer,
  cost: selectedCostsReducer,
});

export default reducers;
