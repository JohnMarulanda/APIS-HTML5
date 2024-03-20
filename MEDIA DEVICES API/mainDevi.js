const deviceList = document.getElementById('deviceList');

// Función para obtener y mostrar la lista de dispositivos multimedia
async function listDevices() {
  try {
    // Obtener la lista de dispositivos multimedia
    const devices = await navigator.mediaDevices.enumerateDevices();

    // Limpiar la lista existente
    deviceList.innerHTML = '';

    devices.forEach(device => {
      let listItem = document.createElement('li');
      let deviceType = device.kind === 'videoinput' ? 'Cámara' : (device.kind === 'audioinput' ? 'Micrófono' : 'Otro');
      listItem.textContent = `${deviceType}: ${device.label || 'Dispositivo desconocido'}`;
      deviceList.appendChild(listItem);
    });

    console.log('Dispositivos multimedia listados correctamente.');
  } catch (error) {
    console.error('Error al listar los dispositivos multimedia: ', error);
  }
}

// Llamar a la función para listar los dispositivos al cargar la página
listDevices();
