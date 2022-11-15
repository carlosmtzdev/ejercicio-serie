import fibonacci from '../src/fibonacci'

describe('Testing fibonacci', () => {

  test('find fibonnaci for 0', ()=>{

    let result = fibonacci( 0 )

    expect(result).toBe(0)

  })

  test('find fibonnaci for 1', ()=>{

    let result = fibonacci( 1 )

    expect(result).toBe(1)

  })

  test('find fibonnaci for 3', ()=>{

    let result = fibonacci( 3 )

    expect(result).toBe(2)

  })
  
})
