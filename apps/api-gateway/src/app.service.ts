import { SERVICE_PORTS, SERVICES } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Api gateway is running on port ${SERVICE_PORTS[SERVICES.API_GATEWAY]}`;
  }
}
