var canvas = new fabric.Canvas('myCanvas');
//Made by sohan sunkari 2022

 var x= document.getElementById("myAudio");
 //Made by sohan sunkari 2022


function new_image(){
    //Made by sohan sunkari 2022


    fabric.Image.fromURL('BirthdayImage.jpg' , function(Img){
        //Made by sohan sunkari 2022

        block_image_object = Img;
        //Made by sohan sunkari 2022


        block_image_object.scaleToWidth(700);
        //Made by sohan sunkari 2022

        block_image_object.scaleToHeight(510);
        //Made by sohan sunkari 2022

        block_image_object.set({
            //Made by sohan sunkari 2022

            top:0,
            //Made by sohan sunkari 2022

            left:0
            //Made by sohan sunkari 2022

        });
        //Made by sohan sunkari 2022

        canvas.add(block_image_object);
        //Made by sohan sunkari 2022

    });
    //Made by sohan sunkari 2022

}
//Made by sohan sunkari 2022


function playsound(){
    //Made by sohan sunkari 2022

    x.play();
    //Made by sohan sunkari 2022

}
//Made by sohan sunkari 2022


function stopsound(){
    //Made by sohan sunkari 2022

    x.pause();
    //Made by sohan sunkari 2022

}
//Made by sohan sunkari 2022


function resumesound(){
    //Made by sohan sunkari 2022

    x.play();
    //Made by sohan sunkari 2022

}
//Made by sohan sunkari 2022


//Made by sohan sunkari 2022
//Made by sohan sunkari 2022
//Made by sohan sunkari 2022
//Made by sohan sunkari 2022
//Made by sohan sunkari 2022
//Made by sohan sunkari 2022
//Made by sohan sunkari 2022
//Made by sohan sunkari 2022
//Made by sohan sunkari 2022
//Made by sohan sunkari 2022
//Made by sohan sunkari 2022
//Made by sohan sunkari 2022
//Made by sohan sunkari 2022
