from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.request import Request
from .serializers import LoaiPhongSerializers, KhachHangSerializers, LoginSerializers, DangNhapSerializers, UserSerializers, PhongSerializers
from .models import KhachHang, LoaiPhong, DangNhap, User,Phong





class PhongViewset(viewsets.ModelViewSet):
    serializer_class = PhongSerializers
    queryset = Phong.objects.all()


class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializers


class DangNhapViewset(viewsets.ModelViewSet):
    queryset = DangNhap.objects.all()
    serializer_class = DangNhapSerializers


class LoginViewset(viewsets.ViewSet):
    queryset = DangNhap.objects.none()
    serializer_class = LoginSerializers

    def get_query(self):
        dangNhap = DangNhap.objects.all()
        login = []
        for dn in dangNhap:
            login.append({
                "user": dn.tenDN,
                "password": dn.password
            })
        return login

    def list(self, request):
        queryset = self.get_query()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, validated_data):
        item_data = validated_data.pop('items')


class LoaiPhongViewset(viewsets.ModelViewSet):
    serializer_class = LoaiPhongSerializers
    queryset = LoaiPhong.objects.all()

    def list(self, request, *args, **kwargs):
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class KhachHangViewset(viewsets.ModelViewSet):
    serializer_class = KhachHangSerializers
    queryset = KhachHang.objects.all()

    # def get_queryset(self):
    #     queryset = KhachHang.objects.all()
    #     KH_set = []
    #     for kh in queryset:
    #         KH_set.append({
    #             'cccd': kh.cccd, 
    #             '': phong.id_LP.ten, 
    #             'status': trangThai,
    #             'price': phong.id_LP.donGia,
    #             'pp': phong.id_LP.slNguoi,
    #             'day_come': '',
    #             'day_go': '',
    #             'renter': 0,
    #         })
    #     return sd_Phong

    def list(self, request):
        # queryset = self.get_query()
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
