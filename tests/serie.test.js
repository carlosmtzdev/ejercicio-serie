import serie from '../src/serie'

describe('Testing Serie', () => {

  test('Find serie for 0', ()=>{

    let result = serie( 0 )

    expect(result).toBe(0)

  })

  test('Find serie for 1', ()=>{

    let result = serie( 1 )

    expect(result).toBe(0)

  })
  

  test('Find serie for 2', ()=>{

    let result = serie( 2 )

    expect(result).toBe(0)

  })

  test('Find serie for 3', ()=>{

    let result = serie( 3 )

    expect(result).toBe(39)

  })
})
