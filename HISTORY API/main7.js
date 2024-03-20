// Función para retroceder en el historial
function goBack() {
  window.history.back();
}

// Función para avanzar en el historial
function goForward() {
  window.history.forward();
}

// Función para agregar una nueva entrada al historial
function addHistory() {
  let stateObj = { page: "example" };
  let title = "New Page Title";
  let url = "newpage.html";
  window.history.pushState(stateObj, title, url);
}
