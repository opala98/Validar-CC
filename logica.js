function validar() {

        document.getElementById('process').style.display = "inline";
        document.getElementById('pronto').style.display = "none";
        document.getElementById('bandeira').style.display = "none";
        document.getElementById('msg').style.display = "none";
        document.getElementById('numero').style.display = "none";

        setTimeout(timer, 7000);
                
        setTimeout(calculo, 7300);

        
        return false;
}


function timer() {

        document.getElementById('process').style.display = "none";
        document.getElementById('pronto').style.display = "inline";
}


function validar_outro() {

        var form = document.getElementById('validacao');
        form.reset();

        document.getElementById('process').style.display = "none";
        document.getElementById('pronto').style.display = "none";
        document.getElementById('bandeira').style.display = "none";
        document.getElementById('numero').style.display = "none";
        document.getElementById('msg').style.display = "none";
}

function calculo() {

        document.getElementById('msg').style.display = "inline";
        document.getElementById('bandeira').style.display = "inline";
        document.getElementById('numero').style.display = "inline";

        var b = document.getElementById('bandeira');
        var n = document.getElementById('numero');
        var msg = document.getElementById('msg');
        var luhn = document.getElementById('numcc').value.replace(/\D/g, '');


        if(luhn.length < 13) {
               msg.innerHTML = "Número digitado muito curto";
        } else {

                var digit = 0;

                var mult = false;
        
                for(let i = luhn.length -1  ; i >= 0 ; i--) {
        
                        var digit1 =luhn.charAt(i);

                        

                        if (mult){ 
                                if(digit1 >= 5) {
                                        digit1 = (digit1 *2) - 9;
                                } else {digit1 *= 2;}

                                }
               
        

                        var intNum = parseInt(digit1);
        
        
                        digit += intNum;
        
                        mult = !mult;
          
                }

                if(luhn.substr(0,1) == 4 && (luhn.length == 16 || luhn.length == 13)){
                        b.innerHTML = "visa, ";
                } else
                if((luhn.substr(0,2) >= 51 && luhn.substr(0,2) <= 55) && luhn.length == 16){
                        b.innerHTML = "Mastercard, ";
                } else
                if((luhn.substr(0,2) == 34 || luhn.substr(0,2) == 37) && luhn.length == 15){
                        b.innerHTML = "Amex, ";
                } else
                if((luhn.substr(0,2) == 30 || luhn.substr(0,2) == 36 || luhn.substr(0,2) == 38) && luhn.length == 14){
                        b.innerHTML = "Diners, ";
                } else
                if(luhn.substr(0,4) == 6011 && luhn.length == 16){
                        b.innerHTML = "Discover, ";
                } else
                if((luhn.substr(0,4) == 2014 || luhn.substr(0,4) == 2149) && luhn.length == 15){
                        b.innerHTML = "enRoute, ";
                } else
                if((luhn.substr(0,4) == 2131 || luhn.substr(0,4) == 1800) && luhn.length == 15){
                        b.innerHTML = "JCB, ";
                } else
                if(luhn.substr(0,1) == 3 && luhn.length == 16){
                        b.innerHTML = "JCB, ";
                } else {
                        b.innerHTML = "Operadora desconhecida, ";
                }
        

                if(digit % 10 == 0) {
                        n.innerHTML = "válido";
                } else {
                        n.innerHTML = "número inválido";
                }
        }
}