const productsList = document.getElementById("productsList");
const search = document.getElementById("searchProducts");
const genreFind = document.getElementById("genreFinder");

const arrOfSongs = [
  {
    id: 1,
    name: "New Hits Vol. 1",
    img: "blackvinyl.webp",
    price: "$20.99",
    desc: "A collection of the latest chart-topping hits.",
    tags: ["trending", "hits", "pop"],
    genres: "Pop",
  },
  {
    id: 2,
    name: "New Hits Vol. 2",
    img: "macmillervinyl.webp",
    price: "$22.99",
    desc: "Another great collection of recent hits.",
    tags: ["new-release", "pop"],
    genres: "Hip-Hop",
  },
  {
    id: 3,
    name: "New Hits Vol. 3",
    img: "slinttweezredmockvinyl.webp",
    price: "$19.99",
    desc: "Perfect for a relaxed evening.",
    tags: ["relaxing", "chill"],
    genres: "Indie",
  },
  {
    id: 4,
    name: "New Hits Vol. 4",
    img: "madonnavinyl.webp",
    price: "$24.99",
    desc: "Featuring the latest in pop and R&B.",
    tags: ["pop", "R&B", "dance"],
    genres: "R&B",
  },
  {
    id: 5,
    name: "New Hits Vol. 5",
    img: "VinylPackaging.webp",
    price: "$21.99",
    desc: "An eclectic mix of various genres.",
    tags: ["eclectic", "mixed-genres", "variety"],
    genres: "Jazz",
  },
  {
    id: 6,
    name: "New Hits Vol. 6",
    img: "VinylInC.jpg",
    price: "$23.99",
    desc: "Great for parties and celebrations.",
    tags: ["party", "celebrations", "high-energy"],
    genres: "Electronic",
  },
  {
    id: 7,
    name: "New Hits Vol. 7",
    img: "VinylMePlease.jpg",
    price: "$20.99",
    desc: "A must-have for music lovers.",
    tags: ["essential", "music-lovers"],
    genres: "Pop",
  },
];

function createCards() {
  arrOfSongs.forEach((song) => {
    let columns = document.createElement("div");
    columns.classList.add("col-md-4", "my-4");

    let createElement = document.createElement("div");
    createElement.classList.add("card", "h-75");

    let createCardHeader = document.createElement("div");
    createCardHeader.classList.add("card-header");

    let createCardHeaderText = document.createElement("p");
    createCardHeaderText.innerText = song.name;

    let mountainImage = document.createElement("img");
    mountainImage.setAttribute("src", song.img ? `images/${song.img}` : "No Image Here");
    mountainImage.classList.add("card-img-top");

    let createCardBody = document.createElement("div");
    createCardBody.classList.add("card-body");

    let createCardBodyText = document.createElement("p");
    createCardBodyText.innerText = song.desc;
    createCardBodyText.style.display = "none";

    let cardBodyTextTwo = document.createElement("p");
    cardBodyTextTwo.innerText = ` ${song.tags}`;
    cardBodyTextTwo.style.display = "none";

    let cardBodyTextThree = document.createElement("p");
    cardBodyTextThree.innerText = `${song.price}`;
    cardBodyTextThree.style.display = "none";

    createElement.appendChild(createCardHeader);
    createCardHeader.appendChild(createCardHeaderText);
    createElement.appendChild(mountainImage);
    createElement.appendChild(createCardBody);
    createCardBody.appendChild(createCardBodyText);
    createCardBody.appendChild(cardBodyTextTwo);
    createCardBody.appendChild(cardBodyTextThree);

    let buttonForShow = document.createElement("button");
    buttonForShow.classList.add("btn", "btn-danger", "w-25", "mb-3", "rounded-5", "ms-3");
    buttonForShow.innerText = "Show";
    buttonForShow.addEventListener("click", () => {
      const isVisible = buttonForShow.innerText === "Hide";
      buttonForShow.innerText = isVisible ? "Show" : "Hide";
      createCardBodyText.style.display = isVisible ? "none" : "block";
      cardBodyTextTwo.style.display = isVisible ? "none" : "block";
      cardBodyTextThree.style.display = isVisible ? "none" : "block";
    });
    createElement.appendChild(buttonForShow);

    columns.appendChild(createElement);
    productsList.appendChild(columns);
  });
}

createCards();

// async function name(params) {
//   let promise = fetch();
//   let response = await promise;
//   let data = await response.json();
//   console.log(data);
// }

