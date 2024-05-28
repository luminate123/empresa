import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service' ;
import { PeliculasModule } from './peliculas/peliculas.module';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '../..', 'frontend/dist'),
  }), UsersModule, PeliculasModule],
  controllers: [AppController],
  providers: [AppService,UsersService],
})
export class AppModule { }
