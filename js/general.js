//Global Variables
var ov_siteurl="http://127.0.0.1/navaluenga_new";

var parallax = -0.75;
var max_images=2;

//Get the screen and viewport size
var viewport_width=$(window).outerWidth();
var viewport_height=$(window).outerHeight();
var screen_width=screen.width;
var screen_height=screen.height; 

$(window).resize(function() {	
    $('.ov_contenedor_01').css("min-height",($(window).outerHeight())+"px");
    $(".ov_section_01").css("height",($(window).outerHeight()/3*2)+"px");
    ov_change_header();	
});

$(window).scroll(function() {	
		
	var s = $(window).scrollTop();
	$("#ov_images_inicio").css({"background-position":"center "+(Math.round(s/parallax))+"px"});	
	
	ov_change_header();
	
	if ($(this).scrollTop() > 250) {
		$('.ov_up').fadeIn();
	} else {
		$('.ov_up').fadeOut();
	}
});

$(document).ready(function() {
	
	$(".ov_section_01").css("height",viewport_height/3*2+"px");
	$(".ov_circle_01").fadeIn(1000);
	ov_change_header();
	
	//El navegador soporta @media
	/*if(typeof window.matchMedia != "undefined" || typeof window.msMatchMedia != "undefined")
	{
		document.write('<link href="../css/estilo_01.css" rel="stylesheet" type="text/css">');       
	}
	else
	{		
		if(viewport_width<=480)
		{
			document.write('<link href="../css/estilo_02.css" rel="stylesheet" type="text/css">	');      
		}
		if(viewport_width<=980 && viewport_width>480)
		{
			document.write('<link href="../css/estilo_03.css" rel="stylesheet" type="text/css">	');      
		}
		if(viewport_width>980)
		{
			document.write('<link href="../css/estilo_04.css" rel="stylesheet" type="text/css">	');      
		}
	}*/
});

function onBodyLoad(page, lang)
{	
    document.addEventListener("deviceready", onDeviceReady, false);  
    
    $('.ov_up').hide();  

    $("#ov_volver_01").click(function(e){
		onBackKeyDown();						
	});
	$("#ov_menu_01").click(function(e){
		onMenuKeyDown();		
	});	 

    $('.ov_contenedor_01').css("min-height",(viewport_height)+"px");
}

function onDeviceReady()
{
	document.addEventListener("backbutton", onBackKeyDown, false);
	document.addEventListener("menubutton", onMenuKeyDown, false);
}    
function onBackKeyDown()
{
	window.history.back();
}
function onMenuKeyDown()
{
	window.location.href='menu.html';
}

