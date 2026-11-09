# Playwright · Conduit (Sign in e Sign up)

Testes automatizados de interface com **Playwright + JavaScript** para o **Conduit**, um clone do Medium usado em treinamento ([conduit.mate.academy](https://conduit.mate.academy)).

São 7 exercícios do módulo *Playwright Test Automation Core* da Mate Academy. Cada pasta é um passo da evolução, do primeiro teste até Page Object Model e configuração.

> Este repositório registra meus **estudos de automação**. Meu foco profissional hoje é QA manual (web, mobile e API). Veja o portfólio completo em **[sealtiey.github.io](https://sealtiey.github.io)**.

## Exercícios

| # | Pasta | O que pratiquei |
|---|---|---|
| 1 | [`01-sign-up-link`](01-sign-up-link) | Navegação e métodos básicos de página (`goto`, `click`, verificação de URL) |
| 2 | [`02-sign-in-flow`](02-sign-in-flow) | Fluxo completo de login com locators nativos (`getByRole`, `getByPlaceholder`) |
| 3 | [`03-sign-up-form-elements`](03-sign-up-form-elements) | Presença dos elementos do formulário com `toBeVisible()` |
| 4 | [`04-sign-up-negative`](04-sign-up-negative) | Cenários negativos: campos vazios e senha errada, validando a mensagem de erro com `toContainText()` |
| 5 | [`05-test-organization`](05-test-organization) | Organização em pastas (`signIn/`, `signUp/`) e `test.describe` com `beforeEach` |
| 6 | [`06-page-object-model`](06-page-object-model) | **Page Object Model**: páginas em `src/pages`, testes mais limpos e reutilizáveis |
| 7 | [`07-config-baseurl-browsers`](07-config-baseurl-browsers) | `baseURL` e execução em mais de um navegador no `playwright.config.js` |

## Cenários cobertos

- Sign in com sucesso e fluxo completo de login
- Sign up com sucesso (dados gerados com Faker)
- Erros esperados: e-mail vazio, senha vazia, senha incorreta e username vazio
- Links de navegação Sign in / Sign up

## Como ver o que eu fiz

Cada exercício tem **2 commits**: o template original da Mate Academy e, em seguida, a minha solução. Abra o histórico e clique em um commit **"Solução: …"** para ver exatamente o código que escrevi.

## Como rodar

```bash
cd 06-page-object-model   # ou qualquer outra pasta
npm ci
npx playwright install
npx playwright test
npx playwright show-report
```

> **Observação:** os testes de *Sign in com sucesso* usam uma conta de teste (`tester@tester.com`) que precisa existir no servidor. O Conduit de treino é reiniciado de tempos em tempos, então pode ser preciso criar essa conta antes de rodar. Os demais testes não dependem dela.

**Ferramentas:** Playwright · JavaScript · Node.js · Faker · Git
