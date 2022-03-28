

var r = 1;
var squareArea = 4;
var pi;
var puntos_fuera = 0;
var puntos_dentro = 0;
var puntos_totales;

function iterar() {
    
    let iteraciones = document.getElementById("iteraciones_valor").value;

//    console.log(iteraciones);

    for (let i = 0; i < iteraciones; i++) {
        let x = Math.random();
        let y = Math.random();      
        
//        console.log(x + "," + y);
        let comprobacion_result = (x*x)+(y*y);

        if (comprobacion_result > 1) {
            puntos_fuera++;
        }

        if (comprobacion_result < 1) {
            puntos_dentro++;
        }
        
    }

    puntos_totales = puntos_dentro + puntos_fuera;

    pi = (puntos_dentro*squareArea)/(puntos_totales*(r*r));

    console.log('numero pi: '+pi);

    var html_pi = document.getElementById("resultado_pi");
    html_pi.innerHTML = pi;

}