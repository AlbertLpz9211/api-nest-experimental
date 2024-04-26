export interface ITask{
    id?: string;
    worker?: number;
    description: string;
    groupOfWork: string;
    owner: string;
    isDone: boolean;
}