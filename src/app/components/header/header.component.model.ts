class NavBtnClass {
    type: string;
    label: string;
    urlPath: string;
    icon?: string;
}

export class HeaderComponentModel {
    navBtns: NavBtnClass[];
    constructor() {
        this.navBtns = [];
    }
}
