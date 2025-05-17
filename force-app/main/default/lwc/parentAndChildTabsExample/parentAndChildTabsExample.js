import { LightningElement, api } from 'lwc';

export default class MainTabComponent extends LightningElement {
    @api accountId; // Receives accountId dynamically from parent
    activeSections = ['generalInfo', 'addressInfo']; // Default open sections
}