function load_texts(page, lang)
{	
	ov_load_text("ftitulo_01", "footer/titulo_01.txt", lang);
	ov_load_text("ftitulo_02", "footer/titulo_02.txt", lang);
	ov_load_text("ftitulo_03", "footer/titulo_03.txt", lang);
	ov_load_text("ftitulo_04", "footer/titulo_04.txt", lang);
	ov_load_text("ftitulo_05", "footer/titulo_05.txt", lang);
	
	ov_load_text("fenlaces_01", "footer/enlaces_01.txt", lang);
	ov_load_text("fenlaces_02", "footer/enlaces_02.txt", lang);
	ov_load_text("fenlaces_03", "footer/enlaces_03.txt", lang);
	ov_load_text("fenlaces_04", "footer/enlaces_04.txt", lang);
	ov_load_text("fenlaces_05", "footer/enlaces_05.txt", lang);
	
	ov_load_text("ov_design", "footer/ovnyline.txt", lang);
	
	
    switch(page)
    {			 
    	case "index": 	var aleatorio=Math.floor((Math.random()*max_images));
    					$('#ov_images_inicio').css("background-image","url(../resources/images/index/"+aleatorio+".jpg)");
					  	$('#ov_footer_inicio').css("background-image","url(../resources/images/index/"+aleatorio+".jpg)");
					  	
					  	ov_load_text("mi_menu", "index/menu.txt", lang);
					  	
					  	ov_load_text("ititulo_01", "index/titulo_01.txt", lang);
						ov_load_text("ititulo_02", "index/titulo_02.txt", lang);
						ov_load_text("ititulo_03", "index/titulo_03.txt", lang);
						ov_load_text("ititulo_04", "index/titulo_04.txt", lang);
						
						ov_load_text("isubtitulo_01", "index/subtitulo_01.txt", lang);
						ov_load_text("isubtitulo_02", "index/subtitulo_02.txt", lang);
						ov_load_text("isubtitulo_03", "index/subtitulo_03.txt", lang);
						ov_load_text("isubtitulo_04", "index/subtitulo_04.txt", lang);
						
						ov_load_text("itexto_011", "index/texto_011.txt", lang);
						ov_load_text("itexto_012", "index/texto_012.txt", lang);
						ov_load_text("itexto_02", "index/texto_02.txt", lang);
						ov_load_text("itexto_03", "index/texto_03.txt", lang);
						ov_load_text("itexto_04", "index/texto_04.txt", lang);
						ov_load_text("itexto_05", "index/texto_05.txt", lang);
						
						ov_load_text("ititulo_encinilla", "index/titulo_encinilla.txt", lang);
						ov_load_text("itexto_encinilla", "index/texto_encinilla.txt", lang);
						ov_load_text("itexto_mas_info_0", "index/texto_mas_info.txt", lang);
						
						ov_load_text("ititulo_fortaleza", "index/titulo_fortaleza.txt", lang);
						ov_load_text("itexto_fortaleza", "index/texto_fortaleza.txt", lang);
						ov_load_text("itexto_mas_info_1", "index/texto_mas_info.txt", lang);
						
						ov_load_text("ititulo_cucu", "index/titulo_cucu.txt", lang);
						ov_load_text("itexto_cucu", "index/texto_cucu.txt", lang);
						ov_load_text("itexto_mas_info_2", "index/texto_mas_info.txt", lang);
						
						ov_load_text("ititulo_rioalberche", "index/titulo_rioalberche.txt", lang);
						ov_load_text("itexto_rioalberche", "index/texto_rioalberche.txt", lang);
						ov_load_text("itexto_mas_info_3", "index/texto_mas_info.txt", lang);
						
						ov_load_text("ititulo_cortijo", "index/titulo_cortijo.txt", lang);
						ov_load_text("itexto_cortijo", "index/texto_cortijo.txt", lang);
						ov_load_text("itexto_mas_info_4", "index/texto_mas_info.txt", lang);
	
    					break;
    					
    	case "contacto": ov_load_text("mi_menu", "menu.txt", lang);
    	
    					 ov_load_text("ctitulo_01", "contacto/titulo_01.txt", lang);
						 ov_load_text("ctexto_01", "contacto/texto_01.txt", lang);
						 ov_load_text("cform_name", "contacto/form_name.txt", lang);
						 ov_load_text("cform_email", "contacto/form_email.txt", lang);
						 ov_load_text("cform_tlf", "contacto/form_tlf.txt", lang);
						 ov_load_text("cform_comments", "contacto/form_comments.txt", lang);
    	
    					 $('#ov_images_inicio').css("background-image","url(../resources/images/general/0.jpg)");
						 $('#ov_footer_inicio').css("background-image","url(../resources/images/general/0.jpg)");
						 
						 break;
						 
		case "legal": 	 ov_load_text("mi_menu", "menu.txt", lang);
		
						 ov_load_text("ltitulo_01", "legal/titulo_01.txt", lang);
					 	 ov_load_text("ltexto_01", "legal/texto_01.txt", lang);
    	
    					 $('#ov_images_inicio').css("background-image","url(../resources/images/general/0.jpg)");
						 $('#ov_footer_inicio').css("background-image","url(../resources/images/general/0.jpg)");
						 
						 break;
						 
		case "conoce": 	 ov_load_text("mi_menu", "conoce/menu.txt", lang);
		
						 ov_load_text("cntitulo_01", "conoce/titulo_01.txt", lang);
					 	 ov_load_text("cntexto_01", "conoce/texto_01.txt", lang);
    	
    					 $('#ov_images_inicio').css("background-image","url(../resources/images/general/0.jpg)");
						 $('#ov_footer_inicio').css("background-image","url(../resources/images/general/0.jpg)");
						 
						 break;
						 
		case "ocio": 	 ov_load_text("mi_menu", "ocio/menu.txt", lang);
		
						 ov_load_text("cntitulo_01", "ocio/titulo_01.txt", lang);
					 	 ov_load_text("cntexto_01", "ocio/texto_01.txt", lang);
    	
    					 $('#ov_images_inicio').css("background-image","url(../resources/images/general/0.jpg)");
						 $('#ov_footer_inicio').css("background-image","url(../resources/images/general/0.jpg)");
						 
						 break;
			
		case "cucu":	 ov_load_text("mi_menu", "casas/menu.txt", lang);
		
						 ov_load_text("htitulo_01", "casas/cucu/titulo_01.txt", lang);
						 ov_load_text("htitulo_02", "casas/titulo_02.txt", lang);
						 ov_load_text("htitulo_03", "casas/titulo_03.txt", lang);
						 ov_load_text("htitulo_04", "casas/titulo_04.txt", lang);
						   
					 	 ov_load_text("htexto_01", "casas/cucu/texto_01.txt", lang);
					 	 ov_load_text("htexto_02", "casas/cucu/texto_02.txt", lang);
					 	 ov_load_text("htexto_03", "casas/cucu/texto_03.txt", lang);
					 	 
					 	 ov_load_text("hform_name", "casas/form_name.txt", lang);
					 	 ov_load_text("hform_email", "casas/form_email.txt", lang);
					 	 ov_load_text("hform_tlf", "casas/form_tlf.txt", lang);
					 	 ov_load_text("hform_d_start", "casas/form_d_start.txt", lang);
					 	 ov_load_text("hform_d_end", "casas/form_d_end.txt", lang);
					 	 ov_load_text("hform_adults", "casas/form_adults.txt", lang);
					 	 ov_load_text("hform_kids", "casas/form_kids.txt", lang);
					 	 ov_load_text("hform_comments", "casas/form_comments.txt", lang);
					 	 
						 break;
						 		 
		case "encinilla":ov_load_text("mi_menu", "casas/menu.txt", lang);
		
						 ov_load_text("htitulo_01", "casas/encinilla/titulo_01.txt", lang);
						 ov_load_text("htitulo_02", "casas/titulo_02.txt", lang);
						 ov_load_text("htitulo_03", "casas/titulo_03.txt", lang);
						 ov_load_text("htitulo_04", "casas/titulo_04.txt", lang);
						   
					 	 ov_load_text("htexto_01", "casas/encinilla/texto_01.txt", lang);
					 	 ov_load_text("htexto_02", "casas/encinilla/texto_02.txt", lang);
					 	 ov_load_text("htexto_03", "casas/encinilla/texto_03.txt", lang);
					 	 
					 	 ov_load_text("hform_name", "casas/form_name.txt", lang);
					 	 ov_load_text("hform_email", "casas/form_email.txt", lang);
					 	 ov_load_text("hform_tlf", "casas/form_tlf.txt", lang);
					 	 ov_load_text("hform_d_start", "casas/form_d_start.txt", lang);
					 	 ov_load_text("hform_d_end", "casas/form_d_end.txt", lang);
					 	 ov_load_text("hform_adults", "casas/form_adults.txt", lang);
					 	 ov_load_text("hform_kids", "casas/form_kids.txt", lang);
					 	 ov_load_text("hform_comments", "casas/form_comments.txt", lang);
					 	 
					 	 break;
					 	 
		case "fortaleza":ov_load_text("mi_menu", "casas/menu.txt", lang);
		
						 ov_load_text("htitulo_01", "casas/fortaleza/titulo_01.txt", lang);
						 ov_load_text("htitulo_02", "casas/titulo_02.txt", lang);
						 ov_load_text("htitulo_03", "casas/titulo_03.txt", lang);
						 ov_load_text("htitulo_04", "casas/titulo_04.txt", lang);
						   
					 	 ov_load_text("htexto_01", "casas/fortaleza/texto_01.txt", lang);
					 	 ov_load_text("htexto_02", "casas/fortaleza/texto_02.txt", lang);
					 	 ov_load_text("htexto_03", "casas/fortaleza/texto_03.txt", lang);
					 	 
					 	 ov_load_text("hform_name", "casas/form_name.txt", lang);
					 	 ov_load_text("hform_email", "casas/form_email.txt", lang);
					 	 ov_load_text("hform_tlf", "casas/form_tlf.txt", lang);
					 	 ov_load_text("hform_d_start", "casas/form_d_start.txt", lang);
					 	 ov_load_text("hform_d_end", "casas/form_d_end.txt", lang);
					 	 ov_load_text("hform_adults", "casas/form_adults.txt", lang);
					 	 ov_load_text("hform_kids", "casas/form_kids.txt", lang);
					 	 ov_load_text("hform_comments", "casas/form_comments.txt", lang);
					 	 
					 	 break;
					 	 
		case "rioalberche":ov_load_text("mi_menu", "casas/menu.txt", lang);
		
						 ov_load_text("htitulo_01", "casas/rioalberche/titulo_01.txt", lang);
						 ov_load_text("htitulo_02", "casas/titulo_02.txt", lang);
						 ov_load_text("htitulo_03", "casas/titulo_03.txt", lang);
						 ov_load_text("htitulo_04", "casas/titulo_04.txt", lang);
						   
					 	 ov_load_text("htexto_01", "casas/rioalberche/texto_01.txt", lang);
					 	 ov_load_text("htexto_02", "casas/rioalberche/texto_02.txt", lang);
					 	 ov_load_text("htexto_03", "casas/rioalberche/texto_03.txt", lang);
					 	 
					 	 ov_load_text("hform_name", "casas/form_name.txt", lang);
					 	 ov_load_text("hform_email", "casas/form_email.txt", lang);
					 	 ov_load_text("hform_tlf", "casas/form_tlf.txt", lang);
					 	 ov_load_text("hform_d_start", "casas/form_d_start.txt", lang);
					 	 ov_load_text("hform_d_end", "casas/form_d_end.txt", lang);
					 	 ov_load_text("hform_adults", "casas/form_adults.txt", lang);
					 	 ov_load_text("hform_kids", "casas/form_kids.txt", lang);
					 	 ov_load_text("hform_comments", "casas/form_comments.txt", lang);
					 	 
					 	 break;
					 	 
		case "cortijo":  ov_load_text("mi_menu", "casas/menu.txt", lang);
		
						 ov_load_text("htitulo_01", "casas/cortijo/titulo_01.txt", lang);
						 ov_load_text("htitulo_02", "casas/titulo_02.txt", lang);
						 ov_load_text("htitulo_03", "casas/titulo_03.txt", lang);
						 ov_load_text("htitulo_04", "casas/titulo_04.txt", lang);
						   
					 	 ov_load_text("htexto_01", "casas/cortijo/texto_01.txt", lang);
					 	 ov_load_text("htexto_02", "casas/cortijo/texto_02.txt", lang);
					 	 ov_load_text("htexto_03", "casas/cortijo/texto_03.txt", lang);
					 	 
					 	 ov_load_text("hform_name", "casas/form_name.txt", lang);
					 	 ov_load_text("hform_email", "casas/form_email.txt", lang);
					 	 ov_load_text("hform_tlf", "casas/form_tlf.txt", lang);
					 	 ov_load_text("hform_d_start", "casas/form_d_start.txt", lang);
					 	 ov_load_text("hform_d_end", "casas/form_d_end.txt", lang);
					 	 ov_load_text("hform_adults", "casas/form_adults.txt", lang);
					 	 ov_load_text("hform_kids", "casas/form_kids.txt", lang);
					 	 ov_load_text("hform_comments", "casas/form_comments.txt", lang);
					 	 
					 	 break;
    				
    	default: ov_load_text("mi_menu", "menu.txt", lang); 
    			 break;
    }    
}

