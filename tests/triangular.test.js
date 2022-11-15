import triangular from '../src/triangular'

describe('Testing triangular', () => {

  test('find triangular for 0', ()=>{

    let result = triangular( 0 )

    expect(result).toBe(0)

  })


  test('find triangular for 1000', ()=>{

    let result = triangular( 1000 )

    expect(result).toBe(500500)

  })
  
})
