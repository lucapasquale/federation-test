import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        tracing: true,
      },
      gateway: {
        serviceList: [
          { name: 'products', url: 'http://localhost:3000/graphql' },
        ],
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
