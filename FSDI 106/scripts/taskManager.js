function saveTask()
{
    console.log("saving task");

    //get the value
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#color").val();
    const date = $("#date").val();
    const status = $("#selStatus").val();
    const budget = $("#budget").val();
    console.log(title, description, color, date, status, budget);

    //build an object
    let taskSave = new Task (title, description, color, date, status, budget);
    console.log(taskSave);
    
    //save the server
    $.ajax({
        type: "post",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskSave),
        contentType: "application/json",
        success: function(res){
            console.log(res);
        },
        error: function(error){
            console.log(error);
        }
    });
    //display the info in to the page
}

function testRequest()
{
    $.ajax({
        type: "get",//reading the server
        url: "http://fsdiapi.azurewebsites.net/", //the page that we are trying to
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function init()
{
    $("#btnSave").click(saveTask);

}

window.onload = init;