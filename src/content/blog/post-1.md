---

title: "A Convergência Estrutural: Low-Code como Resolução Definitiva para o Problema dos 70% na Engenharia de Software Assistida por Inteligência Artificial"
description: "A integração de plataformas low-code com a Inteligência Artificial resolve o \"problema dos 70%\" ao fornecer a infraestrutura de governança e automação necessária para transpor a \"última milha\" do desenvolvimento de software corporativo. Ao contrário do ambiente de codificação tradicional (high-code), o low-code impõe abstrações e guardrails arquitetônicos que impedem a IA de gerar código inseguro ou fora dos padrões organizacionais, garantindo segurança e padronização por design. Além disso, a representação visual da lógica reduz drasticamente a carga cognitiva dos desenvolvedores, facilitando a validação de algoritmos gerados por IA e combatendo o fenômeno do \"vibe coding\" através de uma compreensão mais intuitiva e transparente baseada na teoria da codificação dual. Por fim, ao automatizar todo o ciclo de vida de desenvolvimento (SDLC) — da especificação e documentação automática à implantação em um clique — essas plataformas transformam protótipos de IA em sistemas escaláveis e prontos para produção, permitindo que as empresas capturem ganhos reais de produtividade sem acumular dívida técnica."
pubDate: "Dec 21 2025"
heroImage: "../../assets/post-1.png"

---


  
O cenário do desenvolvimento de software no final de 2025 é caracterizado por uma tensão dialética entre a promessa de velocidade infinita e a realidade da degradação sistêmica da qualidade. A integração massiva de Modelos de Linguagem de Grande Escala (LLMs) e assistentes de codificação baseados em Inteligência Artificial Generativa (GenAI) prometeu uma revolução na produtividade, mas o que emergiu foi um fenômeno complexo definido como o "Paradoxo da Produtividade".[1] Enquanto os desenvolvedores relatam uma percepção de ganho de velocidade de até 55,8% em tarefas isoladas, as métricas longitudinais de ciclo de vida completo revelam que o esforço real para colocar código assistido por IA em produção aumentou significativamente.[1]  
  
No centro dessa crise está o "Problema dos 70%". Esta métrica descreve a capacidade das IAs atuais de gerar rapidamente o esqueleto, os algoritmos padrão e os componentes genéricos de uma aplicação — os primeiros 70% do trabalho.[1] No entanto, os 30% restantes, referidos como a "Última Milha", que englobam a integração contextual, a conformidade de segurança, o alinhamento arquitetônico e a lógica de negócios específica, tornaram-se o novo gargalo da engenharia moderna.[1] O código gerado por IA, embora volumoso, é frequentemente desconectado do ecossistema corporativo, forçando desenvolvedores sêniores a gastar horas refatorando e corrigindo o que foi gerado em segundos.[5]  
  
Este relatório demonstra que a solução para esse impasse não reside em tornar os LLMs mais potentes no sentido puramente textual, mas em integrá-los às plataformas de desenvolvimento de Low-Code (LCDP). Ao fornecer abstrações e guardrails que a IA não pode ignorar, reduzir a carga cognitiva necessária para a validação e automatizar o ciclo de vida de desenvolvimento de software (SDLC) de ponta a ponta, as plataformas de Low-Code surgem como a infraestrutura de governança indispensável para a era da IA.[6]  
  
**O Estado da Engenharia Assistida por IA em 2025: O Problema dos 70%**  
  
A onipresença da IA no desenvolvimento de software é um fato histórico consumado em 2025. Dados do Stack Overflow Developer Survey indicam que 84% dos desenvolvedores utilizam ferramentas de IA em seus fluxos de trabalho diários.[1] No entanto, essa adoção em massa trouxe à tona o "Déficit de Confiança": embora 84% utilizem as ferramentas, 46% relatam não confiar na precisão do que é gerado pela IA.[1] Essa desconfiança é validada por dados empíricos que mostram que o código gerado por IA contém 1,7 vezes mais defeitos do que o código escrito por humanos, com um aumento alarmante de 2,74 vezes em vulnerabilidades de segurança.[1]  
  
**A "Última Milha" e o Fracasso do High-Code para citizen developer**  
  
