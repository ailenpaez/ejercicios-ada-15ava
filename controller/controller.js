const m1 = (n1, n2) => {
  return n1 + n2;
};

const m2 = (n) => {
  return n ** 2;
};

//3. Implementa una función que tome un array de números y devuelva la suma de todos los elementos.
const m3 = (arrayNumeros) => {
  let suma = 0;
  arrayNumeros.forEach((numero) => {
    suma += numero;
  });
  return suma;
};

//4. Crea una función que reciba un string y devuelva el número de vocales que contiene.
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
// 5. Escribe una función que tome un string de elementos separados por guiones y devuelva el array ordenado alfabéticamente.

const m5 = (string) => {
  let stringConGuiones = string.split("-");
  let stringOrdenado = stringConGuiones.sort();
  return stringOrdenado
};

// 6. Define una función que tome un array de cualquier tipo y devuelva el primer elemento.
const m6 = (arrayIndistinto) => {
  if (arrayIndistinto.length > 0){
    return arrayIndistinto[0]
  }else if (arrayIndistinto.length === 0 ){
    return null
  } //sólo funciona con nros (?)

};

// 7. Implementa una función que tome un número como parámetro y devuelva su factorial.
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


// 8. Escribe una función que tome un objeto como parámetro e imprima todas sus propiedades y valores.
// const m8 = (objeto) => {

// };

// 9. Implementa una función que tome un array de números y devuelva el número más grande.
const m9 = (arrayNumeros) => {
  let numeroMayor = 0;
  for (let i = 1; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > numeroMayor) {
      numeroMayor = arrayNumeros[i];
    }
  }
  return numeroMayor;
};

// 10. Crea una función que tome un string como parámetro y devuelva true si es un palíndromo, o false en caso contrario.
const m10 = () => {};

export { m1, m2, m3, m4 , m5, m6, m7, m8, m9, m10};

