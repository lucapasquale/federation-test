import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLGatewayModule } from '@nestjs/graphql'

@Module({
  imports: [
    ConfigModule.forRoot(),

    GraphQLGatewayModule.forRoot({
      server: { tracing: true },
      gateway: {
        serviceList: [
          { name: 'Products', url: 'http://localhost:3001/graphql' },
          { name: 'Reviews', url: 'http://localhost:3002/graphql' },
        ],
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
