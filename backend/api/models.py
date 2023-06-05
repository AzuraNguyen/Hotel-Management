from django.db import models
from django.db.models import CheckConstraint, UniqueConstraint, Q, F
from django.db.models.functions import Length

models.CharField.register_lookup(Length)

# =========================================================

class KhachHang(models.Model):
    VIETNAM = 'VNM'
    HOAKI = 'USA'
    NHATBAN = 'JPN'
    THAILAN = 'THA'
    TRUNGQUOC = 'CHN'
    QUOCTICH_CHOICES = (
        (VIETNAM, 'Việt Nam'),
        (HOAKI, 'Hoa Kì'),
        (NHATBAN, 'Nhật Bản'),
        (THAILAN, 'Thái Lan'),
        (TRUNGQUOC, 'Trung Quốc'),
    )
    
    
    NOIDIA = 'ND'
    NUOCNGOAI = 'NG'
    LOAIKHACH_CHOICES = (
        (NOIDIA, 'Nội địa'),
        (NUOCNGOAI, 'Nước ngoài')
    )
    
    NAM = 'M'
    NU = 'F'
    GIOITINH_CHOICES = (
        (NAM,'Nam'),
        (NU,'Nữ'),
    )

    id_KH = models.AutoField(primary_key=True,null=False)
    hoTen = models.CharField(max_length=50, null=False)
    sdt = models.CharField(max_length=12)
    diaChi = models.CharField(max_length=100)
    email = models.CharField(max_length=30)
    loaiKhach = models.CharField(choices = LOAIKHACH_CHOICES, default=NOIDIA, max_length=2)
    gioiTinh=models.CharField(max_length=1,choices = GIOITINH_CHOICES, default=NAM)
    cccd = models.CharField(max_length=12, null=False)
    quocTich = models.CharField(max_length=20,choices=QUOCTICH_CHOICES,default=VIETNAM)

    def __str__(self):
        return self.hoTen

    class Meta:
        constraints = [
            CheckConstraint(check=Q(hoTen__length__gt=0), name = "KH_hoTen_minlength"),
            CheckConstraint(check=Q(cccd__length__gt=0), name = "KH_cccd_minlength"),
            CheckConstraint(check=Q(quocTich__length__gt=0), name = "KH_quocTich_minlength"),
        ]


# =========================================================


class LoaiPhong(models.Model):
    id_LP=models.CharField(primary_key=True, null=False, max_length=10)
    ten=models.CharField(max_length=30, null = False)
    donGia=models.FloatField()
    slNguoi=models.PositiveIntegerField(default=2)

    def __str__(self):
        return self.ten

    class Meta:
        constraints = [
            CheckConstraint(check = Q(donGia__gt=0),name='LP_check_don_gia'),
            CheckConstraint(check = Q(slNguoi__gt=0),name='LP_check_so_luong_nguoi'),
        ]


# =========================================================


class Phong(models.Model):
    TRONG = 0
    DATHUE = 1
    TRANGTHAI_CHOICES = (
        (TRONG, 'Trống'),
        (DATHUE, 'Đã thuê')
    )
    
    id_Phong = models.CharField(primary_key=True, max_length=5)
    id_LP = models.ForeignKey(LoaiPhong,on_delete=models.PROTECT)
    trangThai = models.IntegerField(choices=TRANGTHAI_CHOICES,default=TRONG, null=False)

    def __str__(self):
        return self.id_Phong
    
    class Meta:
        constraints = [
            CheckConstraint(check = Q(trangThai__range=(0,1)), name = 'PHONG_check_trang_thai')
        ]


# =========================================================


