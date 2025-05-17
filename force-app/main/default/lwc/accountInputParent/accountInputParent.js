import { LightningElement, track } from 'lwc';
export default class AccountInputParent extends LightningElement 
{
    // Added by Arshad as part of Wipro L2 technical round
    searchKey = ''
    accounts = []
    timeout
    @track isLoading = false;


    get hasNoResults() {
        return this.searchKey && this.accounts && this.accounts.length === 0;
    }

    changeHandler(event)
    {
        clearTimeout(this.timeout)

        const newVal = event.target.value;

        this.timeout = setTimeout(() => {
            this.isLoading = true
            this.searchKey = newVal
        },3000)
        console.log(this.searchKey)
    }

    resultHandler(event)
    {
        this.accounts = event.detail
        this.isLoading = false
        console.log(this.accounts)
    }
}