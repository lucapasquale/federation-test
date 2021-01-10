import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLGatewayModule } from '@nestjs/graphql'

@Module({
  imports: [
    ConfigModule.forRoot(),

    GraphQLGatewayModule.forRoot({
      server: { tracing: true },
      gateway: {
        // Pra cada serviço do federation, dar um push no schema do Apollo Studio:
        // apollo service:push
        //  --graph=test-federation-1yi0l6
        //  --key=APOLLO_KEY
        //  --variant=APOLLO_GRAPH_VARIANT
        //  --serviceName=products
        //  --serviceURL=http://localhost:3000/graphql
        //  --endpoint=http://localhost:3000/graphql
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
