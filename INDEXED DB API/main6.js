const addButton = document.getElementById('addButton');
const readButton = document.getElementById('readButton');
const outputDiv = document.getElementById('output');

let db;

// Abrir la base de datos
const request = window.indexedDB.open('example_database', 1);

// Manejador para cuando la base de datos se abre correctamente
request.onsuccess = () => {
  console.log('Database opened successfully');
  db = request.result;
};

// Manejador para cuando la base de datos se actualiza
request.onupgradeneeded = (event) => {
  console.log('Database upgrade needed');
  db = event.target.result;

  // Crear un almacén de objetos (object store) en la base de datos
  const objectStore = db.createObjectStore('data', { keyPath: 'id', autoIncrement: true });

  // Definir índices para buscar por distintos campos
  objectStore.createIndex('name', 'name', { unique: false });
};

// Manejador para errores al abrir la base de datos
request.onerror = () => {
  console.error('Error opening database');
};

// Evento click para agregar datos a la base de datos
addButton.addEventListener('click', () => {
  const transaction = db.transaction(['data'], 'readwrite');
  const objectStore = transaction.objectStore('data');
  const data = { name: 'John Doe', age: 30 };

  // Agregar datos al almacén de objetos
  const request = objectStore.add(data);

  request.onsuccess = () => {
    console.log('Data added to database');
  };

  request.onerror = () => {
    console.error('Error adding data to database');
  };
});

// Evento click para leer datos de la base de datos
readButton.addEventListener('click', () => {
  const transaction = db.transaction(['data'], 'readonly');
  const objectStore = transaction.objectStore('data');

  // Obtener todos los objetos del almacén de objetos
  const request = objectStore.getAll();

  request.onsuccess = () => {
    outputDiv.innerHTML = '';

    request.result.forEach((data) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = `Name: ${data.name}, Age: ${data.age}`;
      outputDiv.appendChild(paragraph);
    });
  };

  request.onerror = () => {
    console.error('Error reading data from database');
  };
});
