# Validar-CC
Validador de cartão de crédito

COLOCAR ISSO AQUI!!!!

var input_tel = document.querySelector("input[type=tel]");
input_tel.addEventListener('keyup', mask_tel);

var input_cpf = document.getElementById("cpf");
input_cpf.addEventListener('keyup', mask_cpf);

function mask_tel(e) {

    var caractere = e.target.value.replace(/\D/g,"");
    
    caractere = caractere.replace(/^(\d\d)(\d)/g,"($1) $2");
    caractere = caractere.replace(/(\d{5})(\d)/g,"$1-$2");

    e.target.value = caractere;

}

function mask_cpf(e) {

    var carac = e.target.value.replace(/\D/g,"");

    carac = carac.replace(/(\d{3})(\d)/,"$1.$2");
    carac = carac.replace(/(\d{3})(\d)/,"$1.$2");
    carac = carac.replace(/(\d{3})(\d{1,2})/,"$1-$2");

    e.target.value = carac;

}
