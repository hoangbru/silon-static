var index = 0;
chuyenAnh = function () {
    var imgs = [
        "img/1.jpg",
        "img/2.jpg",
        "img/3.jpg",
    ]
    document.getElementById('anh').src = imgs[index];
    index++;
    if (index == 3) {
        index = 0;
    }
}
setInterval(chuyenAnh, 2000)