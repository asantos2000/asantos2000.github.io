---

title: "A Ontologia das AI Skills da Anthropic: Uma Análise Técnica sobre a Redefinição de Processos na Era da Automação Cognitiva"
description: "A natureza da automação empresarial está passando por uma metamorfose fundamental, migrando de sistemas baseados em regras rígidas para arquiteturas orientadas por agentes inteligentes. No centro desta transformação encontra-se o conceito de AI Skills (competências de inteligência artificial). A tese de que essas competências podem ser compreendidas como processos — definidos como conjuntos de atividades inter-relacionadas que utilizam recursos para transformar insumos em resultados de valor — exige uma análise profunda que transcende a mera funcionalidade técnica."
pubDate: "April 25 2026"
heroImage: "../../assets/post-8.png"

---



A natureza da automação empresarial está passando por uma metamorfose fundamental, migrando de sistemas baseados em regras rígidas para arquiteturas orientadas por agentes inteligentes. No centro desta transformação encontra-se o conceito de AI Skills (competências de inteligência artificial), definido e padronizado pela Anthropic. A tese de que essas competências podem ser compreendidas como processos — definidos como conjuntos de atividades inter-relacionadas que utilizam recursos para transformar insumos em resultados de valor — exige uma análise profunda que transcende a mera funcionalidade técnica \[1\]. Esta análise busca explorar os fundamentos arquitetônicos, as implicações operacionais e os dilemas ontológicos que surgem ao tentar enquadrar a inteligência artificial generativa nos cânones tradicionais da Gestão de Processos de Negócio (BPM).

## **Fundamentos das AI Skills: Além do Prompting Tradicional**

Para avaliar se uma AI Skill é, de fato, um processo, deve-se primeiro dissecar sua anatomia técnica. Uma AI Skill, segundo a especificação da Anthropic, não é apenas um conjunto de instruções; é um pacote estruturado, tipicamente organizado em um diretório que contém um manifesto central, o arquivo SKILL.md, além de recursos complementares como scripts executáveis, referências e ativos \[1\]. Esta estrutura modular rompe com o paradigma do prompting "one-shot" ou "few-shot", em que o contexto é volátil e não estruturado. Pelo contrário, as AI Skills estabelecem uma base de conhecimento procedural persistente que permite a Claude e a outros agentes inteligentes executarem fluxos de trabalho com estabilidade e consistência comparáveis a scripts de software tradicionais, mas com a flexibilidade inerente aos modelos de linguagem \[1\].

A diferenciação entre conhecimento factual e conhecimento procedural é crucial nesta tese. Enquanto os grandes modelos de linguagem (LLMs) são excelentes em recordar fatos e raciocinar logicamente, frequentemente apresentam lacunas ao enfrentar fluxos de trabalho multietapas que exigem adesão estrita a procedimentos operacionais padrão \[2\]. As AI Skills preenchem este "gap procedural" ao fornecer o "como" que complementa o "o quê" e o "porquê" das capacidades do modelo \[2\]. Ao transformar instruções em ativos de conhecimento persistentes e composáveis, a Anthropic criou um mecanismo que permite às organizações padronizar como a IA interage com sistemas e com humanos, o que constitui o cerne de qualquer processo organizacional \[1\].

### **O Mapeamento Estrutural: A Skill como Artefato de Processo**

A definição clássica de processo exige a identificação de entradas, de atividades de transformação e de saídas. No ecossistema das AI Skills, as entradas são representadas pelo contexto da conversação e pelos gatilhos (triggers) definidos no arquivo de metadados \[4\]. As atividades de transformação ocorrem por meio da interpretação das instruções contidas no SKILL.md, muitas vezes com o apoio de scripts em linguagens como Python ou JavaScript que executam tarefas determinísticas \[1\]. Finalmente, a saída é o resultado processado — seja um relatório financeiro formatado, um design de interface de usuário ou uma análise de código — que entrega valor superior ao da informação bruta original \[5\].

