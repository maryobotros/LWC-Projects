import { LightningElement, track } from 'lwc';

export default class Cars extends LightningElement {
    @track selectedCar;
    
    carsInfo = [
        {carMake: "Tesla", carModel: "Model S"},
        {carMake: "Honda", carModel: "Accord"},
        {carMake: "Mercedes", carModel: "S Class"},
        {carMake: "Chevy", carModel: "Silverado"}
    ];

    onTileSelectHandler(event){
        const carInfo = event.detail;
        this.selectedCar = carInfo.carMake;
    }
}