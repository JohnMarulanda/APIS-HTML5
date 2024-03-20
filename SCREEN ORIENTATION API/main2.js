// Función para mostrar la orientación actual de la pantalla
function showOrientation() {
  var orientationInfo = document.getElementById('orientation-info');
  orientationInfo.textContent = 'Orientación actual: ' + screen.orientation.type;
}

// Función para bloquear la orientación de la pantalla
function lockScreenOrientation() {
  screen.orientation.lock('landscape-primary')
    .then(() => console.log('La orientación de la pantalla está bloqueada.'))
    .catch((error) => console.error('Error al bloquear la orientación de la pantalla:', error));
}

// Función para desbloquear la orientación de la pantalla
function unlockScreenOrientation() {
  screen.orientation.unlock()
    .then(() => console.log('La orientación de la pantalla está desbloqueada.'))
    .catch((error) => console.error('Error al desbloquear la orientación de la pantalla:', error));
}

// Mostrar la orientación actual al cargar la página
showOrientation();

// Escuchar cambios en la orientación de la pantalla
screen.orientation.addEventListener('change', showOrientation);
