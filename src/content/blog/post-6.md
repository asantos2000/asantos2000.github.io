---

title: "Agent Skills as a capability layer for business process redesign"
description: "How can the integration of modular AI agent Skills into business process analysis and redesign frameworks transform organizational performance, governance, and automation outcomes, and what theoretical, technical, and managerial conditions determine whether Skills function as scalable strategic capabilities rather than fragmented task automations?"
pubDate: "April 19 2026"
heroImage: "../../assets/blog-placeholder-4.jpg"

---

# Agent Skills as a capability layer for business process redesign

## Central argument

Modular AI agent Skills can be understood as a new procedural layer that sits between enterprise process architecture and agent execution. Anthropic[\[1\]](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf) introduced Skills on October 16, 2025, as folders containing a SKILL.md file plus optional scripts and resources, and later published Agent Skills as an open standard for cross-platform portability on December 18, 2025\. The core design principle is progressive disclosure: agents first read lightweight metadata, such as a name and description, and only load the rest of the skill when the task requires it. Since then, compatible forms of Skills have appeared across OpenAI[\[2\]](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) products and GitHub[\[3\]](https://www.vdaalst.rwth-aachen.de/publications/p1398.pdf) Copilot, which means Skills are no longer merely a vendor-specific customization trick. They are becoming a portable format for packaging procedural knowledge, organizational conventions, and reusable workflows (Anthropic, 2025b, 2026a; OpenAI, 2026a, 2026b; GitHub, 2026). [\[4\]](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

Within business process management, that procedural layer matters because process redesign has long struggled to bridge the gap between analytical models of work and reliable execution in real systems. Contemporary BPM research frames performance improvement and digital transformation as organization-wide capabilities rather than a narrow modeling exercise. At the same time, recent redesign reviews emphasize that reusable, systematic methods are still scarce and that many redesign approaches remain too narrow or insufficiently generalizable (Putra & ER, 2024; Rosemann & vom Brocke, 2010; Tsakalidis & Vergidis, 2025). Skills address part of that gap by making the “how” of work reusable, testable, and portable. However, Skills do not automatically become strategic capabilities. The strongest conclusion from the current evidence is conditional: Skills transform performance, governance, and automation only when they are embedded in process architectures, evaluated against business outcomes, and governed as shared assets. Otherwise, they remain local prompt packages or thin task automations. That conclusion is a synthesis of mature BPM theory with early platform evidence, because public empirical evidence on enterprise-wide Skill portfolios remains limited and is dominated by vendor documentation and emerging BPM scholarship rather than longitudinal field studies (Dumas et al., 2026; Kourani et al., 2025; Putra & ER, 2024). [\[5\]](https://www.sciencedirect.com/science/article/pii/S1877050924004277)

## What changes in the BPM lifecycle

The attached background report describes the digital transformation process analysis as a lifecycle spanning discovery, modeling, measurement, analysis, redesign, automation, monitoring, and governance. That framing is consistent with the broader BPM literature, which treats process work as a lifecycle and as an enterprise capability rather than as a one-time modeling task (“Process analysis for digital transformation,” n.d.; Putra & ER, 2024; Rosemann & vom Brocke, 2010). fileciteturn0file0 [\[6\]](https://www.sciencedirect.com/science/article/pii/S1877050924004277)

Skills can reshape the discovery and analysis stages by changing what the organization looks for. Traditional process analysis identifies bottlenecks, deviations, variants, and compliance gaps. When Skills are added to the redesign repertoire, analysts can also identify where performance problems arise from missing procedural knowledge, inconsistent decision heuristics, or repeated context reconstruction. This becomes more powerful when process mining is object-centric rather than tied to a single case notion, because many real business processes involve interacting objects such as orders, items, shipments, payments, customers, and invoices. Object-centric process mining offers a more holistic, evidence-based view of where root causes of performance and compliance problems actually lie. In contrast, LLM-based process modeling research shows that language models can already contribute meaningfully to process-model generation, although quality varies substantially across models and depends heavily on error handling and validation loops (van der Aalst, 2022, 2023; Dumas et al., 2026; Kourani et al., 2025). [\[7\]](https://www.vdaalst.rwth-aachen.de/publications/p1398.pdf)

In redesign and automation, Skills change the unit of intervention. Classic redesign literature focuses on heuristics such as task elimination, resequencing, parallelism, and technology-enabled changes, while also warning that such practices alone do not ensure sustained success unless embedded in a broader managerial vision for BPR (Reijers & Limam Mansar, 2005). Skills provide a way to encode those redesign choices as reusable operating playbooks: the skill can specify when parallel review should be used, when a knock-out check should terminate a case early, how evidence should be gathered, what output format is acceptable, and which scripts or tools should be invoked in what order. Vendor guidance explicitly shows Skills being used for document creation, workflow automation, and tool-enhanced workflows, including cases where the skill orchestrates multiple tool calls while preserving domain-specific standards and quality checks (Anthropic, 2026d; OpenAI, 2026d; Reijers & Limam Mansar, 2005). [\[8\]](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf)

The monitoring and governance phases also change because Skills make agent behavior inspectable in a more software-like way. Anthropic’s 2026 improvements to skill-creator introduced eval writing, benchmark mode, trigger optimization, and A/B comparison to detect regressions, measure pass rates, and decide whether a skill still adds value relative to the base model. OpenAI’s enterprise Skills controls add workspace sharing, installation permissions, compliance logs, and data-residency-aware administration. In BPM terms, that means the process redesign artifact is no longer only a future-state diagram or policy document. It can also be an executable, evaluable procedural module whose routing, quality, cost, and failure modes can be monitored over time (Anthropic, 2026b; Anthropic, 2026d; OpenAI, 2026c; National Institute of Standards and Technology, 2023). [\[9\]](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)

## Effects on performance, governance, and automation

The performance case for Skills is strongest when they reduce unnecessary variation in knowledge-intensive work. BPM research consistently links process capabilities to organizational performance, flexibility, and the effectiveness of digital transformation, and recent evidence suggests that dynamic decision-making mediates part of that benefit. Skills contribute by converting tacit or inconsistently applied know-how into reusable instructions, templates, validation routines, and escalation logic. OpenAI’s internal case on maintaining the Agents SDK repositories is illustrative rather than definitive: repo-local Skills, AGENTS.md, and automation were associated with an increase from 316 merged pull requests in the prior three months to 457 in the following three months, while the company explicitly attributes the improvement to repeatable workflows embedded close to the work context. This is not causal proof for all organizations, but it is an early operational example of how Skills can improve throughput when routine engineering work is modularized and enforced in context (Huy & Phuc, 2025; OpenAI, 2026e; Putra & ER, 2024). [\[10\]](https://www.emerald.com/bpmj/article/31/8/67/1267027/Unveiling-how-business-process-management)

The governance case is, in some respects, even stronger than the pure productivity case. Skills make procedural knowledge explicit, versionable, and shareable. That supports auditability, standardized invocation conditions, and clearer assignment of responsibility than ad hoc prompt libraries. However, current platform designs reveal that governance maturity varies substantially. Anthropic’s API supports organization-wide sharing of custom Skills, whereas custom Skills in Claude.ai are individual and cannot yet be centrally managed by administrators. OpenAI’s ChatGPT Skills provides admin controls to enable, publish, install, and log Skill events. At the same time, GitHub currently supports project-level and personal Skills and indicates that organization-level and enterprise-level Skills are still forthcoming. This variation matters. A firm that relies on user-scoped Skills in unmanaged environments is unlikely to achieve the same governance outcomes as a firm that treats Skills as governed enterprise assets with role-based controls, compliance logging, and version management (Anthropic, 2026a; OpenAI, 2026b, 2026c; GitHub, 2026; NIST, 2023). [\[11\]](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)

Automation outcomes also change in kind, not only in degree. Anthropic distinguishes between workflows, in which code paths are predefined, and agents, in which the model dynamically decides how to accomplish a task. Dumas and colleagues make a similar distinction in emergent agentic BPM research by separating deterministic automation from autonomy that can sense process state, reason about improvements, and act within managerial constraints. Skills operate in the middle of that continuum. They do not replace process models, workflow engines, RPA, or business rules. Instead, they make agentic execution more reliable by specifying when a multi-step workflow should trigger, what tools or scripts it may use, which standards it must follow, and how it should terminate or escalate. As a result, firm automation can shift from brittle script execution to bounded autonomy while still preserving formal controls when needed (Anthropic, 2025a, 2025c; Dumas et al., 2026; OpenAI, 2026a). [\[12\]](https://www.anthropic.com/research/building-effective-agents)

## Why Skills can become strategic capabilities

**The dynamic capability test.** The resource-based and dynamic capabilities traditions suggest that a capability is strategic when it enables the firm to build, deploy, protect, and reconfigure distinctive routines and complementary assets under changing conditions. In that sense, Skills become strategic only when they help the organization sense process problems, seize redesign opportunities, and reconfigure execution without reconstructing procedural knowledge from scratch each time. A local skill that merely formats one report more neatly is useful, but not strategic. A governed portfolio of Skills that accelerates redesign, standardizes sensitive decisions, and adapts processes as models, regulations, and workflows evolve is much closer to a dynamic capability (Teece et al., 1997; Huy & Phuc, 2025). [\[13\]](https://josephmahoney.web.illinois.edu/BA545_Fall%202022/Teece%2C%20Pisano%20and%20Shuen%20%281997%29.pdf)

**The routine dynamics test.** Organizational routine theory clarifies why static codification is not enough. Feldman and Pentland distinguish the ostensive aspect of a routine, the abstract routine in principle, from the performative aspect, the concrete actions through which the routine is enacted. Pentland and Feldman later argue that artifacts such as written procedures can proxy the ostensive aspect, while logs and databases can trace the performative aspect. Skills fit this theory closely. A Skill is an ostensive artifact, a codified operating script. It becomes valuable only when it is continually corrected by performative evidence from actual work, such as evaluations, user corrections, logs, conformance deviations, and outcome data. Without that loop, the Skill becomes a frozen idealization and drifts away from the real process (Feldman & Pentland, 2003; Pentland & Feldman, 2005). [\[14\]](https://socialecology.uci.edu/sites/socialecology.uci.edu/files/users/feldmanm/Feldman_and_Pentland_2003.pdf)

**The modularity test.** Modularity theory explains both the appeal and the risk of Skills. Modularity can shorten end-to-end time through parallel processing, localize the impact of change, and divide cognitive labor, allowing people or agents to optimize parts without loading the entire system into working memory. This logic aligns closely with the Skill design principle of small, composable building blocks. However, modularity also increases interfacing and testing costs, and research shows that the performance effects of modularity depend on how formal and informal organizational structures align. In BPM terms, a large Skill catalog is not an asset by default. If module boundaries are poorly chosen, descriptions are vague, ownership is unclear, or modules self-reinforce local rather than process-level optimization, the result is fragmentation rather than capability (Cowan & Jonard, 2023; OpenAI, 2026d; Anthropic, 2026d). [\[15\]](https://academic.oup.com/icc/article/32/1/181/6865163)

**The ambidexterity and contingency test.** Strategic capabilities must support both exploitation and exploration. Skills can support exploitation by standardizing routine execution, but they can also support exploration by enabling rapid experimentation with alternative procedures, A/B comparisons, and model-specific refinements. Whether they succeed depends on organizational contingencies. BPM capability development does not follow a single maturity path; organizational and environmental characteristics matter, and redesign methods that look systematic in one context may fail to generalize in another. This implies that the same Skill architecture will not fit every process domain, especially where risk, exception rates, tacit judgment, and regulatory sensitivity differ substantially (Farzaneh et al., 2022; Niehaves et al., 2014; Tsakalidis & Vergidis, 2025). [\[16\]](https://www.sciencedirect.com/science/article/pii/S0148296322003708)

## Conditions for technical scalability and control

The first technical condition is disciplined module design. Anthropic’s documentation makes clear that the description field is the primary routing signal and that vague descriptions cause misfires. OpenAI’s Codex documentation makes a similar point and recommends that each Skill remain focused on one job, with explicit scope, inputs, outputs, and optional dependencies. This has direct process-design implications: candidate Skills should be bounded around stable intents, decision classes, artifact transforms, or compliance checks, not around entire end-to-end value streams unless those streams are unusually homogeneous. In practice, the organization should define a skill contract that includes trigger terms, negative triggers, required inputs, output schema, allowed tools, escalation conditions, and business owner (Anthropic, 2026a, 2026c; OpenAI, 2026a). [\[17\]](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)

The second condition is a well-designed execution substrate. Skills package procedural knowledge, but they rely on tools, scripts, shells, connectors, or workflow engines to affect the world. Anthropic explicitly notes that useful agent systems are built from simple, composable patterns and that deterministic systems and nondeterministic agents require a different interface design than ordinary APIs. OpenAI’s API documentation similarly distinguishes between hosted and local execution for Skills, and Codex supports policy flags such as allow\_implicit\_invocation, as well as declared tool dependencies. The implication is straightforward: Skills scale when they are paired with deterministic action surfaces for the parts of work that should be stable, while the model is reserved for interpretation, judgment, exception handling, and contextual synthesis (Anthropic, 2025a, 2025c; OpenAI, 2026a, 2026b). [\[18\]](https://www.anthropic.com/research/building-effective-agents)

The third condition is rigorous evaluation and observability. Anthropic’s March 2026 updates to skill-creator are especially important here because they formalize trigger testing, benchmark mode, pass-rate tracking, timing, token usage, and blind A/B comparisons. The company’s longer guide also recommends measuring trigger accuracy, workflow completion, API failures, and consistency across sessions. OpenAI’s operational case shows a complementary pattern in which repository-level rules, Skills, and CI automation reinforce one another. For business process redesign, this means Skill quality should be monitored on two layers at once: micro metrics, such as trigger precision, task pass rate, and tool error rate, and process metrics, such as cycle time, cost, rework, exception rate, customer outcome, and compliance conformance (Anthropic, 2026b, 2026d; OpenAI, 2026e; NIST, 2023). [\[19\]](https://claude.com/blog/improving-skill-creator-test-measure-and-refine-agent-skills)

The fourth condition is security architecture and policy control. Anthropic warns that malicious Skills can introduce vulnerabilities or exfiltration paths. NIST’s AI RMF and Generative AI Profile emphasize lifecycle governance, cross-cutting controls, and risk management for LLM-based business processes. Emerging industry guidance from OWASP treats Skills as an execution layer that requires publisher verification, version pinning, isolated environments, approval workflows, monitoring, and incident response. Technically, that implies least-privilege tool access, isolated runtime environments, approval gates for high-impact actions, auditable installations and updates, version rollback, and explicit human override points for consequential decisions (Anthropic, 2025b; NIST, 2023, 2024; OWASP Foundation, 2026). [\[20\]](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

## Conditions for managerial scalability and strategic value

The managerial conditions are best understood through BPM’s six core elements: strategic alignment, governance, methods, information technology, people, and culture. Skills become strategic when they are tied to enterprise process architecture and value-stream priorities rather than to isolated enthusiasts or disconnected teams. That requires mapping Skills to named processes, process owners, target KPIs, risk classes, and approved tool surfaces. It also requires accepting an old lesson from redesign research: technical best practices are necessary, but sustained improvement depends on an overarching management vision and the surrounding socio-cultural conditions, not only on the mechanics of execution (Rosemann & vom Brocke, 2010; Reijers & Limam Mansar, 2005; “Process analysis for digital transformation,” n.d.). [\[21\]](https://www.researchgate.net/publication/226852950_The_Six_Core_Elements_of_Business_Process_Management) 

A second managerial condition is portfolio governance. Skills must be cataloged, owned, approved, versioned, reviewed, and retired. The relevant unit of management is not the single Skill but the Skill portfolio across the process landscape. This is where platform differences matter operationally: enterprise value rises when the firm can manage installation rights, distribution scope, audit logs, and organizational sharing centrally; it falls when Skills remain user-specific artifacts with no authoritative owner or review path. From a BPM perspective, Skills should be handled like process assets or policy-bearing software components, with explicit decision rights for process owners, engineering, risk, security, and compliance (Anthropic, 2026a; OpenAI, 2026c; GitHub, 2026; NIST, 2023). [\[22\]](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)

A third managerial condition is cross-functional authorship and cultural adoption. Anthropic explicitly notes that many Skill authors are subject matter experts rather than engineers. That is strategically promising because it lowers the distance between operational know-how and executable AI behavior. However, it also means that firms need a socio-technical authoring model in which SMEs, process analysts, engineers, and control functions jointly shape Skills. The organization should therefore treat Skill building as capability engineering rather than merely user customization. Authoring support, review templates, naming conventions, test harnesses, and change-management practices are needed so that Skills capture genuine operating knowledge rather than idiosyncratic personal preferences (Anthropic, 2026b, 2026d; NIST, 2023). [\[23\]](https://claude.com/blog/improving-skill-creator-test-measure-and-refine-agent-skills)

The decisive question, therefore, is not whether Skills automate tasks. Many of them will. The decisive question is whether the organization governs them as reusable, outcome-linked modules of operating knowledge. If a Skill is reused across teams or processes, is tied to measurable business outcomes, is grounded in process evidence, is versioned, is benchmarked, is auditable, and is assigned to a business owner, it begins to function as a scalable strategic capability. If it is unowned, uncataloged, untested, disconnected from process architecture, and justified only by anecdotal convenience, it remains fragmented task automation. That distinction is not academic. Gartner[\[24\]](https://www.sciencedirect.com/science/article/pii/S1877050924004277) predicts that more than 40% of agentic AI projects will be canceled by the end of 2027 because of rising costs, unclear business value, or inadequate risk controls. Skills can help solve exactly those failure modes, but only when they are embedded in BPM and governance rather than treated as another layer of unmanaged automation (Gartner, 2025; NIST, 2023; Anthropic, 2025b; OpenAI, 2026d). [\[25\]](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027)

## References

Anthropic. (2025a, December 19). *Building effective agents*.

Anthropic. (2025b, October 16). *Equipping agents for the real world with Agent Skills*.

Anthropic. (2025c, September 11). *Writing effective tools for AI agents*.

Anthropic. (2026a). *Agent Skills overview*. Claude API Docs.

Anthropic. (2026b, March 3). *Improving skill-creator: Test, measure, and refine Agent Skills*.

Anthropic. (2026c). *Skill authoring best practices*. Claude API Docs.

Anthropic. (2026d). *The complete guide to building skills for Claude*.

Cowan, R., & Jonard, N. (2023). Modular organization and informal structure: Modularity, performance, and the alignment of organizational networks. *Industrial and Corporate Change, 32*(1), 181–207. doi:10.1093/icc/dtac050

Dumas, M., Milani, F., & Chapela-Campa, D. (2026). Agentic business process management systems.

Farzaneh, M., Wilden, R., Afshari, L., & Mehralian, G. (2022). Dynamic capabilities and innovation ambidexterity: The roles of intellectual capital and innovation orientation. *Journal of Business Research, 148*, 47–59. doi:10.1016/j.jbusres.2022.04.030

Feldman, M. S., & Pentland, B. T. (2003). Reconceptualizing organizational routines as a source of flexibility and change. *Administrative Science Quarterly, 48*(1), 94–118.

Gartner. (2025, June 25). *Gartner predicts over 40% of agentic AI projects will be canceled by end of 2027*.

GitHub. (2026). *About agent skills*. GitHub Docs.

Huy, P. Q., & Phuc, V. K. (2025). Unveiling how business process management capabilities foster dynamic decision-making for effectiveness of sustainable digital transformation. *Business Process Management Journal, 31*(8), 67–103. doi:10.1108/BPMJ-06-2024-0467

National Institute of Standards and Technology. (2023). *Artificial intelligence risk management framework (AI RMF 1.0)*.

National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile*.

Niehaves, B., Poeppelbuss, J., Plattfaut, R., & Becker, J. (2014). BPM capability development: A matter of contingencies. *Business Process Management Journal, 20*(1), 90–106. doi:10.1108/BPMJ-07-2012-0068

OpenAI. (2026a). *Agent Skills*. Codex documentation.

OpenAI. (2026b). *Skills*. API documentation.

OpenAI. (2026c). *Skills in ChatGPT*. OpenAI Help Center.

OpenAI. (2026d, April 10). *Using skills*. OpenAI Academy.

OpenAI. (2026e, March 9). *Using skills to accelerate OSS maintenance*.

OWASP Foundation. (2026). *OWASP Agentic Skills Top 10*.

Pentland, B. T., & Feldman, M. S. (2005). Organizational routines as a unit of analysis. *Industrial and Corporate Change, 14*(5), 793–815.

Process analysis for digital transformation. (n.d.). User-provided document.

Putra, H., & ER, M. (2024). The role of business process management in digital innovation and digital transformation: A systematic literature review. *Procedia Computer Science, 248*, 579–587. doi:10.1016/j.procs.2024.03.069

Reijers, H. A., & Limam Mansar, S. (2005). Best practices in business process redesign: An overview and qualitative evaluation of successful redesign heuristics. *Omega, 33*(4), 283–306. doi:10.1016/j.omega.2004.04.012

Rosemann, M., & vom Brocke, J. (2010). The six core elements of business process management. In J. vom Brocke & M. Rosemann (Eds.), *Handbook on business process management*. Springer.

Teece, D. J., Pisano, G., & Shuen, A. (1997). Dynamic capabilities and strategic management. *Strategic Management Journal, 18*(7), 509–533.

Tsakalidis, G., & Vergidis, K. (2025). Systematicity and generalizability in business process redesign methodologies: A systematic literature review. *Science of Computer Programming, 245*, Article 103392\. doi:10.1016/j.scico.2025.103392

van der Aalst, W. M. P. (2022). Object-centric process mining: An introduction. In *Process mining handbook*.

van der Aalst, W. M. P. (2023). Object-centric process mining: Unraveling the fabric of real processes. *Algorithms, 16*(10), 425\.

---

[\[1\]](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf) [\[8\]](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf) https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf

[https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf)

[\[2\]](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) [\[4\]](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) [\[20\]](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills

[https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

[\[3\]](https://www.vdaalst.rwth-aachen.de/publications/p1398.pdf) [\[7\]](https://www.vdaalst.rwth-aachen.de/publications/p1398.pdf) vdaalst.rwth-aachen.de

[https://www.vdaalst.rwth-aachen.de/publications/p1398.pdf](https://www.vdaalst.rwth-aachen.de/publications/p1398.pdf)

[\[5\]](https://www.sciencedirect.com/science/article/pii/S1877050924004277) [\[6\]](https://www.sciencedirect.com/science/article/pii/S1877050924004277) [\[24\]](https://www.sciencedirect.com/science/article/pii/S1877050924004277) https://www.sciencedirect.com/science/article/pii/S1877050924004277

[https://www.sciencedirect.com/science/article/pii/S1877050924004277](https://www.sciencedirect.com/science/article/pii/S1877050924004277)

[\[9\]](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices) [\[17\]](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices) https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices

[https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)

[\[10\]](https://www.emerald.com/bpmj/article/31/8/67/1267027/Unveiling-how-business-process-management) https://www.emerald.com/bpmj/article/31/8/67/1267027/Unveiling-how-business-process-management

[https://www.emerald.com/bpmj/article/31/8/67/1267027/Unveiling-how-business-process-management](https://www.emerald.com/bpmj/article/31/8/67/1267027/Unveiling-how-business-process-management)

[\[11\]](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) [\[22\]](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview

[https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)

[\[12\]](https://www.anthropic.com/research/building-effective-agents) [\[18\]](https://www.anthropic.com/research/building-effective-agents) https://www.anthropic.com/research/building-effective-agents

[https://www.anthropic.com/research/building-effective-agents](https://www.anthropic.com/research/building-effective-agents)

[\[13\]](https://josephmahoney.web.illinois.edu/BA545_Fall%202022/Teece%2C%20Pisano%20and%20Shuen%20%281997%29.pdf) https://josephmahoney.web.illinois.edu/BA545\_Fall%202022/Teece%2C%20Pisano%20and%20Shuen%20%281997%29.pdf

[https://josephmahoney.web.illinois.edu/BA545\_Fall%202022/Teece%2C%20Pisano%20and%20Shuen%20%281997%29.pdf](https://josephmahoney.web.illinois.edu/BA545_Fall%202022/Teece%2C%20Pisano%20and%20Shuen%20%281997%29.pdf)

[\[14\]](https://socialecology.uci.edu/sites/socialecology.uci.edu/files/users/feldmanm/Feldman_and_Pentland_2003.pdf) https://socialecology.uci.edu/sites/socialecology.uci.edu/files/users/feldmanm/Feldman\_and\_Pentland\_2003.pdf

[https://socialecology.uci.edu/sites/socialecology.uci.edu/files/users/feldmanm/Feldman\_and\_Pentland\_2003.pdf](https://socialecology.uci.edu/sites/socialecology.uci.edu/files/users/feldmanm/Feldman_and_Pentland_2003.pdf)

[\[15\]](https://academic.oup.com/icc/article/32/1/181/6865163) https://academic.oup.com/icc/article/32/1/181/6865163

[https://academic.oup.com/icc/article/32/1/181/6865163](https://academic.oup.com/icc/article/32/1/181/6865163)

[\[16\]](https://www.sciencedirect.com/science/article/pii/S0148296322003708) https://www.sciencedirect.com/science/article/pii/S0148296322003708

[https://www.sciencedirect.com/science/article/pii/S0148296322003708](https://www.sciencedirect.com/science/article/pii/S0148296322003708)

[\[19\]](https://claude.com/blog/improving-skill-creator-test-measure-and-refine-agent-skills) [\[23\]](https://claude.com/blog/improving-skill-creator-test-measure-and-refine-agent-skills) https://claude.com/blog/improving-skill-creator-test-measure-and-refine-agent-skills

[https://claude.com/blog/improving-skill-creator-test-measure-and-refine-agent-skills](https://claude.com/blog/improving-skill-creator-test-measure-and-refine-agent-skills)

[\[21\]](https://www.researchgate.net/publication/226852950_The_Six_Core_Elements_of_Business_Process_Management) https://www.researchgate.net/publication/226852950\_The\_Six\_Core\_Elements\_of\_Business\_Process\_Management

[https://www.researchgate.net/publication/226852950\_The\_Six\_Core\_Elements\_of\_Business\_Process\_Management](https://www.researchgate.net/publication/226852950_The_Six_Core_Elements_of_Business_Process_Management)

[\[25\]](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027) https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027

[https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027)