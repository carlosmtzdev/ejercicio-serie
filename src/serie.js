import primo from './primo'
import fibonacci from './fibonacci';
import triangular from './triangular'

const serie = function ( n ) {

  let val = Number(n)

  if(val <= 2 )
    return 0

  return ( primo(  val + 3) *  triangular( val - 1)) / (fibonacci( val - 2 ))
}

export default serie;