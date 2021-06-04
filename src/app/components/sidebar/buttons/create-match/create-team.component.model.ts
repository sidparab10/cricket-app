export class FormInputModel {
    label: string;
    type: string;
    layoutType: string;
    placeholder?: string;
    inputType: string;
    autocomplete?: string;
    inputs: FormInputModel[];
    // for adding image file type - accept = 'image/*' and inputType = 'file'
    accept?: string;
    addCheckbox?: boolean;
    checkboxLabel?: string;
    checkboxStatus?: boolean;
}

export class CreatMatchModel {
    formInputs: FormInputModel[]
}