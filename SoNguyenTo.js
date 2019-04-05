function soNguyento() {
  let so = prompt("nhap vao so ");
  let snt = "";
  for (i= 3;i<math.sqrt(so);i++){
    if(so%i==0)
      snt = so;
  }
    else{
      alert("khong phai so nguyen to")

  }
    document.write(snt);
}