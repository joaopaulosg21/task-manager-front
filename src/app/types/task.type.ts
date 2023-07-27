import { Status } from "./status.enum";
import { User } from "./user.type";

export type Task = {
    id?:number;
    title:string;
    description:string;
    createdAt?:Date;
    limit_date:string;
    user?:User;
    status?:Status;
}