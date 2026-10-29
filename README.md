# 🛒 Desafio Carrinho da Shopee

Projeto desenvolvido como desafio prático de programação, simulando um carrinho de compras inspirado na Shopee, com operações de adição, remoção e visualização de itens via terminal.

---

## 📋 Objetivo

Criar um carrinho de compras baseado no carrinho da Shopee, onde o usuário possa armazenar itens e fazer o cálculo de subtotais automaticamente.

---

## 🗂️ Estrutura do Projeto

```
shopee-cart/
├── src/
│   ├── index.js              # Ponto de entrada e menu interativo
│   ├── stock.js              # Dados do estoque de produtos
│   ├── services/
│   │   ├── cart.js           # Operações do carrinho (adicionar, remover, exibir)
│   │   └── item.js           # Seleção e exibição de itens do estoque
│   └── utils/
│       ├── prompt.js         # Instância centralizada do prompt-sync
│       └── format.js         # Formatação de valores monetários
└── package.json
```

---

## 🧩 Domínio da Aplicação

| Entidade | Arquivo | Responsabilidade |
|----------|---------|-----------------|
| Carrinho | `services/cart.js` | Gerencia os itens adicionados pelo usuário |
| Itens | `services/item.js` | Exibe e seleciona produtos do estoque |
| Estoque | `stock.js` | Lista de produtos disponíveis |

---

## ⚙️ Funcionalidades

- 📦 **Visualizar carrinho** — lista todos os itens adicionados com preço, quantidade e subtotal
- ➕ **Adicionar item** — escolha um produto do estoque e defina a quantidade
- ➖ **Remover item** — decrementa 1 unidade do item; remove do carrinho quando chega a zero
- 🗑️ **Deletar item** — remove o item completamente do carrinho, independente da quantidade
- 💰 **Total automático** — calcula e exibe o total do carrinho a cada visualização

---

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd shopee-cart

# Instale as dependências
npm install
```

### Execução

```bash
node src/index.js
```

---

## 🖥️ Exemplo de uso

```
=================================
==== Welcome to Shopee Cart! ====
=================================

Menu Options:
1. View Cart
2. Add Item to Cart
3. Remove Item from Cart
4. Delete Item from Cart
5. Exit

Select an option: 2

Available Items in Stock:
1. Laptop - Price: R$1000.00 | Available: 10
2. Mouse - Price: R$50.00 | Available: 20
...

Select an item by its number: 1
Enter the quantity: 2

Menu Options:
...

Select an option: 1

Shopee Cart List:
1. Laptop - R$1000.00 | 2x | Subtotal: R$2000.00

Total price: R$2000.00
```

---

## 🛠️ Tecnologias

- **Node.js** — runtime JavaScript
- **prompt-sync** — leitura de input síncrono no terminal
- **ES Modules** — sistema de módulos nativo (`import/export`)

