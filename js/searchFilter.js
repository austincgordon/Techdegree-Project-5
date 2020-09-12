/* Searchbar Filter for Image Gallery */

function searchBar() {
  let input = document.getElementById("search");

  // User input uppercased for case insensitive search
  const filter = search.value.toUpperCase();
  const anchors = document.getElementsByClassName("anchor");

  // Search for filter in each anchor tag
  for (let anchor of anchors) {
    const upperCaseCaption = anchor.getAttribute('data-caption').toUpperCase()
    // Find matching search filter
    if (upperCaseCaption.includes(filter)) {
      anchor.classList.remove("non-matched-image")
    } else {
      anchor.classList.add("non-matched-image")
    }
  }
}