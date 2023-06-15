from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.request import Request
from .serializers import LoaiPhongSerializers, KhachHangSerializers, LoginSerializers, DangNhapSerializers, UserSerializers
from .models import KhachHang, LoaiPhong, DangNhap, User


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
    queryset = LoaiPhong.objects.none()
    serializer_class = LoaiPhongSerializers

    def list(self, request):
        query = request.GET.get('query', None)
        serializer = self.serializer_class(query, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class KhachHangViewset(viewsets.ModelViewSet):
    queryset = KhachHang.objects.none()
    serializer_class = KhachHangSerializers
    # http_method_names = ['get',]

    def list(self, request):
        query = request.GET.get('query', None)
        serializer = self.serializer_class(query, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