O problema dos 70% ocorre porque os LLMs operam em um vácuo de contexto arquitetônico. Eles são treinados em repositórios públicos e conseguem mimetizar padrões universais, mas falham ao tentar entender as nuances de sistemas legados há 10 anos ou as políticas de segurança específicas de uma organização.[1] Em ambientes de "High-Code" (codificação manual tradicional), a IA tem liberdade total para sugerir qualquer padrão, o que frequentemente resulta em código "espaguete", pacotes alucinados ou lógicas de autenticação falhas que os revisores humanos, sobrecarregados pelo volume de código, acabam por "carimbar" sem a devida diligência.[1]  
  
A tabela a seguir detalha a divergência entre a percepção de produtividade e os resultados reais no ambiente corporativo de 2025.

|   |   |   |
|---|---|---|
|**Métrica de Engenharia**|**Impacto da IA em Greenfield (Novo)**|**Impacto da IA em Brownfield (Manutenção)**|
|Tempo de Conclusão|\-55.8% (Mais rápido)|\+19.0% (Mais lento) [1]|
|Densidade de Bugs|1.2x Baseline|1.7x Baseline [1]|
|Carga de Revisão de Código|Moderada|\+91.0% (Gargalo crítico) [3]|
|Percepção do Desenvolvedor|Acreditam ser 35% mais rápidos|Acreditam ser 20% mais rápidos (Ilusão) [1]|

Esta "Ilusão de Produtividade" mascara um custo oculto: a dívida técnica acumulada. Estima-se que as equipes de P&D gastem agora entre 70% e 80% do seu tempo corrigindo ou integrando código gerado por IA, o que reduz a capacidade de inovação efetiva.[1]  
  
**Perspectiva 1: Abstrações e Guardrails como Pilares de Governança**  
  
A primeira grande vantagem das plataformas de Low-Code em relação ao desenvolvimento High-Code puro é a imposição de limites estruturais. Em um ambiente de texto aberto, o LLM pode ignorar as melhores práticas em favor da probabilidade estatística. Em contrapartida, as plataformas de Low-Code como OutSystems e Mendix oferecem abstrações e guardrails que o LLM é fisicamente incapaz de violar.[6]  
  
**A Falta de Liberdade como Vetor de Segurança e Arquitetura**  
  
Um dos pilares do Low-Code moderno é que ele não gera apenas código; gera modelos que são interpretados por uma plataforma governada. A "falta de liberdade" de escrever qualquer linha de código funciona a favor da padronização. Quando uma IA atua em uma plataforma como o OutSystems, ela utiliza a OutSystems Language, que serve como um blueprint legível pela IA para todo o portfólio de aplicações, garantindo que o que é gerado se comporte de maneira previsível e siga as especificações exatas da plataforma.[6]  
  
As plataformas LCDP forçam a IA a operar dentro de um espaço de solução finito:

- **Componentes Padronizados:** Em vez de "inventar" uma função de conexão a um banco de dados, a IA é instruída a usar blocos de ação comprovados e seguros.[8]
- **Arquitetura Imutável:** A plataforma define como as camadas de dados, lógica e interface se comunicam entre si. O LLM não pode sugerir uma arquitetura que viole esses princípios, pois a plataforma simplesmente não permitiria a execução de tal padrão.[8]
- **Segurança por Design:** Protocolos de autenticação, criptografia e proteção contra injeção de SQL são integrados à infraestrutura da plataforma. A IA ajuda a construir a lógica de negócios, mas a "tubulação" de segurança é gerida pela plataforma, mitigando o risco de vulnerabilidades críticas que assolam o código gerado manualmente.[13]

**Execução vs. Revisão: O Controle na Camada de Infraestrutura**  
  
Diferentemente do High-Code, em que a segurança depende da revisão humana exaustiva de cada linha, o Low-Code aplica a segurança na camada de infraestrutura. Se a IA gerar uma lógica que tente acessar dados sensíveis sem autorização, essa ação é bloqueada em tempo de execução pela plataforma, pois falha nas verificações contextuais e de proveniência.[14] Esse modelo de "infraestrutura como governança" permite que a IA acelere o desenvolvimento sem que a velocidade se torne um fator de segurança.

|   |   |   |
|---|---|---|
|**Abordagem de Governança**|**High-Code Assistido por IA**|**Low-Code com IA Integrada**|
|**Mecanismo de Controle**|Revisão manual de PR (Pull Request)|Guardrails arquitetônicos nativos [6]|
|**Flexibilidade vs Rigor**|Total liberdade (risco de antipadrões)|Liberdade guiada (foco em boas práticas) [8]|
|**Conformidade (Compliance)**|Validada após a escrita do código|Aplicada durante o design e runtime [14]|
|**Dívida Técnica**|Alta (código fragmentado e não idiossincrático)|Baixa (modelos padronizados e reutilizáveis) [8]|

