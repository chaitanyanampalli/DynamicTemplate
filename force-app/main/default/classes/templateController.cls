public with sharing class templateController {
    @AuraEnabled
    public static Knowledge__kav updateArticleContent(String articleId, String newTitle, String newArticleBody) {
        try{
            System.debug('****newArticleBody*****'+newArticleBody);
            Knowledge__kav article = [SELECT Id, Title, Content__c FROM Knowledge__kav WHERE Id = :articleId LIMIT 1];

            article.Title = newTitle;
            article.Content__c = newArticleBody;

            update article;
            return article;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static String getContent(String recordId) {
        try{
            System.debug('****send*****'+recordId);
            Contact cc = [SELECT Id, Article_Content__c FROM Contact WHERE Id = :recordId LIMIT 1];

            String content = cc.Article_Content__c;
            System.debug('****content*****'+content);
            return content;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}