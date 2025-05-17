import getAccountInfo from '@salesforce/apex/AccountController.getAccountInfo';
import { api, LightningElement, wire } from 'lwc';

export default class AccountResultChild extends LightningElement {

    @api searchVal
    accounts

    @wire(getAccountInfo, {searchVal : '$searchVal'})
    accountData({data,error}){
        if(data){
            this.accounts = data
            console.log(data)
            this.dispatchEvent(new CustomEvent('searchresult',{
                detail : data
            }));
        }
        if(error){
            console.error(error)
        }
    }
}