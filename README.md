### Plataforma de perguntas e respostas ###

### Funcionamento: Um usuário pode criar a sua pergunta, vizualizar outras perguntas criadas, e responder ### 

É necessário para rodar o programa ter instalado em sua máquina o nodejs, que pode ser instalado a partir desse link: https://nodejs.org/en/download

### Vamos precisar instalar alguns pacotes e bibliotecas para que o nosso projeto possa rodar, as ferramentas utilizadas foram essas aqui: (exemplos usando o gerenciador de pacotes npm)

### express:

    npm i express

### ejs: 

    npm i ejs --save 

### body-parser: 

    npm i body-parser --save

### mysql2:

    npm i mysql2 --save 

### sequelize:
      
    npm i --save sequelize 

### nodemon(opcional, serve para agilizar na hora de rodar o projeto):

    npm i --save-dev nodemon 

############################################

### É muito importante ter um banco de dados criado na sua máquina, o nome que vamos usar é "guiaperguntas", crie ele sem as aspas. Usamos o mysql para criar o banco, e acessamos ele dentro da pasta database no arquivo connection, caso você tenha criado um banco com outro nome, é só você trocar o nome dele nas variáveis, mas para evitar erros, recomendo que crie com o nome "guiaperguntas". Será necessário também trocar a senha no arquivos database.js, colocando a senha do seu mysql.

### 

### Para rodar o projeto é muito simples, depois de tudo instalado, é só acessar o terminal, no caminho atual do seu projeto, e rodar o seguinte comando:

    node index 

### ou se você estiver usando o nodemon também podemos rodar ele assim:

    nodemon index

### Depois de iniciar o projeto, vamos em qualquer navegador e acessar o localhost:8080, que foi a porta escolhida no projeto, mas que você também pode mudar, modificando a constante PORTA no arquivo index.

