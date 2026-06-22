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

          const link = document.createElement("a");
          link.href =
            "../articel.html?Titel=" +
            encodeURIComponent(articel.Titel) +
            "&Text=" +
            encodeURIComponent(articel.Text);
          link.textContent = "Mehr erfahren";
          newsArticelArea.appendChild(link);
        }
      });
    articles.reduce((uebertrag, x) => uebertrag + x, 0); // 0 = Startwert, Übertrag in die Berechnung
  });
});
