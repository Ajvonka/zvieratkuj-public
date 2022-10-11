import { ActionTypes } from "../constants/action-types";
export const setPet = (pets) => {
  return {
    type: ActionTypes.SET_PET,
    payload: pets,
  };
};

export const selectedPet = (pet) => {
  return {
    type: ActionTypes.SELECTED_PET,
    payload: pet,
  };
};

export const addSelectedPet = (petId) => {
  return {
    type: ActionTypes.ADD_SELECTED_PET,
    payload: petId,
  };
};

export const editSelectedPet = (petId) => {
  return {
    type: ActionTypes.EDIT_SELECTED_PET,
    payload: petId,
  };
};

export const removeSelectedPet = (petId) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PET,
    payload: petId,
  };
};
