
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const cui = document.getElementById("cui");
const departamento = document.getElementById("departamento");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const confir = document.getElementById("confir");
let bar = document.getElementById("bar");

function registrar() {

    console.log(nombre.value);
    console.log(correo.value);
    console.log(contrasena.value);
    console.log(confir.value);
    if (contrasena.value == confir.value) {
        console.log('El usuario debe de estar logeado y tiene que ser administrador, debe de tener solicitud');
        alert('Datos correctos, nuevo usuario ' + nombre.value);

    } else {

        alert('Error las contraseñas no coinciden');
    }
}

function iniciar() {
    console.log(nombre.value);
    console.log('El usuario debe de estar logeado');
    
    window.confirm('Bienvenido ' + nombre.value);
}

function ingresar() {
console.log(nombre.value);
console.log(apellido.value);
console.log(cui.value);
console.log(departamento.value);
console.log('El usuario debe estar logeado y debe de ser secretaria');
alert('Datos ingresados');
}

function cambiar(){
    console.log(bar.value);
    if(bar.value==='reg'){
        console.log(bar.value);
        location.href="./ingresoDatos.html"
    }else if(bar.value==='ini'){
        location.href="./login.html"
    }else{
        location.href="./ingresoCliente.html"
    }
}