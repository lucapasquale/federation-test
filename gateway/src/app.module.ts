import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLGatewayModule.forRoot({
      server: { tracing: true },
      gateway: {},
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
