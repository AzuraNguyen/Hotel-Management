from django.urls import path, include
from .views import KhachHangViewset, LoaiPhongViewset, SoDoPhongViewset, PhongViewset
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register("room",PhongViewset,basename='room')
router.register("customer",KhachHangViewset,basename='customer')
router.register("room-type",LoaiPhongViewset,basename='room-type')
router.register("so-do-phong",SoDoPhongViewset,basename='so-do-phong')


urlpatterns = [
    path('',include(router.urls))
]