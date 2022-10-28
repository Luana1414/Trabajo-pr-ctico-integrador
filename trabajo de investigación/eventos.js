//Deberá contener la funcionalidad en Javascript, al momento de presionar el botón “Resumen”, deberá mostrar en la sección “Total a Pagar: $”, el monto correspondiente a la cantidad de tickets a comprar con el descuento correspondiente dependiendo la categoría seleccionada, existen 3 categorías, Estudiante, Trainee, Junior


function valorTotal() {

    let cantTickets;
    let categoria;
    let total;
    let valorEst;
    let valorTrain;
    let valorJun;

    cantTickets = document.getElementById(`autoSizingInput`). value;
    categoria = categoria= document.getElementById(`autoSizingSelect`). value;

    console.log(cantTickets + categoria);

    valorEst = 40;
    valorTrain = 100;
    valorJun = 170;

    if (categoria == "E" && categoria !="T" && categoria != "J") {
        total = valorEst * cantTickets;
        document.getElementById(`totalApagar`).innerHTML = `Total a pagar` + total;
    } else {
        if (categoria == "T" && categoria != "E" && categoria != "J") {
            total = valorTrain * cantTickets;
            getElementById(`totalApagar`). innerHTML = `Total a pagar` + total;
        } else {
            total = valorJun * cantTickets; 
            document.getElementById(`totalApagar`).innerHTML = `Total a pagar` + total;
        }
    }

}