| Elemento do Processo | Equivalente na AI Skill da Anthropic | Função Técnica e Operacional |
| :---- | :---- | :---- |
| **Entradas (Inputs)** | Contexto do Usuário, Arquivos, Gatilhos YAML | Define o início do processo e fornece a "matéria-prima" informativa \[1\]. |
| **Recursos/Meios** | Scripts, Referências, Ferramentas MCP | Fornece as ferramentas e os dados necessários para a execução da tarefa \[1\]. |
| **Atividades/Tarefas** | Instruções de Markdown, Loops de Raciocínio | Sequência de passos lógicos e de ações executáveis, orientada pelo modelo \[9\]. |
| **Controle/Governança** | Metadados YAML, Descrições de Gatilho | Garante que a skill certa seja ativada no momento certo e sob condições específicas \[5\]. |
| **Saídas (Outputs)** | Resultados de Valor (Relatórios, Código, Decisões) | Produto final da transformação, pronto para consumo humano ou para outros sistemas \[1\]. |

A tabela acima ilustra como a estrutura de uma AI Skill mapeia-se quase perfeitamente aos componentes de um processo empresarial. No entanto, a verdadeira inovação reside na "Divulgação Progressiva" (Progressive Disclosure), uma técnica que permite ao agente carregar apenas a informação mínima necessária para identificar a relevância de uma skill, carregando o corpo completo das instruções e dos recursos apenas quando o processo é ativado \[4\]. Isso otimiza o uso do contexto computacional (tokens) e aumenta a eficiência da execução, resolvendo um dos principais gargalos de processos baseados em LLMs: a sobrecarga de informação \[4\].

## **Argumentos Favoráveis: A AI Skill como Epítome do Processo Moderno**

A tese de que AI Skills são processos ganha força ao analisarmos sua capacidade de padronização e de escalabilidade. No ambiente corporativo, a consistência é frequentemente mais valiosa do que a criatividade pura. AI Skills permitem que uma organização codifique suas normas de branding, padrões de arquitetura de software ou protocolos de atendimento ao cliente em formatos que a IA pode seguir rigorosamente \[1\]. Isso transforma a IA de um assistente genérico em um "trabalhador especializado" que opera segundo processos definidos \[2\].

### **Codificação do Conhecimento Tácito e Procedural**

Um dos maiores desafios da gestão de processos é a captura do conhecimento tácito. Processos descritos em manuais em PDF frequentemente entram em desuso ou são ignorados. As AI Skills, por serem diretamente executáveis pelo agente que realiza o trabalho, eliminam a distância entre a "definição do processo" e a "execução do processo" \[1\]. Quando um desenvolvedor pede a Claude para criar um novo microserviço e o agente ativa automaticamente uma skill de "Scaffolding de Serviço", que conhece as convenções de logging e as bibliotecas da empresa, o processo é aplicado de forma nativa e invisível \[5\].

Esta integração orgânica sugere que as AI Skills representam a evolução lógica dos Manuais de Procedimentos Operacionais Padrão (SOPs). Em vez de documentos passivos, elas são "processos vivos" que adaptam o conhecimento procedimental ao contexto específico de cada solicitação \[2\]. A capacidade de incluir scripts para operações determinísticas — como cálculos matemáticos complexos ou manipulação de arquivos — garante que as etapas do processo que não admitem ambiguidade sejam executadas com precisão absoluta, enquanto o LLM gerencia as etapas que exigem julgamento ou síntese de linguagem natural \[1\].

### **Composabilidade e Interoperabilidade: O Ecossistema de Processos**

Outro argumento robusto a favor da tese é a natureza composável das AI Skills. Assim como processos complexos são compostos por subprocessos interconectados, o framework da Anthropic permite que múltiplas skills colaborem em uma única tarefa \[4\]. Um agente pode carregar uma skill de "Análise de Dados" para processar um arquivo CSV, seguida por uma skill de "Visualização" para gerar gráficos e, por fim, uma skill de "Comunicação Executiva" para redigir o e-mail de resumo \[5\]. Esta orquestração reflete a coordenação de diferentes departamentos ou funções em um processo de negócio tradicional.

