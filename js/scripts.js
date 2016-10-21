//business logic
$(function(){
  var rubyCount = 0;
  var javaCount = 0;
  var cCount = 0;

    var calculate = function() {
    //question 1
      if($("#size").val() === "big") {
        cCount++;
      } else if ($("#size").val() === "small") {
        rubyCount++;
      } else if ($("#size").val() === "other") {
        javaCount++;
      }
    //question 2
      if($("#software").val() === "enterprise") {
        cCount++;
      } else if ($("#software").val() === "web") {
        rubyCount++;
      } else if ($("#software").val() === "android") {
        javaCount++;
      }
    //question 3
      if($("#app").val() === "other") {
        cCount++;
      } else if ($("#app").val() === "dynamic") {
        rubyCount++;
      } else if ($("#app").val() === "static") {
        javaCount++;
      }
    //question 4
      if($("input:radio[name=compiler_interpreter]:checked").val() === "compiler") {
        cCount++;
      } else if ($("input:radio[name=compiler_interpreter]:checked").val() === "interpreter") {
        rubyCount++;
      } else if ($("input:radio[name=compiler_interpreter]:checked").val() === "compiler") {
        javaCount++;
      }
    //question 5
      if($("input:radio[name=platform]:checked").val() === "somewhat") {
        cCount++;
      } else if ($("input:radio[name=platform]:checked").val() === "not") {
        rubyCount++;
      } else if ($("input:radio[name=platform]:checked").val() === "very") {
        javaCount++;
      }
    };
});



//front-end logic
$(document).ready(function(){
  $("#track").submit(function(event){
    event.preventDefault();

    calculate();

    if (rubyCount > (cCount || javaCount)) {
      $("#ruby").show();
      $("#csharp").hide();
      $("#java").hide();
    } else if (javaCount > (cCount || rubyCount)) {
      $("#java").show();
      $("#csharp").hide();
      $("#ruby").hide();
    } else if (cCount > (javaCount || rubyCount)) {
      $("#csharp").show();
      $("#java").hide();
      $("#ruby").hide();
    }

  });
});


// var nameInput = $("#name").val();
// var sizeInput = $("#size").val();
// var softwareInput = $("#software").val();
// var appInput = $("#app").val();
// var comInput = $("input:radio[name=compiler_interpreter]:checked").val();
// var platformInput = $("input:radio[name=platform]:checked").val();
