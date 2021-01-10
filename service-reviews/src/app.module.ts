import { Module } from '@nestjs/common'
import { GraphQLFederationModule } from '@nestjs/graphql'

import { ReviewsResolvers } from './reviews/reviews.resolver'

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      introspection: true,
      typePaths: ['**/*.graphql'],
    }),
  ],
  controllers: [],
  providers: [ReviewsResolvers],
})
export class AppModule {}
