import { Module } from '@nestjs/common'
import { GraphQLFederationModule } from '@nestjs/graphql'

import { ProductsResolvers } from './products/products.resolver'

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      introspection: true,
      typePaths: ['**/*.graphql'],
    }),
  ],
  controllers: [],
  providers: [ProductsResolvers],
})
export class AppModule {}
