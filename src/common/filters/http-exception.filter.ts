import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";


export class AllExceptionFilter implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        throw new Error("Method not implemented.");
    }
}