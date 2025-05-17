import { LightningElement, track } from 'lwc';

export default class CaseTable extends LightningElement {
    @track caseRecords = [
        {
            Id: '1',
            Subject: 'Subject 1',
            Status: 'New',
            Priority: 'High',
            Origin: 'Web'
        },
        {
            Id: '2',
            Subject: 'Subject 2',
            Status: 'In Progress',
            Priority: 'Medium',
            Origin: 'Phone'
        },
        {
            Id: '3',
            Subject: 'Subject 3',
            Status: 'Closed',
            Priority: 'Low',
            Origin: 'Email'
        }
        // Add more records as needed
    ];

    handleFieldChange(event) {
        const fieldName = event.target.label;
        const fieldValue = event.target.value;
        const recordId = event.target.dataset.id;

        this.caseRecords = this.caseRecords.map(record =>
            record.Id === recordId ? { ...record, [fieldName]: fieldValue } : record
        );
    }
}