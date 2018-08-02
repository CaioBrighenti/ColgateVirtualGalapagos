// needs elegant way to check button status when bg audio finishes playing

var ferd_click = false;
var sc_click = false;
var opt_on = false;

init();


function init(){
  addFlag("island_clicks");
  
  document.getElementById("player").onended = function() {
    trackDone();
    enableOptional();
  };
  
  if (localStorage.getItem("TerrainMap03") == "true") {
    document.getElementById("opt_audio").disabled = false;
  }
}

function on(name) {
  if (name=="santacruz"){
    if (opt_on){
      setTrack("Volcano_SantaCruz01_01");
      play();
    }
    sc_click = true;
  } else if (name=="fernandina"){
    ferd_click = true;
    if (opt_on){
      setTrack("Volcano_Fernandina01_opt");
      play();
    }
  }  
  document.getElementById("overlay").style.display = "block";
  document.getElementById(name + "_inner").style.display = "block";
}

function off(name) {
  document.getElementById("overlay").style.display = "none";
  document.getElementById(name + "_inner").style.display = "none";
  if (sc_click && ferd_click){
    flagDone("island_clicks");
    enableOptional();
  }
}

function bgAudioListener(){
  enableOptional();
}

function enableOptional(){
  if (done_flags["island_clicks"] && done_flags["audio"]){
    document.getElementById("opt_audio").disabled = false;
    localStorage.setItem("TerrainMap03", "true");
  }
}

function narrationOn(){
  opt_on = true;
  setTrack("Volcano_TerrainMap03opt");
  play();
}