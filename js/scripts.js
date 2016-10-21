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
      var count = function() {
       if (rubyCount > (javaCount || cCount)) {
         $("ruby").show();
       } else if (cCount > (javaCount || rubyCount)) {
         $("csharp").show();
       } else if (javaCount > (rubyCount || cCount)) {
         $("java").show();
       } else if (rubyCount === javaCount && javaCount > cCount && rubyCount > cCount || cCount === javaCount && javaCount > rubyCount && cCount > rubyCount || cCount === rubyCount && rubyCount > javaCount && cCount > javaCount) {
         $("#any").show();
       }
    };
}



//front-end logic
  $("form#track").submit(function(event){
    event.preventDefault();
    var nameInput = $("#name").val();

    calculate();
    if(nameInput) {
      if (rubyCount > (cCount || javaCount)) {
        $("#ruby").fadeIn();
        $("#csharp").hide();
        $("#java").hide();
        $("form#track").hide();
      } else if (javaCount > (cCount || rubyCount)) {
        $("#java").fadeIn();
        $("#csharp").hide();
        $("#ruby").hide();
        $("form#track").hide();
      } else if (cCount > (javaCount || rubyCount)) {
        $("#csharp").fadeIn();
        $("#java").hide();
        $("#ruby").hide();
        $("form#track").hide();
      } else if (rubyCount === javaCount && javaCount > cCount && rubyCount > cCount || cCount === javaCount && javaCount > rubyCount && cCount > rubyCount || cCount === rubyCount && rubyCount > javaCount && cCount > javaCount) {
        $("#any").fadeIn();
        $("#csharp").hide();
        $("#java").hide();
        $("#ruby").hide();
        $("form#track").hide();
      }
    } else {
      alert("Please enter your name");
        $("#name").parent().addClass("has-error");
        return false;
    }

  });
    $("#ruby button").click(function(){
      location.reload();
    });
    $("#java button").click(function(){
      location.reload();
    });
    $("#csharp button").click(function(){
      location.reload();
    });
    $("#any button").click(function(){
      location.reload();
    });
});
