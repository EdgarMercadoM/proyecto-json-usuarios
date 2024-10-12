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
document.getElementById('registerForm').addEventListener('submit', function (event) {

    // Se evita que la página se recargue
    event.preventDefault();

    // Se obtienen los valores de los campos del formulario
    const id = generateId();
    const name = document.getElementById('name')?.value;
    const lastName = document.getElementById('lastName')?.value;
    const identification = document.getElementById('identification')?.value;
    const identificationType = document.getElementById('identificationType')?.value;
    const email = document.getElementById('email')?.value;
    const phone = document.getElementById('phone')?.value;
    const address = document.getElementById('address')?.value;
    const state = document.getElementById('state')?.value;

    // Se valida si ese numero de identificación ya existe
    const usersListJson = JSON.parse(localStorage.getItem('list_users')) || [];

    // Se valida si el usuario ya existe
    const userExist = usersListJson.find(user => user.identification == identification);

    // Se valida si el usuario ya existe
    if (userExist) {

        // Se muestra un mensaje de alerta
        alert('Ya existe un usuario con el número de identificación ingresado.');

        // Se retorna
        return false;
    };

    // Se inicializa el objecto user con los valores de los campos del formulario
    const user = {
        id: id,
        name: name,
        lastName: lastName,
        identification: identification,
        identificationType: identificationType,
        email: email,
        phone: phone,
        address: address,
        state: state
    };

    // Se obtiene la lista de usuarios del localStorage
    let users = JSON.parse(localStorage.getItem('list_users')) || [];

    // Se agrega el usuario a la lista de usuarios
    users.push(user);

    // Se actualiza la lista de usuarios en el localStorage
    localStorage.setItem('list_users', JSON.stringify(users));

    // Se muestra un mensaje de alerta
    alert('Usuario registrado con éxito');

    // Se envia al usuario a la página de listado de usuarios
    window.location.href = 'list.html';
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