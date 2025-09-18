class Knjiga {
  constructor(id, naziv, datum, url, opis, popularnost) {
    this.id = id;
    this.naziv = naziv;
    this.datum = datum;
    this.url = url;
    this.opis = opis;
    this.popularnost = popularnost;
  }
}

let knjige = [];

function createBooksRows() {
  let table = document.querySelector("#books-body");
  table.innerHTML = "";

  for (let i = 0; i < knjige.length; i++) {
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    let naziv = document.createElement("td");
    let btnField = document.createElement("td");
    let obrisiBtn = document.createElement("button");

    obrisiBtn.textContent = "Obrisi";
    obrisiBtn.addEventListener("click", function (event) {
      knjige.splice(i, 1);
      localStorage.setItem("knjige", JSON.stringify(knjige));
      createBooksRows();
      event.stopPropagation();
    });
    id.textContent = knjige[i].id;
    naziv.textContent = knjige[i].naziv;

    tr.appendChild(id);
    tr.appendChild(naziv);
    tr.appendChild(btnField);
    btnField.appendChild(obrisiBtn);
    table.appendChild(tr);

    tr.addEventListener("click", function () {
      displayBookDetails(knjige[i]);
      document.querySelector(".detalji-knjige").style.border =
        "1px solid black";
    });
  }
}

function initializeBooks() {
  //TEST PODACI:

  //   knjige = [
  //     new Knjiga(
  //       1,
  //       "1984",
  //       1949,
  //       "https://tse1.mm.bing.net/th/id/OIP.cbkwxR9X8xq4d8LA6dVmnAHaLE?rs=1&pid=ImgDetMain&o=7&rm=3",
  //       " 1984 distopijski je društveno-fantastični roman i priča upozorenja koju je napisao engleski pisac Džordž Orvel. ",
  //       5
  //     ),
  //     new Knjiga(
  //       2,
  //       "Farenheit 451",
  //       1953,
  //       "https://th.bing.com/th/id/R.6db1dad356cff44bc66921d8f2f3569f?rik=IJGlgJVTIUFozg&pid=ImgRaw&r=0",
  //       "Farenhajt 451 je distopijski roman Reja Bredberija,",
  //       3
  //     ),
  //     new Knjiga(
  //       3,
  //       "Brave New Worl",
  //       1932,
  //       "https://th.bing.com/th/id/R.9f4b5965d0bc99a4e4e0130b713285a0?rik=d5ac2urjW9GuEw&pid=ImgRaw&r=0",
  //       "Ovaj roman najpoznatije je djelo Aldousa Huxleya. ",
  //       4
  //     ),
  //   ];
  //   localStorage.setItem("knjige", JSON.stringify(knjige));

  //Da bi se testiralo bez dijela koji student B treba da zavrsi (dodavanje knjiga) prethodni kod otkomentarisemo i ovaj dio ispod treba da stavimo u if blok sa uslovom (!knjige)

  knjige = JSON.parse(localStorage.getItem("knjige"));
  if (!knjige) {
    knjige = [];
  }

  createBooksRows();
}

function displayBookDetails(knjiga) {
  let p = document.createElement("p");

  p.innerHTML =
    "Naziv: " +
    knjiga.naziv +
    "<br> Godina: " +
    knjiga.datum +
    "<br> Opis: " +
    knjiga.opis +
    "<br> Url: " +
    knjiga.url +
    "<br> Popularnost: " +
    knjiga.popularnost;

  let detalji = document.querySelector(".detalji-knjige");
  if (detalji.firstChild) {
    detalji.firstChild.remove();
  }
  detalji.appendChild(p);
}

document.addEventListener("DOMContentLoaded", initializeBooks);
