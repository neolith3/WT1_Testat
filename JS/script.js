console.log("Hello World!");

// Event-Handler
document.getElementById("testButton").addEventListener("click", function () {
  document.getElementById("titelDiv").innerText = "Clicked!";
});

// window.addEventListener("load", function () {
//   console.log("Page loaded!");
//   const button = document.getElementById("testButton");
//   button.addEventListener("click", function () {
//     console.log("Button clicked!");

//     fetch("./JSON/artikel.json")
//       .then((response) => response.json())
//       .then((articels) => {
//         console.log(articels);

//         button.innerHTML = articels[0].name;
//       });
//   });
// });
