  var myButton = document.getElementById('btn');
  myButton.addEventListener('click', myFunction);
  var hide = true;
  
  function myFunction() {
    if (hide) {
      var container = document.getElementById("container");
      container.style.display = "none";
    } else {
      var state = document.getElementById("state");
      state.style.display = "block";
    }
    
    hide = !hide;
  }


var circleElements = document.querySelectorAll('.rate-number .circle');


circleElements.forEach(function(circle) {
  circle.addEventListener('click', function() {
    var ratingValue = circle.innerHTML.trim();
    document.getElementById('rating-value').textContent = ratingValue;
  });
});


  