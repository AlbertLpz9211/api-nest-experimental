export interface ITask{
    id?: string;
    worker?: string;
    description: string;
    groupOfWork: string;
    owner: string;
    isDone: boolean;
}