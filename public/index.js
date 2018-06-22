//For collapsible component from Materialize
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });

//When scrapeBtn is clicked, run the scraper route
$(document).on("click", "#scrapeBtn", function () {
  // console.log("I'm being clicked");

  $.ajax("/scrape", {
    type: "GET"
  }).then(function () {
    setTimeout(function(){ location.reload(); }, 1000);
  })
});

//When someone clicks on an li tag to view the article
$(document).on("click", "li", function () {
  var thisId = $(this).attr("data-id");
  // console.log($("#notes-"+thisId).text());
  $("#notes-"+thisId).empty();

  $.ajax({
    method: "GET",
    url: "articles/" + thisId
  }).then(function(data) {
    $("#notes-"+thisId).empty();

    if (data.note) {
      $("#notes-"+thisId).append("<div>" + "<span id=" + "'bodyInput'>" + data.note.body + "</span>" + "<button class=" + "'deep-orange darken-1 btn deleteBtn' " + "id=delete-" + data.note._id + ">" + "X" + "</button>" + "</div>");
    }
  })

});

//When someone clicks submitBtn to add a note
$(document).on("click", ".submitBtn", function() {
  var thisId = $(this).attr("data-btn-id");
  // console.log("Submit button clicked");
  // console.log("Here's the article id: ", thisId)
  // console.log($("#new-note-"+thisId).val());

  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      body: $("#new-note-"+thisId).val()
    }
  }).then(function(data) {
    console.log(data);
  })
});

//When someone clicks submitBtn to add a note
$(document).on("click", ".submitBtn", function() {
  var thisId = $(this).attr("data-btn-id");
  // console.log("Submit button clicked");
  // console.log("Here's the article id: ", thisId)
  // console.log($("#new-note-"+thisId).val());

  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      body: $("#new-note-"+thisId).val()
    }
  }).then(function(data) {
    console.log(data);
  })
});