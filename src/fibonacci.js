
const fibonacci = function ( n ) {

  const fib = [0, 1]

  if(n <= 0 )
    return 0

  for(let i = 2; i <=n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
  }

  console.log('result fibonacci:', fib[n] )
  return fib[n]
}


export default fibonacci