function habilitaCadastroNovo(){
    var form = document.forms[0];
    document.getElementById("mensagem").style.display = 'none';
    document.getElementById("entrar").style.display = '';
    document.getElementById("senha").style.display = 'none';
    document.form.cnpj.value = '';
    if (document.getElementById("grupo")!=null && document.getElementById("grupo").style.display==''){
        document.getElementById("grupo").style.display = 'none';
    }
    document.form.username.disabled = false;
    document.form.entrar.disabled = false;
    document.getElementById("linhaEmail").style.display = '';
    document.getElementById("linhaCab").style.display = '';
    document.getElementById("linhaTipo").style.display = '';
    form.coCategoria.disabled = false;
    form.username.value = '';
    form.coCategoria.value = '';
    
    form.password.value = '';
    document.getElementById("NovoCadastro").style.display = 'none';
    document.form.username.focus();
    return;
}


function login(email, categoria){
    var form = document.forms[0];
    /*
    if (email!=null && !checkMail(email)){
        alert("E-mail invÃ¡lido.");
        document.form.username.focus();
        document.form.password.value = '';
        return;
    }
    */
    
    
    if (document.getElementById("grupo")==null || document.getElementById("grupo").style.display=='none'){
        if (!checkMail(document.form.username)){
            alert("E-mail invÃ¡lido.");
            document.form.username.focus();
            document.form.password.value = '';
            return;
        }
    
        if (form.coCategoria.value==''){
            alert('Escolha o Tipo da InstituiÃ§Ã£o');
            return;
        }
        form.metodo.value = 'validaCadastroNovo';
        form.dsCategoria.value = form.coCategoria.options[form.coCategoria.selectedIndex].text;
        
        var coCategoria = form.coCategoria.value;
        if(coCategoria == 'H3' || coCategoria == 'I6' || coCategoria == 'I7' || coCategoria == 'E2' || coCategoria == 'J4' || coCategoria == 'J2'){
        	form.dsSubCategoria.value = form.coSubCategoria.options[form.coSubCategoria.selectedIndex].text;
    	}
        form.submit();
        return;
    }

    if (document.form.password.value!=''){
        document.form.submit();
    }
}

function alimentaLogin(email, categoria){
    if (email=='' || email=='null'){
    	alert('InstituiÃ§Ã£o com problemas no cadastro. Favor entrar em contato com a Anvisa.');
    	return;
    }
    document.getElementById("entrar").style.display = '';
    document.getElementById("senha").style.display = '';
    document.getElementById("linhaCab").style.display = '';
    document.getElementById("linhaEmail").style.display = '';
    //document.getElementById("linhaTipo").style.display = '';
    document.form.password.focus();
    alteraTipo(categoria.substr(0,1));
    document.form.username.value = email;
    verificaTipo();
}

function alteraTipo(tipo){
    if (tipo=='I'){
        tipo = 'H';
    }
    document.form.coCategoria.value = tipo;
}

function validaAlterarSenha(novaSenha, confirmacao) {
	
	if(novaSenha === confirmacao) {
		return true;
	} else {
		alert('Campos Senha nova e ConfirmaÃ§Ã£o da nova senha nÃ£o conferem.');
		return false;
	}
	
}

function mostraGrupo(){
    if (validaCNPJ(document.form.cnpj.value)){
        document.form.metodo.value = 'carregaInstituicoes';
        document.form.submit();
    }else{
        document.form.cnpj.focus();
    }
}

function alterarSenha() {
    document.location = 'alterarSenha.jsp';
}


function validaCNPJ(CNPJ){

    var nonNumbers = /\D/;
    erro = new String;
    if (nonNumbers.test(CNPJ)) erro += "Digite apenas numeros no campo CNPJ. \n\n";
    var a = [];
    var b = new Number;
    var c = [6,5,4,3,2,9,8,7,6,5,4,3,2];
    for (i=0; i<12; i++){
           a[i] = CNPJ.charAt(i);
           b += a[i] * c[i+1];
    }
    if ((x = b % 11) < 2) { a[12] = 0 } else { a[12] = 11-x }
    b = 0;
    for (y=0; y<13; y++) {
        b += (a[y] * c[y]);
    }
    if ((x = b % 11) < 2) { a[13] = 0; } else { a[13] = 11-x; }
    if ((CNPJ.charAt(12) != a[12]) || (CNPJ.charAt(13) != a[13])){
       erro +="CNPJ Invalido.";
    }
    if (erro.length > 0){
        alert(erro);
        return false;
    } else {
        return true;
    }
}

function checkMail(mail){
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    if(typeof(mail) == "string"){
        if(er.test(mail)){ return true; }
    }else if(typeof(mail) == "object"){
        if(er.test(mail.value)){
                    return true;
                }
    }else{
        return false;
        }
}

function verificaTipo() {
	var coCategoria = document.form.coCategoria.value;
    if (coCategoria == 'E1') {
        document.getElementById("mensagem").style.display = '';
        document.form.username.disabled = true;
        document.form.entrar.disabled = true;
        if (document.form.password != null) {
            document.form.coCategoria.disabled = true;
            document.form.password.disabled = true;
        }
    } else {
    	if(coCategoria == 'H3' || coCategoria == 'I6' || coCategoria == 'I7' || coCategoria == 'E2' || coCategoria == 'J4' || coCategoria == 'J2'){
    		document.getElementById("linhaSubTipo").style.display = '';
    	} else {
    		document.getElementById("linhaSubTipo").style.display = 'none';
    	}
        document.getElementById("mensagem").style.display = 'none';
        document.form.username.disabled = false;
        document.form.entrar.disabled = false;
        document.form.coCategoria.disabled = false;
        if (document.form.password != null) {
            document.form.password.value = '';
            document.form.password.disabled = false;
        }
    }
}

function carregarSubtipoInstituicao() {
	$.get("servlet/ajax", {categoria: $("#coCategoria").val()}, substituir, "html");
}

function substituir(dados) {
	var $sub = $("#coSubCategoria");
	$sub.empty();
	$sub.append(dados);
}

function arrumarCampoDesabilitado(node) {

    var tipo = node.getAttribute("type");
    if(tipo == "radio" && !node.checked) return;

    var nome = node.getAttribute("name");
    var val = node.value;
    if(tipo == "checkbox") val = (node.checked) ? "on" : "";

    node.setAttribute("name", nome+"_Auxiliar");

    var novoCampo = document.createElement('input');
    novoCampo.setAttribute('type', 'hidden');
    novoCampo.setAttribute('name', nome);
    novoCampo.setAttribute('value', val);
    node.parentNode.appendChild(novoCampo);
}
function procuraDesabilitados(node) {

    if(node!=null) {
        if(((node.nodeName == "INPUT" && node.getAttribute("type")!="button") || node.nodeName == "SELECT") && node.disabled) {
            arrumarCampoDesabilitado(node);
        }
        if(node.hasChildNodes())
            for(var j=0; j<node.childNodes.length; j++)
                procuraDesabilitados(node.childNodes[j]);
    }
}
function reload() {
    var form = document.forms[0];
    document.form.metodo.value = 'reload';
    document.form.submit();
}