**Perspectiva 2: Superando o Vazio de Compreensão do Vibe Coding**  
  
O fenômeno do "Vibe Coding" — em que o desenvolvedor codifica com base em uma "vibe" ou sensação de que a IA está produzindo o que foi solicitado — é inerentemente perigoso, pois o usuário muitas vezes não entende a lógica subjacente e, portanto, não pode validá-la.[1] No High-Code, a barreira de entrada para a compreensão é elevada: entender centenas de linhas de JavaScript ou de Python requer anos de experiência. As plataformas de Low-Code resolvem isso através de uma curva de aprendizado mais suave e representações visuais da lógica.[19]  
  
**A Teoria da Codificação Dual e a Validação Visual**  
  
A psicologia cognitiva, especificamente a Teoria da Codificação Dual, sugere que o cérebro humano processa informações de forma mais eficaz quando são apresentadas tanto de forma verbal (texto) quanto visual (imagens/fluxogramas).[17] Ao transformar o código textual abstrato em modelos visuais, o Low-Code reduz drasticamente a carga cognitiva necessária para validar o que a IA gerou.  
  
Estudos realizados em 2024 e 2025, comparando a carga cognitiva entre linguagens textuais (como Python) e visuais (como Algot), mostram que os usuários experimentam uma carga cognitiva negativa (extranímica e intrínseca) significativamente menor em ambientes visuais.[21] Isso permite que mesmo um usuário com menos experiência técnica seja treinado para entender e validar o fluxo de dados e a lógica de decisão gerados pela IA, pois a representação visual torna os erros de lógica e as redundâncias imediatamente aparentes.[21]  
  
**Democratização com Compreensão: Do "Carimbo" à Verificação**  
  
O problema do "Rubber-Stamping" (aprovação cega) no High-Code é impulsionado pela fadiga de revisão. No Low-Code, a transparência dos modelos visuais atua como um antídoto. Como a lógica é expressa em fluxos de negócios e diagramas de processos, o desenvolvedor (ou o analista de negócios) atua como um arquiteto que verifica a intenção, e não como um compilador humano procurando erros de sintaxe ou vazamentos de memória.[8]  
  
Esta mudança fundamental permite que as organizações treinem cidadãos desenvolvedores (Citizen Developers) para que sejam supervisores eficazes da IA. Em vez de exigir o domínio de uma sintaxe complexa, o treinamento foca na lógica de processos e nas regras de negócio, domínios em que esses usuários já possuem expertise.[7]

|   |   |   |
|---|---|---|
|**Fator de Aprendizado**|**High-Code (Tradicional)**|**Low-Code (Visual/Declarativo)**|
|**Base de Validação**|Sintaxe textual complexa|Modelos visuais e fluxogramas [23]|
|**Carga Cognitiva**|Alta (exige decodificação mental)|Baixa (aproveita a codificação dual) [21]|
|**Tempo de Treinamento**|Meses a anos para proficiência|Semanas para validação eficaz [28]|
|**Capacidade de Auditoria**|Opaca para não especialistas|Transparente para stakeholders de negócio [12]|

**Perspectiva 3: Automação Total do SDLC e a Resolução dos 30% Finais**  
  
A terceira perspectiva crucial é que a maioria das plataformas de Low-Code de elite oferece o SDLC (Software Development Life Cycle) completo e automatizado. No desenvolvimento High-Code, a IA pode escrever 70% da função, mas o desenvolvedor ainda precisa gerenciar manualmente a especificação, a documentação, a criação de testes, o provisionamento de infraestrutura e a implantação (30% restantes).  
  
**Integrando a Especificação à Produção com Poucos Cliques**  
  
As plataformas de Low-Code funcionam como "fábricas de software" integradas. Elas não apenas geram o artefato, mas também o processo. Quando uma IA atua dentro de uma plataforma como o Outsystems ou o ServiceNow, ela está inserida em um ecossistema que automatiza as tarefas que normalmente causam o gargalo da "Última Milha".[6]

