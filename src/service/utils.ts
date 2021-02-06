export function random(min: number, max: number): number {
    let range = max - min;
    return (min + Math.round(Math.random() * range));
}

export function randomSecond(): number {
    return random(1, 3) * 1000;
}

export function getAnyElement(list:object[]):object{
    if (list.length == 0) {
        return {};
    }
    if (list.length == 1) {
        return list[0];
    }
    let index = random(0, list.length - 1);
    return list[index];
}