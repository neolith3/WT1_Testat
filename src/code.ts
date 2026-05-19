let stringvar: string = "abc";
console.log(stringvar);

interface Person {
  name: string;
  age: number;
}
let person: Person = {
  name: "John",
  age: 30,
};
console.log(person);

const elementCLicked = () => {
  console.log("Element clicked!");
};

window.addEventListener("load", () => {
  const div1 = document.getElementById("div1");
  // Ausstieg mit falsly
  //if (!div1) return;
  div1?.addEventListener("click", elementCLicked);
});
