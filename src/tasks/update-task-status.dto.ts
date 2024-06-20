import { IsEnum } from 'class-validator';
import { TaskStatus } from 'src/interfaces/task.interface';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
