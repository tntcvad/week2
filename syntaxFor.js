function TínhTongDayso() {
  /* cú pháp:
    for(câu lệnh 1, điều kiện, câu lệnh 2){
    //- các lệnh bị lặp
    }
    giải thích: - câu lệnh 1 được thực thi khi vòng lặp bắt đầu chạy.
                - điều kiện : miễn là điều kiện này còn trả về true thì vòng lặp còn chạy.
                - câu lệnh 2:được thực thi khi các lệnh lặp đã chạy hết
   */
  //Ví dự
  // tính tổng của tất các các số từ 1---100
  // nghĩa là 1+2+3+ ..100=

  let i = prompt ("nhap vao so ban dau");
  let j = prompt ("nhap vao so cuoi");
  let tong = 0;
  for (i = i; i <= j; i++) {
    tong += i;
  }
  alert (tong);
}
function hamtong(tongkiemtraday){

}
/* vi du tinh tong tu to den from
      function sum_to_from(){
           let i =parseInt(document.getElementById("txt1").value);(lay gia tri text trong html parseInt chuyen doi chuoi
                                                                      thanh so ;)
           let j = parseInt(document.getElementById("txt2").value);
           let x = 0
           for(i=i;i<=j;i++){
             x+=i;
           }
           document.getElementById("result").value = x;
 */


