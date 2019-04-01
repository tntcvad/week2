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

  let i;
  let tong =0;
  for( i=1;i<=100;i++){
    tong +=i;
  }
  alert(tong);



}