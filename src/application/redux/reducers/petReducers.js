import { ActionTypes } from "../constants/action-types";

const KEYS = {
  pets: "pets",
  petsId: "petsId",
};

let initialState = JSON.parse(localStorage.getItem(KEYS.pets));;

console.log('KEYS.pets containes: ', localStorage.getItem(KEYS.pets));
console.log('IS KEYS.pets empty? ', localStorage.getItem(KEYS.pets) == null);

if (localStorage.getItem(KEYS.pets) == null) {
  localStorage.setItem(KEYS.pets, JSON.stringify([]));
  initialState = JSON.parse(localStorage.getItem(KEYS.pets));
}

/*const initialPets = [
  { id: "0", name: "Matias", canineDistemper: "02-12-2022", hepa: "02-12-2022", parvo: "02-12-2022", lepto: "02-12-2022", rabies: "02-12-2022", deworming: "02-12-2022"},
  { id: "1", name: "Ariel", canineDistemper: "02-12-2022", hepa: "02-12-2022", parvo: "02-12-2022", lepto: "02-12-2022", rabies: "02-12-2022", deworming: "02-12-2022"},
  { id: "2", name: "Atmega", canineDistemper: "02-12-2022", hepa: "02-12-2022", parvo: "02-12-2022", lepto: "02-12-2022", rabies: "02-12-2022", deworming: "02-12-2022"}
];

KEYS.pets = initialPets;

// Put the object into storage
localStorage.setItem('pets', JSON.stringify(KEYS.pets));

// Retrieve the object from storage
var initialState = JSON.parse(localStorage.getItem('pets'));

console.log('initialState: ', initialState);*/


export function generatePetId() {
  if (localStorage.getItem(KEYS.petsId) == null)
    localStorage.setItem(KEYS.petsId, "0");
  var id = parseInt(localStorage.getItem(KEYS.petsId));
  localStorage.setItem(KEYS.petsId, (++id).toString());
  return id;
}

export const petReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PET:
      return { ...state, pets: payload };

    default:
      return state;
  }
};

export const selectedPetReducer = (state = initialState, { type, payload }) => {
  let pets;
  switch (type) {
    case ActionTypes.SELECTED_PET:
      return { ...state, ...payload };

    case ActionTypes.ADD_SELECTED_PET:
      pets = [...state];
      payload["id"] = generatePetId();
      pets.push(payload);
      localStorage.setItem(KEYS.pets, JSON.stringify(pets));
      return pets;

    case ActionTypes.EDIT_SELECTED_PET:
      pets = [...state];
      let recordIndex = pets.findIndex((x) => x.id === payload.id);
      pets[recordIndex] = { ...payload };
      localStorage.setItem(KEYS.pets, JSON.stringify(pets));
      return pets;

    case ActionTypes.REMOVE_SELECTED_PET:
      pets = JSON.parse(localStorage.getItem(KEYS.pets)).filter(
        (item) => item.id !== payload
      );
      localStorage.setItem(KEYS.pets, JSON.stringify(pets));
      return pets;

    default:
      return state;
  }
};
