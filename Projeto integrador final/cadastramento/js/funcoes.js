/*******************************************************************/
//funcao para validar campo apenas numerico
function ApenasNumero() {
	if(event.keyCode < 48 || event.keyCode > 57){
		event.keyCode = 0;
		return false;
	}else{
		return true;
	}
}
/*******************************************************************/
//funcao para validar do campo de datas no formato dd/mm/yyy
function ValidarData(data,obj) { 
// este script faz a verificacao da data em um campo 
	  dia = data.substring(0,2);
	  mes = data.substring(3,5);
	  ano = data.substring(6,10);
	  barra1 = data.substring(2,3);
	  barra2 = data.substring(5,6);

	  if (isNaN(dia) || isNaN(mes) || isNaN(ano))
	  {	
		alert("A data (ano) contem caracteres inválidos");
		obj.focus();
		return false;
	  } else if (data.length != 10 || barra1 != "/" || barra2 != "/")
	  {	
		alert("O formato da data esta inválido! Exemplo: dd/mm/aaaa");
		obj.focus();
		return false;
	  }
	  quociente = (eval(ano) % 4);
	  if (quociente == 0) {
		biss = true;
	  }
	  else
	  {
		biss = false;
	  }
	  if (mes < 01 || mes > 12)
	  {	
		alert("O mês da data é inválido");
		obj.focus();
		return false;
	  }
	  if (dia < 1 || dia > 31)
	  {	
		alert("O dia da data é inválido");
		obj.focus();
		return false;
	  }
	  if (ano > 9000)
	  {	
		alert("Ano maior que 9000!");	
		obj.focus();
		return false;
	  }
	  if (ano < 1900)
	  {	
		alert("Ano menor que 1900!");	
		obj.focus();
		return false;
	  }
 	 if (mes == 2)
	 {
	   if (dia == 29)
	   {	if (biss == false)
			{	
				alert("O dia e inválido pois o ano não e bissexto!");
				obj.focus();
				return false;
			}
	   }
	   if (dia >= 30) 
	   {	
			alert ("O dia e inválido¡lido para o mes de Fevereiro!");
			obj.focus();
			return false;
		}
	  }
	  if (dia == 31)
	   {
		if (mes == 2)
		{	
			alert("O dia e inválido para o mes de Fevereiro!");
			obj.focus();
			return false;
		}
		if (mes == 4)
		{	
			alert("O dia e inválido para o mes de Abril!");
			obj.focus();
			return false;
		}
		if (mes == 6)
		{	
			alert("O dia e inválido para o mes de Junho!");
			obj.focus();
			return false;
		}
		if (mes == 9)
		{	
			alert("O dia e invalido para o mes de Setembro!");
			obj.focus();
			return false;
		}
		if (mes == 11)
		{	
			alert("O dia e invalido para o mes de Novembro!");
			obj.focus();
			return false;
		}
	   } 
	   return true;
	}
/*******************************************************************/
//	funcao para verificao de dois campos de data. 
//	esta funcao verifica se a data do primeiro campo
//	e maior do que a data do segundo.

function calcula_periodo(campoini, campofin){

	vr = document.all[campoini].value;
	dia_ini = vr.substr(0,2);
	mes_ini = vr.substr(3,2);
	ano_ini = vr.substr(6,4);
	
	vr = document.all[campofin].value;
	dia_fin = vr.substr(0,2);
	mes_fin = vr.substr(3,2);
	ano_fin = vr.substr(6,4);	
	
	if (ano_fin - ano_ini < 0){
		return false;
	}	
	
	if ((mes_fin - mes_ini < 0) && (ano_fin - ano_ini <= 0)){
		return false;
	}	
		
	if ((dia_fin - dia_ini < 0) && (mes_fin - mes_ini <= 0) && (ano_fin - ano_ini <= 0)){
		return false;
	}	
	return true;
}

/*******************************************************************/
//funcao para validar CPF
function checaCPF(CPF) 
{
	var valor   = CPF;
	var tamvlr  = CPF.length;
	var i = 0;
	CPF = "";

	while (i < tamvlr)
	{
		if ((valor.substr(i, 1) >= "0") && (valor.substr(i, 1) <= "9"))
			CPF += valor.substr(i, 1) ;
		i++;
	}
	
	if (CPF.length != 11 || CPF == "00000000000" || CPF == "11111111111" ||
		CPF == "22222222222" ||	CPF == "33333333333" || CPF == "44444444444" ||
		CPF == "55555555555" || CPF == "66666666666" || CPF == "77777777777" ||
		CPF == "88888888888" || CPF == "99999999999")

		return false;
	soma = 0;
	for (i=0; i < 9; i ++)
		soma += parseInt(CPF.charAt(i)) * (10 - i);
	resto = 11 - (soma % 11);
	if (resto == 10 || resto == 11)
		resto = 0;
	if (resto != parseInt(CPF.charAt(9)))
		return false;
	soma = 0;
	for (i = 0; i < 10; i ++)
		soma += parseInt(CPF.charAt(i)) * (11 - i);
	resto = 11 - (soma % 11);
	if (resto == 10 || resto == 11)
		resto = 0;
	if (resto != parseInt(CPF.charAt(10)))
		return false;
	return true;	
}
/*******************************************************************/
//		funcao para formatar CPF  ex.: ###.###.###-## onkeypress="global(event,this,'##.###-##');"
function global(e,src,mask) {
    if(window.event) { 
    	tecla = e.keyCode; 
    }else if(e.which) { 
    	tecla = e.which;
    }
    if( tecla > 47 && tecla < 58) {
		 var i = src.value.length;
		 var saida = mask.substring(0,1);
		 var texto = mask.substring(i);
		 if ( texto.substring(0,1) != saida ) { 
		 	src.value += texto.substring(0,1);
		 }
    	return true; 
    } else { 
    	if (tecla != 8) { 
    		return false; 
    	} else { 
    		return true; 
    	}
    }
}


