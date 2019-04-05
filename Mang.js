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