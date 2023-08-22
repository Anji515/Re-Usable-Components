const itemList = document.getElementById("itemList");

itemList.addEventListener("click", (e) => {
  console.log(e.target.tagName)
  if (e.target.tagName === "LI") {
    document.getElementById("app").innerHTML=`Clicked on: ${e.target.textContent}`;
  }
});