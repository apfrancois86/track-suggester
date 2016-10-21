$(document).ready(function(){
  $("form#track").submit(function(event){
    var nameInput = $("#name").val();
    var sizeInput = $("#size").val();
    var softwareInput = $("#software").val();
    var appInput = $("#app").val();
    var comInput = $("input:radio[name=compiler_interpreter]:checked").val();
    var platformInput = $("input:radio[name=platform]:checked").val();


  });
});
