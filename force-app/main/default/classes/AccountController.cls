// AccountController.cls
public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static Account getAccountDetails(Id accountId) {
        return [SELECT Id, Name, Industry, Phone, BillingStreet, BillingCity, BillingCountry 
                FROM Account WHERE Id = :accountId LIMIT 1];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountInfo(String searchVal) {
        if(String.isBlank(searchVal))
            return new List<Account>();
            else {
                String searchKey = '%' + searchVal + '%';
                return [SELECT Id,
                               Name,
                               Industry,
                               Type
                               FROM Account WHERE Name LIKE :searchKey LIMIT 10];                        
            }
    }

}
