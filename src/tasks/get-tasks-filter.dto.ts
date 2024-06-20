import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from 'src/interfaces/task.interface';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
