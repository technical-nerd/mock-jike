import {Trend} from "@/service/trend";
import {User} from '@/service/user';
import {Group} from "@/service/group";

export class TrendItem {
    user?: User;
    trend?: Trend;
    group?: Group;
}
