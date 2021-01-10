import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3001)

  console.log('####################################')
  console.log('Serviço Products iniciado')
  console.log('####################################')
}
bootstrap()