
const primo = function ( n ) {
  //console.log('entrada primo:', n)

  let primos = [];

  if(n <= 0 )
    return 0

  for (let i = 2; primos.length < n; i++) {

    let flag = 0;

    for (let div = 2; div <= i; div++) {
      
      if (i % div === 0 && i > div) {
        flag = 1; 
      } else if (i % div === 0 && flag !== 1) {
        primos.push(i);
      }
    }
  }
  console.log('result primo:', primos[n-1] )
  return primos[n-1];

}




export default primo