function ov_change_header() 
{
	var s = $(window).scrollTop();
	
	if(s*1.5>=parseInt($(".ov_section_01").outerHeight()) || parseInt($(".ov_section_01").outerHeight())<=150)
	{
		$(".ov_header_01").addClass("ov_header_02").removeClass("ov_header_01");
		$(".ov_logo_01").css("border","none");
	}
	else
	{
		$(".ov_header_02").addClass("ov_header_01").removeClass("ov_header_02");
		$(".ov_logo_01").css("border-top","1px solid #ccc");
		$(".ov_logo_01").css("border-bottom","1px solid #ccc");
	}
}

function ov_go_to_section(tag)
{
	 $(this).click(function(){
         $('html, body').stop().animate({
             'scrollTop': $('#'+tag).offset().top-50
         }, 1000);
    });
}

function ov_load_text(id_div, id_text, lang)
{
	$('#'+id_div).load(ov_siteurl+'/resources/texts/'+lang+'/'+id_text);
}

function ov_scrollTop() 
{
	$('body,html').stop().animate({"scrollTop": "0px"}, 500);
}

function ov_make_booking(formid)
{
	$("#ov_loader_gif").show(function() {
	
		var values=$('#'+formid).serialize()+"&table=bookings";
		
		var splitted1=values.split("&");
		var splitted2="";
		for(i=0;i<splitted1.length;i++)
		{
		   	splitted2=splitted1[i].split("=");	   	
		   	if(splitted2[0]=="booking_tlf" || splitted2[0]=="booking_kids" || splitted2[0]=="booking_comments")
		   	{
		   		
		   	}
		   	else
		   	{
		   		if(splitted2[1]=="")
		   		{
		   			alert("Los campos marcados con * son obligatorios");
		   			$("#ov_loader_gif").hide();
		   			return false;
		   		}
		   	}
		}
		
		if(!ov_ajax_operation(values,"check_date"))
		{
			//alert("Coincidencia de fechas");
			$("#ov_loader_gif").hide();
		   	return false;
		}
		
		if(!ov_ajax_operation(values,"create_booking_and_send"))
		{
			alert("Se ha producido un error al enviar.");
			$("#ov_loader_gif").hide();
		   	return false;
		}
		else
		{
			alert("Envío correcto");
			$("#ov_loader_gif").hide();
		   	return true;
		}
		
	});
}

