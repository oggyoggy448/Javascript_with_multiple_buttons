function btn_alert(){
    alert("button is pressed");
}

function confirm_option_alert(){
    var msg = confirm("Do you want to quit?");
    if (msg == true ){
        alert("okay");
    }
    else{
        alert("No okay!");
    }
}


function change_content(){
    var color_change = document.getElementById("color_change_para");
    color_change.innerHTML = "data has been changed";
}

function change_color(){
    var color_change = document.getElementById("color_change_para");
    if(color_change.style.backgroundColor == "yellow"){
        color_change.style.backgroundColor = "white";
    }
    else{
        color_change.style.backgroundColor = "yellow";
    }
}

function change_canvas(){
    var d_shape = document.getElementById("draw_shape");
    var context = d_shape.getContext("2d");
    context.fillStyle = "yellow";
    context.fillRect(10,10,60,60);
    context.fillRect(80,10,60,60);
    
    context.fillStyle = "white";
    context.font = "30px Arial";
    context.fillText("Colored Box",100,90);

}
function color_change_the_text(){
    var text = document.getElementById("color_change_para02");
    var color_picker = document.getElementById("color_picker")

    var picked_color = color_picker.value;
    text.style.backgroundColor = picked_color;
    
}

function color_change_the_text_for_click(){
    var text = document.getElementById("color_change_para02");
    var color_picker = document.getElementById("color_picker_as_click")

    var picked_color = color_picker.value;
    text.style.backgroundColor = picked_color;
    
}

function draw_box(){
    var canvas = document.getElementById("draw_shape01");
    var range_selector = document.getElementById("range_selector");

    var range_value = range_selector.value;
    var context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = "yellow";
    context.fillRect(10,10,range_value,range_value);
}

