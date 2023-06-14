// Replace the browser's title with an image
var titleImage = new Image();
titleImage.src = "title_image.png"; // Path to your title image

titleImage.onload = function() {
  var canvas = document.createElement("canvas");
  canvas.width = titleImage.width;
  canvas.height = titleImage.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(titleImage, 0, 0);
  
  var link = document.querySelector("link[rel~='icon']");
  link.href = canvas.toDataURL();
}
$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})