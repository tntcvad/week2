function week_1() {
    /* cấu trúc cú pháp
    switch ( biến){

      case  value_1: { câu lệnh 1 ; câu lệnh 2...; break};
      case  value_2: {câu lệnh 2; break;}
      case  value_n: { câu lệnh n;break};
      defaul:         {câu lệnh; break;}

      - biến là được đem ra so sánh == với value;
      - value có thể là giá trị hoac là chuỗi
      - mỗi case tương ứng giữa so sánh giữa biến và value; ( khi biến = value_1 và khong có câu lệnh break trong biểu
       thức thì sẽ chay cả câu lệnh 2 .. câu n đến khi nào gặp câu lệnh break thì dừng lại và thoát ra
        trong 1 biểu thức có thể có nhiều câu lệnh .
        }
    * */
    let bien = 10;

    switch (bien) {
        case 10:{
            alert("hhhh");
        }
        case 12: {
            bien += 10;
            alert(bien);
            break;
        }

        case 12:{
            bien -=12;
            alert(bien);
            break;

        }
        default:{
        alert("hello");
        break;
    }

    }


}