function ov_send_contact(formid)
{
	$("#ov_loader_gif").show();
	
	var values=$('#'+formid).serialize();
	
	var splitted1=values.split("&");
	var splitted2="";
	for(i=0;i<splitted1.length;i++)
	{
	   	splitted2=splitted1[i].split("=");	   	
	   	if(splitted2[0]=="contact_email" || splitted2[0]=="contact_name")
	   	{
	   		if(splitted2[1]=="")
	   		{
		   		alert("Los campos marcados con * son obligatorios");
		   		return false;
		   	}
	   	}
	}
	
	if(!ov_ajax_operation(values,"send_contact"))
	{
		alert("Se ha producido un error al enviar.");
	   	return false;
	}
	else
	{
		alert("Envío correcto a "+result);
	   	return true;
	}	
}

function ov_paint_calendar(items, contenedor)
{	
	/*var it;
	for(it in items)
	{
		console.log(items[it]["c5"]);
	}*/

	$("#"+contenedor).datepicker({
	    beforeShowDay: function(date) {
	        var result = [true, '', null];
	        var matching = $.grep(items, function(event) {
	            return new Date(event.c5).setHours(0).valueOf() === date.valueOf();
	        });
	        
	        if (matching.length) {
	            result = [true, 'highlight', null];
	        }
	        return result;
	    },
	    onSelect: function(dateText) {
	        var date,
	            selectedDate = new Date(dateText),
	            i = 0,
	            event = null;
	        
	        while (i < items.length && !event) {
	            date = new Date(items[i].c5).setHours(0);
	            
	            console.log(selectedDate);
	            
	            if (selectedDate.valueOf() === date.valueOf()) {
	                event = items[i];
	            }
	            i++;
	        }
	        
	        if (event) 
	        {
	            alert("Reserva para "+(event.c8+event.c9)+" personas.");
	        }
	    }
	});
	
	/*var events = [ 
	    { Title: "Five K for charity", Date: new Date("06/13/2014") }, 
	    { Title: "Dinner", Date: new Date("06/25/2014") }, 
	    { Title: "Meeting with manager", Date: new Date("06/01/2014") }
	];
	
	$("#"+contenedor).datepicker({
		firstDay: 1,
	    beforeShowDay: function(date) {
	        var result = [true, '', null];
	        var matching = $.grep(events, function(event) {
	            return event.Date.valueOf() === date.valueOf();
	        });
	        
	        if (matching.length) {
	            result = [true, 'highlight', null];
	        }
	        return result;
	    },
	    onSelect: function(dateText) {
	        var date,
	            selectedDate = new Date(dateText),
	            i = 0,
	            event = null;
	        
	        while (i < events.length && !event) {
	            date = events[i].Date;
	
	            if (selectedDate.valueOf() === date.valueOf()) {
	                event = events[i];
	            }
	            i++;
	        }
	        if (event) {
	            alert(event.Title);
	        }
	    }
	});*/
	
}

