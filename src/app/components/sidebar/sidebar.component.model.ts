class SideBtnModel {
    label: string;
    type: string;
    icon: string;
}

export class SidebarModel {
    sideBtns: SideBtnModel[];

    constructor() {
        this.sideBtns = [];
    }
}