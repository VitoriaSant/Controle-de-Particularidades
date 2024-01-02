# Controle-de-Particularidades
 
 OBS:
 Tela inicial 
    Cadastro
	    Empresa
		    Razão social
		    Nome fantasia
		    CNPJ
	    Equipamento
		    Descrição
    Cadastro Particularidade
		Empresa
			Razão social /Nome fantasia/CNPJ
			Particularidade
		Equipamento
			Nome
			Particularidade
			
-Cada cliente tem: Uma particularidade
-Um equipamento tem: Uma particularidade
-Pesquisa por Razão/fantasia ou CNPJ
-Listar os cliente e quando clicar no cliente listar as particularidade



PARA INICIAR UM PROJETO NODE 
- Tem que estar com o Node instalado na paquina 
- Cmd >> cd navegue até a pasta do projeto >> npm init
- Intalar o express no pc >> npm install express
- Intalar o express no projeto >> npm install expres --save
- instaloar o EJS >> npm install ejs


PARA A APLICAÇÃO RODAR USAR O NODEMON
- Cmd >> nodemon index.js

BIBLIOTECA DO EXPRESS PARA PEGAR OS DADOS SALVOS 
Responsavel por traduzir os campos do front para uma estrutura javascript para usar no back
- Cmd >> npm install body-parser --save

BANCO DE DAD0OS
 - Cmd >> npm install --save sequelize
 -  para usar o sequelize é necessario a instalar a biblioteca mysql2 >> npm install --save mysql2