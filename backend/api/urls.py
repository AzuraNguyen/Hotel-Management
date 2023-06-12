from django.urls import path, include
from .views import KhachHangViewset, LoaiPhongViewset
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register("customer",KhachHangViewset,basename='customer')
router.register("room_type",LoaiPhongViewset,basename='room_type')


urlpatterns = [
    path('',include(router.urls))
]