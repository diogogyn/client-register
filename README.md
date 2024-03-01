# 
README - Projeto Angular de Cadastro de Clientes
Este projeto mostra como utilizar o client nativo do Angular para requisições HTTP.

## 1 - Setup do ambiente
git clone https://github.com/seu-usuario/seu-projeto-angular.git
cd seu-projeto-angular
npm install
ng serve


## 2 - Funcionalidades

1. Cadastro de Clientes
- Nome do Cliente: Validação para garantir que o nome tenha pelo menos 10 caracteres.
- CPF:Campo obrigatório para inserção do CPF do cliente.
- Endereço:Campo obrigatório para inserção do endereço do cliente.
- Bairro: Campo obrigatório para inserção do bairro do cliente.
- Telefones: Uma lista dinâmica que permite adicionar e remover telefones para cada cliente.
Validação para garantir que um telefone cadastrado para um cliente não esteja vinculado a outro (relação 1 para 1).

Botão Adicionar Cliente:

Realiza uma requisição POST para a API REST, cadastrando o novo cliente.
2. Listagem de Clientes
- Lista de Clientes: Exibe a lista de todos os clientes cadastrados.
Mostra o nome, endereço, bairro e o primeiro telefone de cada cliente.
- Atualização Automática: A lista de clientes é atualizada automaticamente após cada cadastro bem-sucedido.

## 3 - Tecnologias Utilizadas
Angular 12: Framework para construção de aplicações web.

Reactive Forms: Utilizado para criar formulários reativos com validações.

HttpClient: Módulo para realizar requisições HTTP para a API REST.

Configurações
API REST:

O projeto está configurado para se conectar a uma API REST local, acessando http://localhost:8080. Certifique-se de ter a API REST em execução para interagir com o back-end.
Modo de Desenvolvimento:

O projeto foi configurado para rodar em um servidor de desenvolvimento. Use o comando ng serve para iniciar o aplicativo.
