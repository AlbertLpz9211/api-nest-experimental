export class TaskDTO {
  id?: number;
  readonly worker?: number;
  readonly description: string;
  readonly groupOfWork: string;
  readonly owner: string;
  readonly isDone: boolean;
}
