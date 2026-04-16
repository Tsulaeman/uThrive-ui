import { describe, expect, it } from 'vitest'
import { getProducts } from './productsService'

describe('getProducts', () => {
  it('returns a list of mock products', async () => {
    const products = await getProducts()

    expect(products).toHaveLength(3)
    expect(products[0]).toMatchObject({
      id: 'p-1',
      name: 'Ergonomic Office Chair',
      price: 199.99,
    })
  })
})