A publicação do formato Agent Skills como padrão aberto amplia esta interoperabilidade. Skills construídas para Claude podem, em teoria, ser transferidas para outros ecossistemas que adotem o padrão, garantindo que o "ativo processual" da empresa não fique preso a um único fornecedor \[3\]. Esta portabilidade é uma característica essencial de processos bem desenhados, que devem ser independentes das ferramentas específicas utilizadas para sua execução sempre que possível.

## **Desafios e Antíteses: A Incompatibilidade entre Probabilidade e Determinismo**

Apesar das fortes evidências favoráveis, a tese enfrenta oposições significativas baseadas na natureza fundamental da inteligência artificial. A definição tradicional de processo pressupõe um grau de determinismo e repetibilidade que a IA generativa, por sua própria natureza estocástica, muitas vezes não consegue garantir \[12\]. Em BPM, se as entradas e as regras forem as mesmas, o resultado deve ser o mesmo. Com AI Skills, o "raciocínio" do modelo pode variar entre execuções, levando a caminhos de transformação distintos para o mesmo input \[14\].

### **O Dilema da Estocasticidade e a Unidade de Controle**

O comportamento estocástico dos LLMs significa que a "sequência de atividades" dentro de uma AI Skill não é um caminho fixo, e sim uma navegação por um espaço de probabilidades \[14\]. Enquanto um processo tradicional pode ser visualizado como um fluxograma rígido, uma AI Skill assemelha-se mais a um guia estratégico que permite ao agente improvisar dentro de limites definidos \[11\]. Para puristas da gestão de processos, esta falta de previsibilidade total pode desqualificar as AI Skills como "processos" no sentido estrito da engenharia de sistemas \[12\].

Além disso, a opacidade do processo de decisão da IA — o problema da "caixa-preta" — dificulta a auditoria e o controle, pilares fundamentais da gestão de processos em setores regulados \[11\]. Se um agente toma uma decisão errada ao usar uma skill, pode ser difícil determinar se a falha ocorreu na "instrução do processo" (o arquivo SKILL.md), na "execução da ferramenta" (um script mal escrito) ou em uma alucinação do modelo durante a fase de raciocínio \[11\].

### **Estado Epêmero vs. Persistência de Processo**

A maioria dos processos de negócio de longo prazo requer a manutenção de um estado persistente ao longo de múltiplos eventos e períodos de tempo. No entanto, as AI Skills, conforme atualmente implementadas, operam frequentemente no escopo de uma única conversação ou de um único ciclo de execução \[8\].Embora existam mecanismos de memória, a persistência necessária para gerenciar processos complexos que duram dias ou semanas — como o onboarding de um funcionário ou o ciclo de vendas de um produto — geralmente reside em um sistema de orquestração externo, e não na AI Skill em si \[10\].

Nesta visão, a AI Skill é mais uma "capacidade" momentânea ou um "procedimento técnico" do que um processo de negócio completo. Ela fornece a inteligência para realizar uma etapa do processo, mas carece da infraestrutura de estado e de ciclo de vida para ser o processo por si só \[10\]. A separação entre o "cérebro" (a skill) e o "sistema nervoso" (a plataforma de orquestração, como Camunda ou Orkes) sugere que a tese pode estar atribuindo responsabilidades às skills que pertencem ao ecossistema mais amplo \[19\].

## **A Integração com o Model Context Protocol (MCP) e a Governança de Dados**

A tese de que AI Skills são processos ganha uma nova dimensão ao ser analisada em relação ao Model Context Protocol (MCP). O MCP atua como a interface que conecta o agente inteligente às suas fontes de dados e ferramentas externas, servindo como o "sistema de integração" do processo \[1\]. Se a AI Skill define a lógica e a sequência (o processo), o MCP fornece acesso aos silos de dados e aos sistemas legados necessários à execução (os recursos) \[2\].

