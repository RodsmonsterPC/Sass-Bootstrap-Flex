let nombre = "Rodolfo Pérez";

let altura = 1.9;

// let concatenacion = nombre + " " + altura;

// let datos = document.getElementById("datos");

// datos.innerHTML = `<h1> Soy la caja de datos </h1>
//                    <h2>Mi nombre es: ${nombre}</h2>
//                    <h3>mido: ${altura}</h3>
// `;

// if (altura >= 1.9) {
//   datos.innerHTML += ` <h1> Eres una persona alta </h1> `;
// } else {
//   datos.innerHTML += ` <h1> Eres una persona bajita </h1> `;
// }

// for (let i = 2000; i <= 2020; i++) {
//   datos.innerHTML += `<h2>Estamos en el año: ${i} </h2>`;
// }

let muestraMiNombre = (nombre, altura) => {
  let misDatos = `<h1> Soy la caja de datos </h1>
                   <h2>Mi nombre es: ${nombre}</h2> 
                   <h3>mido: ${altura}m</h3>    
`;
  return misDatos;
};

let imprimir = () => {
  let datos = document.getElementById("datos");
  datos.innerHTML = muestraMiNombre("Rodolfo Pérez", 1.9);
};

imprimir();

let nombres = ["Victor", "Antonio", "Joaquin"];

document.write("<h1>Listado de nombres </h1>");
// for (i = 0; i < nombres.length; i++) {
//   document.write(nombres[i] + "<br/>");
// }

nombres.forEach((nombre) => {
  document.write(nombre + "<br/>");
});
