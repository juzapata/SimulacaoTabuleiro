Instruções para compilar

Requerimentos:
Node v13.7.0;  
Npm 6.13.6;

No terminal, na raiz de onde está o arquivo app.js, execute os comandos:

npm install
node app.js


Possíveis refatorações
- Há algumas iterções (loops) que olhando com mais cuidado, podem ser retirados, para haver uma melhor performance do código
- Seria bom para o jogo, que quando um jogador pagasse aluguel para outro, o que devesse receber, receberia na hora. Mas pela lógica do meu código, os jogadores só recebem no começo de sua rodada. Talvez fosse melhor colocar esse pagamento de forma mais dinâmica.
- Utilização de métodos de array, como sort, podem não dar certo caso o número não seja inteiro. Então pode haver uma refatoração para a retirada desses métodos usados. 
- Refatoração de condicões if else. Acredito que, como no caso dos loops, existam desnessárias, que se retiradas deixariam o código com uma performance maior.
- Mudar a forma de limpar os atributos no final de cada partida. 