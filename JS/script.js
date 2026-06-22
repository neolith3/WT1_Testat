console.log("Hello World!");

// Event-Handler
// document.getElementById("testButton").addEventListener("click", function () {
//   document.getElementById("titelDiv").innerText = "Clicked!";
// });

window.addEventListener("load", function () {
  console.log("Page loaded!");
  const button = document.getElementById("testButton");
  button.addEventListener("click", function () {
    console.log("Button clicked!");

    fetch("../JSON/artikel.json")
      .then((response) => response.json())
      .then((articels) => {
        console.log(articels);
        for (let articel of articels) {
          console.log(articel.Titel);

          const newsArticelArea = document.getElementById("newsArticelArea");
          const newDiv = document.createElement("div");
          newDiv.innerHTML = articel.Titel;
          newsArticelArea.appendChild(newDiv);

          // const link = document.createElement("a");
          // link.href = "../articel.html";
          // link.textContent = "Mehr erfahren";
          // newsArticelArea.appendChild(link);

          // const articelDetailSite = document.getElementById("articel.html");
          // articelDetailSite.getElementById("articelPageTitel").innerText =
          //   articel.Titel;
          // articelDetailSite.getElementById("articelHeaderTitel").innerText =
          //   articel.Titel;
          // articelDetailSite.getElementById("articelText").innerText =
          //   articel.Text;

          const link = document.createElement("a");
          link.href =
            "../articel.html?Titel=" +
            encodeURIComponent(articel.Titel) +
            "&Text=" +
            encodeURIComponent(articel.Text);
          link.textContent = "Mehr erfahren";
          newsArticelArea.appendChild(link);

          // const articelDetailSite = document.getElementById("articel.html");
          // articelDetailSite.getElementById("articelPageTitel").innerText =
          //   articel.Titel;
          // articelDetailSite.getElementById("articelHeaderTitel").innerText =
          //   articel.Titel;
          // articelDetailSite.getElementById("articelText").innerText =
          //   articel.Text;
        }
      });
    articles.reduce((uebertrag, x) => uebertrag + x, 0); // 0 = Startwert, Übertrag in die Berechnung
  });
});
