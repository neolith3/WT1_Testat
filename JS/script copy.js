console.log("Hello World!");
let a = 5;
let b = "_TEST_";
const c = 3.14;
console.log(a + typeof a + b + typeof b + c + typeof c);

// Funktionen immer als const deklarieren, damit sie nicht überschrieben werden.
function addEditable(x, y) {
  return x + y;
}
const add = addEditable;

const mul = function (x, y) {
  return x * y;
};

const div = (x, y) => {
  return x / y;
};

const sub = (x, y) => x - y;

// Array
const arr = [1, "_TEST_", add, add(9, 0), 5];
console.log(arr);

arrMono = [1, 2, 3, 4, 5];
console.log(typeof arrMono);

//...rest operator, sammelt die restlichen Argumente in einem Array
function printArray(p1, ...rest) {
  console.log(p1 + ": " + rest.join(", "));
}
printArray("Test", "Hallo", "Welt", "JS", 34);

function printArray2(...args) {
  args.forEach((element) => {
    console.log(element);
  });
}
printArray2("Hallo", "Welt", "JS", 34);

const print = (element) => console.log(element);
arrMono.forEach(print);

// === Vergleich: Vergleicht den Wert ohne Typumwandlung
let geradeZahlen = arrMono.filter((x) => x % 2 === 0);
console.log(geradeZahlen);

let verdoppelteZahlen = arrMono.map((x) => x * 2);
verdoppelteZahlen.forEach(print);

// Summe aller Elemente im Array, Berechnung:
let summe = arrMono.reduce((uebertrag, x) => uebertrag + x, 0); // 0 = Startwert, Übertrag in die Berechnung
let summe2 = arrMono.reduce((uebertrag, x) => {
  return uebertrag + x;
}, 0);
// Berechnung der Summe mit reduce:
// [Übertrag] [ArrayWert] [Ergebnis]
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// => Reduziert das Array auf einen einizgen Wert, z. B. durch + oder eine andere Operation.

// Event-Handler
document.getElementById("testButton").addEventListener("click", function () {
  document.getElementById("titelDiv").innerText = "Clicked!";
});
