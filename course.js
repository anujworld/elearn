document.addEventListener("DOMContentLoaded", () => {
let i1=1;

  // Get references to the show button and side nav
  const showButton = document.getElementById("showButton");
  const sideNav = document.getElementById("sideNav");

  // Add click event listener to the show button
  showButton.addEventListener("click", function () {
    // Toggle 'show' class on the body
    document.body.classList.toggle("show-side-nav");
    // Update background image based on the visibility state
    const isNavVisible = document.body.classList.contains("show-side-nav");
    showButton.style.backgroundImage = isNavVisible
      ? "url(3dlogo/menu-2.png)"
      : "url(3dlogo/menu-1.png)";
  });

  // Add click event listener to the document to hide the side nav when clicking anywhere on the screen
  document.addEventListener("click", function (event) {
    if (!sideNav.contains(event.target) && !showButton.contains(event.target)) {
      const isNavVisible = document.body.classList.contains("show-side-nav");
      // Remove 'show' class from the body
      document.body.classList.remove("show-side-nav");
      // Update background image when hiding the side nav
      showButton.style.backgroundImage = "url(3dlogo/menu-1.png)";
    }
  });

  //end
  let favorites = new Set(JSON.parse(localStorage.getItem("favorites")) || []);
  const favoriteSection = document.getElementById("fav");

  function toggleFavorite(cardId) {
    // function to send a messege to user that added to favourate
    //     setTimeout(function()  {
    //       if (count%2==0) {
    //           console.log("Hello in ");
    //           console.log(count);

    //         }
    //         else{
    //             console.log("Hello out ");
    //             console.log(count);

    //     }
    //         count++;
    //   }, 100);

    const card = document.getElementById(cardId);

    if (!card) {
      console.error(`Card with ID ${cardId} not found.`);
      return;
    }

    const isInFavorites = favorites.has(cardId);
    const clonedCardId = `${cardId}-clone`;

    if (isInFavorites) {
      favorites.delete(cardId);

      // Remove cloned card from favoriteSection
      const clonedCard = favoriteSection.querySelector(`#${clonedCardId}`);
      if (clonedCard) {
        favoriteSection.removeChild(clonedCard);
      }

      // Check if the card is a child of favoriteSection before removing
      if (card.parentElement === favoriteSection) {
        favoriteSection.removeChild(card);
      }
    } else {
      favorites.add(cardId);

      // Clone the card and assign a unique ID
      const clonedCard = card.cloneNode(true);
      clonedCard.id = clonedCardId;

      // Append the cloned card to favoriteSection
      favoriteSection.appendChild(clonedCard);
    }

    localStorage.setItem("favorites", JSON.stringify(Array.from(favorites)));
    updateHeartSymbol(card);
  }

  function updateHeartSymbol(card) {
    const heartSymbol = card.querySelector(".fav-icon #heart-symbol");

    if (!heartSymbol) {
      console.error("Heart symbol not found in the card.");
      return;
    }

    const isInFavorites = favorites.has(card.id);
    heartSymbol.innerHTML = isInFavorites ? "❤️" : "🖤";
  }

  // Attach click event to all fav-icons
  document.querySelectorAll(".fav-icon").forEach((favIcon) => {
    favIcon.addEventListener("click", (event) => {
      event.stopPropagation();
      const cardId = event.currentTarget.closest(".cg-card").id;
      toggleFavorite(cardId);
    });
  });

  // Load favorites on page load
  favorites.forEach((cardId) => {
    const card = document.getElementById(cardId);
    if (card) {
      const clonedCard = card.cloneNode(true);
      clonedCard.id = `${cardId}-clone`;
      favoriteSection.appendChild(clonedCard);
    }
  });

  // Update heart symbols on page load
  document.querySelectorAll(".cg-card").forEach(updateHeartSymbol);
});

function clearLocalStorage() {
  localStorage.clear();
  location.reload(); // Reload the page to reflect the changes
}
// const colors2 = ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"];
let bgimg = [
  "Images/favourites.png",
  "Images/1.png",
  "Images/2.png",
  "Images/3.png",
  "Images/4.png",
  "Images/5.png",
  "Images/6.png",
  "Images/7.png",
  "Images/8.png",
];
let roadmap_cg = document.getElementsByClassName("cg");
let navtitle = document.getElementsByClassName("nav-items");
let navimgs = document.getElementsByClassName("nav-img");
for (let i = 0; i < roadmap_cg.length; i++) {
  navimgs[i].style.background = `url(${bgimg[i]})`;
  navimgs[i].style.backgroundSize = "cover";
  navimgs[i].style.backgroundPosition = "center";
}
function viewmore(n) {
  const button = document.querySelector(".cg_viewmore");

  const values = [
    "",
    "webdev",
    "appdev",
    "py",
    "cp",
    "java",
    "cpp",
    "sql",
    "django",
    "fav",
  ];
  viewm(values[n]);
  console.log(values);
  console.log(values[n]);
}
// function viewm(value) {
//   const container = document.getElementById(`${value}`);
//   console.log(container);
//   console.log(value);
//   const button = document.querySelector(".cg_viewmore");
//   if (container.style.maxHeight) {
//     container.style.maxHeight = null;
//     button.style.background = "rgba(255, 255, 255, 0.25)";
//     button.style.color = "#000";
//     button.innerHTML = "View More"; // Hide the button when expanding
//     console.log("Count = 1 inner html = view more");
//   } else {
//     // const button = document.querySelector(".cg_viewmore");
//     console.log("Count = 2 inner html = view less");
//     container.style.maxHeight = container.scrollHeight + "px";
//     console.log(container.scrollHeight);
//     button.style.background = "rgba(0, 0, 0, 0.25)";
//     button.style.color = "#fff";
//     button.innerHTML = "View Less"; // Hide the button when expanding
//   }
// }
// text not changing 

function viewm(value) {
  const container = document.getElementById(`${value}`);
  const button = document.querySelector(".cg_viewmore");

  if (container.style.maxHeight) {
    container.style.maxHeight = null;
    i1=1;
  } else {
    container.style.maxHeight = container.scrollHeight + "px";
    i1 =0;
  }
  if (i1 ==1) {
    button.style.background = "rgba(255, 255, 255, 0.25)";
    button.style.color = "#000";
    button.innerHTML = "View More";
    console.log("i is 1");
  }
  else{
    console.log("i is 0");
    button.style.background = "rgba(0, 0, 0, 0.25)";
    button.style.color = "#fff";
    button.innerHTML = "View Less";

  }

}

