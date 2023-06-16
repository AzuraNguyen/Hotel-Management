from django.urls import path, include
from .views import KhachHangViewset, LoaiPhongViewset, PhongViewset
from .views import KhachHangViewset, LoaiPhongViewset, LoginViewset, DangNhapViewset, UserViewset
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register("room",PhongViewset,basename='room')
router.register("customer",KhachHangViewset,basename='customer')
router.register("room-type",LoaiPhongViewset,basename='room-type')
# router.register("so-do-phong",SoDoPhongViewset,basename='so-do-phong')
router.register("customer", KhachHangViewset, basename='customer')
router.register("user", UserViewset, basename='user')
router.register("account", DangNhapViewset, basename='account')
router.register("login", LoginViewset, basename='login')


urlpatterns = [
    path('', include(router.urls))
]
