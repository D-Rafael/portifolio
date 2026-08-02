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
- Ao tentar separar em dois commits (header+foto / docs), os dois `git add` acabaram juntados num commit so (`3018908`), com a mensagem do segundo commit ("docs: ...") mas o conteudo do primeiro (index.html + foto). Como o commit ja tinha sido enviado ao GitHub, optamos por nao reescrever (evitar amend + force push) e so seguir corrigindo dali.
- Typo classico: `dit add docs/` ao inves de `git add docs/` (bash: dit: command not found). O `git add` nao rodou, entao o commit seguinte nao teve nada pra commitar e o push nao teve nada pra enviar. Corrigido digitando `git add` certinho. Licao: sempre conferir a saida de cada comando antes de rodar o proximo (o `git status` ja mostraria "nothing added").

### Acertos e decisoes

- Optamos por digitar os comandos `git add`, `git commit` e `git push` manualmente no terminal (em vez de usar a interface grafica do VS Code), pra praticar de verdade.
- Recebido o modelo estetico do design (PDF com 4 paginas: Header/Hero, Skills, Projetos, Contato). Definido que e so referencia visual: o conteudo exato (textos, dados) pode ser ajustado/decidido no melhor criterio profissional quando nao estiver claro no PDF.
- Site vai ser uma pagina unica com secoes por ancora (`#sobre`, `#projetos`, `#contato`) e scroll suave (previsto no Milestone 4), nao paginas separadas.
- Footer nao veio no PDF do modelo: decidido deixar para depois (nao bloqueia o resto do Milestone 2 por enquanto).
- Foto de perfil vai aparecer em dois lugares: avatar pequeno no Header (concluido) e foto maior na secao Hero (Tarefa 3, ainda pendente).
- Tarefa 2 (Header/Navbar) concluida e validada.
- DECISAO REVISADA: logo do header trocado de texto (nome completo) para um logo estilizado `<DR/>` (estilo "tag de codigo"). Foto de perfil removida do header, vai ficar ao lado do texto da secao Sobre em vez de aparecer no Hero.
- CSS do logo `<DR/>` (guardado pra aplicar no Milestone 3):
  ```css
  .logo {
    font-family: 'Courier New', monospace;
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a1a1a;
  }
  .logo-accent {
    color: #00b894;
  }
  ```
- Header finalizado com o novo logo `<DR/>`: `<img>` da foto removido, link com nome completo removido (ficou duplicado com o `<DR/>` numa primeira tentativa, corrigido). Header final: logo `<DR/>` + nav (Sobre/Projetos/Contato) + botao Curriculo.
- Curriculo em PDF salvo em `assets/files/curriculum.pdf`, linkado nos botoes de CV do header e do Hero com atributo `download` (forca o navegador a baixar o arquivo ao inves de so abrir).
- Tarefa 3 (secao Hero/Home) concluida: saudacao, titulo (`Diogo Rafael - Assistente de TI & Desenvolvedor Front-end.`, usando hifen simples, nunca travessao), badge "Disponivel para oportunidades", paragrafo de bio (adaptado com base no perfil real: Assistente de TI II + 1,5 ano de graduacao em engenharia de software + 1 ano de estudo autodidata), botoes "Baixar CV" e "Ver Projetos", e card de estatisticas com 3 dados reais (2,5 anos estudando, cargo TI II, foco em Dev generalista).
- Currículo em PDF (`assets/files/curriculum.pdf`) lido pra extrair dados reais: bio ("Quem sou"), conhecimentos tecnicos e habilidades (soft skills). Usado como fonte de verdade pro conteudo do site, ao inves de inventar informacao.
- Tarefa 4 (secao Sobre) concluida: `<h2>Sobre mim</h2>`, foto de perfil ao lado do texto de bio (puxado do curriculo), `<h3>Skills</h3>` e grade com 4 categorias reais (Frontend: HTML/CSS/JavaScript; Backend: C, Python basico, Java basico; Ferramentas: Git, GitHub, VS Code, PostgreSQL, MySQL; Soft Skills: as 5 habilidades do curriculo).
- Tarefa 5 (secao Projetos) concluida: decidido nao inventar projetos ficticios. Grade com 3 cards: 1 card real (este proprio Portfolio, com tags HTML/CSS/JavaScript, link pro GitHub com `rel="noopener noreferrer"` por seguranca, e "Ver demo" com `href="#"` ate o deploy no Milestone 5) + 2 cards vazios escrito "Ainda sem projeto", pra reservar espaco pros proximos projetos.
- Observado: palavra "Portifolio" (com "i" extra) usada no titulo da pagina e nos textos, grafia correta seria "Portfolio". Usuario avisado, decidiu manter por enquanto (nome do repositorio no GitHub tambem esta assim).
- Tarefa 6 (secao Contato) concluida: formulario com labels ligadas aos inputs (`for`/`id`), campos Nome/Email/Mensagem com `required`, botao Enviar (ainda sem funcionar de verdade, isso e JS no Milestone 4). Painel de contato com dados reais: email (`mailto:`), telefone (`tel:`, incluido por decisao do usuario), prazo de resposta "ate 2 dias uteis", e links pro GitHub e LinkedIn.
- Tarefa 7 (Footer) concluida: copyright + links pro GitHub e LinkedIn, mesma protecao `rel="noopener noreferrer"`.
- Validacao final de semantica do HTML (ultimo item do Milestone 2): encontrado um pulo de hierarquia de titulos (h2 "Sobre mim" direto pra h4 das categorias de skills, sem h3 no meio). Corrigido adicionando `<h3>Skills</h3>`. Resto da pagina validado: um unico h1, h2 por secao, h3 nos cards, todo `target="_blank"` com `rel="noopener noreferrer"`, imagens com `alt`, labels ligadas aos inputs, sem id duplicado.
- MILESTONE 2 (Estrutura HTML) CONCLUIDO.
- Issues #1 e #2 fechadas no GitHub, Milestones 1 e 2 fechados tambem (todos os itens concluidos).
- Adicionado WhatsApp (`wa.me/5555996753660`) como novo canal de contato no painel da secao Contato.
- Adicionados icones SVG inline (sem dependencia externa, sem CDN) nos links de GitHub e LinkedIn do Footer. Decisao: SVG inline ao inves de biblioteca tipo Font Awesome, pra evitar dependencia externa e risco de quebra futura. SVGs marcados com `aria-hidden="true"` porque o texto do link (GitHub/LinkedIn) ja descreve o link pra leitor de tela.

