# Task Manager

 - Um gerenciador de tarefas simples criado em React para fins de aprendizado. Este projeto demonstra a criação de componentes React, uso de props e renderização dinâmica de elementos com base em listas.

## Funcionalidades

- Exibir um cabeçalho com o título do projeto.
- Renderizar dinamicamente uma lista de tarefas.
- Componentização com uso de **props** e **PropTypes** para validação.

## Tecnologias Utilizadas

- **React** - Biblioteca para criação de interfaces de usuário.
- **PropTypes** - Biblioteca para validação de propriedades nos componentes React.
- **CSS** - Para estilização simples (opcional).

## Estrutura do Projeto

```bash
task-manager/ ├── src/ │ ├── components/ │ │ ├── Header.js │ │ ├── TaskContainer.jsx │ │ └── Task.jsx │ ├── App.js │ └── index.js ├── public/ │ └── index.html ├── package.json └── README.md
```

## Como Usar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/task-manager.git
cd task-manager
```

## Validação com PropTypes

 - O componente Task valida as propriedades recebidas usando PropTypes:

```jsx
Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
```

## Melhorias Futuras

 - Adicionar suporte para adicionar e remover tarefas.
 - Implementar estilos personalizados com CSS ou bibliotecas como Tailwind.
 - Gerenciamento de estado com useState ou Redux.

## Contribuição

 - Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

```bash
│   │   ├── TaskContainer.jsx
│   │   └── Task.jsx
│   ├── App.js
│   └── index.js
├── public/
│   └── index.html
├── package.json
└── README.md
```

 - Como Usar
 
## Clone o repositório:

```git
git clone https://github.com/seu-usuario/task-manager.git
cd task-manager
```

## Instale as dependências:

```bash
npm install
```
## Inicie o servidor de desenvolvimento:

```bash
npm start
```

## Acesse o projeto no navegador:

```arduino
http://localhost:3000
```

![alt text](image-1.png)