function ov_ajax_operation(values,operation)
{
	var retorno=false;		
	$.ajax({
	  type: 'POST',
	  url: ov_siteurl+"/server/ajax_operations.php",
	  data: { v: values, op: operation },
	  success: h_proccess,
	  error:h_error,
	  dataType: "json",
	  async:false
	});			
	function h_proccess(data){
		
		if(data.error=="0")
		{			
			if(data.warning!="0")
			{
				alert(data.warning);
			}
			retorno=data.result;
		}
		else
		{
			alert(data.error+" - "+data.error_message); // uncomment to trace errors
			retorno=false;
		}				
	}
	function h_error(jqXHR, textStatus, errorThrown)
	{
		console.log(errorThrown);
		retorno=false;		
	}					
	return retorno;
}

function ov_ajax_operation_cross(values,operation)
{
	var retorno=false;		
	$.ajax({
	  type: 'POST',
	  url: ov_siteurl+"/server/ajax_operations.php",
	  data: { v: values, op: operation },
	  beforeSend: function( xhr ) {
	    xhr.overrideMimeType("text/javascript");
	  },
	  success: h_proccess_p,
	  error:function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR.responseText);
            console.log(errorThrown);
            alert(jqXHR.responseText+" - "+errorThrown);
            retorno=false;
         },
	  dataType: "jsonp",
      jsonp: 'callback',
      jsonpCallback: 'jsonpCallback',
	  async:false
	});		
	function jsonpCallback(data){
        alert("jsonp");
        console.log(data);
        retorno=data.result;
    }	
	function h_proccess_p(data){

		console.log(data);

		if(data.error=="0")
		{			
			if(data.warning!="0")
			{
				alert(data.warning);
			}
			retorno=data.result;
		}
		else
		{
			alert(data.error+" - "+data.error_message); // uncomment to trace errors
			retorno=false;
		}			
	}	
	return retorno;					
}

function get_var_url(variable){

	var tipo=typeof variable;
	var direccion=location.href;
	var posicion=direccion.indexOf("?");
	
	posicion=direccion.indexOf(variable,posicion) + variable.length; 
	
	if (direccion.charAt(posicion)== "=")
	{ 
        var fin=direccion.indexOf("&",posicion); 
        if(fin==-1)
        	fin=direccion.length;
        	
        return direccion.substring(posicion+1, fin); 
    } 
	else
		return false;
	
}
