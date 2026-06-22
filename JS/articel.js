const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("../JSON/artikel.json")
  .then((res) => res.json())
  .then((data) => {
    const articel = data.find((a) => a.ID == id);

    document.getElementById("articelPageTitel").innerText = articel.Titel;
    document.getElementById("articelHeaderTitel").innerText = articel.Titel;
    document.getElementById("articelText").innerText = articel.Text;
  });
