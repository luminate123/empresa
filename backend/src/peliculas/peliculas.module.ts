import { Module } from '@nestjs/common';
import { PeliculasController } from './peliculas.controller';
import { PeliculasService } from './peliculas.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../..', 'client/dist'),
    })
  ],
  controllers: [PeliculasController],
  providers: [PeliculasService]
})
export class PeliculasModule { }
