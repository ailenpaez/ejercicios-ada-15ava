const m1 = (n1, n2) => {
  return n1 + n2;
};

const m2 = (n) => {
  return n ** 2;
};

const m3 = (arrayNumeros) => {
  let suma = 0;
  arrayNumeros.forEach((numero) => {
    suma += numero;
  });
  return suma;
};

const m4 = (string) => {
  let vocales = 0;
  for (let letra of string) {
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      vocales += 1;
    }
  }

  return vocales;
};

const m5 = (string) => {
  let stringConGuiones = string.split("-");
  let stringOrdenado = stringConGuiones.sort();
  return stringOrdenado
};

const m6 = (arrayIndistinto) => {
  if (arrayIndistinto.length > 0){
    return arrayIndistinto[0]
  }else if (arrayIndistinto.length === 0 ){
    return null
  } //sólo funciona con nros (?)

};

const m7 = (num) => {
  if (num < 0){
    return 'No se puede calcular el factorial de un nro negativo'
  }
  
  if (num === 0 || num === 1){
    return 1
  }

  let factorial = 1
  for (let i = 2; i <= num; i++){
    factorial *=i
  }
  return factorial
};

//! REVISAR -> NO LO PUDE HACER FUNCIONAR.
// 8. Escribe una función que tome un objeto como parámetro e imprima todas sus propiedades y valores.
// const m8 = (objeto) => {};

const m9 = (arrayNumeros) => {
  let numeroMayor = 0;
  for (let i = 1; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > numeroMayor) {
      numeroMayor = arrayNumeros[i];
    }
  }
  return numeroMayor;
};

const m10 = (string) => {
  const miCandena = string.toLowerCase()
  const cadenaInversa = miCandena.split('').reverse().join('');
  if (miCandena === cadenaInversa){
    return true
  }else{
    return false
  }
};

export { m1, m2, m3, m4 , m5, m6, m7, m9, m10};

