const mockProducts = [
  { id: 'p-1', name: 'Ergonomic Office Chair', price: 199.99 },
  { id: 'p-2', name: 'Wireless Mechanical Keyboard', price: 129.5 },
  { id: 'p-3', name: '27-inch 4K Monitor', price: 349.0 },
]

export const getProducts = async () => [...mockProducts]
