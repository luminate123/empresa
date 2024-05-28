import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Se esta utilizando Nest.js por el backend y React por el frontend';
  }
}
