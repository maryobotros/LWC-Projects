import { LightningElement } from 'lwc';

export default class Cars extends LightningElement {
    carsInfo = [
        {carMake: "Tesla", carModel: "Model S"},
        {carMake: "Honda", carModel: "Accord"},
        {carMake: "Mercedes", carModel: "S Class"},
        {carMake: "Chevy", carModel: "Silverado"}
    ];
}