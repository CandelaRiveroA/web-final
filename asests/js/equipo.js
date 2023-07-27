window.onload = function(){
//-------------------------EQUIPO-------------------------------
var txtacum;
txtacum="";

//-----------------------Equipo-team---------------------------

var srcimg= new Array();
var subtitulo=new Array();
var parrafo=new Array();
var titulo=new Array();

function imprimirArticulosPorfolio() {
	txtacum="<h1>Equipo</h1>";
	for (var i=0; i<8;i++){
		titulo[i]= 'Lorem ipsum dolor sit amet'+i;
		subtitulo[i]='Cum sociis natoque penatibus'+i;
		srcimg[i]='./asests/equipo/'+i+'.jpg';
		parrafo[i]='Gravida felis euismod at tortor volutpat orci cras auctor feugiat ultricies, facilisis habitant morbi mi eros nisi vestibulum turpis fermentum potenti, a pulvinar torquent cursus vehicula consequat nulla sociosqu ullamcorper. Cum lacus magna turpis dictumst malesuada aliquam, ante egestas urna convallis eget quis platea, sagittis pretium lectus justo posuere. Nisi dapibus nulla etiam praesent sed tincidunt et in neque dictum, mus massa id sociis maecenas non pellentesque enim cras eget, egestas dui consequat ac vulputate ullamcorper tristique justo nisl.Rutrum quam vel posuere inceptos dignissim cras et viverra euismod fermentum, fringilla taciti facilisis consequat mollis id facilisi ullamcorper sem sollicitudin, suspendisse duis erat curae blandit nascetur nec primis pretium. Massa luctus nibh inceptos class dapibus ornare integer eros, in mi gravida nisi montes litora fusce nostra, accumsan a tortor orci fames parturient magnis.';
	}
	
	for (i = 0; i < titulo.length; i++) {
		txtacum=txtacum+'<article id="articulo'+i+'" class="col-sm-6"><img src="'+srcimg[i]+'" class="img-cover" alt="Imagen Trabajo"><h2>'+titulo[i]+'</h2><h3>'+subtitulo[i]+'</h3><p class="pequeno">'+parrafo[i]+'</p></article>';
	}
	document.getElementById("equipo-team").innerHTML= txtacum;
}
imprimirArticulosPorfolio();


//----------------------Iconos redes----------------------------
var iconos4=['<i class="fab fa-twitter rounded-circle"></i>','<i class="fab fa-facebook-f rounded-circle"></i>','<i class="fab fa-vimeo-v rounded-circle"></i>'];


function iconoRedes(){
	txtacum="";
	var aux=0;
	for (var i = 0; i < 1; i++) {
		txtacum=txtacum+'<ul style="display: inherit;">';
		for(var k = 0;k<iconos4.length; k++){
			txtacum=txtacum+'<li>'+iconos4[aux]+'</li>';
			aux++;
		}
		txtacum=txtacum+'</ul>';
	}
	document.getElementById('redes-logos').innerHTML=txtacum;
}
iconoRedes();

//-------------------------Footer-------------------------------
var titulo=['Hire','Community','Learn','About'];
var descripcion=['Documentation','Feedback','Plugins','Support','Themes'];
txtacum='<div class="col-sm-3"><h1><img src="./asests/home/logo.png" class="todo"><h1><form method="post" name="form_pie" id="form-footer" class="form-inline"><h3>Suscribite</h3><input type="text" name="Email" id="email" placeholder="sumail@ejemplo.com" class="input-group form-control" required><input type="submit" class="btn btn-danger" value="Enviar"></form></div></div>';
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