// Bài 1
document.getElementById('tien-luong').onclick = function () {
    /* Input: Lương 1 ngày: 100.000 ==> Number
                Số ngày làm do người dùng nhập vào ==> Number        
        Output: Tiền lương của nhân viên => Number
    */
    var tienLuong = 0;
    var soNgayLam = document.getElementById('so-ngay-lam').value;
    tienLuong = soNgayLam * 100000;
    document.getElementById('ket-qua-b1').innerHTML = tienLuong;
}
// Bài 2
document.getElementById('tinh-tbc').onclick = function () {
    /* Input
    Là các số thực mà người dùng nhập vào ==> Number
    Output:
    Trung bình của các số ==> Number
    */
    var tbc = 0;
    var soThuNhat = Number(document.getElementById('so-1').value);
    var soThuHai = Number(document.getElementById('so-2').value);
    var soThuBa = Number(document.getElementById('so-3').value);
    var soThuTu = Number(document.getElementById('so-4').value);
    var soThuNam = Number(document.getElementById('so-5').value);
    tbc = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
    document.getElementById('ket-qua-b2').innerHTML = tbc;
}
// Bài 3
document.getElementById('quy-doi').onclick = function () {
    /* Input
    Tỷ giá cho sẵn: 23.500 
    Số USD ng dùng nhập vào ==> Number;
    Output: 
    Số VND quy đổi ra ==> Number;
    */
    var soQuyDoi = 0;
    var soUSD = document.getElementById('so-USD').value;
    soQuyDoi = soUSD * 23500;
    document.getElementById('ket-qua-b3').innerHTML = Intl.NumberFormat('vn-VN').format(soQuyDoi);
}
// Bài 4
document.getElementById('tinh-dt-cv').onclick = function () {
    /* Input
    Chiều dài và chiều rộng ng dùng nhập vào => Number
    Output:
    Chu vi và diện tích => Number
    */
    var dienTich = 0;
    var chuVi = 0;
    var chieuRong = Number(document.getElementById('chieu-rong').value);
    var chieuDai = Number(document.getElementById('chieu-dai').value);
    dienTich = chieuDai * chieuRong;
    chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById('ket-qua-b4-1').innerHTML = dienTich;
    document.getElementById('ket-qua-b4-2').innerHTML = chuVi;
}
// Bài 5 
document.getElementById('tong-ky-so').onclick = function () {
    /* Input
    số có 2 chữ số mà người dùng nhập vào ==> Number;
    Output:
    Tổng của 2 chữ số đó;
    */
    var tongKySo = 0;
    var soNhapVao = Number(document.getElementById('nhap-so').value);
    var soHangDonVi = Number(soNhapVao%10);
    var soHangChuc = Number(soNhapVao/10-soNhapVao%10/10);
    tongKySo = soHangDonVi + soHangChuc;
    document.getElementById('ket-qua-b5').innerHTML = tongKySo;
}