Esta simbiose permite a criação de fluxos de trabalho simultaneamente inteligentes e conectados. Por exemplo, uma skill de "Gestão de Incidentes de TI" pode usar o MCP para ler logs de servidores, consultar tickets no ServiceNow e executar comandos de diagnóstico, tudo isso seguindo um fluxo de trabalho estruturado definido no manifesto da skill \[5\]. Aqui, a AI Skill comporta-se claramente como um orquestrador de processo, tomando decisões baseadas em dados em tempo real para transformar um "sistema em falha" em um "sistema restaurado" \[21\].

| Aspecto de Governança | Implicação para AI Skills como Processos | Recomendação de Controle |
| :---- | :---- | :---- |
| **Segurança de Execução** | Skills podem executar scripts arbitrários, o que acarreta riscos de segurança \[2\]. | Utilizar apenas fontes confiáveis e ambientes sandboxed (Code Execution Tool) \[5\]. |
| **Integridade de Dados** | O acesso via MCP deve ser limitado e auditável para evitar vazamentos \[1\]. | Implementar controles de acesso granulares e um logging detalhado de todas as chamadas da ferramenta \[10\]. |
| **Conformidade Ética** | Processos de IA devem aderir a normas de não discriminação e de transparência \[17\]. | Incluir verificações constitucionais e supervisão humana em pontos de decisão críticos \[17\]. |
| **Gestão de Versão** | Mudanças nas instruções da skill podem alterar drasticamente o comportamento do processo \[5\]. | Utilizar o versionamento semântico e testes de regressão automatizados em todas as atualizações de skills \[5\]. |

A governança é, portanto, o elemento que busca transformar a "probabilidade" da IA no "determinismo" exigido pelo processo corporativo. A Anthropic introduziu o gerenciamento em nível organizacional para permitir que administradores controlem quais skills estão disponíveis e como são utilizadas, aproximando as AI Skills da governança aplicada a qualquer outro software de automação de processos \[5\].

## **O Framework de Fluência em IA (4D) e a Transformação de Valor**

A Anthropic propõe o framework 4D — Delegação, Descrição, Discernimento e Diligência — como a base para uma colaboração eficaz entre humanos e IA \[25\]. Este framework pode ser interpretado como um ciclo de gestão de processos. A "Delegação" corresponde ao planejamento e à definição do escopo do processo; a "Descrição" é a modelagem do processo (escrita das instruções); o "Discernimento" é o controle de qualidade da saída; e a "Diligência" é a manutenção da conformidade e da segurança operacional \[6\].

Sob esta ótica, a AI Skill é o artefato que materializa este ciclo. Ela permite que a "matéria-prima" informativa seja processada com um nível de "discernimento" codificado, antes exclusivo de humanos \[24\]. Ao integrar critérios de decisão e exemplos de alta qualidade diretamente no SKILL.md, as organizações estão, essencialmente, treinando o agente a seguir um processo que inclui verificações de qualidade intrínseca \[6\]. Isso eleva o valor do resultado final, pois a IA não está apenas gerando texto, mas também "trabalhando" segundo uma metodologia validada \[1\].

### **A Dimensão Econômica e a Redefinição do Trabalho**

A tese de que as AI Skills são processos tem implicações econômicas profundas. O relatório do Anthropic Economic Index de 2026 sugere que o valor real da IA não decorre da substituição de humanos, mas sim do redesenho do trabalho \[20\]. Profissionais que conseguem "colapsar" processos manuais complexos em AI Skills eficientes obtêm uma alavancagem sem precedentes \[27\]. Isso sugere que a "habilidade de IA" do futuro não será apenas saber usar uma ferramenta, mas também saber modelar processos complexos em formatos que a IA possa executar com autonomia e segurança \[24\].

