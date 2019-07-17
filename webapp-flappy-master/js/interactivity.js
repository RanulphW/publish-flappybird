jQuery("#scoresbtn").on("click", function(){
  jQuery("#content").empty();
  jQuery("#content").append(
    "<p>"+"scores"+"</p>"
  )
});

jQuery("#creditsbtn").on("click", function(){
  jQuery("#content").empty();
  jQuery("#content").append(
    "<p>"+"This was made by Ranulph WHeway"+"</p>"
  )
})

jQuery("#helpbtn").on("click", function(){
  jQuery("#content").empty();
  jQuery("#content").append(
    "<p>"+"For help email ranulphfb@gmail.com"+"</p>"
  )
})

var playerName = prompt("What's your name?");
var scoreEntry = "<li>" + playerName + ":" + score.toString() + "</li>";

function registerScore(){
        jQuery("#content").append(
          score + playerName
        )

}
