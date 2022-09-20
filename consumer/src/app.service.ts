import { Injectable } from '@nestjs/common';
import { timeStamp } from 'console';
import { InsightDataEvent } from './insights-data.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleInsightData(insightsData: InsightDataEvent) {
    console.log(
      JSON.stringify(
        {
          message: 'Latest from Insights Service..',
          data: insightsData,
        },
        null,
        2,
      ),
    );
  }
}
