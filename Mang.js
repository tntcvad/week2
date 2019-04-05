let x = 0;
let array = Array();

function add_element_to_array() {

  array[x] = document.getElementById("txtValue").value;
  alert("element:" + array[x] + "add at index" + x);
  x++;
  document.getElementById("txtValue").value = "";
  
}
function dislay_array() {
  let e = "<hr/>";
  for ( let i=0;i<array.length; i++){
    e += "element " + i + " = " + array[i] + "<br/>";
  }
  document.getElementById("result").innerHTML = e;

}

function daoMang() {

  let fist = 0;
  let last = array.length -1;
  while (fist<last){
    let a_a = array[fist];
    array[fist]= array[last]
    array[last] = a_a;
    fist++;
    last--;
  }
document.getElementById("resultdaomang").innerText = array;

}