function searchForSongs(e) {
  const search = document.getElementById("searchProducts").value.toLowerCase().trim();
  productsList.innerHTML = "";

  // Filter the songs by genre, using .some() for array comparison
  let specific = arrOfSongs.filter((song) => song.genres.some((genre) => genre.toLowerCase() === search));

  // Loop through the filtered songs and create cards
  specific.forEach((song) => {
    let columns = document.createElement("div");
    columns.classList.add("col-md-4", "my-4");

    let createElement = document.createElement("div");
    createElement.classList.add("card", "h-75");

    let createCardHeader = document.createElement("div");
    createCardHeader.classList.add("card-header");

    let createCardHeaderText = document.createElement("p");
    createCardHeaderText.innerText = song.name;

    let mountainImage = document.createElement("img");
    mountainImage.setAttribute("src", song.img ? `images/${song.img}` : "No Image Here");
    mountainImage.classList.add("card-img-top");

    let createCardBody = document.createElement("div");
    createCardBody.classList.add("card-body");

    let createCardBodyText = document.createElement("p");
    createCardBodyText.innerText = song.desc;
    createCardBodyText.style.display = "none";

    let cardBodyTextTwo = document.createElement("p");
    cardBodyTextTwo.innerText = `Tags: ${song.tags.join(", ")}`;
    cardBodyTextTwo.style.display = "none";

    let cardBodyTextThree = document.createElement("p");
    cardBodyTextThree.innerText = `Price: ${song.price}`;
    cardBodyTextThree.style.display = "none";

    createElement.appendChild(createCardHeader);
    createCardHeader.appendChild(createCardHeaderText);
    createElement.appendChild(mountainImage);
    createElement.appendChild(createCardBody);
    createCardBody.appendChild(createCardBodyText);
    createCardBody.appendChild(cardBodyTextTwo);
    createCardBody.appendChild(cardBodyTextThree);

    let buttonForShow = document.createElement("button");
    buttonForShow.classList.add("btn", "btn-danger", "w-25", "mb-3", "rounded-5", "ms-3");
    buttonForShow.innerText = "Show";
    buttonForShow.addEventListener("click", () => {
      const isVisible = buttonForShow.innerText === "Hide";
      buttonForShow.innerText = isVisible ? "Show" : "Hide";
      createCardBodyText.style.display = isVisible ? "none" : "block";
      cardBodyTextTwo.style.display = isVisible ? "none" : "block";
      cardBodyTextThree.style.display = isVisible ? "none" : "block";
    });
    createElement.appendChild(buttonForShow);

    columns.appendChild(createElement);
    productsList.appendChild(columns);
  });
}

function pop() {
  for (let i = 0; i < arrOfSongs.length; i++) {
    let options = document.createElement("option");
    options.innerText = arrOfSongs[i].genres;
    options.value = arrOfSongs[i].genres;
    genreFind.appendChild(options);
  }
}

pop();

function filteringGens() {
  let findingFast = genreFind.value;
  let sorting = arrOfSongs.filter((gens) => gens.genres === findingFast);


for(let i = 0; i < sorting.length; i++){
if(sorting[i].genres === findingFast){
    let columns = document.createElement("div");
    columns.classList.add("col-md-4", "my-4");

    let createElement = document.createElement("div");
    createElement.classList.add("card", "h-75");

    let createCardHeader = document.createElement("div");
    createCardHeader.classList.add("card-header");

    let createCardHeaderText = document.createElement("p");
    createCardHeaderText.innerText = sorting[i].name;

    let mountainImage = document.createElement("img");
    mountainImage.setAttribute("src", song.img ? `images/${song.img}` : "No Image Here");
    mountainImage.classList.add("card-img-top");

    let createCardBody = document.createElement("div");
    createCardBody.classList.add("card-body");

    let createCardBodyText = document.createElement("p");
    createCardBodyText.innerText = song.desc;
    createCardBodyText.style.display = "none";

    let cardBodyTextTwo = document.createElement("p");
    cardBodyTextTwo.innerText = `Tags: ${song.tags.join(", ")}`;
    cardBodyTextTwo.style.display = "none";

    let cardBodyTextThree = document.createElement("p");
    cardBodyTextThree.innerText = `Price: ${song.price}`;
    cardBodyTextThree.style.display = "none";

    createElement.appendChild(createCardHeader);
    createCardHeader.appendChild(createCardHeaderText);
    createElement.appendChild(mountainImage);
    createElement.appendChild(createCardBody);
    createCardBody.appendChild(createCardBodyText);
    createCardBody.appendChild(cardBodyTextTwo);
    createCardBody.appendChild(cardBodyTextThree);

    let buttonForShow = document.createElement("button");
    buttonForShow.classList.add("btn", "btn-danger", "w-25", "mb-3", "rounded-5", "ms-3");
    buttonForShow.innerText = "Show";
    buttonForShow.addEventListener("click", () => {
      const isVisible = buttonForShow.innerText === "Hide";
      buttonForShow.innerText = isVisible ? "Show" : "Hide";
      createCardBodyText.style.display = isVisible ? "none" : "block";
      cardBodyTextTwo.style.display = isVisible ? "none" : "block";
      cardBodyTextThree.style.display = isVisible ? "none" : "block";
    });
    createElement.appendChild(buttonForShow);

    columns.appendChild(createElement);
    productsList.appendChild(columns);
}
}
}