A transição de uma economia baseada em "tarefas" para uma baseada em "processos agentic" implica que as AI Skills tornam-se ativos de propriedade intelectual. Uma empresa de advocacia que possui uma skill de "Análise de Jurisprudência" altamente otimizada, com referências proprietárias e scripts de validação cruzada, possui uma vantagem competitiva processual clara \[1\]. O processo não é mais algo que os funcionários "fazem", mas algo que a empresa "possui" e a IA "executa" sob supervisão humana \[11\].

## **Observabilidade e Monitoramento: O Controle do Processo Inteligente**

Se aceitarmos que AI Skills são processos, devemos aplicar a elas os mesmos rigorosos padrões de monitoramento e observabilidade. No entanto, o monitoramento tradicional de BPM, focado em "uptime" e "latência", é insuficiente para processos inteligentes. A observabilidade de agentes inteligentes envolve o rastreamento dos passos de raciocínio, a seleção de ferramentas e as decisões tomadas em cada etapa da transformação \[15\].

### **Métricas de Sucesso para Processos Baseados em Skills**

A eficácia de um processo baseado em AI Skills deve ser medida por meio de uma combinação de métricas de software tradicionais e de métricas específicas de IA. O uso de tokens, por exemplo, torna-se uma métrica de "custo de processamento", enquanto a "latência de inferência" substitui o tempo de ciclo tradicional \[15\]. No entanto, a métrica mais crítica é a "qualidade da resposta" e a "deriva do modelo" (model drift), que monitoram se a saída do processo continua atendendo aos padrões de valor definidos à medida que os dados do mundo real evoluem \[18\].

| Categoria de Métrica | Métrica Específica | Relevância para o Processo |
| :---- | :---- | :---- |
| **Eficiência** | Consumo de Tokens | Custo operacional da transformação de informação. |
| **Desempenho** | Latência de Inferência | Velocidade com que o processo entrega o resultado ao cliente final. |
| **Qualidade** | Taxa de Hallucinação / Acurácia | Precisão do processo ao seguir as instruções e gerar saídas válidas. |
| **Conformidade** | Logs de Chamadas de Ferramenta | Auditoria detalhada sobre o uso de recursos externos. |
| **Confiabilidade** | Taxa de Ativação (Gatilhos) | Frequência com que a skill correta é disparada para a tarefa correta. |

A observabilidade permite transformar o processo de IA de uma "caixa-preta" em um sistema transparente. Ferramentas como o "Chain of Thought" (Cadeia de Raciocínio) fornecem uma janela para o interior do processo, permitindo que os supervisores humanos entendam "por que" uma determinada ação foi tomada \[15\]. Esta transparência é essencial para a melhoria contínua dos processos, permitindo que os modeladores de skills identifiquem onde as instruções são vagas e precisam de refinamento \[5\].

## **A Convergência entre BPM e Inteligência Agentic**

O futuro da gestão de processos parece estar em uma convergência em que o BPMN (Business Process Model and Notation) e as AI Skills coexistem. Frameworks de orquestração, como o Camunda, já incorporam agentes inteligentes por meio de estruturas como os "subprocessos ad hoc" \[22\]. Nestes modelos, o fluxo de alto nível é determinístico e governado por regras de negócio rígidas, enquanto as tarefas complexas e baseadas em contexto dentro desse fluxo são delegadas a AI Skills que operam com autonomia controlada \[22\].

Esta abordagem resolve a dicotomia entre determinismo e estocasticidade. O processo global permanece previsível e auditável, mas ganha flexibilidade para lidar com dados não estruturados e exceções complexas por meio da inteligência das skills \[11\]. A AI Skill torna-se, assim, uma "unidade de inteligência procedural" que pode ser injetada em qualquer ponto de um workflow empresarial para adicionar valor onde a automação tradicional falharia \[11\].

### **Do Workflow Automatizado ao Workflow Agentico**

A distinção entre um workflow puramente automatizado e um workflow agentic (baseado em skills) é fundamental para compreender a evolução do conceito de processo. Enquanto a automação tradicional executa passos predefinidos, o workflow agentic busca atingir um objetivo adaptando-se às circunstâncias.13

