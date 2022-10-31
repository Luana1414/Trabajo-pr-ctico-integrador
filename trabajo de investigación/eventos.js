//Deberá contener la funcionalidad en Javascript, al momento de presionar el botón “Resumen”, deberá mostrar en la sección “Total a Pagar: $”, el monto correspondiente a la cantidad de tickets a comprar con el descuento correspondiente dependiendo la categoría seleccionada, existen 3 categorías, Estudiante, Trainee, Junior
const btnResumen = document.getElementById("btnResumen");
const hTotalApagar = document.getElementById("totalApagar");

function valorFinal() {

    let cantidadTickets;
    let categoria;
    let valorEst;
    let valorTrain;
    let valorJun;

    cantidadTickets = document.getElementById(`cantTickets`).value;
    //console.log(cantidadTickets)
    categoria = document.getElementById(`categoria`).value;
    //console.log(categoria)

    valorEst = 40 * cantidadTickets;
    //console.log(valorEst)
    valorTrain = 100 * cantidadTickets;
    //console.log(valorTrain)
    valorJun = 170 * cantidadTickets;
    //console.log(valorJun)


        if (categoria == `Estudiante`) {
            document.getElementById(`totalApagar`).innerHTML = `Total a pagar $ ` + valorEst;
        } else if (categoria == `Trainee`) {
            document.getElementById(`totalApagar`).innerHTML = `Total a pagar $ ` + valorTrain;
        } else if (categoria == `Junior`) {
            document.getElementById(`totalApagar`).innerHTML = `Total a pagar $ ` + valorJun;
        }
    }

 btnResumen.onclick = valorFinal;

function borrar(){
    document.getElementById()
}