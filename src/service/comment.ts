import {User} from "@/service/user";

export class Comment {
    content!: string;
    publishTime!: string;
    user!: User;
}