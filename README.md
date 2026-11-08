# BuzzFeed Angular Quizz

Um quiz no estilo BuzzFeed construído com Angular 14. O usuário responde a uma
sequência de perguntas e, ao final, recebe um resultado calculado a partir das
respostas escolhidas.

## Funcionalidades

- Perguntas e resultados carregados de um arquivo JSON (`src/assets/data/quizz_questions.json`).
- Barra de progresso e contador de perguntas.
- Cálculo do resultado com base na alternativa mais escolhida.
- Botão para refazer o quizz sem recarregar a página.

## Tecnologias

- [Angular](https://angular.io/) 14
- TypeScript (modo `strict`)

## Como rodar

Pré-requisitos: Node.js e o Angular CLI.

```bash
npm install
npm start
```

Acesse `http://localhost:4200/`. A aplicação recarrega automaticamente ao
alterar os arquivos-fonte.

## Build

```bash
npm run build
```

Os artefatos são gerados no diretório `dist/`.

## Testes

```bash
npm test
```

Executa os testes unitários via [Karma](https://karma-runner.github.io).

## Estrutura

```
src/app/
├── components/quizz/   Componente principal do quizz
├── pages/home/         Página que hospeda o quizz
├── models/             Interfaces de tipagem (Quizz, Question, Option)
└── assets/data/        Perguntas e resultados em JSON
```

## Personalizando o quizz

Edite `src/assets/data/quizz_questions.json` para mudar título, perguntas,
alternativas e resultados. Cada alternativa tem um `alias`, e o resultado final
corresponde ao `alias` mais escolhido.
