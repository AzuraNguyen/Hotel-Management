from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.request import Request
from .serializers import LoaiPhongSerializers, KhachHangSerializers, PhongSerializers, SoDoPhongSerializers
from .models import KhachHang, LoaiPhong, Phong



class SoDoPhongViewset(viewsets.ViewSet):
    serializer_class = SoDoPhongSerializers
    queryset = Phong.objects.none()

    def get_queryset(self):
        queryset = Phong.objects.select_related('id_LP')
        sd_Phong = []

        trangThai = ''
        for phong in queryset:
            for trangThaiOption in phong.TRANGTHAI_CHOICES:
                if trangThaiOption[0] == phong.trangThai:
                    trangThai = trangThaiOption[1]
                    break
            sd_Phong.append({
                'number': phong.id_Phong, 
                'type': phong.id_LP.ten, 
                'status': trangThai,
                'price': phong.id_LP.donGia,
                'pp': phong.id_LP.slNguoi,
                'day_come': '',
                'day_go': '',
                'renter': 0,
            })
        return sd_Phong


    def list(self, request):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



class PhongViewset(viewsets.ModelViewSet):
    serializer_class = PhongSerializers
    queryset = Phong.objects.all()

    def list(self, request, *args, **kwargs):
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



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