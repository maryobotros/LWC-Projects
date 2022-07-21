import { LightningElement, api } from 'lwc';

export default class Car extends LightningElement {
    @api carInfo = {carMake: "Toyota", carModel: "Corolla"}
}