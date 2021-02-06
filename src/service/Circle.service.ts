import {getAnyElement} from "@/service/utils";

export class Circle {
    id!: string;
    name!: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

}

var CircleList = [
    {id: "", name: "无用但有趣的冷知识"},
    {id: "", name: "职场那些事儿"},
    {id: "", name: "奇葩聊天截图博物馆"},
    {id: "", name: "今日穿搭"},
];

export function anyOne(){
    return <Circle>getAnyElement(CircleList);
}
