$(function(){
    /* Ví dụ về đổi hình */
    $("#srcImages").change(function (e) { 
        var source = $(this).val();
        $(".showImages").attr("src", source);
    });
    /* Ví dụ về ẩn hiện mật khẩu */
    $("#ShowPass").click(function (e) { 
        if($(this).text() == "Hiện"){
            $(this).text("Ẩn");
        }
        else{
            $(this).text("Hiện");
        }
    });
})
/* Ví dụ về validate */
function checkLogin(){ 
    var email = $("#Email").val();
    var matkhau = $("#MatKhau").val();
    if(email == ""){
        $(".CheckEmpty").text("Vui lòng nhập Email");
        $(".ThanhCong").hide();
        $(".ThatBai").hide();
    }else if(matkhau == ""){
        $(".CheckEmpty").text("Vui lòng nhập Mật khẩu");
        $(".ThanhCong").hide();
        $(".ThatBai").hide();
    }
    else if(email == "dattqh@vnvc.vn" && matkhau == "123"){
        $(".ThanhCong").css("display","inline");
        $(".CheckEmpty").text("");
        $(".ThatBai").hide();
    }
    else{
        $(".ThanhCong").hide();
        $(".CheckEmpty").text("");
        $(".ThatBai").css("display","inline");
    }
};