const itemList = document.getElementById("itemList");

itemList.addEventListener("click", (e) => {
  console.log(e.target.tagName)
  if (e.target.tagName === "LI") {
    document.getElementById("app").innerHTML=`Clicked on: ${e.target.textContent}`;
  }
});

const mainMenu = document.getElementById("mainMenu");

mainMenu.addEventListener("click", (event) => {
  if (event.target.classList.contains("dropdown-toggle")) {
    const dropdown = event.target.querySelector(".dropdown");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  }
});