function myFunction() {
  document.getElementById("Ntahla").innerHTML = "Baru";
}

const coba ={
 firstTest:"TesTes",
 lastTest:"Aji"
} 
document.getElementById("Tes2").innerHTML =
coba.firstTest + " is " + coba.lastTest + " Keanehan "

function tambahField(){
  let input= document.createElement("input")
  input.type="text"
  input.className="field-box"
  input.placeholder="Masukkan Text"
  document.getElementById("container").appendChild(input)
}