function insert_Row() {
  let x = document.getElementById("sampleTable").insertRow(0);
  let y = x.insertCell(0);
  let z = x.insertCell(1);
  y.innerHTML = "New Cell1";
  z.innerHTML = "New Cell2";
}
