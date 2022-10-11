const KEYS = {
  pets: "pets",
  petsId: "petsId",
};

export const getOriginCollection = () => [
  { id: "OZ Priateľ Pes", title: "OZ Priateľ Pes" },
  { id: "KS Nová Baňa", title: "KS Nová Baňa" },
  { id: "OZ Tuláčik", title: "OZ Tuláčik" },
  { id: "Sloboda Zvierat", title: "Sloboda Zvierat" },
];

export const getDiseasesCollection = () => [
  { id: "Heart disease", title: "Heart disease" },
  { id: "Diabetes", title: "Diabetes" },
  { id: "Pressure", title: "Pressure" },
  { id: "Neurological disease", title: "Neurological disease" },
];

export function insertPet(data) {
  let pets = getAllPets();
  data["id"] = generatePetId();
  pets.push(data);
  localStorage.setItem(KEYS.pets, JSON.stringify(pets));
}

export function updatePet(data) {
  let pets = getAllPets();
  let recordIndex = pets.findIndex((x) => x.id === data.id);
  pets[recordIndex] = { ...data };
  localStorage.setItem(KEYS.pets, JSON.stringify(pets));
}

export function deletePet(data) {
  let pets = this.getAllPets().filter((item) => item.id !== data.id);
  localStorage.setItem(KEYS.pets, JSON.stringify(pets));
}

export function generatePetId() {
  if (localStorage.getItem(KEYS.petsId) == null)
    localStorage.setItem(KEYS.petsId, "0");
  var id = parseInt(localStorage.getItem(KEYS.petsId));
  localStorage.setItem(KEYS.petsId, (++id).toString());
  return id;
}

export function getAllPets() {
  if (localStorage.getItem(KEYS.pets) == null)
    localStorage.setItem(KEYS.pets, JSON.stringify([]));
  let pets = JSON.parse(localStorage.getItem(KEYS.pets));
  let origins = getOriginCollection();
  return pets.map((x) => ({
    ...x,
    originI: origins[x.origin],
  }));
  //return pets;
}
