import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorService } from '../error_service';

@Catch(ErrorService)
export class ProductExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    if (exception instanceof ErrorService) {
      console.log(exception.log);

      response.status(400).json({
        statusCode: 400,
        message: exception.message,
        error: exception.log,
      });
      return;
    }

    const status = exception.getStatus() || 600;

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
