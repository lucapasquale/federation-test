import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3002)

  console.log('####################################')
  console.log('Serviço Reviews iniciado')
  console.log('####################################')
}
bootstrap()
