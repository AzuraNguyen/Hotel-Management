import pytest
from api.models import KhachHang



@pytest.mark.parametrize(
    'hoTen',
    [
        ('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'), # 50
        ('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),# 51
    ]
)
def test_KH_hoTen_length(db, hoTen):
    KhachHang.objects.create(
        hoTen = hoTen,
        sdt = '',
        diaChi = '',
        email = '',
        loaiKhach = 'ND',
        gioiTinh = 'F',
        cccd = '',
        quocTich = '',
    )