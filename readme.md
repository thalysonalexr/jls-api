# Jointly Logistics Service API

Repositório da API Core do projeto JLS, versão MVP de apresentação.

<p align="center">
  <a href="https://github.com/thalysonalexr/jls-api">
    <img src="./docs/logo.gif" alt="Logotipo desenvolvido por Manuela Luz (https://www.linkedin.com/in/manuela-luz-862797180/)" title="Logo JLS">
  </a>
</p>

## Sobre o projeto

A JLS é um serviço de logística destinado aos varejistas que se encontram sem alternativa para vendas nesse período de pandemia. Nosso principal objetivo é conectar estes varejistas em um novo fluxo comercial.

Ao invés de se comprometerem com a compra em lotes ou em grandes quantidades de produtos que não irão sair da plateleira por um longo período de tempo - grandes prejuízos – estes podem fazer uso do seu espaço útil para armazenar por um curto período de tempo e distribuir produtos já adiquiridos por consumidores finais.

Esse serviço permite uma dinâmica única que conecta as três etapas da logística de fluxo comercial, transformando a maneira de como comprar, vender e distribuir.

---
## MVP

Serviço de logística para garantir a distribuição e reposição de estoque de varejistas.

## Requisitos não funcionais

* Utilizar Mongo Atlas para armazenamento NoSQL em cloud gratuitamente.
* Utilizar Heroku Cloud para hospedagem.

## Fluxo geral da logística

- 1. O cliente visualiza produtos que são disponibilizados por um atacadista;
  - 1.1. os produtos estão disponíveis para o cliente também através do cruzamento de estoques entre varejista e atacadista dando prioridade aos produtos do varejista;
  - **problemas:**1. como definir os preços dos produtos? (atacadista ou varejista local?);
  - **possiveis soluções:**1. realizar parceria entre varejista local e atacadista definindo preço de produtos a serem comercializados;

- 2. Seleciona os produtos e emite o pedido de compra;

- 3. O sistema faz um cruzamento de estoque do atacadista com do varejista;

  - 3.1. dois pedidos são emitidos, um para o varejista e outra ao atacadista;
    - 3.1.1. o pedido é confirmado com o varejista sobre os produtos, caso não tenha é acrescentado no pedido do atacadista;
  
  - 3.2. ao atacadista é enviado (informações dos produtos) apenas o que foi solicitado a ele;
  - 3.3. ao varejista é enviado o pedido total, o que ele deve complementar e o que deve esperar da atacadista;

- 4. O pedido é notificado para o varejista e atacadista para separarem os produtos;
  - 4.1. O atacadista separa e envia os produtos ao varejista;
  - 4.2. O varejista separa e aguarda os produtos da atacadista;

- 5. O atacadista envia os produtos para o varejista;

- 6. O varejista complementa os produtos da atacadista com seus produtos;

- 7. O varejista entrega o pedido ao consumidor/cliente;

## Fluxo de aplicação MVP

O fluxo da aplicação MVP é direcionado ao varejista, desta maneira abrange os itens 3.3, 4, 5, 6, 7. Os itens restantes 1, 2 e 3 são direcionados a logística e a solução destes caminhos **NÃO** cabe a este MVP.

### Aplicação WEB

Aplicação Web desenvolvida com NodeJS e Angular. O [repositório original](https://github.com/MMHIT/JLS-jointly-logistics-Service-) contém as demais especificidades deste projeto.

> 1. Tela de perfil do varejista

Detém das informações sobre pedidos de clientes, onde os produtos solicitados já foram cruzados com o estoque da atacadista, desta maneira a tela contém as informações: usuário do varejo, pedidos recebidos e status do mesmo.

> 2. Tela de detalhes do pedido

Nesta tela o varejista poderá verificar os produtos do atacadista no pedido e a situação de entrega e **confirmar** se os itens do pedido ao varejo estão disponíveis (estoque pode estar desatualizado no sistema). Quando os produtos vindos da atacadista chegar ao varejo o mesmo poderá ter uma ação no sistema para informar que o produto está **a caminho do consumidor** final e **confirmar a entrega**. 

## Quem fez?

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/thalysonrodrigues/">
        <img src="./docs/collaborators/thalyson.jpeg" width="100px;" alt="Thalyson Rodrigues"/>
        <br/>
        <sub><b>Thalyson Rodrigues</b></sub><br>
        <sub>Dev. backend</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/jo%C3%A3o-kleber-g-448481bb/">
        <img src="./docs/collaborators/joao.jpeg" width="100px;" alt="João Kléber"/>
        <br/>
        <sub><b>João Kléber</b></sub><br>
        <sub>Dev. frontend</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/manuela-luz-862797180/">
        <img src="./docs/collaborators/manu.jpeg" width="100px;" alt="Manuela Luz"/>
        <br/>
        <sub><b>Manuela Luz</b></sub><br>
        <sub>UX|Design/Marketing</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/victorlinsgomes/">
        <img src="./docs/collaborators/victor.jpeg" width="100px;" alt="Victor Lins"/>
        <br/>
        <sub><b>Victor Lins</b></sub><br>
        <sub>UX|Design</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/paulo-victor-moreira-matehus-641b9514b/">
        <img src="./docs/collaborators/paulo.jpeg" width="100px;" alt="Paulo Victor"/>
        <br/>
        <sub><b>Paulo Victor</b></sub><br>
        <sub>Business</sub>
      </a>
    </td>
  </tr>
</table>
