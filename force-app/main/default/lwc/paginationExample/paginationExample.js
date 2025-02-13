import getAccountRecords from '@salesforce/apex/PaginationExample.getAccountRecords';
import { LightningElement, track } from 'lwc';

export default class PaginationExample extends LightningElement {
    
    @track columns = [
        {label: 'Id', fieldName:'Id',type:'text'},
        {label: 'Name',fieldName: 'Name', type:'text'},
        {label:'Type', fieldName:'Type',type:'text'},
        {label:'Industry',fieldName:'Industry',type:'text'}
    ]

    @track accountData =[]
    @track pageSize = 5
    @track pageNumber = 1

    connectedCallBack()
    {
        this.loadAccount()
    }

    loadAccount()
    {
        getAccountRecords({pageSize: this.pageSize, pageNumber: this.pageNumber})
        .then((result)=>{
            this.accountData = result
        }).catch((error)=>{
            this.error = error
            console.log('error while fetching records' + error)
        })
    }

    nextHandler(event)
    {
        this.pageNumber +=1
        this.loadAccount()
    }

    previousHandler(event)
    {
        this.pageNumber -=1
        this.loadAccount()
    }
}