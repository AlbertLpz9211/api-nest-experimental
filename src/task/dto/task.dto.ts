import { IsBoolean, IsNotEmpty, isString, IsString, MinLength } from "class-validator";

export class TaskDTO {
  @IsNotEmpty()
  @IsString()
  readonly worker?: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  readonly description: string;
  @IsNotEmpty()
  @IsString()
  readonly groupOfWork: string;
  @IsNotEmpty()
  @IsString()
  readonly owner: string;
  @IsNotEmpty()
  @IsBoolean()
  readonly isDone: boolean;
}