* **Workflow Automatizado:** Se X, então Y. Rígido, rápido, escala perfeitamente tarefas simples \[30\].  
* **Workflow AI (Não-Agentico):** Usa IA para uma tarefa específica (ex.: classificar um e-mail), mas o fluxo subsequente é fixo \[13\].  
* **Workflow Agentico (Baseado em Skills):** O agente avalia o contexto, seleciona as skills necessárias e define a sequência de passos para atingir o objetivo final de forma autônoma dentro de guardrails \[13\].

Esta transição representa a mudança do "gerenciamento de tarefas" para o "gerenciamento de intenções". O processo não é mais uma lista de afazeres, mas sim uma declaração de objetivos e um conjunto de competências (skills) prontas para alcançá-los \[11\].

## **Conclusão: O Veredito sobre a Tese**

A tese de que AI Skills podem ser entendidas como processos é não apenas defensável, mas também representa uma evolução necessária na nossa compreensão de como o trabalho é estruturado na era da inteligência artificial. Os "prós" — a padronização do conhecimento procedural, a composição de competências, a portabilidade por meio de padrões abertos e a eficiência do carregamento progressivo de recursos — fornecem uma base sólida para tratar as skills como ativos de processo de alto valor \[1\]. Elas resolvem o problema histórico da automação de tarefas que exigem julgamento humano, permitindo que a "transformação de informação" ocorra de forma inteligente e autônoma \[2\].

No entanto, os "contras" — especificamente a natureza estocástica da IA e os desafios de observabilidade e de persistência de estado — servem como avisos críticos de que as AI Skills não devem ser tratadas exatamente como processos de software determinísticos \[12\]. Elas exigem um novo paradigma de gestão que combine a modelagem de intenções com governança rigorosa e observabilidade profunda \[11\].

Em suma, a AI Skill é a unidade fundamental de um novo tipo de processo: o **Processo Adaptativo Cognitivo**. Ao integrar o "saber fazer" (instruções) ao "poder fazer" (scripts e ferramentas) e ao "raciocinar sobre como fazer" (LLM), as AI Skills da Anthropic oferecem o arcabouço técnico para que as organizações alcancem, por fim, a automação inteligente em escala. O sucesso desta transição dependerá da capacidade dos líderes empresariais de deixar de ver a IA como uma ferramenta de chat e passar a vê-la como um ecossistema de processos executáveis que podem ser desenhados, medidos e aprimorados continuamente \[11\].

#### **Referências citadas**

