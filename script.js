
var cantidad = document.getElementById('cantidadEntradas')
var categoria = document.getElementById ('seleccion')
var total = document.getElementById('total')
var valorCantidad = cantidad.value
var valorCategoria = categoria.value


function calcularPrecio(cantidad, categoria) {
    var valorTicket;
    var descuento;
    var totalAbonar=0;

    switch (parseInt(categoria.value)) {
        case 1:
            valorTicket = 200 * cantidad.value;
            descuento = (valorTicket * 80) / 100;
            totalAbonar = valorTicket - descuento;
            break
        case 2:
            valorTicket = 200 * cantidad.value;
            descuento = (valorTicket * 50) / 100;
            totalAbonar = valorTicket - descuento;
            break
        case 3:
            valorTicket = 200 * cantidad.value;
            descuento = (valorTicket * 15) / 100;
            totalAbonar = valorTicket - descuento;
            break
        default:
            alert("Debe seleccionar una categoría");
    }
   
    console.log (total.textContent= "Total a abonar: $" + totalAbonar)
}

function hacerclick() {
    calcularPrecio(cantidad,categoria)
}

function borrarForm() {
    nombre.value="", apellido.value="", correo.value="", cantidad.value="", categoria.value="Seleccione", total.value=" "
    console.log (total.textContent= "Total a abonar: $")
}

