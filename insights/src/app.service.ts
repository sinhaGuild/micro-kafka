import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateInsightDataDto } from './create-insight-data.dto';
import { InsightDataEvent } from './insight-data.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('INSIGHTS-PRODUCER') private readonly insightsClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createInsight({
    insightId,
    message,
    isCurrent,
    probability,
    createdAt,
  }: CreateInsightDataDto) {
    this.insightsClient.emit(
      'insight_data',
      new InsightDataEvent(
        insightId,
        message,
        isCurrent,
        probability,
        createdAt,
      ),
    );
  }
}
