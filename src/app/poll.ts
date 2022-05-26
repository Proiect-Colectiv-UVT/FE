import { Result } from "./result";

export class Poll {
    id!:number;
    description!:string;
    title!:string;
    expiryDate!:Date;
    pollResults!:Result[];
}
