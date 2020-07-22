
function createTodo(){
    var txt = $("#txtTodo").val();
    
    var li = '<li>' + txt + '</li>';
    console.log("syntax",li);
    $(".list").append(li);
    $("txtTodo").val('');
    $("#txtTodo").focus();
};


function init() {
    console.log("Page is ready!");
        
    $("#btnAdd").click(createTodo);

    $("#txtTodo").keypress(function(args){
        if(args.key =="Enter"){
            console.log("Enter Pressed");
        };
    });
        




}

window.onload = init;