- **Documentação Automática:** Como o desenvolvimento é baseado em modelos, a documentação técnica é gerada em tempo real a partir da estrutura da aplicação. Isso elimina o problema da documentação obsoleta, citado como um dos maiores entraves à felicidade e à produtividade das equipes.[33]
- **Testes de Qualidade Integrados:** As plataformas LCDP utilizam IA para gerar cenários de teste, simular comportamento de usuários e validar fluxos de trabalho automaticamente antes da implantação. Isso reduz o tempo gasto em QA, que tradicionalmente consome de 30% a 40% dos recursos do projeto.[30]
- **Implantação de "Um Clique":** A complexidade do DevOps é abstraída. A plataforma lida com o provisionamento de servidores, o balanceamento de carga, a indexação de bancos de dados e as verificações de segurança de forma padronizada e escalável.[6]

**Escalabilidade e Segurança Padronizadas**  
  
Ao automatizar o SDLC, as plataformas de Low-Code garantem que o "código de IA" não seja um protótipo frágil, e sim um sistema robusto e extensível. O analista de TI não precisa se preocupar com a verificação de que o desenvolvedor seguiu os protocolos de segurança da empresa; a plataforma impõe esses protocolos em cada estágio, desde a especificação até a produção.[6] Isso permite que a organização atenda à demanda crescente por novas aplicações (o backlog de TI) sem comprometer a integridade dos sistemas.[37]  
  
A tabela a seguir compara a gestão do ciclo de vida entre as abordagens.

|   |   |   |
|---|---|---|
|**Fase do SDLC**|**Gestão Manual (High-Code + IA)**|**Gestão de Plataforma (Low-Code)**|
|**Especificação**|Documentos isolados, risco de desalinhamento|Requisitos integrados ao modelo visual [30]|
|**Documentação**|Manual, frequentemente incompleta ou obsoleta|Gerada automaticamente a partir do modelo [13]|
|**Testes (QA)**|Escritos manualmente, muitas vezes ignorados|IA-driven, automação nativa e integrada [30]|
|**Implantação**|Pipelines de CI/CD complexos e manuais|One-click deployment com análise de impacto [6]|
|**Escalabilidade**|Dependente de configuração de infraestrutura|Auto-scaling nativo e governado [6]|

**O Paradigma Agentic e o Futuro das Plataformas em 2026**  
  
À medida que avançamos para 2026, a indústria está se movendo de assistentes passivos (Copilots) para agentes autônomos (Agents). Um agente é capaz de perseguir um objetivo de alto nível através de um loop recursivo de planejamento, execução e reflexão.[1]  
  
**Orquestração de Múltiplos Agentes em Ambientes Low-Code**  
  
O desafio de 2026 será a governança desses agentes autônomos. As plataformas de Low-Code estão se posicionando como a "torre de controle" para essa força de trabalho digital. Plataformas como o OutSystems Agent Builder e o ServiceNow Now Assist for Creator permitem que múltiplos agentes trabalhem em paralelo — um projetando o esquema de dados, outro a interface e um terceiro a lógica de integração — tudo sob uma estrutura de governança centralizada.[30]  
  
Essa abordagem "Agentic-Platform" resolve o problema da fragmentação. Em vez de ter dezenas de scripts de IA desconectados, os agentes operam em um ecossistema governado que fornece a telemetria, o controle de custos e a visibilidade necessários para escalar a automação de forma segura.[40]  
  
**O Papel do Desenvolvedor: De Escritor a Arquiteto de Políticas**  
  
Neste novo paradigma, o desenvolvedor humano não se torna obsoleto, mas o seu papel é transformado. Ele deixa de ser um escritor de sintaxe para se tornar:

- **Arquiteto de Sistemas:** Definindo as fronteiras e as restrições em que os agentes podem operar.
- **Engenheiro de Governança:** Escrevendo a "Política como Código" que restringe as IAs.[1]
- **Validador de Resultados:** Utilizando a transparência visual do Low-Code para garantir que o resultado final atenda aos objetivos de negócio e aos padrões éticos da organização.

**Impacto Econômico: Reduzindo a "Hipoteca de Manutenção"**  
  
A dívida técnica é frequentemente descrita como uma hipoteca que as organizações pagam sobre a própria capacidade de inovar. O uso descontrolado de IA em High-Code está acelerando essa hipoteca a taxas insustentáveis.[1] O Low-Code, ao contrário, atua como um mecanismo de desalavancagem.  
  
**Eficiência de Custos e ROI**  
  
O custo de desenvolvimento em Low-Code é estimado em 40% a 60% menor do que o desenvolvimento High-Code tradicional, devido à redução do tamanho das equipes e dos recursos necessários.[28] Mais importante ainda, o custo de manutenção a longo prazo é drasticamente reduzido, pois a plataforma lida com as atualizações de infraestrutura, patches de segurança e compatibilidade de linguagens.[15]

