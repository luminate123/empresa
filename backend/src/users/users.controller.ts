import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    helloword() {
        return "hola usuarios"
    }
}

