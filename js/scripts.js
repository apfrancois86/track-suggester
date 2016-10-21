//business logic
$(function(){
  var rubyCount = 0;
  var javaCount = 0;
  var cCount = 0;

    var calculate = function() {
    //question 1
      if($("input#size").val() === "Large Established Business") {
        cCount++;
      } else if ($("input#size").val() === "Small Start-up") {
        rubyCount++;
      } else if ($("input#size").val() === "No Preference") {
        javaCount++;
      }
    //question 2
      if($("input#software").val() === "Enterprise Business Software") {
        cCount++;
      } else if ($("input#software").val() === "Interactive Web Applications") {
        rubyCount++;
      } else if ($("input#software").val() === "Android User-Interfaces") {
        javaCount++;
      }
    //question 3
      if($("input#size").val() === "Large Established Business") {
        cCount++;
      } else if ($("input#size").val() === "Small Start-up") {
        rubyCount++;
      } else if ($("input#size").val() === "No Preference") {
        javaCount++;
      }
    //question 4
      if($("input#size").val() === "Large Established Business") {
        cCount++;
      } else if ($("input#size").val() === "Small Start-up") {
        rubyCount++;
      } else if ($("input#size").val() === "No Preference") {
        javaCount++;
      }
    //question 5
      if($("input#size").val() === "Large Established Business") {
        cCount++;
      } else if ($("input#size").val() === "Small Start-up") {
        rubyCount++;
      } else if ($("input#size").val() === "No Preference") {
        javaCount++;
      }
});



//front-end logic
$(document).ready(function(){
  $("form#track").submit(function(event){
    event.preventDefault();

    var nameInput = $("#name").val();
    var sizeInput = $("#size").val();
    var softwareInput = $("#software").val();
    var appInput = $("#app").val();
    var comInput = $("input:radio[name=compiler_interpreter]:checked").val();
    var platformInput = $("input:radio[name=platform]:checked").val();


  });
});
