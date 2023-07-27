window.onload = function(){
//-------------------------HEADER------------------------------------------	
var txtacum= ""; //acumulador para imprimir
var direccion=['','porfolio.html','cv.html','equipo.html','index.html'];
var titulo=['<i class="fas fa-search busca"></i>','Porfolio','CV','Equipo','Home'];

function menu(){
	txtacum="<ul>";
	for(var i =0; i<titulo.length;i++){
		txtacum=txtacum+'<li class="flota"><a href="'+direccion[i]+'">'+titulo[i]+'</a></li>';
	}
	txtacum=txtacum+'</ul>'
	document.getElementById("menu-header").innerHTML= txtacum;
}
menu();

//----------------------Zona que-hacemos---------------------------------

titulo=['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet'];
var descripcion=['Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.','Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.','Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. '];

function imprimirArticulos() {
	txtacum="";
	for (i = 0; i < titulo.length; i++) {
		txtacum=txtacum+'<article id="articulo'+i+'" class="col-sm-3 porfolio" style="padding:0px;"><img src="./asests/porfolio/'+i+'.jpg" class="block"><div class="borde-gy" style="padding:20px"><h2 class="sinpadding-margin">'+titulo[i]+'</h2><p class="pequeno">'+descripcion[i]+'</p><a href="porfolio.html">Leer m&aacutes</a></div></article>';
	}
	document.getElementById("que-hacemos").innerHTML= txtacum;
}
imprimirArticulos();

//-----------------------Zona Trabajos----------------------------------
//Galeria Imagenes
var gimagen=['0','1','2','3','4','5','6','7','8','9'];

function galeriaImg (){
	var acumimg; acumimg="";
	for(i=0;i<8;i++){
		acumimg=acumimg+'<div class="col-sm-3" style="margin:0px;padding:0px;"><img src="./asests/home/'+gimagen[i]+'.jpg" alt="Imagen trabajos" class="todo"></div>';
	}
	document.getElementById("galeriaImagen").innerHTML= acumimg;
}
galeriaImg();

//Lista Iconos
var iconos1= ['<i class="fas fa-globe-americas"></i>','<i class="fas fa-cogs"></i>','<i class="far fa-file-alt"></i>'];
var iconos2= ['<i class="fas fa-award"></i>','<i class="fas fa-book-open"></i>','<i class="fas fa-briefcase"></i>','<i class="fas fa-chart-bar"></i>','<i class="fas fa-clipboard-list"></i>','<i class="far fa-hourglass"></i>','<i class="fas fa-globe"></i>','<i class="fas fa-bullhorn"></i>','<i class="fas fa-percent"></i>'];

function listaIconos(veces,ubicacion,titulosection,arrayiconos,clase){
	txtacum= titulosection; //acumulador para imprimir
	var numicono=0;
	for (i = 0; i < veces; i++) {
		txtacum=txtacum+'<ul class="'+clase+'">';
		for(var k = 0;k<3; k++){
			txtacum=txtacum+'<li><div class="grilla">'+arrayiconos[numicono]+'<div><h2 style="margin:0px">'+titulo[k]+'</h2><p>'+descripcion[k]+'</p></div></div></li>';
			numicono++;
		}
		txtacum=txtacum+'</ul>';
	}
	document.getElementById(''+ubicacion+'').innerHTML=txtacum;
}
listaIconos(1,"nosotros",'<h1 style="text-align: inherit;">Acerca de Nosotros</h1>',iconos1,'');
listaIconos(3,"grilla-iconos",'',iconos2,'col-sm-4');

//-----------------------Zona Logos-------------------------------------

var temporizador= setInterval(mostrarDerecha,2000);//mueve los logos
var numlogos=9; //numero de logos
var imgscr = new Array ();

function sliderLogos(){
	var acumimg; acumimg="";
	for(i=0;i<numlogos;i++){
		imgscr[i]='./asests/home/l'+i+'.png';
	}
	for(i=0;i<5;i++){
		acumimg=acumimg+'<div class="col-sm-2"><img id="marca'+i+'" class="gris" src="'+imgscr[i]+'" alt="Imagen dinamica"></div>';
	}
	document.getElementById("calesita").innerHTML= acumimg;
} 
sliderLogos();

var cont1, cont2, cont3, cont4, cont5;
	cont1=0;
	cont2=1;
	cont3=2;
	cont4=3;
	cont5=4;

function mostrarDerecha(){
	cont1++;
	cont2++;
	cont3++;
	cont4++;
	cont5++;

	if(cont1==9){
		cont1=0;
	}
	if (cont2==9) {
		cont2=0;
	}
	if(cont3==9){
		cont3=0;
	}
	if(cont4==9){
		cont4=0;
	}
	if(cont5==9){
		cont5=0;
	}

	document.getElementById('marca0').setAttribute('src',imgscr[cont1]);
	document.getElementById('marca1').setAttribute('src',imgscr[cont2]);
	document.getElementById('marca2').setAttribute('src',imgscr[cont3]);
	document.getElementById('marca3').setAttribute('src',imgscr[cont4]);
	document.getElementById('marca4').setAttribute('src',imgscr[cont5]);
}

//---------------------FOOTER------------------------------------

var titulo=['Hire','Community','Learn','About'];
var descripcion=['Documentation','Feedback','Plugins','Support','Themes'];
txtacum='<div class="col-sm-3"><h1><img src="./asests/home/logo.png" class="todo"></h1><form method="post" name="form_pie" id="form-footer" class="form-inline"><h3>Suscribite</h3><input type="text" name="Email" id="email" placeholder="sumail@ejemplo.com" class="input-group form-control" required><input type="submit" class="btn btn-danger" value="Enviar"></form></div>';
var iconos3=['<i class="fab fa-facebook"></i>','<i class="fab fa-twitter-square"></i>','<i class="fab fa-google-plus-square"></i>','<i class="fab fa-pinterest-square"></i>','<i class="fab fa-instagram"></i>'];


function listaFooter(){
	var g=titulo.length-1;
	for ( i = 0; i < titulo.length; i++) {
		txtacum=txtacum+'<div class="col-sm-2 borde-gy" style="float:right; border-left:0px ; border-right:0px ;""><ul><h2>'+titulo[g]+'</h2>';
		g--;
		for(var k = 0;k<descripcion.length; k++){
			txtacum=txtacum+'<li><a href="">'+descripcion[k]+'</a></li>';
		}
		txtacum=txtacum+'</ul></div>';
	}
	txtacum=txtacum+'<div id="redes" class="overflow-hidden">';
	document.getElementById('info').innerHTML=txtacum;
}
listaFooter();

//Redes sociales
function listaRedes(){
	txtacum="";
	var numicono=0;
	for (var i = 0; i < 1; i++) {
		txtacum=txtacum+'<ul class="">';
		for(var k = 0;k<iconos3.length; k++){
			txtacum=txtacum+'<li><div class="flota">'+iconos3[numicono]+'</div></li>';
			numicono++;
		}
		txtacum=txtacum+'</ul>';
	}
	document.getElementById('redes').innerHTML=txtacum;
}
listaRedes();


}//corchete window