1. Claude Skills: The Complete Guide to AI Agent Capabilities in 2026 \- Vertu, acessado em abril 25, 2026, [https://vertu.com/lifestyle/claude-skills-the-complete-guide-to-ai-agent-capabilities-in-2026](https://vertu.com/lifestyle/claude-skills-the-complete-guide-to-ai-agent-capabilities-in-2026)  
2. What AI Agent Skills Are and How They Work | GrowwStacks Blog, acessado em abril 25, 2026, [https://growwstacks.com/blog/what-ai-agent-skills-are-and-how-they-work/](https://growwstacks.com/blog/what-ai-agent-skills-are-and-how-they-work/)  
3. Agent Skills Overview \- Agent Skills, acessado em abril 25, 2026, [https://agentskills.io/home](https://agentskills.io/home)  
4. The Complete Guide to Building Skills for Claude | Anthropic, acessado em abril 25, 2026, [https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf)  
5. Building an AI Skills Executor in .NET with Azure OpenAI, acessado em abril 25, 2026, [https://devblogs.microsoft.com/foundry/dotnet-ai-skills-executor-azure-openai-mcp/](https://devblogs.microsoft.com/foundry/dotnet-ai-skills-executor-azure-openai-mcp/)  
6. How to create Skills for Claude: steps and examples, acessado em abril 25, 2026, [https://claude.com/blog/how-to-create-skills-key-steps-limitations-and-examples](https://claude.com/blog/how-to-create-skills-key-steps-limitations-and-examples)  
7. Agent Skills with Anthropic \- DeepLearning.AI, acessado em abril 25, 2026, [https://learn.deeplearning.ai/courses/agent-skills-with-anthropic/lesson/3sq9za/skills-with-the-claude-api](https://learn.deeplearning.ai/courses/agent-skills-with-anthropic/lesson/3sq9za/skills-with-the-claude-api)  
8. Using skills in Claude.ai \- Anthropic Skills \- Mintlify, acessado em abril 25, 2026, [https://www.mintlify.com/anthropics/skills/using-skills/claude-ai](https://www.mintlify.com/anthropics/skills/using-skills/claude-ai)  
9. Top 8 Claude Skills for UI/UX Engineers \- Snyk, acessado em abril 25, 2026, [https://snyk.io/articles/top-claude-skills-ui-ux-engineers/](https://snyk.io/articles/top-claude-skills-ui-ux-engineers/)  
10. How AI Agents Actually Work: A Technical Architecture Perspective \- Medium, acessado em abril 25, 2026, [https://medium.com/@mr\_86873/how-ai-agents-actually-work-a-technical-architecture-perspective-05df13295b8b](https://medium.com/@mr_86873/how-ai-agents-actually-work-a-technical-architecture-perspective-05df13295b8b)  
11. Agentic AI Process Automation: Hype, Risk or Future? \- BOC Group, acessado em abril 25, 2026, [https://www.boc-group.com/en/blog/bpm/agentic-ai-process-automation/](https://www.boc-group.com/en/blog/bpm/agentic-ai-process-automation/)  
12. Stop Throwing Around “Stochastic” and “Deterministic” | by Nick Gigliotti \- Medium, acessado em abril 25, 2026, [https://ndgigliotti.medium.com/stop-throwing-around-stochastic-and-deterministic-44f27ad0b7a7](https://ndgigliotti.medium.com/stop-throwing-around-stochastic-and-deterministic-44f27ad0b7a7)  
13. What are Agentic Workflows? Architecture, Use Cases, and How To Build Them \- Orkes, acessado em abril 25, 2026, [https://orkes.io/blog/what-are-agentic-workflows/](https://orkes.io/blog/what-are-agentic-workflows/)  
14. Deterministic vs Stochastic Environment in AI \- GeeksforGeeks, acessado em abril 25, 2026, [https://www.geeksforgeeks.org/artificial-intelligence/deterministic-vs-stochastic-environment-in-ai/](https://www.geeksforgeeks.org/artificial-intelligence/deterministic-vs-stochastic-environment-in-ai/)  
15. What is Agent Observability? Monitoring AI Reliability | Salesforce AP, acessado em abril 25, 2026, [https://www.salesforce.com/ap/agentforce/observability/agent-observability/](https://www.salesforce.com/ap/agentforce/observability/agent-observability/)  
16. What Does Stochastic Mean in Machine Learning? \- MachineLearningMastery.com, acessado em abril 25, 2026, [https://machinelearningmastery.com/stochastic-in-machine-learning/](https://machinelearningmastery.com/stochastic-in-machine-learning/)  
17. jamile sabbad carecho cavalcante os desafios éticos no desenvolvimento de sistemas inteligentes no \- Dissertações Mestrado Estácio, acessado em abril 25, 2026, [https://dissertacao.estacio.br/direito/2023/JAMILE%20SABBAD%20CARECHO%20CAVALCANTE.pdf](https://dissertacao.estacio.br/direito/2023/JAMILE%20SABBAD%20CARECHO%20CAVALCANTE.pdf)  
18. Why observability is essential for AI agents \- IBM, acessado em abril 25, 2026, [https://www.ibm.com/think/insights/ai-agent-observability](https://www.ibm.com/think/insights/ai-agent-observability)  
19. Choosing AI Orchestration: A Practical Assessment Guide for Developers \- Camunda, acessado em abril 25, 2026, [https://camunda.com/blog/2026/04/choosing-ai-orchestration-a-practical-assessment-guide-for-developers/](https://camunda.com/blog/2026/04/choosing-ai-orchestration-a-practical-assessment-guide-for-developers/)  
20. Anthropic Economic Index report: Economic primitives, acessado em abril 25, 2026, [https://www.anthropic.com/research/anthropic-economic-index-january-2026-report](https://www.anthropic.com/research/anthropic-economic-index-january-2026-report)  
21. Agentic Workflow Transforms Enterprise Automation \- Ecweb \- Website Builder, acessado em abril 25, 2026, [https://ecweb.ecer.com/topic/cn/detail-338375-agentic\_workflow\_transforms\_enterprise\_automation.html](https://ecweb.ecer.com/topic/cn/detail-338375-agentic_workflow_transforms_enterprise_automation.html)  
22. Building Your First AI Agent in Camunda, acessado em abril 25, 2026, [https://camunda.com/blog/2025/02/building-ai-agent-camunda/](https://camunda.com/blog/2025/02/building-ai-agent-camunda/)  
23. Agent Skills \- Claude API Docs, acessado em abril 25, 2026, [https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)  
24. Artificial Intelligence (AI) and the Accounting Function—A Revisit and a New Perspective for Developing Framework \- ResearchGate, acessado em abril 25, 2026, [https://www.researchgate.net/publication/336795132\_Artificial\_Intelligence\_AI\_and\_the\_Accounting\_Function-A\_Revisit\_and\_a\_New\_Perspective\_for\_Developing\_Framework](https://www.researchgate.net/publication/336795132_Artificial_Intelligence_AI_and_the_Accounting_Function-A_Revisit_and_a_New_Perspective_for_Developing_Framework)  
25. AI Fluency: Framework & Foundations, acessado em abril 25, 2026, [https://anthropic.skilljar.com/ai-fluency-framework-foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations)  
26. AI Skill Frameworks & Guides \- Claude Skills Market, acessado em abril 25, 2026, [https://www.claudeskillsmarket.com/guides](https://www.claudeskillsmarket.com/guides)  
27. What even are “AI skills” : r/ArtificialInteligence \- Reddit, acessado em abril 25, 2026, [https://www.reddit.com/r/ArtificialInteligence/comments/1qqf48e/what\_even\_are\_ai\_skills/](https://www.reddit.com/r/ArtificialInteligence/comments/1qqf48e/what_even_are_ai_skills/)  
28. What are Agentic Workflows? AI-Driven Automation for Complex Goals \- Kissflow, acessado em abril 25, 2026, [https://kissflow.com/workflow/complete-guide-of-agentic-workflows/](https://kissflow.com/workflow/complete-guide-of-agentic-workflows/)  
29. AI Agent Observability: The Developer's Guide to Agent Monitoring \- Sentry Blog, acessado em abril 25, 2026, [https://blog.sentry.io/ai-agent-observability-developers-guide-to-agent-monitoring/](https://blog.sentry.io/ai-agent-observability-developers-guide-to-agent-monitoring/)  
30. AI Agents vs. Traditional Automation: Key Differences? \- Master Software Solutions, acessado em abril 25, 2026, [https://www.mastersoftwaresolutions.com/ai-agents-vs-traditional-automation/](https://www.mastersoftwaresolutions.com/ai-agents-vs-traditional-automation/)  
31. What is the difference between AI agents and AI workflows? | Lleverage, acessado em abril 25, 2026, [https://www.lleverage.ai/company/blog/what-is-the-difference-between-ai-agents-and-ai-workflows](https://www.lleverage.ai/company/blog/what-is-the-difference-between-ai-agents-and-ai-workflows)  
32. Agentic AI maturity model \- Business strategy \- Microsoft Copilot ..., acessado em abril 25, 2026, [https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/maturity-model-business-process](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/maturity-model-business-process)