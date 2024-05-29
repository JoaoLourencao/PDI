
---
---

# Rodar local em sua máquina

## Node

Ter instalado o node na versão LTS

Instalar o node utilizando o [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm), pois facilita a instalação e a troca entre as versões do node caso seja necessário.

## Instalar as dependências

Utilizar o [yarn](https://yarnpkg.com/) e instalar as dependências com o comando abaixo:

```bash
yarn
```

Caso não tenha o yarn instalado, instale via npm que é mais fácil:

```bash
npm i -g yarn
```

## Rodar apontando para dev

```bash
yarn dev
```

## Comandos para gerar os svgs (caso não esteja sendo exibido)

# Gerar componentes SVG
```bash
yarn build:svg
```

------- 

# Convenções de Versionamento

As mensagens para todos os commits deverão seguir um padrão já estabelecido conforme abaixo:

A mensagem será:

```
{Type}: Mensagem

Onde o {Type} deverá ser alterado para algum dos tipos abaixo de acordo com as alterações feitas na atividade
```

**No exemplo acima o {Type} deve obrigatoriamente ser uma das opções abaixo:**

**`Fix`** - para uma correção de bug.

**`Update`** - seja para um aprimoramento compatível com versões anteriores ou para uma alteração
de regra que adicione problemas relatados.

**`New`** - implementou um novo recurso.

**`Breaking`** - para um aprimoramento ou recurso incompatível com versões anteriores.

**`Docs`** - alterações apenas na documentação.

**`Build`** - alterações apenas no processo do build.

**`Upgrade`** - para uma atualização de uma dependência.

**`Chore`** - para refatorações, adicionar testes, etc. (qualquer coisa que não seja voltada para
o usuário).

**Exemplo:**

```
New: Novo componente de TextArea com Float Label
```

---

# GIT FLOW

**OBS.: Nós não utilizamos a ferramenta git-flow de fato, apenas adotamos algumas diretrizes do git-flow para melhorar a organização dos nossos branchs.**

**`master`**: contém o nosso código de produção, todo o código que estamos desenvolvendo, em algum momento será “juntado” com essa branch.

**`develop`**: contém o código do nosso próximo deploy, isso significa que conforme as features vão sendo finalizadas elas vão sendo juntadas nessa branch para posteriormente passarem por mais uma etapa antes de ser juntada com a master.

**`feature/*`**: são branches para o desenvolvimento de uma funcionalidade específica, por convenção elas tem o nome iniciado por feature/, por exemplo: feature/cadastro-usuarios. Importante ressaltar que essas branches são criadas sempre à partir da branch develop.

**`hotfix/*`**: são branches responsáveis pela realização de alguma correção crítica encontrada em produção e por isso são criadas à partir da master. Importante ressaltar que essa branch deve ser juntada tanto com a master quanto com a develop.

**`release/*`**: tem uma confiança maior que a branch develop e que se encontra em nível de preparação para ser juntada com a master e com a develop (caso alguma coisa tenha sido modificada na branch em questão)

---
