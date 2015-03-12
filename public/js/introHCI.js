'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $("button").click(addClubDetails);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
 function addClub(result) {
  var clubHTML = /*'<a href="#" class="thumbnail">' */ +
    '<img src="' + result['imageURL'] + '" class="img">' +
    '<p>' + result['name'];
    console.log(result);
    var club= $('#clubs'+result.id);
    club.find('.details').html(clubHTML);

}
 /*$("#testjs").click(function(e)){
 $.get("/project/random", addproject );
}*/
function addClubDetails(e) {

  // Prevent following the link
  e.preventDefault();
  $.getJSON("data.json");
}
  