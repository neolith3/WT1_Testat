window.addEventListener("load", function () {
  fetch("../JSON/artikel.json")
    .then((response) => response.json())
    .then((articels) => {
      for (let articel of articels) {
        const newsArticelArea = document.getElementById("newsArticelArea");

        let newButton = document.createElement("button");
        newButton.setAttribute(
          "onclick",
          `location.href='../articel.html?id=${encodeURIComponent(
            articel.ID,
          )}'`,
        );
        newButton.className = "newsArticleButton";

        const newTitle = document.createElement("h2");
        newTitle.textContent = articel.Titel;
        newButton.appendChild(newTitle);

        const newParagraph = document.createElement("p");
        newParagraph.textContent = articel.Text;
        newButton.appendChild(newParagraph);

        newsArticelArea.appendChild(newButton);
      }
    });
});
