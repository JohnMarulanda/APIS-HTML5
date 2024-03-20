var button = document.getElementById("button");

button.addEventListener('click', function(){
  notifyMe();
});

function notifyMe() {
  // Verifiquemos si el navegador admite notificaciones
  if (!("Notification" in window)) {
    alert("Este navegador no soporta las notificaciones");
  }

  // Verifiquemos si ya se han concedido los permisos de notificación
  else if (Notification.permission === "granted") {
    // Si está bien, creemos una notificación
    var notification = new Notification("Esta es una notificación");
  }

  // De lo contrario, necesitamos pedir permiso al usuario
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      // Si el usuario acepta, creemos una notificación
      if (permission === "granted") {
        var notification = new Notification("Esta es una notificación");
      }
    });
  }

  // Por último, si el usuario ha denegado las notificaciones, y deseamos ser respetuosos, no es necesario molestarlo más.
}


