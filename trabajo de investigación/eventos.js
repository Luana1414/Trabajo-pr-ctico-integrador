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


    if (categoria != `Estudiante` && categoria != `Trainee` && categoria != `Junior` && cantidadTickets == 0) {
        //console.log(`categoria y num inv`);
        window.alert(`Seleccione un categoría y un número entero positivo, distinto de cero.`);
    } else{
        if (categoria != `Estudiante` && categoria != `Trainee` && categoria != `Junior` && cantidadTickets < 0) {
            //console.log(`categoria y num inv`);
            window.alert(`Seleccione un categoría y un número entero positivo, distinto de cero.`);
        } else {
            if  (categoria == `Estudiante` && cantidadTickets == 0) {
                //console.log(` num inv`);
                window.alert(`Seleccione un número entero positivo, distinto de cero.`);
            } else {
                if (categoria == `Estudiante` && cantidadTickets < 0) {
                    //console.log(` num inv`);
                    window.alert(`Seleccione un número entero positivo, distinto de cero.`);
                } else {
                    if (categoria == `` && cantidadTickets > 0 ) {
                        //console.log(`categoria inv`);
                        window.alert(`Seleccione un categoría`);
                    } else{
                        if (categoria == `` && cantidadTickets < 0 ) {
                            //console.log(`categoria inv`);
                            window.alert(`Seleccione un categoría`);
                        } else {
                            if (categoria == `Estudiante` && cantidadTickets > 0) {
                                //console.log(`entrada estudiante`);
                                document.getElementById(`totalApagar`).innerHTML = `Total a pagar $ ` + valorEst;
                            } else{
                                if (categoria == `Trainee` && cantidadTickets == 0){
                                    //console.log(` num inv`);
                                    window.alert(`Seleccione un número entero positivo, distinto de cero.`);
                                } else {
                                    if (categoria == `Trainee` && cantidadTickets < 0) {
                                        //console.log(` num inv`);
                                        window.alert(`Seleccione un número entero positivo, distinto de cero.`);
                                    } else {
                                        if (categoria == `Trainee` && cantidadTickets > 0) {
                                            //console.log(`entrada estudiante`);
                                            document.getElementById(`totalApagar`).innerHTML = `Total a pagar $ ` + valorTrain;
                                        } else {
                                            if (categoria == `Junior` && cantidadTickets == 0){
                                                //console.log(` num inv`);
                                                window.alert(`Seleccione un número entero positivo, distinto de cero.`);
                                            } else {
                                                if (categoria == `Junior` && cantidadTickets < 0) {
                                                    //console.log(` num inv`);
                                                    window.alert(`Seleccione un número entero positivo, distinto de cero.`);
                                                } else {
                                                    if (categoria == `Junior` && cantidadTickets > 0) {
                                                        //console.log(`entrada estudiante`);
                                                        document.getElementById(`totalApagar`).innerHTML = `Total a pagar $ ` + valorJun;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


 btnResumen.onclick = valorFinal;

function Borrar (){
    document.getElementById(`iNombre`).value = ``;
    document.getElementById(`iApellido`).value = ``;
    document.getElementById(`iCorreo`).value = ``;
    document.getElementById(`categoria`).value = ``;
    document.getElementById(`cantTickets`).value = ``;
    document.getElementById(`totalApagar`).innerHTML= `Total a pagar $`;
}

btnBorrar.onclick = Borrar; 