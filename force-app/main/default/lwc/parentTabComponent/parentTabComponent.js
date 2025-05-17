import { LightningElement, api } from 'lwc';

export default class ParentComponent extends LightningElement {
    @api recordId; // Automatically receives recordId when placed on a Record Page
}
