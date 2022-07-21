import { LightningElement, track } from 'lwc';

export default class LightningMapExample extends LightningElement {
    mapMarkers = [
        {
            location: {
                // Location Information
                Street: "21820 Burbank Blvd",
                City: "Woodland Hills",
                State: "CA",
            },

            // For onmarkerselect
            value: "SF1",

            // Extra info for tile in list & info window
            icon: "standard:account",
            title: "Ricoh USA", // e.g. Account.Name
            description: "Long: 34.1856 Lat: 1185922",
        },

        {
            location: {
                // Location Information
                Street: "6301 Owensmouth Avenue",
                City: "Woodland Hills",
                State: "CA",
            },

            // For onmarkerselect
            value: "SF2",

            // Extra info for tile in list
            icon: "standard:account",
            title: "Farmer's Insurance", // e.g. Account.Name
            description: "The corporate headquarters for Farmer's Insurance Group.",
        },
    ];

    markersTitle = "Companies in Woodland Hills, CA"

    selectedMarkerValue = "SF1";

    zoomLevel = 14;

    handleMarkerSelect(event) {
        this.selectedMarkerValue = event.target.selectedMarkerValue;
    }
}