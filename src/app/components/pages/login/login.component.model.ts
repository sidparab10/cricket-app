class FormInputModel {
    formType: string;
    type: string;
    inputType: string;
    label: string;
    placeholder: string;
    clsName: string;
    autocomplete: string;
    inputs: FormInputModel[];
}

export class LoginComponentModel {
    formInputs: FormInputModel[];
    constructor() {
        this.formInputs = [];
    }
}
