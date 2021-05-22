class NavBtnsModel {
    label: string;
}

class StatisticsModel {
    type: string;
    label: string;
}

export class DashboardModel {
    navBtns: NavBtnsModel[];
    statistics: StatisticsModel[];

    constructor() {
        this.navBtns = [];
        this.statistics = [];
    }
}