

<!-- Begin
var interval = 3.0; // delay between rotating images (in seconds)
var random_display = 0; // 0 = no, 1 = yes
interval *= 1000;

var image_index = 0;
image_list = new Array();
image_list[image_index++] = new imageItem("2013_retreat/pictures_2013retreat/all.jpg");
image_list[image_index++] = new imageItem("2013_retreat/pictures_2013retreat/cabin.jpg");
image_list[image_index++] = new imageItem("2013_retreat/pictures_2013retreat/audience.jpg");
image_list[image_index++] = new imageItem("2013_retreat/pictures_2013retreat/MrsWu.jpg");
image_list[image_index++] = new imageItem("2013_retreat/pictures_2013retreat/wu.jpg");
image_list[image_index++] = new imageItem("2013_retreat/pictures_2013retreat/bridge.jpg");
image_list[image_index++] = new imageItem("2013_retreat/pictures_2013retreat/Eckman.jpg");

var number_of_image = image_list.length;
function imageItem(image_location) {
this.image_item = new Image();
this.image_item.src = image_location;
}
function get_ImageItemLocation(imageObj) {
return(imageObj.image_item.src)
}
function generate(x, y) {
var range = y - x + 1;
return Math.floor(Math.random() * range) + x;
}
function getNextImage() {
if (random_display) {
image_index = generate(0, number_of_image-1);
}
else {
image_index = (image_index+1) % number_of_image;
}
var new_image = get_ImageItemLocation(image_list[image_index]);
return(new_image);
}
function rotateImage(place) {
var new_image = getNextImage();
document[place].src = new_image;
var recur_call = "rotateImage('"+place+"')";
setTimeout(recur_call, interval);
}
//  End -->
