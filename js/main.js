

function change_red(){
	console.log(red);
	var img=document.getElementById('base_shirt');
	img.src="asset/shop/shirt_red.png";
}
function change_white(){
	console.log(red);
	var img=document.getElementById('base_shirt');
	img.src="asset/shop/shirt_white.png";
}
function change_gray(){
	console.log(red);
	var img=document.getElementById('base_shirt');
	img.src="asset/shop/shirt_gray.png";
}
var brush_type=""
var div =document.getElementById("ts_maker");
var fill =document.getElementById("fill");
var thick_brush=document.getElementById("thick_brush");
var thin_brush=document.getElementById("thin_brush");
var text_box=document.getElementById("text_holder")
var paint="black";
var red="red";
var green="green";
var blue="blue";
var brown="brown";
var yellow="yellow";
var white="white";
function change_paint_red(){
	console.log("red");
	paint=red;
	fill.style.backgroundColor=paint;
	thin_brush.style.backgroundColor=paint;
	thick_brush.style.backgroundColor=paint;
}
function change_paint_blue(){
	console.log("blue");
	paint=blue;
	fill.style.backgroundColor=paint;
	thin_brush.style.backgroundColor=paint;
	thick_brush.style.backgroundColor=paint;
}
function change_paint_green(){
	console.log("green");
	paint=green;
	fill.style.backgroundColor=paint;
	thin_brush.style.backgroundColor=paint;
	thick_brush.style.backgroundColor=paint;
}
function change_paint_brown(){
	console.log("brown");
	paint=brown;
	fill.style.backgroundColor=paint;
	thin_brush.style.backgroundColor=paint;
	thick_brush.style.backgroundColor=paint;
}
function change_paint_yellow(){
	console.log("yellow");
	paint=yellow;
	thick_brush.style.backgroundColor=paint;
	fill.style.backgroundColor=paint;
	thin_brush.style.backgroundColor=paint;
	
}
function change_paint_white(){
	console.log("white");
	paint=white;
	fill.style.backgroundColor=paint;
	thin_brush.style.backgroundColor=paint;
	thick_brush.style.backgroundColor=paint;
	
}
function fill_div(){
	div.style.backgroundColor=paint;	
	text_box.style.backgroundColor=paint;
}
function thick_brush(){
	brush_type="thick"
}
function thin_brush(){
	brush_type="thin"
}
var audio
function play_song1(){
	audio=document.getElementById("audio_song1");
	audio.play();	
}
function play_song2(){
	audio=document.getElementById("audio_song2");
	audio.play();	
}
function play_song3(){
	audio=document.getElementById("audio_song3");
	audio.play();	
}
function pause(){
	audio.pause();
}
function update_text(){
	var user_text=document.getElementById("user_text").value;
	text_box.innerHTML=user_text;
}