### Ideias novas

- Adicionados icones (GitHub, LinkedIn, WhatsApp, Email, Telefone, olho/"ver" e das tecnologias: HTML5, CSS3, JavaScript, Python, Java, C, Git, PostgreSQL, MySQL, VS Code) usando SVG inline com padrao `<symbol>` + `<use>` (sem dependencia externa). SVGs baixados da fonte oficial do projeto Simple Icons (licenca CC0, dominio publico). Simbolos definidos uma vez no topo do `<body>`, referenciados via `<use href="#icon-X">` onde precisar. CONCLUIDO EM TODOS OS LUGARES: Footer, Skills (Frontend/Backend/Ferramentas), botoes de CV, card de Projetos (Ver demo + GitHub), painel de Contato inteiro (Email/Telefone/WhatsApp/Redes).

### Erros encontrados (icones)

- Ao adicionar o icone no "Ver demo", ficou uma `<a>` aninhada dentro de outra `<a>` (invalido em HTML) e o texto "Ver demo" duplicado. Corrigido substituindo o bloco inteiro por uma unica `<a>` limpa.

- Adicionados icones tambem no nav do Header (Sobre = icon-user, Projetos = icon-folder, Contato = reaproveita icon-email) e no botao "Ver Projetos" do Hero (icon-folder). Total de 19 simbolos na biblioteca, todos usados em pelo menos um lugar.

### Revisao final (antes do Milestone 3)

- Revisado o HTML inteiro secao por secao: nenhum erro estrutural encontrado (tags fechadas certinho, sem id duplicado, sem heading pulando nivel, todo link externo com `rel="noopener noreferrer"`, todo icone decorativo com `aria-hidden="true"`).
- 2 inconsistencias visuais anotadas pra resolver no CSS (nao sao bugs): (1) posicao do icone varia entre antes/depois do texto dependendo do botao; (2) icones do Footer sao 20x20, resto do site e 16x16. Decidido deixar pra ajustar durante a estilizacao.
- DECISAO PENDENTE PRO MILESTONE 3: colorir cada icone de tecnologia com a cor oficial da marca (ex: HTML5 laranja #E34F26, CSS3 azul #1572B6, JavaScript amarelo #F7DF1E), usando uma classe extra por icone (ex: `.icon-html5`) que sobrescreve o `color` (os SVGs usam `fill="currentColor"`, entao herdam a cor do CSS automaticamente). Atencao: amarelo do JS pode ter baixo contraste dependendo do fundo, testar visualmente.

---

## Milestone 3 - Estilizacao CSS

### Passo a passo / comandos

- Tarefa 1: criado `css/style.css` e linkado no `<head>` do `index.html` via `<link rel="stylesheet">`
- Tarefa 2: definida paleta de cores em `:root` (variaveis CSS) - fundo escuro azulado, texto quase-branco, roxo/lilas de destaque. Escolhida com base em psicologia das cores (roxo = criatividade/inovacao/sofisticacao, comum em marcas de tech) ja que o usuario nao tinha os hex exatos do modelo original.
- Tarefa 3: reset basico (box-sizing border-box, remove margem do body, remove estilo padrao de link/lista/imagem) + aplicado fundo/cor/fonte no body
- Tarefa 4: Header estilizado (flex com logo/nav/botao distribuidos, sticky no topo, `.icon` com vertical-align pra alinhar todos os icones do site de uma vez, `.logo`/`.logo-accent` adaptados pra usar a paleta nova, botao Curriculo preenchido com cor primaria)
- Validado visualmente no navegador (print do Live Server): Header ficou conforme esperado

### Erros encontrados

- Apos "Tarefa 4", o commit `733cc2f` (mensagem "estilo de Header") na verdade so continha a paleta e o reset - o CSS do Header nao tinha sido colado ainda antes do commit. Percebido ao comparar o arquivo local com o conteudo do commit. Corrigido colando o CSS do Header de novo (ainda nao commitado).

### Acertos e decisoes

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
