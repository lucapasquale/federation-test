import { Module } from '@nestjs/common'
import { GraphQLFederationModule } from '@nestjs/graphql'

import { ProductsResolvers } from './reviews/products-resolver'
import { ReviewsResolvers } from './reviews/reviews.resolver'

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      introspection: true,
      typePaths: ['**/*.graphql'],
    }),
  ],
  controllers: [],
  providers: [ReviewsResolvers, ProductsResolvers],
})
export class AppModule {}
