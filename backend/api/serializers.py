from rest_framework import serializers
from .models import LoaiPhong, KhachHang


class LoaiPhongSerializers(serializers.ModelSerializer):
    class Meta:
        model = LoaiPhong
        fields = '__all__'


class KhachHangSerializers(serializers.ModelSerializer):
    class Meta:
        model = KhachHang
        fields = '__all__'


# class PhongSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = models.Phong


# class PhieuThuePhongSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = models.PhieuThuePhong


# class UserSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = models.User


# class DangNhapSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = models.DangNhap


# class HoaDonSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = models.HoaDon


# class DichVuSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = models.DichVu


# class ChiTietHoaDonSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = models.ChiTietHoaDon