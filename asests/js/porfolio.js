window.onload = function(){
//---------------------PORFOLIO----------------------------------
var srcimg= new Array();
var subtitulo=new Array();
var parrafo=new Array();
var titulo=new Array();
var descripcion=new Array();
var txtacum;
var aux;

function imprimirArticulosPorfolio() {
	txtacum="";
	for (var i=0; i<60;i++){
		titulo[i]= 'Lorem ipsum dolor sit amet'+i;
		subtitulo[i]='Cum sociis natoque penatibus'+i;
		descripcion[i]='Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'+i;
		srcimg[i]='./asests/porfolio/'+i+'.jpg';
		parrafo[i]='Lorem ipsum dolor sit amet consectetur adipiscing elit molestie ad mattis, netus praesent facilisi urna sollicitudin hendrerit fames condimentum imperdiet. Massa potenti sodales sollicitudin nostra laoreet ultrices facilisis et turpis aliquet, leo pellentesque ut suspendisse nibh nulla aptent molestie volutpat, tempus augue ac condimentum tincidunt urna taciti primis purus. Eu rhoncus aptent fusce mollis vel vestibulum tellus, ridiculus interdum curabitur pharetra condimentum enim platea porttitor, tempor porta fames dis lectus ornare.Dignissim auctor eu rutrum faucibus proin pellentesque nascetur per ut quam sodales vulputate lobortis nunc elementum, phasellus at mi eros senectus habitasse tincidunt et arcu mauris nullam non suspendisse risus. Sodales laoreet nulla aenean interdum fusce mattis ac rhoncus posuere, et gravida cras montes a leo integer risus lacus, nostra cursus eget cum pulvinar ultrices sagittis tempor. Sodales eget viverra sociis volutpat montes praesent taciti erat, nunc habitasse vulputate mi mollis in non fermentum, lectus cras conubia aliquam rhoncus ultrices faucibus.';
	}
	
	for (i = 0; i < titulo.length; i++) {
		if(aux==0){
			aux=1;
			txtacum=txtacum+'<article id="articulo'+i+'" class="overflow-hidden"><div class="col-sm-4 borde-gy" style="margin: 0px; padding: 0px;"><h2>'+titulo[i]+'</h2><p>'+descripcion[i]+'</p><a href="">Leer m&aacutes</a></div><div class="col-sm-8" style="margin: 0px; padding: 0px;"><img src="'+srcimg[i]+'" class="block" alt="Imagen Trabajo" style="padding:0px"></div></article>';
		}else{
			aux=0;
			txtacum=txtacum+'<article id="articulo'+i+'" class="overflow-hidden"><div class="col-sm-8" style="margin: 0px; padding: 0px;"><img src="'+srcimg[i]+'" class="block" alt="Imagen Trabajo" style="padding:0px"></div><div class="col-sm-4 borde-gy" style="margin: 0px; padding: 0px;"><h2>'+titulo[i]+'</h2><p>'+descripcion[i]+'</p><a href="">Leer m&aacutes</a></div></article>';			
		}
	}
	document.getElementById("trabajos-porfolio").innerHTML= txtacum;
}
imprimirArticulosPorfolio();


//-------------------------Footer-------------------------------
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