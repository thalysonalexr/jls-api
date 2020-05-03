# Jointly Logistics Service API

A JLS é um serviço de logística destinado aos varejistas que se encontram sem alternativa para vendas nesse período de pandemia. Nosso principal objetivo é conectar estes varejistas em um novo fluxo comercial.

Ao invés de se comprometerem com a compra em lotes ou em grandes quantidades de produtos que não vãro sair da plateleira por um longo período de tempo - grandes prejuízos – estes podem fazer uso do seu espaço útil para armazenar por um curto período de tempo e destribuir produtos já adiquiridos por consumidores finais.

Esse serviço permite uma dinâmica única que conecta as três etapas da logística de fluxo comercial, transformando a maneira de como comprar, vender e distribuir.

---
## MVP

Serviço de logística para garantir distribuição e reposição de estoque de varejistas.

## Regras de negócio

Regra de negócio:

* O varejista deve aguardar todos os produtos do cliente para realizar a entrega;
* O cliente pode solicitar produtos de vários atacadistas diferentes;


## Requisitos funcionais

- [x] Cadastrar atacadistas
  - cnpj (unico)
  - fantasia
  - endereco (varios)
    - endereco
    - cidade
    - uf
    - latitude
    - longitude
  - contato (varios)
    - email
    - telefone (varios)
    - celular (varios)
  - produtos (varios)
    - nome
    - preco

- [x] Cadastrar varejistas
  - cnpj/mei (unico)
  - fantasia
  - endereco (varios)
    - endereco
    - cidade
    - uf
    - latitude
    - longitude
  - contato (varios)
    - email
    - telefone (varios)
    - celular (varios)
  - transporte (varios)
    - tipo
    - placa
  - raio_entrega
  - taxa

- [x] Cadastrar consumidores (clientes finais)
  - nome
  - cpf
  - endereco (varios)
    - endereco
    - cidade
    - uf
    - latitude
    - longitude
  - contato
    - email
    - telefone (varios)
    - celular (varios)

- [] Criar pedido
  - consumidor
  - varejista
  - atacadista (varios)
  - endereco de entrega (consumidor)
  - endereco varejista
  - produto item (varios)
  - subtotal
  - data criação/atualização
  - status (entregue, pendente, a caminho)

- [] Notificar consumidor final sobre quem sera o varejista
  - varejista
  - tempo de entrega
  - transporte
    - tipo
    - placa

- [] Notificar varejista sobre retirar no varejo ou confirmar entrega
  - retirada

- [] Notificar entrega do pedido ao varejista

- [] Notificar entrega do pedido ao atacadista

## Requisitos não funcionais

* Utilizar Mongo Atlas para armazenamento NoSQL em cloud gratuitamente.
* Utilizar Heroku Cloud para hospedagem.

considerar a utilização de notificação por SMS / Twilio
