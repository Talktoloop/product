import { Body, Logger, Controller } from '@nestjs/common';
import { ValidationPipe } from '@ourloop/shared';
import { SuccessRO } from '../../common/response/success.ro';
import { NotificationService } from '../service/notification.service';
import { RpcException } from '@nestjs/microservices';
import { MessagePattern } from '@nestjs/microservices';
import { plainToClass } from 'class-transformer';
import { sendMessageToSupportSchema } from '../request/schema/send-message-to-support.schema';
import { SendMessageToSupportDto } from '../request/dto/send-message-to-support.dto';

@Controller('notification')
export class NotificationController {
  private readonly logger = new Logger(NotificationController.name);

  constructor(private readonly notificationService: NotificationService) {}

  @MessagePattern({ cmd: 'sendMessageToSupportTeam' })
  async sendMessageToSupportTeam(
    @Body(
      new ValidationPipe(sendMessageToSupportSchema, { isRpcException: true }),
    )
    data: SendMessageToSupportDto,
  ): Promise<SuccessRO | void> {
    return this.notificationService
      .sendMessageToSupportTeam(data.message)
      .then((result) =>
        plainToClass(SuccessRO, {
          success: result.body['Messages'][0].Status === 'success',
        }),
      )
      .catch((error) => {
        throw new RpcException(error);
      });
  }
}
