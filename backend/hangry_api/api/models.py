from django.db import models

# Create your models here.
class Category(models.Model):
  name = models.CharField(max_length=225)
  description = models.CharField(max_length=225)

  def __str__(self):
        return '%s' % (self.name)

class Food(models.Model):
  name = models.CharField(max_length=225)
  price = models.FloatField()
  description = models.CharField(max_length=225)
  category = models.ForeignKey(Category,on_delete=models.CASCADE)

  def __str__(self):
        return '%s' % (self.name)

class Order(models.Model):
  name=models.CharField(max_length=225)
  item=models.ForeignKey(Food,on_delete=models.CASCADE)
  quantity=models.IntegerField()