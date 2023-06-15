from django.urls import path, include
from .views import KhachHangViewset, LoaiPhongViewset, LoginViewset, DangNhapViewset, UserViewset
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register("customer", KhachHangViewset, basename='customer')
router.register("room_type", LoaiPhongViewset, basename='room_type')
router.register("user", UserViewset, basename='user')
router.register("account", DangNhapViewset, basename='account')
router.register("login", LoginViewset, basename='login')


urlpatterns = [
    path('', include(router.urls))
]
