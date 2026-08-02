# Diario do Projeto - Portfolio

Registro de acompanhamento do desenvolvimento do portfolio (HTML, CSS e JS puro), organizado por milestone. Cada secao guarda o passo a passo dos comandos executados, erros encontrados (e como foram resolvidos), acertos/decisoes tomadas e ideias novas que forem surgindo ao longo do processo.

---

## Milestone 1 - Setup do projeto

### Passo a passo / comandos

- Instalado o VS Code
- Instalada a extensao Live Server no VS Code
- Criada a pasta raiz do projeto (`portifolio`)
- Criadas as subpastas: `css/`, `js/`, `assets/img/`
- Criado o arquivo `index.html` vazio
- Repositorio Git local iniciado (`git init`)
- Repositorio remoto conectado (`origin` -> `github.com/D-Rafael/portifolio.git`)
- Primeiro commit feito e enviado (`git commit` + `git push`), commit `5eb89d3` ("Initial commit")

### Erros encontrados

- Nenhum registrado ate aqui.

### Acertos e decisoes

- Estrutura de pastas criada corretamente desde o inicio (`css/`, `js/`, `assets/img/`), facilitando organizar os arquivos nos proximos milestones.
- Repositorio conectado ao GitHub com 5 milestones e 5 issues (uma por milestone), cada issue com checklist proprio de tarefas.

### Ideias novas

- (vazio por enquanto)

### Nota de aprendizado

- O primeiro commit/push (`5eb89d3`) foi feito pela interface grafica do VS Code, nao digitando os comandos no terminal. O estado final (repo conectado ao remoto + commit enviado) esta correto, entao os checkboxes da Issue #1 continuam marcados. Mas como o objetivo e aprender de verdade, a partir do proximo commit (Milestone 2) os comandos `git add`, `git commit` e `git push` vao ser digitados manualmente no terminal, passo a passo.

---

## Milestone 2 - Estrutura HTML

### Passo a passo / comandos

- Tarefa 1: criado o esqueleto base do HTML5 no `index.html` (`<!doctype html>`, `<html lang="pt-BR">`, `<head>` com charset e viewport, `<body>` vazio)
- Corrigido `lang="en"` para `lang="pt-BR"` (idioma do conteudo do site)
- Praticado commit manual no terminal:
  ```
  git add index.html
  git commit -m "feat:add estrutura basica do html5"
  git push
  ```
- Commit `e82fe75` enviado ao GitHub com sucesso
- Tarefa 2: criado o Header/Navbar completo:
  - Foto de perfil (`assets/img/foto-perfil.jpg`) como avatar pequeno (40x40)
  - Link com o nome (Diogo Rafael Arbter da Silva) funcionando como "logo"
  - `<nav>` com lista de 3 links por ancora: Sobre (`#sobre`), Projetos (`#projetos`), Contato (`#contato`)
  - Botao "Curriculo" separado do `<nav>`, dentro do `<header>`

### Erros encontrados

- Mensagem do commit ficou `feat:add ...` sem espaco depois dos dois pontos (padrao correto seria `feat: add ...`). Nao foi corrigido (commit ja feito), so anotado pra prestar atencao no proximo.
- Atributo `alt` da imagem de perfil escrito com erro de digitacao ("Pergil" ao inves de "Perfil"). Corrigido.
- Botao "Curriculo" colocado inicialmente dentro do `<ul>` sem estar num `<li>` (invalido semanticamente: `<ul>` so pode ter `<li>` como filho direto). Corrigido: botao movido pra fora do `<nav>`, direto dentro do `<header>`.
- Pasta `docs/` (com este proprio diario) sumiu do disco em algum momento, antes de ser commitada. Como nunca foi versionada pelo Git, nao tinha como recuperar pelo historico. Arquivo recriado do zero com o conteudo que tinha em contexto. Licao: comitar o diario cedo, pra ele passar a ter historico no Git tambem.

### Acertos e decisoes

- Optamos por digitar os comandos `git add`, `git commit` e `git push` manualmente no terminal (em vez de usar a interface grafica do VS Code), pra praticar de verdade.
- Recebido o modelo estetico do design (PDF com 4 paginas: Header/Hero, Skills, Projetos, Contato). Definido que e so referencia visual: o conteudo exato (textos, dados) pode ser ajustado/decidido no melhor criterio profissional quando nao estiver claro no PDF.
- Site vai ser uma pagina unica com secoes por ancora (`#sobre`, `#projetos`, `#contato`) e scroll suave (previsto no Milestone 4), nao paginas separadas.
- Footer nao veio no PDF do modelo: decidido deixar para depois (nao bloqueia o resto do Milestone 2 por enquanto).
- Foto de perfil vai aparecer em dois lugares: avatar pequeno no Header (concluido) e foto maior na secao Hero (Tarefa 3, ainda pendente).
- Tarefa 2 (Header/Navbar) concluida e validada.

### Ideias novas

- (vazio por enquanto)

---

## Milestone 3 - Estilizacao CSS

### Passo a passo / comandos

- (ainda nao iniciado)

### Erros encontrados

- (vazio por enquanto)

### Acertos e decisoes

- (vazio por enquanto)

### Ideias novas

- (vazio por enquanto)

---

## Milestone 4 - Interatividade JS

### Passo a passo / comandos

- (ainda nao iniciado)

### Erros encontrados

- (vazio por enquanto)

### Acertos e decisoes

- (vazio por enquanto)

### Ideias novas

- (vazio por enquanto)

---

## Milestone 5 - Deploy e Publicacao

### Passo a passo / comandos

- (ainda nao iniciado)

### Erros encontrados

- (vazio por enquanto)

### Acertos e decisoes

- (vazio por enquanto)

### Ideias novas

- (vazio por enquanto)
