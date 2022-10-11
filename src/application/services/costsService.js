const KEYS = {
  costs: "costs",
  costId: "costId",
};

export const getCategoriesCollection = () => [
  { id: "Veterinary", title: "Veterinary" },
  { id: "Food", title: "Food" },
  { id: "Others", title: "Others" },
];

export function insertPayment(data) {
  let costs = getAllPayments();
  data["id"] = generatePaymentId();
  costs.push(data);
  localStorage.setItem(KEYS.costs, JSON.stringify(costs));
}

export function updatePayment(data) {
  let costs = getAllPayments();
  let recordIndex = costs.findIndex((x) => x.id === data.id);
  costs[recordIndex] = { ...data };
  localStorage.setItem(KEYS.costs, JSON.stringify(costs));
}

export function deletePayment(data) {
  let costs = this.getAllPayments().filter((item) => item.id !== data.id);
  localStorage.setItem(KEYS.costs, JSON.stringify(costs));
}

export function generatePaymentId() {
  if (localStorage.getItem(KEYS.costId) == null)
    localStorage.setItem(KEYS.costId, "0");
  var id = parseInt(localStorage.getItem(KEYS.costId));
  localStorage.setItem(KEYS.costId, (++id).toString());
  return id;
}

export function getAllPayments() {
  if (localStorage.getItem(KEYS.costs) == null)
    localStorage.setItem(KEYS.costs, JSON.stringify([]));
  let costs = JSON.parse(localStorage.getItem(KEYS.costs));
  return costs;
}
