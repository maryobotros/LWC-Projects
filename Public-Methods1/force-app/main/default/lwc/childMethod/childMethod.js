import { LightningElement, track, api } from 'lwc';

export default class ChildMethod extends LightningElement {
    @track value;

    options = [
        {label: "Mercedes-AMG Petronas", value: "mercedes"},
        {label: "Oracle Red Bull Racing", value: "redbull"},
        {label: "Scuderia Ferarri", value: "ferarri"},
        {label: "McLaren F1 Team", value: "mclaren"},
    ];

    @api selectCheckbox(checkboxValue){
        let selectedCheckbox;
        
        for(let i = 0; i < this.options.length; i ++){
            if(this.options[i].value === checkboxValue){
                selectedCheckbox = this.options[i].value;
            }
        }

        if(selectedCheckbox){
            this.value = selectedCheckbox;
            console.log("Successfully checked");
        }
        else{
            console.log("No checkbox found");
        }
    }
}