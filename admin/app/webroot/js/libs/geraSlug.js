/**
 * @author Guilherme Lessa - 20/06/12 10:10
 * descricao: função simples para gerar o slug de acordo com a palavra passada no evento onkeydown 
 * 			  slug não tem caracteres expecias ou espaços, somente letras e minúsculas
 * @param string value - palavra que será formatada gerando o slug
 * 
 */
function geraSlug(value){
	minusculo = value.toLowerCase(); //transforma tudo em letras minusculas
	string = semLetra.replace(/\W/g, "-"); //substitui caracteres especias e espaços por line
	$('.campoSlug').val(string);
}