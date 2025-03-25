import { Injectable, OnModuleInit } from '@nestjs/common';
import { FacebookService } from '../communicator/service/facebook.service';

@Injectable()
export class BoostrapService implements OnModuleInit {
  constructor(private readonly facebookService: FacebookService) {}

  async onModuleInit(): Promise<void> {
    await this.facebookService.bootstrapSettings();
  }
}
