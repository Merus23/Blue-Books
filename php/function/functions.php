<?php
    function btn_verificador ($variavel) {
        /*Essa função verifica o butão foi clicado. Retorna true para verificação. */
        if(isset($_POST[$variavel])){
             $variavel = $_POST[$variavel];
             
             return true;
        }
        
    }
    function btn_valor ($variavel){
        /*Verifica fica se o butão é null, caso não seja retorna o valor dele.*/
        if(isset($_POST[$variavel])){
            $variavel = $_POST[$variavel];
            
            return $variavel;
        }
       
    }
?>