window.PORTFOLIO_PROJECTS = [
  {
    id: 'dashboard-telecom', title: 'Infraestrutura & Operações de Telecom', category: 'bi', type: 'Business Intelligence', status: 'Publicado', featured: true, number: '01', year: '2026',
    summary: 'Painel operacional em Looker Studio para consolidar reparos, pendências, ampliações e produtividade em redes de telecomunicações.',
    challenge: 'Reunir indicadores técnicos que estavam distribuídos em acompanhamentos operacionais e dar contexto para priorização de atividades.',
    approach: ['Organização de quatro visões: reparos, atividades, pendências e ampliações.', 'Criação de indicadores e filtros temporais para comparar regiões, tipos de atendimento e evolução mensal.', 'Tratamento visual e anonimização dos dados de demonstração, preservando o contexto operacional.'],
    delivery: 'Dashboard interativo público acompanhado de imagens das páginas e documentação técnica no GitHub.',
    note: 'A demonstração usa dados anonimizados; não expõe informações individuais de clientes ou infraestrutura interna.',
    tags: ['Looker Studio','KPIs','Telecom','DataViz'],
    links: [{label:'Abrir dashboard',url:'https://datastudio.google.com/u/0/reporting/e73db293-7323-451a-913a-ffdbba79512b/page/vJY7F'}, {label:'Código e documentação',url:'https://github.com/MateusCDev/telecom-infrastructure-dashboard'}],
    image:'https://raw.githubusercontent.com/MateusCDev/telecom-infrastructure-dashboard/master/relatorio-reparos.png', visual:'dashboard'
  },
  {
    id: 'conectividade-bahia', title: 'Conectividade Digital na Bahia', category: 'analise', type: 'Análise de Dados', status: 'Artigo publicado', featured: true, number: '02', year: '2025',
    summary: 'Investigação da cobertura 4G/5G, concentração de mercado (HHI) e relação com o PIB municipal usando dados públicos da Anatel e do IBGE.',
    challenge: 'Transformar indicadores dispersos de conectividade em uma leitura regional sobre acesso digital e competição entre municípios baianos.',
    approach: ['Importação de bases públicas e integração por identificadores municipais.', 'Limpeza, recorte da Bahia e análise da evolução de cobertura e de concentração de mercado.', 'Visualizações temporais, ranking municipal, dispersão entre PIB e cobertura e interpretação dos indicadores.'],
    delivery: 'Estudo publicado no Medium com explicações metodológicas e código de referência em Google Colab.',
    note: 'As relações entre PIB e cobertura são exploratórias; correlação não equivale a causalidade.',
    tags: ['Python','Pandas','Plotly','Anatel','IBGE'],
    links: [{label:'Ler artigo no Medium',url:'https://medium.com/@mateus.cesararaujo/conectividade-digital-na-bahia-an%C3%A1lise-da-cobertura-4g-5g-e-competitividade-91b558b51c18'}, {label:'Notebook no Colab',url:'https://colab.research.google.com/drive/1-Ke0m_hDQ5ESxKMfShpLCDEw2YsLSuUB?usp=sharing'}], visual:'bahia'
  },
  {
    id: 'fibra-import', title: 'Fibra Import — KML/KMZ para OZmap', category: 'telecom', type: 'Ferramenta Web', status: 'Demo online', featured: true, number: '03', year: '2026',
    summary: 'Aplicação web que lê redes em KML/KMZ, permite revisar elementos geográficos e gera arquivos CSV para importação manual no OZmap.',
    challenge: 'Reduzir trabalho manual na preparação de elementos de rede mapeados em ferramentas geográficas.',
    approach: ['Leitura local de arquivos KML/KMZ, classificação e revisão de elementos no navegador.', 'Visualização geográfica por mapas, conferência de geometria e exportação de CSVs por categoria.', 'Validação de nomes, coordenadas e limites de processamento antes da exportação.'],
    delivery: 'Aplicação estática utilizável no GitHub Pages, com projeto demonstrativo e documentação de escopo.',
    note: 'A importação final no OZmap é manual. O README registra que a validação em uma instância real ainda não foi concluída.',
    tags: ['JavaScript','Leaflet','KML/KMZ','OZmap'],
    links: [{label:'Experimentar aplicação',url:'https://mateuscdev.github.io/fibra-import/'}, {label:'Ver repositório',url:'https://github.com/MateusCDev/fibra-import'}], visual:'map'
  },
  {
    id: 'anatel-engenharia', title: 'Pipeline de Conectividade — Bahia', category: 'engenharia', type: 'Engenharia de Dados', status: 'Em desenvolvimento', featured: true, number: '04', year: '2026',
    summary: 'Evolução do estudo da Anatel para um projeto de dados reprodutível: ingestão, transformação, validações e camada analítica para visualização.',
    challenge: 'Sair de uma análise pontual em notebook para uma arquitetura organizada, rastreável e reexecutável.',
    approach: ['Planejamento do fluxo com Python, SQL e DuckDB para dados públicos municipais.', 'Definição de verificações de qualidade e consistência entre fontes e períodos.', 'Previsão de camada de consumo em Looker Studio voltada à comparação entre municípios.'],
    delivery: 'Repositório público inicial com documentação e notebook de fundamentos; evolução do pipeline em andamento.',
    note: 'A estrutura planejada e o painel futuro não devem ser confundidos com funcionalidades já implementadas.',
    tags: ['Python','SQL','DuckDB','Qualidade de Dados'],
    links: [{label:'Acompanhar no GitHub',url:'https://github.com/MateusCDev/anatel-conectividade-bahia'}], visual:'pipeline'
  },
  {
    id: 'etl-netbox', title: 'ETL / ELT — NetBox', category: 'engenharia', type: 'Automação de Dados', status: 'Notebook público', featured: true, number: '05', year: '2026',
    summary: 'Experimento de integração e transformação de dados de infraestrutura em Google Colab, a partir de lógica de fluxo definida para o NetBox.',
    challenge: 'Estruturar processos de tratamento e movimentação de dados de inventário técnico com passos verificáveis.',
    approach: ['Organização do fluxo de integração em notebook.', 'Definição da lógica e dos requisitos técnicos do processamento.', 'Implementação assistida por Codex/IA, com direcionamento funcional e revisão humana.'],
    delivery: 'Notebook e descrição do processo disponíveis em repositório público.',
    note: 'O código foi desenvolvido com assistência de IA; o portfólio não o apresenta como implementação integralmente autoral.',
    tags: ['Colab','ETL/ELT','NetBox','Automação'],
    links: [{label:'Explorar notebook',url:'https://github.com/MateusCDev/ETL_NETBOX'}], visual:'etl'
  },
  {
    id: 'inspecoes-pops', title: 'Sistema de Inspeções de POPs', category: 'telecom', type: 'Aplicação Operacional', status: 'Em evolução', featured: false, number: '06', year: '2026',
    summary: 'Aplicação para registrar inspeções de pontos de presença, consolidar informações e apoiar relatórios operacionais.',
    challenge: 'Padronizar registros de inspeção e tornar os acompanhamentos mais consultáveis.',
    approach: ['Interface web com fluxo de registro e consulta.', 'Integração arquitetada com Google Apps Script, Sheets e Drive.', 'Rotinas de relatórios em PDF, controle de acesso e painel consolidado.'],
    delivery: 'Código e instruções públicas; o README registra etapas de atualização e homologação do serviço.',
    note: 'Sem expor URLs operacionais, credenciais ou dados de inspeções reais. A homologação da versão mais recente ainda é indicada no projeto.',
    tags: ['JavaScript','Apps Script','Sheets','Telecom'],
    links: [{label:'Ver repositório',url:'https://github.com/MateusCDev/inspecoes-pops'}], visual:'inspection'
  },
  {
    id: 'churn-telecom', title: 'Análise de Churn em Telecom', category: 'analise', type: 'BI & Retenção', status: 'Estudo publicado', featured: false, number: '07', year: '2025',
    summary: 'Estudo de cancelamentos com base sintética de clientes, modelada em PostgreSQL e explorada visualmente no Power BI.',
    challenge: 'Identificar padrões associados ao cancelamento de serviços em um cenário fictício de telecomunicações.',
    approach: ['Construção de um cenário de dados sintéticos para representar clientes e cancelamentos.', 'Organização relacional em PostgreSQL.', 'Visualização de indicadores de churn e exploração de fatores associados no Power BI.'],
    delivery: 'Projeto registrado no LinkedIn e artigo “Analisando Churn em Telecom: Da Geração de Dados à Visualização no Power BI” no Medium.',
    note: 'A base é fictícia, e os resultados não representam uma operação real. Acesso ao artigo pelo perfil do autor.',
    tags: ['PostgreSQL','Power BI','SQL','Churn'],
    links: [{label:'Publicações no Medium',url:'https://medium.com/@mateus.cesararaujo'}, {label:'Projeto no LinkedIn',url:'https://www.linkedin.com/in/mateusca/'}], visual:'churn'
  },
  {
    id: 'reclamacoes-entregas', title: 'Reclamações em Entregas', category: 'analise', type: 'Análise Exploratória', status: 'Case documentado', featured: false, number: '08', year: '2025',
    summary: 'Análise exploratória com Excel para investigar fatores associados a reclamações de clientes em entregas.',
    challenge: 'Responder quais situações podem contribuir para o aumento de reclamações no contexto logístico.',
    approach: ['Organização dos dados e definição de hipóteses.', 'Análises e gráficos descritivos no Excel.', 'Discussão de implicações para logística e experiência do cliente.'],
    delivery: 'Descrição e documentação do projeto no LinkedIn.',
    note: 'Sem link público de repositório validado para este projeto.',
    tags: ['Excel','EDA','Logística','Storytelling'],
    links: [{label:'Ver perfil no LinkedIn',url:'https://www.linkedin.com/in/mateusca/'}], visual:'excel'
  },
  {
    id: 'aws-athena', title: 'Analytics na AWS — Athena', category: 'engenharia', type: 'Projeto de Formação', status: 'Repositório público', featured: false, number: '09', year: '2022',
    summary: 'Atividade prática de exploração de dados em ambiente AWS com S3, Glue, Athena e QuickSight.',
    challenge: 'Compreender o caminho de dados de arquivos até consultas SQL e visualizações em nuvem.',
    approach: ['Armazenamento de arquivos em S3 e catalogação com Glue.', 'Consultas SQL com Athena e definição dos resultados.', 'Conexão dos dados com visualizações no QuickSight.'],
    delivery: 'README didático e exemplos de consultas disponíveis no GitHub.',
    note: 'Projeto de aprendizagem, não implantação produtiva.',
    tags: ['AWS S3','Glue','Athena','QuickSight'],
    links: [{label:'Ver projeto',url:'https://github.com/MateusCDev/Projeto_AWS_Athena'}], visual:'cloud'
  },
  {
    id: 'modelagem-dados', title: 'Modelagem de Dados — E-commerce & Oficina', category: 'engenharia', type: 'Banco de Dados', status: 'Repositório público', featured: false, number: '10', year: '2022',
    summary: 'Desenvolvimento de esquemas conceituais e diagramas entidade-relacionamento aplicando conceitos de modelagem estendida.',
    challenge: 'Representar entidades, relacionamentos e regras de negócio em domínios diferentes.',
    approach: ['Identificação das principais entidades dos cenários.', 'Desenho de relacionamentos e estrutura conceitual.', 'Documentação visual com Draw.io.'],
    delivery: 'Diagramas e arquivos de apoio publicados no GitHub.',
    note: 'Material acadêmico focado em modelagem conceitual.',
    tags: ['EER','Modelagem','Draw.io','SQL'],
    links: [{label:'Ver diagramas',url:'https://github.com/MateusCDev/Projeto_ModelagemDados'}], visual:'model'
  },
  {
    id: 'integracao-bancos', title: 'Integração de Bancos com Python', category: 'engenharia', type: 'Banco de Dados', status: 'Repositório público', featured: false, number: '11', year: '2022',
    summary: 'Exercícios práticos de integração Python com bancos relacionais e orientados a documentos.',
    challenge: 'Comparar abordagens de persistência e integração com diferentes modelos de banco.',
    approach: ['Exemplos organizados por tecnologia.', 'Integração via SQLAlchemy e PyMongo.', 'Código Python para operações de acesso a dados.'],
    delivery: 'Scripts e instruções públicas no GitHub.',
    note: 'Projeto de estudo e experimentação.',
    tags: ['Python','SQLAlchemy','PyMongo','NoSQL'],
    links: [{label:'Ver código',url:'https://github.com/MateusCDev/Projeto_Integrando_BDs_Python'}], visual:'database'
  },
  {
    id: 'covid-ml', title: 'Análise de COVID-19 com Python', category: 'analise', type: 'Machine Learning', status: 'Projeto de estudo', featured: false, number: '12', year: '2022',
    summary: 'Notebook de exploração e modelagem de dados históricos da COVID-19 no Brasil.',
    challenge: 'Exercitar um fluxo exploratório e técnicas de modelagem em séries históricas.',
    approach: ['Leitura de conjunto de dados históricos.', 'Experimentação com análise e métodos de aprendizado de máquina.', 'Organização do material em notebook reproduzível.'],
    delivery: 'Notebook e dataset de estudo disponibilizados no GitHub.',
    note: 'Experimento acadêmico: não constitui previsão epidemiológica validada.',
    tags: ['Python','Jupyter','Machine Learning'],
    links: [{label:'Ver notebook',url:'https://github.com/MateusCDev/Python_MachineLearning_Covid19'}], visual:'science'
  },
  {
    id: 'regressao-titanic', title: 'Regressão Linear — Titanic', category: 'analise', type: 'Machine Learning', status: 'Projeto de estudo', featured: false, number: '13', year: '2022',
    summary: 'Notebook de experimentação com regressão linear para predição da idade de passageiros do Titanic.',
    challenge: 'Praticar preparação de variáveis e raciocínio preditivo com dados tabulares.',
    approach: ['Exploração do conjunto de dados.', 'Aplicação didática de regressão linear.', 'Documentação em notebook Python.'],
    delivery: 'Material de estudo público no GitHub.',
    note: 'Exercício educacional; métricas finais não foram verificadas neste levantamento.',
    tags: ['Python','Regressão Linear','Jupyter'],
    links: [{label:'Ver notebook',url:'https://github.com/MateusCDev/Projeto_LinearRegress'}], visual:'regression'
  }
];