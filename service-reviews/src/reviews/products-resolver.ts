import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { REVIEWS } from './reviews.resolver'

@Resolver('Product')
export class ProductsResolvers {
  @ResolveField('reviews')
  getProductReviews(@Parent() product: { id: number }) {
    return REVIEWS.filter((review) => review.productId === product.id)
  }
}
