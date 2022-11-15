import primo from '../src/primo'

describe('Testing primo', () => {

  test('Find secuence primes number for 0', ()=>{

    let result = primo( 0 )

    expect(result).toBe(0)

  })

  test('Find first prime number', ()=>{

    let result = primo(1)

    expect(result).toBe(2)

  })
  
})

