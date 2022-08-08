import { LightningElement, track } from 'lwc';

export default class ParentMethod extends LightningElement {
    @track value;

    onInputChangeHandler(event){
        this.value = event.target.value;
    }

    checkboxSelectHandler(){
        const childComponent = this.template.querySelector("c-child-method");
        const returnedMessage = childComponent.selectCheckbox(this.value);
        console.log(returnedMessage);
    }
}