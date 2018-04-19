from rest_framework import serializers
from blog.models import Article, Comment


class ArticleSerializer(serializers.ModelSerializer):
    content_brevity = serializers.SerializerMethodField('get_brevity')
    
    class Meta:
        model = Article
        fields = ('id', 'title', 'content_brevity', 'content', 'tag', 'created', 'modified', 'image')
        
    def get_brevity(self, obj):
        print(obj.content)
        return obj.content[0:205]
        
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'article', 'name', 'email', 'created', 'content')

