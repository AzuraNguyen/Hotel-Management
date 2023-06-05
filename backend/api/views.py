from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.request import Request
from .serializers import KhachHangSerializers
from .models import KhachHang



class KhachHangViewset(viewsets.ModelViewSet):
    serializer_class = KhachHangSerializers
    queryset=KhachHang.objects.all()

    def list(self,request:Request):
        data = [
            {'id_KH':1,
             'hoTen':'Tuấn',
             'sdt':'0961813509',
             'diaChi':'',
             'email':'',
             'loaiKhach':'ND',
             'gioiTinh':'M',
             'cccd':'075202010724',
             'quocTich':'VNM'},
        ]
        serializer=self.serializer_class(data,many=True)
        return Response(serializer.data)
