const videoElement = document.getElementById('videoElement');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
let mediaStream = null;

// Función para iniciar la cámara
async function startCamera() {
  try {
    // Obtener el stream de la cámara
    mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });

    // Mostrar el stream en el elemento video
    videoElement.srcObject = mediaStream;

    console.log('Cámara iniciada correctamente.');
  } catch (error) {
    console.error('Error al iniciar la cámara: ', error);
  }
}

// Función para detener la cámara
function stopCamera() {
  if (mediaStream) {
    // Detener el stream de la cámara
    mediaStream.getTracks().forEach(track => track.stop());
    videoElement.srcObject = null;

    console.log('Cámara detenida.');
  }
}

// Evento click para iniciar la cámara
startButton.addEventListener('click', startCamera);

// Evento click para detener la cámara
stopButton.addEventListener('click', stopCamera);
