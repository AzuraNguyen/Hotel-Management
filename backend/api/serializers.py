from rest_framework import serializers
from .models import LoaiPhong, KhachHang, Phong, PhieuThuePhong, User, HoaDon, DichVu, ChiTietHoaDon, DangNhap


class LoaiPhongSerializers(serializers.ModelSerializer):
    class Meta:
        model = LoaiPhong
        field = ('id', 'ten')


class KhachHangSerializers(serializers.ModelSerializer):
    class Meta:
        model = KhachHang


class PhongSerializers(serializers.ModelSerializer):
    class Meta:
        model = Phong


class PhieuThuePhongSerializers(serializers.ModelSerializer):
    class Meta:
        model = PhieuThuePhong


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User


class DangNhapSerializers(serializers.ModelSerializer):
    class Meta:
        model = DangNhap


class HoaDonSerializers(serializers.ModelSerializer):
    class Meta:
        model = HoaDon


class DichVuSerializers(serializers.ModelSerializer):
    class Meta:
        model = DichVu


class ChiTietHoaDonSerializers(serializers.ModelSerializer):
    class Meta:
        model = ChiTietHoaDon