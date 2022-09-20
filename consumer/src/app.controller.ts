import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { InsightDataEvent } from './insights-data.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('insight_data')
  handleInsightsEvent(data: any) {
    this.appService.handleInsightData(data);
  }
}
