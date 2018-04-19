from django.shortcuts import render

# Create your views here.
from blog.models import Article, Comment
from rest_framework import viewsets
from blog.serializers import ArticleSerializer, CommentSerializer
from blog.pagination import PageCountPagination
from rest_framework.pagination import (
        LimitOffsetPagination,
        PageNumberPagination,
        )
from rest_framework.response import Response

# Create your views here.
def ArticleList(request):
    return render(request, 'index.html')

def ArticleDetails(request):
    return render(request, 'article_details.html')

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    pagination_class = PageCountPagination

    
    
class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    
