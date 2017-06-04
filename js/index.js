// JavaScript Document
$(document).ready(function(){
	$('.carousel').carousel({
		interval: 2000
		});
	draw1();
	draw2();
	draw3();
	draw4();
	draw5();
	draw6();
});
function draw1(){
	var dom=document.getElementById("pic1");
	var text=dom.getContext("2d");
	text.beginPath();
	text.moveTo(100,160);
	text.lineTo(100,100);
	text.strokeStyle="#B2B3B3";
	text.stroke();
	text.beginPath();
	text.strokeStyle="#B2B3B3";
	text.rect(46,60,108,40);
	text.stroke();
	text.beginPath();
	text.font="20px Georgia";
	text.textAlign="center";
	text.fillStyle="#504E4E";
	text.fillText("创新实验室",100,86);
}
function draw2(){
	var dom=document.getElementById("pic2");
	var text=dom.getContext("2d");
	text.beginPath();
	text.moveTo(100,0);
	text.lineTo(100,60);
	text.strokeStyle="#B2B3B3";
	text.stroke();
	text.beginPath();
	text.strokeStyle="#B2B3B3";
	text.rect(46,60,108,40);
	text.stroke();
	text.beginPath();
	text.font="20px Georgia";
	text.textAlign="center";
	text.fillStyle="#504E4E";
	text.fillText("健康辅导室",100,86);
}
function draw3(){
	var dom=document.getElementById("pic3");
	var text=dom.getContext("2d");
	text.beginPath();
	text.moveTo(100,160);
	text.lineTo(100,100);
	text.strokeStyle="#B2B3B3";
	text.stroke();
	text.beginPath();
	text.strokeStyle="#B2B3B3";
	text.rect(46,60,108,40);
	text.stroke();
	text.beginPath();
	text.font="20px Georgia";
	text.textAlign="center";
	text.fillStyle="#504E4E";
	text.fillText("创业风暴室",100,86);
}
function draw4(){
	var dom=document.getElementById("pic4");
	var text=dom.getContext("2d");
	text.beginPath();
	text.moveTo(100,0);
	text.lineTo(100,60);
	text.strokeStyle="#B2B3B3";
	text.stroke();
	text.beginPath();
	text.strokeStyle="#B2B3B3";
	text.rect(46,60,108,40);
	text.stroke();
	text.beginPath();
	text.font="20px Georgia";
	text.textAlign="center";
	text.fillStyle="#504E4E";
	text.fillText("公共机房",100,86);
}
function draw5(){
	var dom=document.getElementById("pic5");
	var text=dom.getContext("2d");
	text.beginPath();
	text.moveTo(0,80);
	text.lineTo(46,80);
	text.strokeStyle="#B2B3B3";
	text.stroke();
	text.beginPath();
	text.strokeStyle="#B2B3B3";
	text.rect(46,60,108,40);
	text.stroke();
	text.beginPath();
	text.font="20px Georgia";
	text.textAlign="center";
	text.fillStyle="#504E4E";
	text.fillText("专业机房",100,86);
}
function draw6(){
	var dom=document.getElementById("pic6");
	var text=dom.getContext("2d");
	text.beginPath();
	text.moveTo(100,0);
	text.lineTo(100,60);
	text.strokeStyle="#B2B3B3";
	text.stroke();
	text.beginPath();
	text.strokeStyle="#B2B3B3";
	text.rect(46,60,108,40);
	text.stroke();
	text.beginPath();
	text.font="20px Georgia";
	text.textAlign="center";
	text.fillStyle="#504E4E";
	text.fillText("实习基地",100,86);
}