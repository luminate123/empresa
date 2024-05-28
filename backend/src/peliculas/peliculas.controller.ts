import { Controller, Get } from '@nestjs/common';

@Controller('peliculas')
export class PeliculasController {
    @Get()
    helloword() {
        return "Por el momento no hay peliculas disponibles"
    }
}
