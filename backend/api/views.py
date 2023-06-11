from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.request import Request
from .serializers import LoaiPhongSerializers, KhachHangSerializers
from .models import KhachHang, LoaiPhong


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
        query = request.GET.get('query',None)
        serializer = self.serializer_class(query, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)