import { LightningElement, api } from 'lwc';

export default class Car extends LightningElement {
    @api carInfo = {carMake: "Toyota", carModel: "Corolla"};

    tileClickHandler(){
        const tileClicked = new CustomEvent("tileclick", {detail: this.carInfo});

        this.dispatchEvent(tileClicked);
    }
}