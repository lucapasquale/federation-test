import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql'

const PRODUCTS = [
  { id: 1, name: 'Salada', price: 2000 },
  { id: 2, name: 'Pizza', price: 1500 },
]

@Resolver('Product')
export class ProductsResolvers {
  @Query()
  product(@Args('id') id: number) {
    return PRODUCTS.find((p) => p.id === id)
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }) {
    return PRODUCTS.find((p) => p.id === reference.id)
  }
}
