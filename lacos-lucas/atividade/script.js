console.log("Script Carregado");

function calcularAnos(){
    console.log("Botão de Calcular clicando")

    let popAInput= document.getElementById("popA").value.trim();
    let taxaAInput=document.getElementById("taxaA").value.trim();

    let popBInput= document.getElementById("popB").value.trim();
    let taxaBInput=document.getElementById("taxaB").value.trim();

    if(popAInput === "" || taxaAInput === "" || popBInput === "" || taxaBInput === ""){
        alert("Por Favor, preencha todos os campos");
        return;
    }

    let popA= parseInt(popAInput);
    let taxaA=parseFloat(taxaAInput)/100;

    let popB= parseInt(popBInput);
    let taxaB=parseFloat(taxaBInput)/100;
    
    let anos=0

    while(popA<popB){
        popA *= (1+taxaA);
        popB *= (1+taxaB);
        anos++;
    }

    console.log("Anos calculados", anos);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML=`Serão necessários ${anos} anos para que a população de A ultrapasse ou iguale a de B`;

}

function limparCampos(){
    console.log("Botão de Limpar Campos");
    document.getElementById("popA").value = "";
    document.getElementById("taxaA").value = "";
    document.getElementById("popB").value = "";
    document.getElementById("taxaB").value = "";

    let resultado = document.getElementById("resultado");

    resultado.innerHTML="";
    /*A propriedade innerHTML é utilizada em JavaScript para definir, atribuir ou retornar o conteudo HTML
    de um elemento*/
}