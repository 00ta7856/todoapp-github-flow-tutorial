$(document).ready(function () {
    $("#addTodo").click(function () {
        const inputTodo = $("#input").val().trim();  // 空白を取り除く

        if (inputTodo !== "") {  // 空でない場合のみ追加
            $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");
            $("#input").val("");  // テキストフィールドをクリア
        }
    });

    $(document).on("change", "input[type=checkbox]", function (){
        if ($(this).is(":checked")) {
            $(this).parent().css("text-decoration", "line-through");
        } else {
            $(this).parent().css("text-decoration", "none");
        }
    });
});