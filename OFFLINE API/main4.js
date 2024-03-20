// Verificar la conexión a Internet
function checkConnection() {
  if (navigator.onLine) {
    alert('Estás conectado a Internet.');
  } else {
    alert('Estás sin conexión a Internet.');
  }
}

// Evento click para el botón de comprobación de conexión
document.getElementById('checkConnection').addEventListener('click', checkConnection);

// Registrar eventos de conexión y desconexión
window.addEventListener('online', function() {
  alert('¡Conexión a Internet restablecida!');
});

window.addEventListener('offline', function() {
  alert('¡Estás sin conexión a Internet!');
});
