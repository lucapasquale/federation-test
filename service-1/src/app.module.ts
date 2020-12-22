import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';

import { ProductResolver } from './product.resolver';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      tracing: true,
      introspection: true,
      sortSchema: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ req }),
    }),
  ],
  controllers: [],
  providers: [ProductResolver],
})
export class AppModule {}
