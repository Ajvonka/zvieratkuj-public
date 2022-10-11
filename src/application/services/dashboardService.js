const KEYS = {
  appointments: "appointments",
  appointmentsId: "appointmentsId",
};

const initialState = JSON.parse(localStorage.getItem(KEYS.costs));

export function deleteApp(data) {
  let appointments = this.getAllAppointments().filter(
    (item) => item.id !== data.id
  );
  localStorage.setItem(KEYS.appointments, JSON.stringify(appointments));
}

export function generateAppId() {
  if (localStorage.getItem(KEYS.appointmentsId) == null)
    localStorage.setItem(KEYS.appointmentsId, "0");
  var id = parseInt(localStorage.getItem(KEYS.appointmentsId));
  localStorage.setItem(KEYS.appointmentsId, (++id).toString());
  return id;
}

export function getAllAppointments() {
  if (localStorage.getItem(KEYS.appointments) == null)
    localStorage.setItem(KEYS.appointments, JSON.stringify([]));
  let appointments = JSON.parse(localStorage.getItem(KEYS.appointments));
  return appointments;
}