/*******************************************************************/
//funcao para verificacao de email
/*function ChecaEmail(email)
{
	if (email.indexOf('@', 0) == -1 || email.indexOf('.', 0) == -1)	{ 
		alert("E-mail invalido! \rVerifique os dados e tente novamente.");
		return false;
	}
}*/
/*******************************************************************/

function validaCamposObrigatorios(pform) {

	pform = eval(pform);
        for (i=0; i < pform.elements.length; i++) {

            if((pform.elements[i].type == "text") || (pform.elements[i].type == "textarea") || (pform.elements[i].type == "password") || (pform.elements[i].type == "hidden")){
			    if((pform.elements[i].title == "Obrigatorio") && (pform.elements[i].value.length == 0) ) {
                    pform.elements[i].focus();
					document.getElementById("sp"+pform.elements[i].name).style.display = 'block';
                    //alert("Existem campos obrigatorios nao preenchidos.");
                    return false;
                }
                else{
                	document.getElementById("sp"+pform.elements[i].name).style.display = 'none';
                }                   
            }
            if( (pform.elements[i].type == "select") || (pform.elements[i].type == "select-one") ) {
                if((pform.elements[i].title == "Obrigatorio") && (pform.elements[i].value == "") ) {
                    pform.elements[i].focus();
                    alert("Existem campos obrigatorios nao selecionados.");
                    return false;
                }
            }
        }
        return true;
} 

function quantidadeSelecionado(campo) {
    var quantidade = 0;
    // mais de um campo
    for (i = 0; i < campo.length; i++) {
        if (campo[i].checked) {
            quantidade++;
        }
    }
    // somente um campo
    if (campo.checked) {
    	quantidade++;
    }
    return quantidade;
}

function trim(str) {
  if (str.charAt(0) == ' ')
    str = trim(str.substr(1));
  if (str.charAt(str.length - 1) == ' ')
    str = trim(str.substr(0, str.length - 1));
  return str;
}

function retiraCaracteresSeparacao(Str) {
  var s = "";
  var espaco = "X X";
  Str = trim(Str);
  for (i = 0; i < Str.length ; i++) {
    if (Str.charAt(i) != "/" && Str.charAt(i) != "-" && Str.charAt(i) != "."  && Str.charAt(i) != "," &&
        Str.charAt(i) != ";" && Str.charAt(i) != "|" && Str.charAt(i) != espaco.charAt(1) && Str.charAt(i) != "\\" &&
        Str.charAt(i) != ":" && Str.charAt(i) != "(" && Str.charAt(i) != ")"){
      s = s + Str.charAt(i);
    }
  }

 return s;
}

function eDataValida(Str) {
    vlraux = trim(Str);
    if ((vlraux == "") || (vlraux.length != 10) ||
       (vlraux.charAt(2) != "/") || (vlraux.charAt(5)!= "/")){
       return false;
    }

    dia = parseInt(vlraux.substring(0,2),10);
    mes = parseInt(vlraux.substring(3,5),10);
    ano = parseInt(vlraux.substring(6,10),10);

    if(ano < 1840)
	return false;

    if (isNaN(dia) || isNaN(mes) || isNaN(ano) || (mes < 1) || (mes > 12) || (dia < 1)) {
      return false;
    }

    tabmes = "312831303130313130313031";

    if ((dia == 29) && (mes == 2)){
      if ((ano == 0) || ((ano % 4) != 0)){
        return false;
      }
      else { return true; }
    }

    k = (mes * 2 - 2);

    if (dia > tabmes.substring(k,k + 2)) {
      return false;
    }
    else { return true;}

   return false;
}

function validarData(Campo) {
  if(Campo.value != ""){
    Campo.value = retiraCaracteresSeparacao(Campo.value);
    vr = Campo.value;
    tam = vr.length;

    if ( tam > 2 && tam < 5 )
            Campo.value = vr.substr( 0, tam - 2) + "/" + vr.substr( tam - 2, tam );
    if ( tam >= 5 && tam <= 10 )
            Campo.value = vr.substr( 0, 2 ) + "/" + vr.substr( 2, 2 ) + "/" + vr.substr( 4, 4 );

    if (!eDataValida(Campo.value)) {
	  alert("Data Inválida!");
	  Campo.value = "";
	  Campo.focus();
    }
  }
}

