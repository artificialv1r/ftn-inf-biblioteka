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
let knjige = JSON.parse(localStorage.getItem("knjige"));
let iznajmljeneKnjige = [];

function createBooksRows() {
  let tableIzn = document.querySelector("#iznajmljene-body");
  let tableSve = document.querySelector("#sve-body");
  tableIzn.innerHTML = "";
  tableSve.innerHTML = "";

  for (let i = 0; i < iznajmljeneKnjige.length; i++) {
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    let naziv = document.createElement("td");
    let vrtField = document.createElement("td");
    let vratiBtn = document.createElement("button");

    vratiBtn.textContent = "Vrati";
    vratiBtn.addEventListener("click", function (event) {
      const knjigaZaVracanje = iznajmljeneKnjige[i];

      iznajmljeneKnjige.splice(i, 1);
      knjige.push(knjigaZaVracanje);

      localStorage.setItem("knjige", JSON.stringify(knjige));
      localStorage.setItem(
        "iznajmljeneKnjige",
        JSON.stringify(iznajmljeneKnjige)
      );
      createBooksRows();
      event.stopPropagation();
    });
    id.textContent = iznajmljeneKnjige[i].id;
    naziv.textContent = iznajmljeneKnjige[i].naziv;

    tr.appendChild(id);
    tr.appendChild(naziv);
    tr.appendChild(vrtField);
    vrtField.appendChild(vratiBtn);
    tableIzn.appendChild(tr);
  }
  //Da bi procitalo podatke za sve knjige ovaj kod ispod mora da se otkomentarise
  // Iz razloga sto koleginica sa kojom radim kasni nekoliko sedmica morao sam da kreiram i drugi dio zadatka, da bi vi testirali potrebno je da otkomentarisete ovaj dio koda

  //   for (let i = 0; i < knjige.length; i++) {
  //     let tr = document.createElement("tr");
  //     let id = document.createElement("td");
  //     let naziv = document.createElement("td");
  //     let iznField = document.createElement("td");
  //     let iznajmiBtn = document.createElement("button");

  //     iznajmiBtn.textContent = "Iznajmi";
  //     iznajmiBtn.addEventListener("click", function (event) {
  //       const knjigaZaIznajmljivanje = knjige[i];

  //       knjige.splice(i, 1);
  //       iznajmljeneKnjige.push(knjigaZaIznajmljivanje);

  //       localStorage.setItem(
  //         "iznajmljeneKnjige",
  //         JSON.stringify(iznajmljeneKnjige)
  //       );
  //       localStorage.setItem("knjige", JSON.stringify(knjige));
  //       createBooksRows();
  //       event.stopPropagation();
  //     });
  //     id.textContent = knjige[i].id;
  //     naziv.textContent = knjige[i].naziv;

  //     tr.appendChild(id);
  //     tr.appendChild(naziv);
  //     tr.appendChild(iznField);
  //     iznField.appendChild(iznajmiBtn);
  //     tableSve.appendChild(tr);
  //   }
}

function initializeBooks() {
  //TEST PODACI U SLUCAJU DA IH NISTE UCITALI IZ DIJELA POD A:

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
  //     new Knjiga(
  //       4,
  //       "Macak u cizmama",
  //       1949,
  //       "https://tse1.mm.bing.net/th/id/OIP.cbkwxR9X8xq4d8LA6dVmnAHaLE?rs=1&pid=ImgDetMain&o=7&rm=3",
  //       " 1984 distopijski je društveno-fantastični roman i priča upozorenja koju je napisao engleski pisac Džordž Orvel. ",
  //       5
  //     ),
  //     new Knjiga(
  //       5,
  //       "Samom sebi",
  //       1953,
  //       "https://th.bing.com/th/id/R.6db1dad356cff44bc66921d8f2f3569f?rik=IJGlgJVTIUFozg&pid=ImgRaw&r=0",
  //       "Farenhajt 451 je distopijski roman Reja Bredberija,",
  //       3
  //     ),
  //     new Knjiga(
  //       6,
  //       "Orlovi rano lete",
  //       1932,
  //       "https://th.bing.com/th/id/R.9f4b5965d0bc99a4e4e0130b713285a0?rik=d5ac2urjW9GuEw&pid=ImgRaw&r=0",
  //       "Ovaj roman najpoznatije je djelo Aldousa Huxleya. ",
  //       4
  //     ),
  //   ];
  //   localStorage.setItem("knjige", JSON.stringify(knjige));

  //Da bi se testiralo prethodni kod otkomentarisemo i ovaj dio ispod treba da stavimo u if blok sa uslovom (!iznajmljeneKnjige) i (!knjige)
  iznajmljeneKnjige = JSON.parse(localStorage.getItem("iznajmljeneKnjige"));
  if (!iznajmljeneKnjige) {
    iznajmljeneKnjige = [];
  }

  knjige = JSON.parse(localStorage.getItem("knjige"));
  if (!knjige) {
    knjige = [];
  }

  createBooksRows();
}

document.addEventListener("DOMContentLoaded", initializeBooks);