class PhieuThuePhong(models.Model):
    CHUATHANHTOAN = 0
    DATHANHTOAN = 1
    TRANGTHAI_CHOICES = (
        (CHUATHANHTOAN, 'Chưa thanh toán'),
        (DATHANHTOAN, 'Đã thanh toán')
    )
    id_PHP=models.AutoField(primary_key=True,null=False)
    id_KH=models.ForeignKey(KhachHang, on_delete=models.PROTECT)
    id_Phong=models.ForeignKey(Phong, on_delete=models.PROTECT)
    ghiChu=models.CharField(max_length=200)
    thoiGianBD=models.DateTimeField(null=False)
    thoiGianKT=models.DateTimeField()
    slNguoi=models.PositiveIntegerField(default=1)
    trangThai=models.IntegerField(null = False, choices=TRANGTHAI_CHOICES, default=CHUATHANHTOAN)
    
    def __str__(self):
        return self.id_PHP
    
    class Meta:
        constraints = [
            CheckConstraint(check=Q(trangThai__range=(0,1)),
                            name = "PTP_check_trang_thai"),
            CheckConstraint(check = Q(thoiGianKT__gte=F('thoiGianBD')),
                            name = "PTP_check_thoiGian"),
            CheckConstraint(check = Q(slNguoi__gte=1), 
                            name='PTP_check_so_luong_nguoi')
        ]


# =========================================================


class User(models.Model):
    NHANVIEN = 1
    QUANLY = 2
    ADMIN = 3
    CHUCVU_CHOICES = (
        (NHANVIEN, 'Nhân viên'),
        (QUANLY, 'Quản lý'),
        (ADMIN, 'Admin')
    )

    NAM = 'M'
    NU = 'F'
    GIOITINH_CHOICES = (
        (NAM,'Nam'),
        (NU,'Nữ'),
    )

    id_User = models.CharField(primary_key=True, null=False, max_length=10)
    chucVu = models.IntegerField(choices = CHUCVU_CHOICES, default=NHANVIEN, null=False)
    hoTen = models.CharField(max_length=50)
    gioiTinh = models.CharField(choices=GIOITINH_CHOICES, max_length=1)
    email = models.CharField(max_length=30)
    sdt = models.CharField(max_length=12)

    def __str__(self):
        return self.id_user

    class Meta:
        constraints = [
            CheckConstraint(check = Q(hoTen__length__gt=0), name='USER_check_hoTen'),
            CheckConstraint(check = ~Q(gioiTinh__length=0), name='USER_check_gioiTinh'),
        ]


# =========================================================


class DangNhap(models.Model):
    id_DN = models.AutoField(primary_key=True, null=False)
    id_User = models.ForeignKey(User, null=False, on_delete=models.CASCADE)
    tenDN = models.CharField(max_length=30, null=False)
    password = models.CharField(max_length=50, null=False)

    def __str__(self):
        return self.id_DN
    
    class Meta:
        constraints = [
            CheckConstraint(check = Q(tenDN__length__gt=0), name='DN_check_tenDN'),
            CheckConstraint(check = Q(password__length__gt=0), name='DN_check_password'),
        ]


# =========================================================


class HoaDon(models.Model):
    id_HD = models.AutoField(primary_key=True)
    id_PTP = models.ForeignKey(PhieuThuePhong,null=False,on_delete=models.CASCADE)
    donGiaPhong = models.FloatField()
    tienDichVu = models.FloatField(default=0.0)
    thue = models.FloatField(default=0.0)
    id_NV = models.ForeignKey(User, on_delete=models.PROTECT)

    def __str__(self):
        return self.id_HD
    
    class Meta:
        constraints = [
            CheckConstraint(check = Q(donGiaPhong__gte=0), name='HD_check_donGiaPhong'),
            CheckConstraint(check = Q(tienDichVu__gte=0), name='HD_check_tienDichVu')
        ]


# =========================================================


class DichVu(models.Model):
    id_DV = models.AutoField(primary_key=True, null=False)
    ten = models.CharField(max_length=30)
    donGia = models.FloatField()

    def __str__(self):
        return self.ten

    class Meta:
        constraints = [
            CheckConstraint(check = Q(donGia__gte=0), name='DV_check_don_gia')
        ]


# =========================================================


class ChiTietHoaDon(models.Model):
    id_HD = models.ForeignKey(HoaDon, null=False, on_delete=models.CASCADE)
    id_DV = models.ForeignKey(DichVu, null=False, on_delete=models.CASCADE)
    soLuong = models.PositiveIntegerField()
    donGia = models.FloatField()

    def __str__(self):
        return self.id_HD+'_'+self.id_DV

    class Meta:
        constraints = [
            CheckConstraint(check = Q(donGia__gte=0), name='CTHD_check_don_gia'),
            UniqueConstraint(fields=['id_HD', 'id_DV'], name='CTHD_unique_HD_DV'),
        ]


# =========================================================