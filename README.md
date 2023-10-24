

# Como usar

1. Clone este repositório em sua máquina.

1.1 Ative o MYSQL nos serviços,para isso aperta no botão do windows e pesquise por "Serviços", dentro de serviços procure por MYSQL80, clique com botão direito e inicie o serviço caso não esteja iniciado

1.2 Em seguida, abre o diretório C:\Users\davil\OneDrive\Ambiente de Trabalho\DB_Pokemon\site\src\database, até acessar o arquivo script-tabelas.sql,

1.3 em seguida, clique em "reconnect to DBMS" e aperte ctrl + enter na linha 1 e dps  na linha 2 

1.4 IMPORTANTE!!!! Após isso será necessário importar o arquivo todos_pokemon.csv que está no memo caminho do arquivo script-tabelas.sql
C:\Users\davil\OneDrive\Ambiente de Trabalho\DB_Pokemon\site\src\database

  na barra da direita em "schemas" procure pela tabela "pokemon" e clique com botão direito nele e importe o arquivo.csv que está localizado C:\Users\davil\OneDrive\Ambiente de Trabalho\DB_Pokemon\site\src\database

1.5 agora para verificar se o arquivo foi importado, dê o select * from todos_pokemon;
1.6 execute o resto do script
1.6 não esqueça de executar a linha 23!!
