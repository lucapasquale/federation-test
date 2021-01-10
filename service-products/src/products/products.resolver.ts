import { Args, Query, Resolver } from '@nestjs/graphql'

const PRODUCTS = [
  { id: 1, name: 'Salada', price: 2000 },
  { id: 2, name: 'Pizza', price: 1500 },
]

@Resolver('Product')
export class ProductsResolvers {
  @Query()
  productById(@Args('id') id: number) {
    return PRODUCTS.find((p) => p.id === id)
  }
}
