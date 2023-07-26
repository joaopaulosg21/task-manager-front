import { Task } from "./task.type";

export type allTasksResponse = {
    items:Task[];
    total:number;
}