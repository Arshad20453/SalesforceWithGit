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
                    LIMIT: pageSize
                    OFFSET: offsetVal];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccRecords(){
        try {
            return [select id,name,type,industry from Account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}