$(document).ready(function () {
    // localStorage.removeItem("todoList");//use it to empty the local storage
    var todoList=[];

    // var todiListDone=[];
    
    if(localStorage.getItem("todoList")!=null)
    todoList=JSON.parse(localStorage.getItem("todoList"));
    
    console.log(todoList);
    
    DrawGrid();

    //DrawGridComplete(); 

    // ********************************* Adding new task todo **********************************************
    
    $("#add-button").click(function () {

        let task={};
        task.id=Math.floor(Math.random()*1000 + 1);
        task.point=$("#point").val();
        task.title=$("#title-text").val();
        task.description=$("#description").val();
        task.isDone=false;
        task.createdOn= new Date();
        let formattedDate= task.createdOn.getDate()+"-"+(task.createdOn.getMonth()+1)+"-"+task.createdOn.getFullYear();
        task.createdOn = formattedDate;
        //  check if all field is not empty
        if(task.point=='0' || task.title=="" || task.description==""){
            alert("You Must enter all fileds");
        }else{
            todoList.push(task);
            localStorage.setItem("todoList",JSON.stringify(todoList));    
        }
        
        
       DrawGrid();          

    });
//********************************************************************************************************************

    //if the task is done 
    // $("#isdonebtn").click(function () {

    //     let task={};
        
    //     // todoListDone.push(task);
    //     // localStorage.setItem("todoListDone",JSON.stringify(todoList));
        
        
    //    DrawGridComplete();          

    // });
//*****************************************DRAWING THE GRID**************************************************************
    function DrawGrid()
    {

        var table="<tr><th>Id</th><th>Title</th><th>Point</th><th>Description</th><th>CreatedAt</th><th>isDone</th><th>Delete</th>";
        todoList.slice().reverse().forEach(function(currentItem)
        {
            
             table += "<tr><td  id='taskId'>"+currentItem.id+"</td><td>"+currentItem.title+"</td><td>"+currentItem.point+"</td><td>"+currentItem.description+"</td><td>"+currentItem.createdOn+"</td><td><button class='isDone-button' id='isdonebtn'>&#10003;</td><td><button class='delete-button' id='Delete'>X</button></td></tr>";                     
        });
        $("#not-complete").html(table);
        $('.delete-button').click( function () {

            //***************************************************************//
            // let idDeleted= $(this).closest('tr').find('#Delete').val();   //
            //***************************************************************//

            $(this).closest('tr').remove();

            });
    
    }
// ************************************************************************************************************************
    // function DrawGridComplete()
    // {

    //     var table="<tr><th>Id</th><th>Title</th><th>Point</th><th>Description</th><th>CreatedAt</th><th>isDone</th><th>Delete</th>";
    //     todoList.slice().reverse().forEach(function(currentItem)
    //     {
            
    //          table += "<tr><td  id='taskId'>"+currentItem.id+"</td><td>"+currentItem.title+"</td><td>"+currentItem.point+"</td><td>"+currentItem.description+"</td><td>"+currentItem.createdOn+"</td><td><button class='isDone-button' id='isdonebtn'>&#10003;</td><td><button class='delete-button' id='Delete'>X</button></td></tr>";                     
    //     });
    //     $("#complete").html(table);
    // }
    
    //************************************* DELETE *************************************************************************

    $('.delete-button').click( function () {

        //***************************************************************//
        // let idDeleted= $(this).closest('tr').find('#Delete').val();   //
        //***************************************************************//

        $(this).closest('tr').remove();

        // DeleteRow(idDelete);

        });
    // function DeleteRow(id){
    //     todoList.forEach(function(currentItem)
    //     {
    //         if(currentItem.id === id){
    //             todoList.pop(currentItem);
    //             localStorage.setItem("todoList",JSON.stringify(todoList));
    //             return;
    //         }
    //     })

    // }
//********************************************************************************************************************

//********************************************* ORDER BY PRIORTY *****************************************************

//********************************************************************************************************************
//********************************************* Find *****************************************************************

// $('#find-button').click(function () {
//     for(let i=0;i<todoList.length;i++){
//         let findtext = $('#find-text').text();
//         if(findtext==todoList[i].description || findtext==todoList[i].title)
//             alert('found it in line'+(i+1));
//         else
//             alert("not found");
//             break;
//     }
// });

//********************************************************************************************************************

});


//********************************************************************************************************************
// *******************************************************************************************************************
