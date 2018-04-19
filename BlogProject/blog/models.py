from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length = 100)
    content = models.TextField()
    tag = models.CharField(max_length = 50)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='media/', null=True)
    
    def __str__(self) :
        return self.title
    
    class Meta:
        db_table = "article"
        ordering = ['-created']
        
        
class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, default='anonymous user')
    email = models.EmailField()
    created = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=500)