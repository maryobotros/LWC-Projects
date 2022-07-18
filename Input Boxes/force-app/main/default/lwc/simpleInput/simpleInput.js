import { LightningElement, track } from 'lwc';

export default class SimpleInput extends LightningElement {
    @track firstName;
    @track lastName;
    @track nameList = [];

    firstNameHandler(event){
        this.firstName = event.target.value;
    }

    lastNameHandler(event){
        this.lastName = event.target.value;
    }

    submissionHandler(){
        this.nameList.push(this.firstName);
        this.nameList.push(this.lastName);
    }
}