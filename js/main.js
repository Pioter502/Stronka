function frezowanie(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo2").innerHTML = "";
    document.getElementById("demo3").innerHTML = "";
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "frezowanie.html", true);
  xhttp.send();

}

function wiercenie(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo2").innerHTML = "";
    document.getElementById("demo3").innerHTML = "";
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "wiercenie.html", true);
  xhttp.send();

}

function wiercenie_param(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    let drill_mat = document.getElementById("drill_material").value;
    let drill_tool_material = document.getElementById("drill_tool_material").value;
    let drill_tool_diameter = document.getElementById("drill_tool_diameter").value;
    let obroty;
    let posuw;
    obroty = (1000*(drill_mat*drill_tool_material))/(Math.PI*drill_tool_diameter);
    posuw = drill_tool_diameter*drill_mat*1.2*drill_tool_material;
    document.getElementById("demo2").innerHTML = Math.round(obroty);
    document.getElementById("demo3").innerHTML = Math.round(posuw);
  }
  xhttp.open("GET", "wiercenie.html", true);
  xhttp.send();

}

function rozwiercanie(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo2").innerHTML = "";
    document.getElementById("demo3").innerHTML = "";
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "rozwiercanie.html", true);
  xhttp.send();

}
