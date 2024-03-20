let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let audioStream = null;
let audioRecorder = null;

const waveformCanvas = document.getElementById('waveformCanvas');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// Función para iniciar la grabación de audio
async function startRecording() {
  try {
    // Obtener el stream del micrófono
    audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // Crear un MediaStreamAudioSourceNode
    let audioSourceNode = audioContext.createMediaStreamSource(audioStream);

    // Crear un AnalyserNode para visualizar la forma de onda
    let analyserNode = audioContext.createAnalyser();
    analyserNode.fftSize = 2048;
    let bufferLength = analyserNode.frequencyBinCount;
    let dataArray = new Uint8Array(bufferLength);

    // Conectar el audioSourceNode al analyserNode
    audioSourceNode.connect(analyserNode);

    // Crear un canvas para visualizar la forma de onda
    let canvasContext = waveformCanvas.getContext('2d');

    // Función para dibujar la forma de onda en el canvas
    function drawWaveform() {
      requestAnimationFrame(drawWaveform);

      analyserNode.getByteTimeDomainData(dataArray);

      canvasContext.fillStyle = 'rgb(255, 255, 255)';
      canvasContext.fillRect(0, 0, waveformCanvas.width, waveformCanvas.height);

      canvasContext.lineWidth = 2;
      canvasContext.strokeStyle = 'rgb(0, 0, 0)';
      canvasContext.beginPath();

      let sliceWidth = waveformCanvas.width / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        let v = dataArray[i] / 128.0;
        let y = v * waveformCanvas.height / 2;

        if (i === 0) {
          canvasContext.moveTo(x, y);
        } else {
          canvasContext.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasContext.lineTo(waveformCanvas.width, waveformCanvas.height / 2);
      canvasContext.stroke();
    }

    drawWaveform();

    console.log('Grabación de audio iniciada correctamente.');
  } catch (error) {
    console.error('Error al iniciar la grabación de audio: ', error);
  }
}

// Función para detener la grabación de audio
function stopRecording() {
  if (audioStream) {
    // Detener el stream del micrófono
    audioStream.getTracks().forEach(track => track.stop());
    audioStream = null;

    console.log('Grabación de audio detenida.');
  }
}

// Evento click para iniciar la grabación de audio
startButton.addEventListener('click', startRecording);

// Evento click para detener la grabación de audio
stopButton.addEventListener('click', stopRecording);

