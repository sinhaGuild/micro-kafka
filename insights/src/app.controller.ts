import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateInsightDataDto } from './create-insight-data.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createInsight(@Body() insightData: CreateInsightDataDto) {
    return this.appService.createInsight(insightData);
  }
}
