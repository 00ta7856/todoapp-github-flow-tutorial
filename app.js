$(document).ready(function () {
    $("#addTodo").click(function () {
        const inputTodo = $("#input").val().trim();  // 空白を取り除く

        if (inputTodo !== "") {  // 空でない場合のみ追加
            $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");
            $("#input").val("");  // テキストフィールドをクリア
        }
    });
});