$(function(){
    var students = [
        {
            id: "001",
            ten: "nguyen van A",
            diachi: "hoankiem",
            gioitinh: "Nam"
        },
        {
            id: "002",
            ten: "nguyen van B",
            diachi: "ba dinh",
            gioitinh: "Nữ"
        }
    ];
    function loadStudents(){
        var rows ='';
        $.each(students, function (indexInArray, valueOfElement) { 
             rows += `<tr>
             <th scope="row">${valueOfElement.id}</th>
             <td>${valueOfElement.ten}</td>
             <td>${valueOfElement.diachi}</td>
             <td>${valueOfElement.gioitinh}</td>
           </tr>`;
        });
        $(".lastStudents").html(rows);
    };
    loadStudents();
    $("#btn").click(function(){
        var obj = {
            id: $("#mahs").val(),
            ten: $("#tenhs").val(),
            diachi: $("#diachihs").val(),
            gioitinh: $("input[name='gender']:checked"). val()
        };
        students.push(obj);
        loadStudents();
    });
});