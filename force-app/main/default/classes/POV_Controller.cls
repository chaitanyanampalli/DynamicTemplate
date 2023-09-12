public with sharing class POV_Controller {
    public String param1 { get; set; }
    // public String param2 { get; set; }
    public string lexOrigin {get{ 
        return URL.getOrgDomainUrl().toExternalForm().split('.my.')[0]+'.lightning.force.com';
    } set;}
    public string content {get{ 
      Contact cc = [SELECT Id, Article_Content__c FROM Contact WHERE Id = '0035g00000Ab5clAAB' LIMIT 1];
      return cc.Article_Content__c;
    } set;}
    public POV_Controller() {
        param1 = ApexPages.currentPage().getParameters().get('param1');
        param1 = EncodingUtil.urlDecode(param1, 'UTF-8');
        // param2 = ApexPages.currentPage().getParameters().get('param2');
    }
    @AuraEnabled(cacheable=true)
    public static string getVFOrigin() {
      string vfOrigin = '';
    string baseURL = URL.getOrgDomainUrl().toExternalForm(); 
 
    // Expected Format for DE, Sandbox & Production ORgs = https://domain--c.vf.force.com
    vfOrigin = baseURL.split('.my.')[0] + '--c.' + 'vf.force.com';
 
    return vfOrigin;
    }
    @AuraEnabled(cacheable=true)
    public static String getContent(String recordId) {
        try{
            Contact cc = [SELECT Id, Article_Content__c FROM Contact WHERE Id = :recordId LIMIT 1];

            String content2 = cc.Article_Content__c;
            System.debug('****content*****'+content2);
            return content2;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}