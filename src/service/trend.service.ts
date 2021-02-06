import {anyOne, Circle} from "@/service/Circle.service";
import {random, randomSecond} from "@/service/utils";


export function getAllTrend(): Promise<TrendItem[]> {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
            resolve(TrendItem.random())
        // }, randomSecond())
    })
}

class User {
    id!: string;
    name!: string;
    slogan!: string;
    avatar!: string;
}

class Comment {

}

class Agree {

}

class Share {

}

export class TrendItem {
    user!: User;
    postTime!: Date;
    content!: string;
    circle!: Circle;
    agree!: number;
    comment!: number;
    share!: number;

    constructor(user: User, postTime: Date, content: string, circle: Circle, agree: number, comment: number, share: number) {
        this.user = user;
        this.postTime = postTime;
        this.content = content;
        this.circle = circle;
        this.agree = agree;
        this.comment = comment;
        this.share = share;
    }

    static random(): TrendItem[] {
        var res: TrendItem[] = [];
        for (let i = 0; i < 10; i++) {
            res.push(new TrendItem(new User(), new Date(), "", anyOne(), random(1, 999), random(1, 999), random(1, 999)))
        }
        return res;
    }
}