from api.views import KhachHangViewset
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register("customers",KhachHangViewset)