|   |   |   |
|---|---|---|
|**Modelo de Custos**|**Desenvolvimento High-Code + IA**|**Desenvolvimento Low-Code + IA**|
|**Custo Inicial (CAPEX)**|Moderado (IA acelera a escrita inicial)|Baixo (Modelos pré-construídos e IA) [7]|
|**Custo de Manutenção (OPEX)**|Muito Alto (Dívida técnica e refatoração)|Moderado a Baixo (Patches automáticos) [15]|
|**Risco Financeiro**|Alto (Vulnerabilidades e falhas de lógica)|Baixo (Guardrails e conformidade nativa) [1]|
|**Velocidade de Entrega**|Ilusória (Gargalos na revisão e QA)|Real (SDLC automatizado e integrado) [1]|

**Conclusão: A Síntese como Imperativo Estratégico**  
  
O Problema dos 70% revelou que a Inteligência Artificial, por si só, é uma ferramenta incompleta para a engenharia de software corporativa. A velocidade ganha na fase de codificação é perdida na "Última Milha" devido à falta de contexto, segurança e governança. O "Vibe Coding" no High-Code cria sistemas frágeis, opacos e difíceis de manter, sobrecarregando os desenvolvedores sêniores e gerando riscos sistêmicos à organização.  
  
As plataformas de Low-Code oferecem a solução definitiva para esse paradoxo. Ao fornecer uma infraestrutura de guardrails que a IA não pode ignorar, elas garantem que a produtividade não venha à custa da qualidade. Por meio de abstrações visuais, elas reduzem a carga cognitiva e permitem uma validação real e democrática do que é gerado. E ao automatizar o SDLC completo, elas transformam o "código de IA" em software de classe empresarial, pronto para produção, escalável e seguro.  
  
Para a liderança de TI em 2026, o imperativo é claro: parar de perseguir a velocidade bruta por meio de ferramentas de codificação isoladas e começar a construir ecossistemas de desenvolvimento governados. A convergência entre o Low-Code e a IA Generativa não é apenas uma evolução tecnológica; é o nascimento de uma nova forma de engenharia, em que a criatividade humana é amplificada por agentes inteligentes, mas mantida segura e alinhada por plataformas robustas. O futuro do desenvolvimento de software não será escrito linha por linha; será modelado, orquestrado e governado.[1]  
  
**Referências citadas**

