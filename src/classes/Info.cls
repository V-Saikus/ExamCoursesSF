/**
 * Created by Володимир on 28.09.2021.
 */

public with sharing class Info {
    @AuraEnabled(cacheable=true)
    public static List<Interview__c> getInterviewList(){
        return [SELECT Interviewer__c FROM Interview__c WHERE Time__c IN (THIS_WEEK)];
    }
}