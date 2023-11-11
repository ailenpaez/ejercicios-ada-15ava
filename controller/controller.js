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
    let vocales = 0
    for(let letra of string){
        if (
            letra === "a" ||
            letra === "e" ||
            letra === "i" ||
            letra === "o" ||
            letra === "u"
          ) {
              vocales += 1
          }
    }

  return vocales
    
};

const m5 = () => {};
const m6 = () => {};
const m7 = () => {};
const m8 = () => {};
const m9 = () => {};
const m10 = () => {};

export { m1, m2, m3, m4};
