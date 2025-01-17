const productsList = document.getElementById("productsList");

const arrOfSongs = [
  {
    id: 1,
    name: "New Hits Vol. 1",
    img: "hits1.jpg",
    price: "$20.99",
    desc: "A collection of the latest chart-topping hits.",
  },
  {
    id: 2,
    name: "New Hits Vol. 2",
    img: "hits2.jpg",
    price: "$22.99",
    desc: "Another great collection of recent hits.",
  },
  {
    id: 3,
    name: "New Hits Vol. 3",
    img: "hits3.jpg",
    price: "$19.99",
    desc: "Perfect for a relaxed evening.",
  },
  {
    id: 4,
    name: "New Hits Vol. 4",
    img: "hits4.jpg",
    price: "$24.99",
    desc: "Featuring the latest in pop and R&B.",
  },
  {
    id: 5,
    name: "New Hits Vol. 5",
    img: "hits5.jpg",
    price: "$21.99",
    desc: "An eclectic mix of various genres.",
  },
  {
    id: 6,
    name: "New Hits Vol. 6",
    img: "hits6.jpg",
    price: "$23.99",
    desc: "Great for parties and celebrations.",
  },
  {
    id: 7,
    name: "New Hits Vol. 7",
    img: "hits7.jpg",
    price: "$20.99",
    desc: "A must-have for music lovers.",
  },
];


function createCards() {
  arrOfSongs.forEach((song) => {
    let columns = document.createElement("div");
    columns.classList.add("col-md-4", "my-4");

    let createElement = document.createElement("div");
    createElement.classList.add("card", "h-100");

    let createCardHeader = document.createElement("div");
    createCardHeader.classList.add("card-header");


    let createCardHeaderText = document.createElement("p");
    createCardHeaderText.innerText = song.name;
  

    let mountainImage = document.createElement("img");
    mountainImage.setAttribute("src", `images/${song.img}`);
    mountainImage.classList.add("card-img-top");
  

    let createCardBody = document.createElement("div");
    createCardBody.classList.add("card-body");


    let createCardBodyText = document.createElement("p");
    createCardBodyText.innerText = song.desc;
    createCardBodyText.style.display = "none";


    let cardBodyTextTwo = document.createElement("p");
    cardBodyTextTwo.innerText = `Climb difficulty: ${song.difficulty}`;
    cardBodyTextTwo.style.display = "none";


    let cardBodyTextThree = document.createElement("p");
    cardBodyTextThree.innerText = `Elevation is ${song.elevation} feet`;
    cardBodyTextThree.style.display = "none";
  

    let buttonForShow = document.createElement("button");
    buttonForShow.classList.add("btn", "btn-primary", "w-25", "mb-3", "rounded-5", "ms-3");
    buttonForShow.innerText = "Show";
    buttonForShow.addEventListener("click", () => {
      const isVisible = buttonForShow.innerText === "Hide";
      buttonForShow.innerText = isVisible ? "Show" : "Hide";
      createCardBodyText.style.display = isVisible ? "none" : "block";
      cardBodyTextTwo.style.display = isVisible ? "none" : "block";
      cardBodyTextThree.style.display = isVisible ? "none" : "block";
    });
    createElement.appendChild(buttonForShow);

    createElement.appendChild(createCardHeader);
    createCardHeader.appendChild(createCardHeaderText);
    createElement.appendChild(mountainImage);
    createElement.appendChild(createCardBody);
    createCardBody.appendChild(createCardBodyText);
    createCardBody.appendChild(cardBodyTextTwo);
      createCardBody.appendChild(cardBodyTextThree);

    columns.appendChild(createElement);
    productsList.appendChild(columns);
  });
}

createCards();

async function name(params) {
  let promise = fetch();
  let response = await promise;
  let data = await response.json();
  console.log(data);
}
