import {Group} from "@/service/group";
import {Comment} from "@/service/comment";

export class Trend {
    publishTime!: string;
    content!:string;
    agreeCnt!: number;
    commentCnt!: number;
    shareCnt!: number;
    group!: Group;
    comments!: Comment[];
}