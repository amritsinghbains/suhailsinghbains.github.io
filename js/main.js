function toggle_visibility(id, view) {
       var e = document.getElementById(id);
       if(view == 'hide')
          e.style.display = 'none';
       else
          e.style.display = 'block';
   }

function show_more_menu(value) {
  var x = document.getElementById("first_name2");
  x.value = value;
  myFunction();
}
function myFunction() {
    var x = document.getElementById("first_name2");
    $("#listOfPeople").empty();
    $("#metaInfo").empty();
    x.disabled = true;
    if(x.value.length < 1){
      x.disabled = false;
      return 1;
    }
    if(x.value < 1 || x.value > 99){
      $("#metaInfo").append("Invalid ID: " + x.value);
      x.disabled = false;
      return 1; 
    }
    toggle_visibility('loadingMask', 'show');
    $.ajax({url: "http://jsonplaceholder.typicode.com/posts/" + x.value.trim(), success: function(result){
        console.log(result);
	x.disabled = false;
        toggle_visibility('loadingMask', 'hide');
	$("#listOfPeople").empty();
    	$("#metaInfo").empty();
        $("#metaInfo").append("ID: " + result.id);
        $("#listOfPeople").append('<li class="collection-item avatar"> <i class="material-icons circle green">insert_chart</i><span class="title"><b>' + 
              result.title + '</b></span><p style="text-align:left;">' + result.body + ' </p></li>');
    }});
}

