from rest_framework import serializers
from .models import LoaiPhong, KhachHang, DangNhap, User


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class LoaiPhongSerializers(serializers.ModelSerializer):
    class Meta:
        model = LoaiPhong
        fields = '__all__'


class PhongSerializers(serializers.ModelSerializer):
    # loaiPhong = LoaiPhongSerializers(many=False)
    class Meta:
        model = Phong
        fields = ('id_Phong', 'id_LP', 'trangThai')




# class SoDoPhongSerializers(serializers.ModelSerializer):
#     id_LP = LoaiPhongSerializers(many=False)
#     class Meta:
#         model = Phong
#         fields = ('id_Phong', 'trangThai', 'id_LP')


class SoDoPhongSerializers(serializers.Serializer):
    number = serializers.CharField(max_length=5)
    type = serializers.CharField(max_length=30)
    status = serializers.CharField(max_length=7)
    price = serializers.FloatField()
    pp = serializers.IntegerField()
    day_come = serializers.CharField(max_length=30)
    day_go = serializers.CharField(max_length=30)
    renter = serializers.IntegerField()




class KhachHangSerializers(serializers.ModelSerializer):
    class Meta:
        model = KhachHang
        fields = '__all__'


class LoginSerializers(serializers.Serializer):
    user = serializers.CharField(max_length=30)
    password = serializers.CharField(max_length=50)


class DangNhapSerializers(serializers.ModelSerializer):
    class Meta:
        model = DangNhap
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
