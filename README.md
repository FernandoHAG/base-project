# 🧪 Atomic To-Do List App

Este projeto é uma aplicação de lista de tarefas (To-Do List) desenvolvida com **TypeScript** e seguindo os princípios do **Atomic Design**. O objetivo é demonstrar uma arquitetura de componentes escalável e reutilizável, aplicando boas práticas de design de interface e organização de código.

---

## 🚀 Funcionalidades

- ✅ Adicionar novas tarefas
- 📝 Editar o nome de tarefas
- ✔️ Marcar tarefas como concluídas
- 🗑️ Remover tarefas concluídas
- 💾 Persistência com Local Storage
- 💅 Estilização com CSS organizada por Atomic Design
- ✨ Animações para melhor experiência do usuário
- 🔍 Estrutura tipada com TypeScript
- 🧪 Configuração de ESLint e Prettier

---

## 📁 Estrutura de pastas baseada em Atomic Design

O projeto é estruturado conforme os princípios do [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), dividido em:

```
src/
├── components/
│   ├── atoms/         # Elementos básicos (botões, inputs, labels)
│   ├── molecules/     # Combinação de átomos (ex: TaskItem)
│   ├── organisms/     # Combinação de moléculas (ex: TaskList)
│   ├── templates/     # Layout base com organismos (ex: AppTemplate)
│   └── pages/         # Página principal que consome o template (ex: HomePage)
├── interfaces/        # Interfaces TypeScript (ex: Task interface)
├── utils/             # Funções auxiliares e manipulação de localStorage
├── styles/            # Estilização global e reset
└── App/            # Componente principal
```

---

## 🔧 Tecnologias e Ferramentas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/) (opcional para testes unitários)
- [CSS Modules](https://github.com/css-modules/css-modules)

---

## 📦 Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/FernandoHAG/base-project.git
cd base-project
git checkout atom

# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev
```

---

## 🧠 Decisões de Design

### Atomic Design

- **Atoms:** Incluem botões, inputs, checkboxes, etc. São os blocos fundamentais reutilizáveis.
- **Molecules:** Agrupam atoms, como o `TaskItem`, que junta um checkbox, label e botão de remover.
- **Organisms:** Agrupam molecules, como o `TaskList`, que mostra a lista completa.
- **Templates:** Controlam o layout e a estrutura geral da aplicação.
- **Pages:** São responsáveis por renderizar templates com dados reais.

### Tipagem

A interface principal `Task` foi definida em `interfaces/Task.ts`:

```ts
export interface Task {
  id: string;
  name: string;
  completed: boolean;
}
```

### Persistência

As tarefas são salvas no `localStorage`, garantindo que permaneçam mesmo após atualizar a página.

---

## ✅ Melhorias Extras (Bonus)

- [x] Salvamento das tarefas no Local Storage
- [x] Edição inline do nome das tarefas
- [x] Animações com transições CSS
- [x] ESLint + Prettier configurados
- [ ] Testes unitários com Jest (em desenvolvimento)

---

## 🧪 Testes

O projeto está preparado para testes com Jest. Caso deseje executar os testes (quando implementados):

```bash
npm run test
```

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

## ✍️ Autor

Desenvolvido por [Fernando H. de A. Gomes](https://github.com/FernandoHAG)