1. AI Coding Assistants: Productivity Paradox
2. The Productivity Paradox of AI Coding Assistants - Cerbos, acessado em dezembro 21, 2025, [https://www.cerbos.dev/blog/productivity-paradox-of-ai-coding-assistants](https://www.google.com/url?source=gmail&sa=E&q=https://www.cerbos.dev/blog/productivity-paradox-of-ai-coding-assistants)
3. Continuous Fluid Flow: How AI Is Compressing the Software Delivery Cycle, acessado em dezembro 21, 2025, [https://dev.to/cleberdelima/continuous-fluid-flow-how-ai-is-compressing-the-software-delivery-cycle-3f20](https://www.google.com/url?source=gmail&sa=E&q=https://dev.to/cleberdelima/continuous-fluid-flow-how-ai-is-compressing-the-software-delivery-cycle-3f20)
4. The Annual AI Governance Report 2025: Steering the Future of AI - ITU, acessado em dezembro 21, 2025, [https://www.itu.int/epublications/publication/the-annual-ai-governance-report-2025-steering-the-future-of-ai](https://www.google.com/url?source=gmail&sa=E&q=https://www.itu.int/epublications/publication/the-annual-ai-governance-report-2025-steering-the-future-of-ai)
5. Beyond the Hype: A Leader's Guide to Software Development Metrics in the Age of AI | by Justin Hamade | Nov, 2025 | Medium, acessado em dezembro 21, 2025, [https://medium.com/@justhamade/beyond-the-hype-a-leaders-guide-to-software-development-metrics-in-the-age-of-ai-129cd6d2fa7b](https://www.google.com/url?source=gmail&sa=E&q=https://medium.com/%40justhamade/beyond-the-hype-a-leaders-guide-to-software-development-metrics-in-the-age-of-ai-129cd6d2fa7b)
6. AI-Powered Low-Code Platform for Apps and Agents | OutSystems, acessado em dezembro 21, 2025, [https://www.outsystems.com/low-code-platform/](https://www.google.com/url?source=gmail&sa=E&q=https://www.outsystems.com/low-code-platform/)
7. Low-Code, high impact: the new frontier of AI accessibility - Compact, acessado em dezembro 21, 2025, [https://www.compact.nl/articles/low-code-high-impact-the-new-frontier-of-ai-accessibility/](https://www.google.com/url?source=gmail&sa=E&q=https://www.compact.nl/articles/low-code-high-impact-the-new-frontier-of-ai-accessibility/)
8. Don't underestimate low-code in an AI world - LeadDev, acessado em dezembro 21, 2025, [https://leaddev.com/ai/dont-underestimate-low-code-in-an-ai-world](https://www.google.com/url?source=gmail&sa=E&q=https://leaddev.com/ai/dont-underestimate-low-code-in-an-ai-world)
9. Microsoft study shows AI assistants help with development for programmers who are blind or have low vision, acessado em dezembro 21, 2025, [https://www.microsoft.com/en-us/research/articles/microsoft-study-shows-ai-assistants-help-with-development-for-programmers-who-are-blind-or-have-low-vision/](https://www.google.com/url?source=gmail&sa=E&q=https://www.microsoft.com/en-us/research/articles/microsoft-study-shows-ai-assistants-help-with-development-for-programmers-who-are-blind-or-have-low-vision/)
10. The inevitable rise of poor code quality in AI-accelerated codebases - Sonar, acessado em dezembro 21, 2025, [https://www.sonarsource.com/blog/the-inevitable-rise-of-poor-code-quality-in-ai-accelerated-codebases/](https://www.google.com/url?source=gmail&sa=E&q=https://www.sonarsource.com/blog/the-inevitable-rise-of-poor-code-quality-in-ai-accelerated-codebases/)
11. A new spin on SDLC is solving a big problem in industrial AI - Hitachi Digital, acessado em dezembro 21, 2025, [https://hitachidigital.com/insights/blog/a-new-spin-on-sdlc-is-solving-a-big-problem-in-industrial-ai/](https://www.google.com/url?source=gmail&sa=E&q=https://hitachidigital.com/insights/blog/a-new-spin-on-sdlc-is-solving-a-big-problem-in-industrial-ai/)
12. Low-Code Principle #8, Governance & Control: Good Guardrails Make Good Applications, acessado em dezembro 21, 2025, [https://www.mendix.com/blog/low-code-principle-8-governance-and-control/](https://www.google.com/url?source=gmail&sa=E&q=https://www.mendix.com/blog/low-code-principle-8-governance-and-control/)
13. Generative AI and Low-Code: Use Cases for Enterprises - Appian, acessado em dezembro 21, 2025, [https://appian.com/blog/acp/process-automation/generative-ai-low-code-use-cases](https://www.google.com/url?source=gmail&sa=E&q=https://appian.com/blog/acp/process-automation/generative-ai-low-code-use-cases)
14. AI-generated code security requires infrastructure enforcement, not review : r/cybersecurity, acessado em dezembro 21, 2025, [https://www.reddit.com/r/cybersecurity/comments/1ovw5eh/aigenerated_code_security_requires_infrastructure/](https://www.google.com/url?source=gmail&sa=E&q=https://www.reddit.com/r/cybersecurity/comments/1ovw5eh/aigenerated_code_security_requires_infrastructure/)
15. Enhancing Application Security with Low-Code Platforms - DronaHQ, acessado em dezembro 21, 2025, [https://www.dronahq.com/enhancing-application-security-with-low-code/](https://www.google.com/url?source=gmail&sa=E&q=https://www.dronahq.com/enhancing-application-security-with-low-code/)
16. Low-code app development guide | Google Cloud, acessado em dezembro 21, 2025, [https://cloud.google.com/discover/what-is-low-code](https://www.google.com/url?source=gmail&sa=E&q=https://cloud.google.com/discover/what-is-low-code)
17. Addressing educational overload with generative AI through dual coding and cognitive load theories - PubMed, acessado em dezembro 21, 2025, [https://pubmed.ncbi.nlm.nih.gov/40779508/](https://www.google.com/url?source=gmail&sa=E&q=https://pubmed.ncbi.nlm.nih.gov/40779508/)
18. October 2025 | Anaconda, acessado em dezembro 21, 2025, [https://www.anaconda.com/newsletters/2025-10-numerically-speaking](https://www.google.com/url?source=gmail&sa=E&q=https://www.anaconda.com/newsletters/2025-10-numerically-speaking)
19. AI-Driven App Development: Low-Code and No-Code Innovations Set to Dominate 2026, acessado em dezembro 21, 2025, [https://medium.com/@TechWizeITConsulting/ai-driven-app-development-low-code-and-no-code-innovations-set-to-dominate-2026-d75ba22dcf1e](https://www.google.com/url?source=gmail&sa=E&q=https://medium.com/%40TechWizeITConsulting/ai-driven-app-development-low-code-and-no-code-innovations-set-to-dominate-2026-d75ba22dcf1e)
20. The Impact of Generative AI on Low Code - GeneXus Consulting, acessado em dezembro 21, 2025, [https://www.genexusconsulting.com/en/insights/ai-and-low-code/](https://www.google.com/url?source=gmail&sa=E&q=https://www.genexusconsulting.com/en/insights/ai-and-low-code/)
21. Comparing Cognitive Load Among Undergraduate Students Programming in Python and the Visual Language Algot - Ethz, acessado em dezembro 21, 2025, [https://people.inf.ethz.ch/~sverrirt/pdf/algotcl2024.pdf](https://www.google.com/url?source=gmail&sa=E&q=https://people.inf.ethz.ch/~sverrirt/pdf/algotcl2024.pdf)
22. Dual Coding and Cognitive Load - The Learning Scientists, acessado em dezembro 21, 2025, [https://www.learningscientists.org/blog/2025/5/29](https://www.google.com/url?source=gmail&sa=E&q=https://www.learningscientists.org/blog/2025/5/29)
23. 25 Best Low-Code Platforms for 2025 (Tried and Tested), acessado em dezembro 21, 2025, [https://www.superblocks.com/blog/low-code-platforms](https://www.google.com/url?source=gmail&sa=E&q=https://www.superblocks.com/blog/low-code-platforms)
24. PWCT2: A Self-Hosting Visual Programming Language Based on Ring with Interactive Textual-to-Visual Code Conversion - MDPI, acessado em dezembro 21, 2025, [https://www.mdpi.com/2076-3417/15/3/1521](https://www.google.com/url?source=gmail&sa=E&q=https://www.mdpi.com/2076-3417/15/3/1521)
25. Low-code LLM Systems Overview - Emergent Mind, acessado em dezembro 21, 2025, [https://www.emergentmind.com/topics/low-code-llm-systems](https://www.google.com/url?source=gmail&sa=E&q=https://www.emergentmind.com/topics/low-code-llm-systems)
26. (PDF) Citizen vs. Professional Developers: Differences and Similarities of Skills and Training Requirements for Low Code Development Platforms - ResearchGate, acessado em dezembro 21, 2025, [https://www.researchgate.net/publication/364180950_Citizen_vs_Professional_Developers_Differences_and_Similarities_of_Skills_and_Training_Requirements_for_Low_Code_Development_Platforms](https://www.google.com/url?source=gmail&sa=E&q=https://www.researchgate.net/publication/364180950_Citizen_vs_Professional_Developers_Differences_and_Similarities_of_Skills_and_Training_Requirements_for_Low_Code_Development_Platforms)
27. No-Code vs AI-Generated Apps: What Businesses Should Choose in 2026 - Synergy Labs, acessado em dezembro 21, 2025, [https://www.synergylabs.co/blog/no-code-vs-ai-generated-apps-what-businesses-should-choose-in-2026](https://www.google.com/url?source=gmail&sa=E&q=https://www.synergylabs.co/blog/no-code-vs-ai-generated-apps-what-businesses-should-choose-in-2026)
28. Low-Code vs. No-Code: What's the Difference? | IBM, acessado em dezembro 21, 2025, [https://www.ibm.com/think/topics/low-code-vs-no-code](https://www.google.com/url?source=gmail&sa=E&q=https://www.ibm.com/think/topics/low-code-vs-no-code)
29. Unleashing innovation using low code/no code – The age of the citizen developer, acessado em dezembro 21, 2025, [https://www.adlittle.com/en/insights/prism/unleashing-innovation-using-low-codeno-code-%E2%80%93-age-citizen-developer](https://www.google.com/url?source=gmail&sa=E&q=https://www.adlittle.com/en/insights/prism/unleashing-innovation-using-low-codeno-code-%25E2%2580%2593-age-citizen-developer)
30. Low-Code As We Know It Is Dead – Long Live The New Era Of AI-Driven Development, acessado em dezembro 21, 2025, [https://www.synapx.com/low-code-evolving-ai-driven-development/](https://www.google.com/url?source=gmail&sa=E&q=https://www.synapx.com/low-code-evolving-ai-driven-development/)
31. AI-Assisted Development in Action with Mendix, acessado em dezembro 21, 2025, [https://www.mendix.com/blog/how-mendix-supports-ai-augmented-development/](https://www.google.com/url?source=gmail&sa=E&q=https://www.mendix.com/blog/how-mendix-supports-ai-augmented-development/)
32. Enhance developer productivity with Now Assist - ServiceNow, acessado em dezembro 21, 2025, [https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/resource-center/ebook/eb-ada-genai-guide.pdf](https://www.google.com/url?source=gmail&sa=E&q=https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/resource-center/ebook/eb-ada-genai-guide.pdf)
33. Harness brings vibe coding to database migration with new AI-Powered Database Migration Authoring feature - SD Times, acessado em dezembro 21, 2025, [https://sdtimes.com/data/harness-brings-vibe-coding-to-database-migration-with-new-ai-powered-database-migration-authoring-feature/](https://www.google.com/url?source=gmail&sa=E&q=https://sdtimes.com/data/harness-brings-vibe-coding-to-database-migration-with-new-ai-powered-database-migration-authoring-feature/)
34. Leverage AI-Driven Software Development the Right Way in 2026 - Trustify Technology, acessado em dezembro 21, 2025, [https://www.trustifytechnology.com/news/leverage-ai-driven-software-development-the-right-way-in-2026/](https://www.google.com/url?source=gmail&sa=E&q=https://www.trustifytechnology.com/news/leverage-ai-driven-software-development-the-right-way-in-2026/)
35. How Generative AI is Changing the Future of Low-Code Platforms - Kovaion, acessado em dezembro 21, 2025, [https://www.kovaion.com/blog/how-generative-ai-is-changing-the-future-of-low-code-platforms/](https://www.google.com/url?source=gmail&sa=E&q=https://www.kovaion.com/blog/how-generative-ai-is-changing-the-future-of-low-code-platforms/)
36. Low-Code vs No-Code: The Ultimate 2026 Guide to Choose Confidently - Sparkout Tech, acessado em dezembro 21, 2025, [https://www.sparkouttech.com/low-code-vs-no-code/](https://www.google.com/url?source=gmail&sa=E&q=https://www.sparkouttech.com/low-code-vs-no-code/)
37. 10 Best Low-code companies and platforms in 2026 (Updated ..., acessado em dezembro 21, 2025, [https://kissflow.com/low-code/best-low-code-company/](https://www.google.com/url?source=gmail&sa=E&q=https://kissflow.com/low-code/best-low-code-company/)
38. IDE Studio Pro | Mendix Evaluation Guide, acessado em dezembro 21, 2025, [https://www.mendix.com/evaluation-guide/app-lifecycle/develop/app-development/](https://www.google.com/url?source=gmail&sa=E&q=https://www.mendix.com/evaluation-guide/app-lifecycle/develop/app-development/)
39. Emerging Trends in Generative AI Platforms for 2025–2026? - Inceptive Technologies, acessado em dezembro 21, 2025, [https://inceptivetechnologies.com/what-are-the-emerging-trends-in-generative-ai-platforms-for-2025-2026/](https://www.google.com/url?source=gmail&sa=E&q=https://inceptivetechnologies.com/what-are-the-emerging-trends-in-generative-ai-platforms-for-2025-2026/)
40. Build agentic AI | OutSystems Agent Workbench, acessado em dezembro 21, 2025, [https://www.outsystems.com/blog/posts/ai-agent-workbench-explained/](https://www.google.com/url?source=gmail&sa=E&q=https://www.outsystems.com/blog/posts/ai-agent-workbench-explained/)
41. The low-code lessons CIOs can apply to agentic AI | CIO, acessado em dezembro 21, 2025, [https://www.cio.com/article/3815367/the-low-code-lessons-cios-can-apply-to-agentic-ai.html](https://www.google.com/url?source=gmail&sa=E&q=https://www.cio.com/article/3815367/the-low-code-lessons-cios-can-apply-to-agentic-ai.html)
42. High Code vs. Low Code vs. No Code: Choose the Best One For Your Project | by Krunals, acessado em dezembro 21, 2025, [https://medium.com/@krunals/high-code-vs-low-code-vs-no-code-choose-the-best-one-for-your-project-8e95ff88d6ab](https://www.google.com/url?source=gmail&sa=E&q=https://medium.com/%40krunals/high-code-vs-low-code-vs-no-code-choose-the-best-one-for-your-project-8e95ff88d6ab)