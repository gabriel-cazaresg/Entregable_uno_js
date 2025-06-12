/* ======================================================================
=======================Lista de Compras Simple===========================
=======================================================================*/

// Creación del array vacío de lista de compras
const listaCompras = [];

// Función para agregar productos
const agregarProductos = function (nombre, cantidad) {
    const producto = {
        nombre: nombre,
        cantidad: cantidad 
    }; 
    listaCompras.push(producto); 
}

// Crear función para mostrar la lista 
const mostrarLista = function () {
    for (let i = 0; i < listaCompras.length; i++) {
        const producto = listaCompras[i]; //Accedemos al producto actual 
        console.log(`El producto número ${i + 1} es ${producto.nombre} y la cantidad es ${producto.cantidad}`);
    }
}

// Crear una función para contar los productos en la lista de compras
const contarProductos = function () {
    return listaCompras.length; //Retornamos la longitud del array de la lista de productos
}

//Agregamos tres productos 
agregarProductos('huevos', 32); //Agregamos huevos
agregarProductos('manzanas', 3); //Agregamos manzanas
agregarProductos('peras', 5); //Agregamos peras

//Mostramos la lista de compras
mostrarLista();

//Contamos los productos en la lista de compras
contarProductos();

//Decidi usar esta otra sintaxis de funciones de expresion debido a que me gusta un poco mas, pero no es necesario. 
// Solo fue por cuestiones de preferencias personales.

//A continuacion hay un ejercicios con ciclos, condicionales y uso de prompt
const email = 'pepito53@gmail.com'
const passkey = 'Gabitoballesteros34'

const usuario = prompt('Ingresa tu correo electronico: ')
const passkeyUsuario = prompt('Ingresa tu password: ')

if (usuario === email && passkeyUsuario === passkey) {
    alert('Has ingresado correctamente a tu cuenta');
} else {
    alert('Alguno de los datos ingresados es incorrecto')
}