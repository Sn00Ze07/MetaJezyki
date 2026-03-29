const publicPosts = document.getElementById("publiczne-posty");
const plannedPosts = document.getElementById("planowane-posty");

const labels = {
  id: "ID",
  autor: "Autor",
  tytul: "Tytul",
  data: "Data",
  kategoria: "Kategoria",
  opis: "Opis",
  status: "Status",
};

function createField(key, value) {
  const paragraph = document.createElement("p");
  paragraph.className = "artykul";

  const label = labels[key] || key;
  const text = value === null || value === "" ? "Brak danych" : value;
  paragraph.textContent = label + ": " + text;

  return paragraph;
}

function showPosts(posts, container) {
  container.innerHTML = "";

  if (!Array.isArray(posts) || posts.length === 0) {
    container.textContent = "Brak wpisow";
    return;
  }

  posts.forEach(function (post) {
    const article = document.createElement("article");
    article.className = "post";

    Object.keys(labels).forEach(function (key) {
      if (Object.prototype.hasOwnProperty.call(post, key)) {
        article.appendChild(createField(key, post[key]));
      }
    });

    container.appendChild(article);
  });
}

function loadPosts(url, container) {
  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Blad wczytywania");
      }

      return response.json();
    })
    .then(function (data) {
      showPosts(data, container);
    })
    .catch(function () {
      container.textContent = "Nie udalo sie wczytac danych";
    });
}

loadPosts("data/publiczne_posty.json", publicPosts);
//loadPosts("data/planowane_posty.json", plannedPosts);
