<?php
    function btn_verificador ($variavel) {
        if(isset($_POST[$variavel])){
            $ $variavel = $_POST[$variavel];
        }
        return true;
    }
?>