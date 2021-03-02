import {Tag} from "@/service/tag";
import {Group} from "@/service/group";
import {Trend} from "@/service/trend";

export class User{
    id?:number;
    name?:string;
    avatar?:string;
    background?:string;
    followCnt?: number;
    byFollowCnt?:number;
    signature?: string;
    tags?:Tag[];
    groups?:Group[];
    trends?: Trend[];
}
