import { Query, Resolver } from '@nestjs/graphql'

const REVIEWS = [
  { id: 1, productId: 1, reviewText: 'Muito bom, 2 estrelas' },
  { id: 2, productId: 2, reviewText: 'achei péssimo' },
  { id: 3, productId: 1, reviewText: 'Peço todos os dias - Bruno Luvizotto' },
]

@Resolver('Review')
export class ReviewsResolvers {
  @Query()
  reviews() {
    return REVIEWS
  }
}
