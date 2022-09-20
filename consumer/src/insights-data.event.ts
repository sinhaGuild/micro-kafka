export class InsightDataEvent {
  constructor(
    public readonly insightId: string,
    public readonly message: string,
    public readonly isCurrent: boolean,
    public readonly probability: number,
    public readonly createdAt: string,
  ) {}

  toString() {
    return JSON.stringify({
      insightId: this.insightId,
      message: this.message,
      isCurrent: this.isCurrent,
      probability: this.probability,
      createdAt: this.createdAt,
    });
  }
}
