<!DOCTYPE html>
<html>
    <head>
        <title>JS01_Estrutura2.htm</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta charset = "utf-8">
    </head>
    <body>
        <h3>Programa de Boas Vindas !</h3>
        <script langrage="JavaScript">

                /*

                Objetivo: Capturar o nome do usuario e apresentar uma saudacao personalizada
                Definir as variaveis com o prefixo js_
                Elemento de entrada: metodo prompt do objeto windows 
                Elemento de saida: metodo write do objeto document

                */
                
                /* Definicao de variaveis */
                var js_nome;

                /* Entrada de dados */
                js_nome = window.prompt('Entre com seu nome: ', 'Digite seu nome nesta caixa');

                /* Saida de dados */
                document.write('01\u00e1'+ js_nome +'Seja Bem Vindo !'); // Mensagem de saudacao Personalizada

        </script>
    </body>
</html>