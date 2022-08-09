from django.urls import path
from .views import DeliveryView, FoodViews, CategoryViews, OrderViews, SubtotalView

urlpatterns = [
    path('food/', FoodViews.as_view()),
    path('food/<int:id>', FoodViews.as_view()),
    path('category/', CategoryViews.as_view()),
    path('category/<int:id>', CategoryViews.as_view()),
    path('order/', OrderViews.as_view()),
    path('order/<slug:name>', OrderViews.as_view()),
    path('delivery/<slug:name>/<int:distance>', DeliveryView.as_view()),
    path('subtotal/<slug:name>', SubtotalView.as_view())
]
