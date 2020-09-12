
function searchBar() {
  // let searchResults = []
  // Variables
  let input = document.getElementById("search");
  const filter = search.value.toUpperCase();
  const anchors = document.getElementsByClassName("anchor");

  
  for (let anchor of anchors) {
    const upperCaseResult = anchor.getAttribute('caption').toUpperCase()
    
    if (upperCaseResult.includes(filter)) {
      // searchResults.push(result)
      anchor.classList.remove("non-matched-image")
    } else {
      anchor.classList.add("non-matched-image")
    }
  }

  //console.log(searchResults);
  
}
