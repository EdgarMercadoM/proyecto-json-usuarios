// Se valida que apenas inicie la página, se cree una lista de usuarios en el localStorage
if (!localStorage.getItem('list_users')) {

    // Se inicializa la lista con campos id, nombre, apellido, identificacion, tipo de identificacion, correo, telefono, direccion, estado
    const dataUsers = [
        {
            id: generateId(),
            name: 'Juan',
            lastName: 'Perez',
            identification: 1001878316,
            identificationType: 'CC',
            email: generateEmail('Juan', 'Perez'),
            phone: generatePhone(),
            address: 'Calle 123',
            state: 'Activo'
        },
        {
            id: generateId(),
            name: 'Carlos',
            lastName: 'Lopez',
            identification: 456789123,
            identificationType: 'TI',
            email: generateEmail('Carlos', 'Lopez'),
            phone: generatePhone(),
            address: 'Carrera 789',
            state: 'Activo'
        },
        {
            id: generateId(),
            name: 'Ana',
            lastName: 'Martinez',
            identification: 321654987,
            identificationType: 'CC',
            email: generateEmail('Ana', 'Martinez'),
            phone: generatePhone(),
            address: 'Calle 321',
            state: 'Inactivo'
        },
        {
            id: generateId(),
            name: 'Luis',
            lastName: 'Rodriguez',
            identification: 654321987,
            identificationType: 'NIT',
            email: generateEmail('Luis', 'Rodriguez'),
            phone: generatePhone(),
            address: 'Avenida 654',
            state: 'Activo'
        },
    ];

    // Se crea una lista de usuarios vacía
    localStorage.setItem('list_users', JSON.stringify(dataUsers));
};

// Se valida que apenas inicie la página, se cree una lista de productos en el localStorage
document.addEventListener('DOMContentLoaded', function () {

    // Se obtiene la tabla de usuarios
    const userTableBody = document.querySelector('#userTable tbody');

    // Se obtiene la lista de usuarios del localStorage
    const users = JSON.parse(localStorage.getItem('list_users')) || [];

    // Se recorre la lista de usuarios y se agregan a la tabla de usuarios
    users.forEach(user => {

        // Se crea una fila de la tabla de usuarios
        const row = document.createElement('tr');

        // Se agregan las columnas de la fila de la tabla de usuarios
        row.innerHTML = `
            <td style='margin-left: 10px; margin-right: 10px;'>${user.id}</td>
            <td style='margin-left: 10px; margin-right: 10px;'>${user.name}</td>
            <td style='margin-left: 10px; margin-right: 10px;'>${user.lastName}</td>
            <td style='margin-left: 10px; margin-right: 10px;'>${user.identification}</td>
            <td style='margin-left: 10px; margin-right: 10px;'>${user.identificationType}</td>
            <td style='margin-left: 10px; margin-right: 10px;'>${user.email}</td>
            <td style='margin-left: 10px; margin-right: 10px;'>${user.phone}</td>
            <td style='margin-left: 10px; margin-right: 10px;'>${user.address}</td>
            <td style='margin-left: 10px; margin-right: 10px;'>${user.state}</td>
        `;

        // Se agrega la fila a la tabla de usuarios
        userTableBody.appendChild(row);
    });
});

// Se valida cuando se presiona el botón de ver usuarios con el id ver-usuarios
document.getElementById('ver-usuarios').addEventListener('click', function () {

    // Se redirecciona a registrar usuarios
    window.location.href = 'register.html';
});

// Se crea un metodo para generar ids al azar
function generateId() {

    // Se retorna un número aleatorio
    return Math.floor(Math.random() * 1000000000);
};

// Se crea un metodo crear correos al azar
function generateEmail(name, lastName) {

    // Se retorna un correo al azar
    return `${name.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
};

// Se crea un metodo para generar un numero de telefono al azar
function generatePhone() {

    // Se retorna un número de telefono al azar
    return Math.floor(Math.random() * 1000000000);
};