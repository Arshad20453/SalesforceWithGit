public with sharing class PaginationExample 
{
    @AuraEnabled
    public static List<Account> getAccountRecords(Integer pageSize, Integer pageNumber){
        try {
            Integer offsetVal = (pageNumber - 1) * pageSize;
            return [select id,
                           name,
                           type,
                           industry
                    from Account
                    ORDER BY Name
                    LIMIT: pageLimit
                    OFFSET: offsetVal];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}