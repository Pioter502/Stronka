function frezowanie(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("wynik_obr").innerHTML = "";
    document.getElementById("wynik_pos").innerHTML = "";
    document.getElementById("ankieta").innerHTML = this.responseText;
  }
  xhttp.open("GET", "frezowanie.html", true);
  xhttp.send();

}

function frezowanie_param(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    let mill_mat = document.getElementById("mill_material").value;
    let mill_tool_material = document.getElementById("mill_tool_material").value;
    let mill_tool_diameter = document.getElementById("mill_tool_diameter").value;
    let mill_tool_cutting_edges = document.getElementById("mill_tool_cutting_edges").value;
    let obroty;
    let posuw;
    obroty = (1000*(mill_mat*mill_tool_material))/(Math.PI*mill_tool_diameter);
    posuw = (obroty*mill_tool_cutting_edges)/10;
    document.getElementById("wynik_obr").innerHTML = Math.round(obroty) + " obr/min";
    document.getElementById("wynik_pos").innerHTML = Math.round(posuw) + " mm/min";
  }
  xhttp.open("GET", "frezowanie.html", true);
  xhttp.send();

}



function wiercenie(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("wynik_obr").innerHTML = "";
    document.getElementById("wynik_pos").innerHTML = "";
    document.getElementById("ankieta").innerHTML = this.responseText;
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
    document.getElementById("wynik_obr").innerHTML = Math.round(obroty) + " obr/min";
    document.getElementById("wynik_pos").innerHTML = Math.round(posuw) + " mm/min";
  }
  xhttp.open("GET", "wiercenie.html", true);
  xhttp.send();

}

function rozwiercanie(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("wynik_obr").innerHTML = "";
    document.getElementById("wynik_pos").innerHTML = "";
    document.getElementById("ankieta").innerHTML = this.responseText;
  }
  xhttp.open("GET", "rozwiercanie.html", true);
  xhttp.send();

}

function rozwiercanie_param() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let ream_mat = document.getElementById("ream_material").value;
    let ream_tool_material = document.getElementById("ream_tool_material").value;
    let ream_tool_diameter = document.getElementById("ream_tool_diameter").value;
    let obroty;
    let posuw;
    obroty = (1000*(ream_mat*ream_tool_material))/(Math.PI*ream_tool_diameter);
    posuw = obroty*(ream_tool_diameter*0.03);
    document.getElementById("wynik_obr").innerHTML = Math.round(obroty) + " obr/min";
    document.getElementById("wynik_pos").innerHTML = Math.round(posuw) + " mm/min";
  }
  xhttp.open("GET", "rozwiercanie.html", true);
  xhttp.send();
}