function FDATA(vr) {
	var res = '';
	tam = vr.length;
	if ( tam > 2 && tam < 5 )
		res = vr.substr( 0, tam - 2  ) + '/' + vr.substr( tam - 2, tam );
	else
	if ( tam >= 5 && tam <= 10 )
		res = vr.substr( 0, 2 ) + '/' + vr.substr( 2, 2 ) + '/' + vr.substr( 4, 4 );
	else
        	res = vr;  	
        return res; 
}

function FormatarData(campo, tammax, e) {
    if(window.event) { 
    	tecla = e.keyCode; 
    }else if(e.which) { 
    	tecla = e.which;
    }
    
    if (tecla==8){
    	return;
    }
    var teclapres = String.fromCharCode(tecla);
    vr = campo.value;
    tam = vr.length;
    var re = new RegExp("[0-9]","g");
    if (re.test(teclapres)) {
        if (tam < tammax) {
            vr = vr.replace(/\D/g,'') + teclapres;
            campo.value = FDATA(vr); 
        } else {
            //var sel = "";
            //sel = document.selection.createRange().text;
            //return (sel != '');
			return true;
        }
    }
    return false;
}

function eNumero(Char){
	numeros = "0,1,2,3,4,5,6,7,8,9";
	arrayNumeros = numeros.split(",");
	for(i=0; i < arrayNumeros.length; i++){
		if(Char == arrayNumeros[i]){
			return true;
		}
	}
	return false;
}

function eNumerico(Valor){
	for(j=0; j < Valor.length; j++){
		if(!eNumero(Valor.charAt(j))){
			return false;
		}
	}
	return true;
}

function formataInteiro(Campo, Tamanho){
	Campo.value = trim(Campo.value);
	Campo.value = retiraTodosEspaco(Campo);
	if(Campo.value != ""){
		var numero = retiraCaracteresSeparacao(Campo.value);
	
		if (eNumerico(numero)) {
			if(numero.length > Tamanho){
				alert("O Campo sÃ³ permite "+ Tamanho +" digitos!");
				Campo.value = "";
				Campo.focus();
				return false;
			}
		} else {
			alert("Digite somente nÃºmeros no campo!");
			Campo.value = "";
			Campo.focus();
		}
	}
}

function retiraTodosEspaco(campo) {
    var campoValidado="";

    for (var i=0; i < campo.value.length; i++) {
        if( (campo.value.charAt(i)!=' ') ) {
          campoValidado = campoValidado + campo.value.charAt(i);
        }
    }
    return campoValidado;
}

function formatarValorNumerico(campo) {
	// enter
	if (event.keyCode == 13) {
		return;
	}
	if (event.keyCode < 48 || event.keyCode > 57) {
		event.keyCode = 0;
	}
}

function tiraBrancos(strOriginal) {
	var strTemp = strOriginal;

	while(strTemp.indexOf(" ") != -1)
		strTemp = strTemp.replace(" ", "");

	while(strTemp.indexOf("\n") != -1)
		strTemp = strTemp.replace("\n", "");

	while(strTemp.indexOf("\r") != -1)
		strTemp = strTemp.replace("\r", "");

	return(strTemp);
}

function checkMail(mail){
	
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    
    if(typeof(mail) == "string"){
        if(er.test(mail)){ 
        	return true; 
        }
    }else if(typeof(mail) == "object"){
        if(er.test(mail.value)){
            return true;
        }
    }
    
    return false;
    
}
//adiciona mascara de cep
function MascaraCep(cep){
   return formataCampo(cep, '00.000-000');
}
//valida CEP
function ValidaCep(cep){
    exp = /\d{2}\.\d{3}\-\d{3}/
    if(!exp.test(cep.value)){
    	alert('Numero de Cep Invalido'); 
    	cep.value="";
    	return false;
    }
    
    return true;
               
}


//formata de forma generica os campos
function formataCampo(campo, Mascara) {
    var boleanoMascara;
    
    exp = /\-|\.|\/|\(|\)| /g
    campoSoNumeros = campo.value.toString().replace( exp, "" );
  
    var posicaoCampo = 0;    
    var NovoValorCampo="";
    var TamanhoMascara = campoSoNumeros.length;
    
    for(i=0; i<= TamanhoMascara; i++) {
        boleanoMascara  = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".")
                            || (Mascara.charAt(i) == "/"))
        boleanoMascara  = boleanoMascara || ((Mascara.charAt(i) == "(")
                            || (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " "))
        if (boleanoMascara) {
            NovoValorCampo += Mascara.charAt(i);
              TamanhoMascara++;
        }else {
            NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
            posicaoCampo++;
          }           
      }    
      campo.value = NovoValorCampo;
      
      return true;
}



