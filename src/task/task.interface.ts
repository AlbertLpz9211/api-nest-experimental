export interface ITask{
    id?: number;
    worker?: number;
    description: string;
    groupOfWork: string;
    owner: string;
    isDone: boolean;
}