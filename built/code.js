let stringvar = "abc";
console.log(stringvar);
let person = {
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
    div1 === null || div1 === void 0 ? void 0 : div1.addEventListener("click", elementCLicked);
});
export {};
//# sourceMappingURL=code.js.map