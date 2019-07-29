function btn_alert(){
    // alert box
    alert("button is pressed");
}

function confirm_option_alert(){

    // confirmation msg from the user
    var msg = confirm("Do you want to quit?");
    if (msg == true ){
        alert("okay");
    }
    else{
        alert("No okay!");
    }
}


function change_content(){
    // get the elem which has id color*
    var color_change = document.getElementById("color_change_para");
    // changing the content of element
    color_change.innerHTML = "data has been changed";
}

function change_color(){
    // getting the element which has id color*
    var color_change = document.getElementById("color_change_para");
    // checking the element either it has backgroundcolor yellow or now
    if(color_change.style.backgroundColor == "yellow"){
        // changing the color of background
        color_change.style.backgroundColor = "white";
    }
    else{
        // changing the backgroundcolor of 
        color_change.style.backgroundColor = "yellow";
    }
}

function change_canvas(){
    // getting the element whose id is draw_shape
    var d_shape = document.getElementById("draw_shape");

    // drawing the 2D shapes on web pages using getContext('2d');
    var context = d_shape.getContext("2d");
    
    // giving color to element
    context.fillStyle = "yellow";
    
    // drawing a rectangle on screen. first two parameters are coordinates and 3rd paramete is widht and 4th one 
    // is height

    context.fillRect(10,10,60,60);
    context.fillRect(80,10,60,60);
    
    context.fillStyle = "white";
    // changing the font size and font name
    context.font = "30px Arial";

    // putting some text inside the svg element
    context.fillText("Colored Box",100,90);

}

function color_change_the_text(){
    var text = document.getElementById("color_change_para02");
    var color_picker = document.getElementById("color_picker")

    // value property returns the value of selected element. usually used with form element
    var picked_color = color_picker.value;
    text.style.backgroundColor = picked_color;
    
}

function color_change_the_text_for_click(){
    // getting the element
    var text = document.getElementById("color_change_para02");
    // getting the element
    var color_picker = document.getElementById("color_picker_as_click")

    // getting the value of selected elem
    var picked_color = color_picker.value;
    // changing the backgroundcolor
    text.style.backgroundColor = picked_color;
    
}

function draw_box(){
    var canvas = document.getElementById("draw_shape01");
    var range_selector = document.getElementById("range_selector");

    var range_value = range_selector.value;
    
    // making 2D graphics using getContext method    
    var context = canvas.getContext("2d");

    // it removes  rectangle shapes from the specific location 
    context.clearRect(0,0,canvas.width,canvas.height);
    // changing the color
    context.fillStyle = "yellow";
    // putting a rectablge at specfic location with width and height 
    context.fillRect(10,10,range_value,range_value);
}

