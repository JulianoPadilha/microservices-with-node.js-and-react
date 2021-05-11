## Comunicação entre serviços

Como visto anteriormente, o grande problema quando falamos de microserviços, é o gerenciamento de dados e o fato de um serviço não poder acessar o banco de dados de outro serviço, sendo esse um padrão chamado "Database-per-Service".

Então como fazemos para ter um serviço que necessita de dados de um banco de dados de outros serviços? Bom, existem duas formas, sendo:

* Comunicação síncrona
* Comunicação assíncrona

![](../images/tipos_comunicacoes.png)

### Comunicação síncrona

Este tipo de comunicação é a mais fácil de entender. Trata-se de requisições HTTP feitas entre os serviços, onde serviço A faz um requisição para um serviço B e recebe a resposta das informações. Nesse cenário, B continua sendo o único responsável pelas consultas no banco de dados e A apenas tem acesso ao que for retornado na requisição, que pode ser um JSON ou qualquer outro formato.

![](../images/exemplo_comunicacao_sincrona.png)

#### Observações sobre a comunicação síncrona

![](../images/detalhes_comunicacao_sincrona.png)
