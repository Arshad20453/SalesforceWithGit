import { LightningElement, track } from 'lwc';

export default class PersonalLoanApplication extends LightningElement {
    @track currentStep = "1";

    // Computed properties to check which section is active
    get isEligibility() { return this.currentStep === "1"; }
    get isPersonalDetails() { return this.currentStep === "2"; }
    get isIncomeDetails() { return this.currentStep === "3"; }
    get isExpenseDetails() { return this.currentStep === "4"; }
    get isDebtDetails() { return this.currentStep === "5"; }
    get isLastStep() { return this.currentStep === "5"; }

    // Navigation controls
    get disablePrev() { return this.currentStep === "1"; }
    get disableNext() { return this.currentStep === "5"; }

    nextStep() {
        if (this.currentStep < "5") {
            this.currentStep = (parseInt(this.currentStep) + 1).toString();
        }
    }

    previousStep() {
        if (this.currentStep > "1") {
            this.currentStep = (parseInt(this.currentStep) - 1).toString();
        }
    }

    handleSubmit() {
        alert("Application Submitted Successfully!");
    }
}
