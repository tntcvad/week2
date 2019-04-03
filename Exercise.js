// bai 1: Nhap vao hai so a , b. kiem tra xem a co chia het cho b khong

function checkDivisor() {
  let numbera = prompt ( "nhap vao so a" );
  let numberb = prompt ( "nhap vao so b" );
  if ( parseInt ( numbera ) % parseInt ( numberb ) == 0 ) {
    alert ( "a chia het cho b" );
  }
  else {
    alert ( "a khong chia het cho b" );
  }

}