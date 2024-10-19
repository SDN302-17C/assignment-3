import { Controller, Get } from '@nestjs/common';
import { InfoService } from './info.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Info')
@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get()
  async getAll() {
    return await this.infoService.getAll();
  }
}
