function frezowanie(){

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("wynik_obr").innerHTML = "";
    document.getElementById("wynik_pos").innerHTML = "";
    document.getElementById("ankieta").innerHTML = this.responseText;
    document.getElementById("menu1").style.backgroundColor = "#838181";
    document.getElementById("menu1").style.boxShadow = "0px 0px 80px 1px #07f";
    document.getElementById("menu2").style.backgroundColor = "#555555";
    document.getElementById("menu2").style.boxShadow = "none";
    document.getElementById("menu3").style.backgroundColor = "#555555";
    document.getElementById("menu3").style.boxShadow = "none";
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
    if(mill_mat == 0 || mill_tool_material == 0 || mill_tool_diameter == 0 || mill_tool_cutting_edges == 0){
      document.getElementById("wynik_obr").innerHTML = "Brak pełnych danych";
      document.getElementById("wynik_pos").innerHTML = "Uzupełnij formularz";
    } else {
      document.getElementById("wynik_obr").innerHTML = "Obroty Wrzeciona: " + Math.round(obroty) + " obr/min";
      document.getElementById("wynik_pos").innerHTML = "Posuw: " + Math.round(posuw) + " mm/min";
    }
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
    document.getElementById("menu1").style.backgroundColor = "#555555";
    document.getElementById("menu1").style.boxShadow = "none";
    document.getElementById("menu2").style.backgroundColor = "#838181";
    document.getElementById("menu2").style.boxShadow = "0px 0px 80px 1px #07f";
    document.getElementById("menu3").style.backgroundColor = "#555555";
    document.getElementById("menu3").style.boxShadow = "none";
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
    if(drill_mat == 0 || drill_tool_material == 0 || drill_tool_diameter == 0){
      document.getElementById("wynik_obr").innerHTML = "Brak pełnych danych";
      document.getElementById("wynik_pos").innerHTML = "Uzupełnij formularz";
    } else {
      document.getElementById("wynik_obr").innerHTML = "Obroty Wrzeciona: " + Math.round(obroty) + " obr/min";
      document.getElementById("wynik_pos").innerHTML = "Posuw: " + Math.round(posuw) + " mm/min";
    }
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
    document.getElementById("menu1").style.backgroundColor = "#555555";
    document.getElementById("menu1").style.boxShadow = "none";
    document.getElementById("menu2").style.backgroundColor = "#555555";
    document.getElementById("menu2").style.boxShadow = "none";
    document.getElementById("menu3").style.backgroundColor = "#838181";
    document.getElementById("menu3").style.boxShadow = "0px 0px 80px 1px #07f";
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
    if(ream_mat == 0 || ream_tool_material == 0 || ream_tool_diameter == 0){
      document.getElementById("wynik_obr").innerHTML = "Brak pełnych danych";
      document.getElementById("wynik_pos").innerHTML = "Uzupełnij formularz";
    } else {
      document.getElementById("wynik_obr").innerHTML = "Obroty Wrzeciona: " + Math.round(obroty) + " obr/min";
      document.getElementById("wynik_pos").innerHTML = "Posuw: " + Math.round(posuw) + " mm/min";
    }
  }
  xhttp.open("GET", "rozwiercanie.html", true);
  xhttp.send();
}

