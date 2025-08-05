import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[language];
    return translation[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

type Translations = {
  [key: string]: { [key: string]: string };
};

const translations: Translations = {
  en: {
    // Presentation
    'presentation.greeting': 'Hi, I\'m',
    'presentation.title': 'Software Engineer | AI Intern',
    'presentation.viewWork': 'View My Work',
    'presentation.aboutMe': 'About Me',
    'presentation.aiDev': 'AI Development',
    'presentation.webDev': 'Web Development',
    'presentation.dbManagement': 'Database Management',
    'presentation.research': 'Research & Writing',

    // Highlights
    'highlights.title': 'Explore My Portfolio.',
    'highlights.projects': 'Projects',
    'highlights.research': 'Published Research',
    'highlights.technologies': 'Technologies',
    'highlights.viewProjects': 'View Projects',
    'highlights.readPapers': 'Read Papers',
    'highlights.seeSkills': 'See Skills',

    // About
    'about.title': 'About me.',
    'about.description': 'I am a <strong>Software Engineering</strong> undergraduate at UTFPR and an <strong>intern at StartSe</strong>, where I am part of the Artificial Intelligence squad. In my daily work, I develop solutions using Flowise and N8N while continuously deepening my knowledge in automation and applied AI. My experience as a front-end developer includes building websites with React.js, TypeScript, SCSS, and Vite. Additionally, I worked as a DBA at Yadax, handling Cassandra, MongoDB, and Oracle, which strengthened my skills in database administration and management.During my undergraduate studies, I participated in extension projects that enhanced my communication and leadership skills. I also engaged in a <strong>scientific research project</strong> focused on knowledge management in software engineering, which improved my academic writing and understanding of the research process.',
    'about.linkedin': 'Linkedin',
    'about.github': 'GitHub',

    // Projects
    'projects.title': 'My Projects.',
    'projects.common.github': 'GitHub',
    'projects.common.accessWebsite': 'Access Website',
    'projects.remaining':'remaining',
    'projects.showMore': 'See more projects',
    'projects.showLess': 'See less projects',


    'projects.bookManager.title': 'Book Manager',
    'projects.bookManager.description': 'Project developed in the "Full Stack Web Development" course. This application integrates with the Google Books API to search for and store books, allowing users to manage their personal or institutional library efficiently.',

    'projects.attendanceSystem.title': 'Attendance Registration System',
    'projects.attendanceSystem.description': 'Developed for the "Integration Workshop 2" course. This system manages attendance for a university extension project that provides programming workshops for children and teenagers. Users can record attendance, view existing records, and add new workshops.',

    'projects.srDente.title': 'Sr. Dente Project',
    'projects.srDente.description': 'Volunteer project developed for Pipoca Ágil to educate and inform families about oral health. The platform offers accessible and educational content, guiding children through dental transitions and encouraging hygiene habits such as brushing, flossing, and cavity prevention in a playful and family-centered way.',

    'projects.digitalGirls.title': 'Digital Girls Project',
    'projects.digitalGirls.description': 'Interactive platform created to support mentoring activities within the Digital Girls Project. It offers resources such as tutorials, educational links, project examples, and tips for Technovation Girls participants to help them access relevant content efficiently.',

    'projects.squadRoxo.title': 'Squad Roxo Landing Page',
    'projects.squadRoxo.description': 'Volunteer project for Pipoca Ágil showcasing the Squad Roxo Pastel team. This landing page introduces team members and their initiatives. Future updates will include responsiveness and automated testing.',

    'projects.marioGame.title': 'Mario Game',
    'projects.marioGame.description': 'A simple Mario-themed browser game where players avoid obstacles to keep playing. The game includes an intro screen with instructions, gameplay with score tracking, and a restart option after collision.',

    'projects.todoList.title': 'To-Do List',
    'projects.todoList.description': 'Task management app that allows users to create tasks with descriptions, due dates, and categories. Tasks can be marked as completed, deleted individually, or cleared all at once.',

    'projects.ticketSystem.title': 'Ticket Sales System',
    'projects.ticketSystem.description': 'Backend project that simulates a ticket sales system, including user authentication and management of different ticket types. Built with Node.js, Express, Sequelize, and SQLite.',

    'projects.restApi.title': 'REST API Development',
    'projects.restApi.description': 'RESTful API developed during the "Backend Development" course. The system allows for the registration of managers and students, including authentication and CRUD operations.',

    'projects.backendApi.title': 'Backend Web API',
    'projects.backendApi.description': 'A backend application developed in the "Backend Development" course to manage a library system with basic CRUD operations for book records.',

    // Articles
    'articles.title': 'Papers.',
    'articles.read': 'Read Article',
    'articles.labelArticleIC': 'Read the full article',
    'articles.labelArticleMD': 'Read the full article',
    'articles.titlePaperIC': 'Updating a Systematic Literature Review on Knowledge Management Diagnostics in Software Development Organizations',
    'articles.abstractIC': 'Context: In the rapidly evolving software development landscape, organizations face the constant challenge to work with the generated knowledge. Knowledge Management (KM) can be applied to efficiently manage the knowledge in software development organizations and ensure the product quality. However, although there are several KM approaches, carrying out a KM diagnosis in the organizations can identify which knowledge activities present the best cost-benefit for the organization. There are several KM approaches suggested in the literature. But it is quite relevant to carry out a KM diagnosis in the organizations to clearly identify which knowledge activities can present the best cost-benefit aspect within the organizations. A Systematic Literature Review (SLR) was published in 2018, presenting evidence on KM diagnosis in software development organizations. From an assessment of this SLR and the current state of this research topic, we noticed that the 2018’ SLR needed maintenance with an update. Objective: This study aims to update and extend the results produced in this previous SLR. Method: We conducted the 2018 SLR update, considering a new database, backward and forward snowballing, and more analyses of the extracted data. Results: From the SLR update, 16 new studies on KM diagnoses in Software Engineering context were identified. Conclusion: In Software Engineering, consolidated models continue lacking for applying KM diagnostics. Moreover, computational approaches to provide automated support in the diagnosis application and analysis are not quite well explored.',
    'articles.titlePaperMD': 'Digital Girls UTFPR-CP: Experience Report of the Extension Project',
    'articles.abstractMD': 'This report presents the actions promoted by the Meninas Digitais UTFPR-CP extension project. The project, created within the Federal Technological University of Paraná, Cornélio Procópio Campus, aims to increase the participation of girls in computing and STEM, encouraging and helping elementary and high school girls from public schools in the cities of Cornélio Procópio and the surrounding area, in the interior of Paraná, to conquer their space in these areas. To this end, the project promotes actions such as programming workshops, mentoring for the Technovation Girls global competition, and discussion groups, including in these actions the resolution of challenges of the Sustainable Development Goals (SDGs).',

    // Footer
    'footer.developed': 'Developed by Daniela Alves.',
    'footer.rights': '2025 | Daniela Alves',
  },

  pt: {
    // Apresentação
    'presentation.greeting': 'Oi, eu sou',
    'presentation.title': 'Engenheira de Software | Estagiária em IA',
    'presentation.viewWork': 'Ver Meu Trabalho',
    'presentation.aboutMe': 'Sobre Mim',
    'presentation.aiDev': 'Desenvolvimento em IA',
    'presentation.webDev': 'Desenvolvimento Web',
    'presentation.dbManagement': 'Gerenciamento de Banco de Dados',
    'presentation.research': 'Pesquisa e Escrita',

    // Destaques
    'highlights.title': 'Explore meu portfólio.',
    'highlights.projects': 'Projetos',
    'highlights.research': 'Pesquisas Publicadas',
    'highlights.technologies': 'Tecnologias',
    'highlights.viewProjects': 'Ver Projetos',
    'highlights.readPapers': 'Ler Artigos',
    'highlights.seeSkills': 'Ver Habilidades',

    // Sobre
    'about.title': 'Sobre mim.',
    'about.description': 'Sou graduanda em <strong>Engenharia de Software</strong> na UTFPR e <strong>estagiária na StartSe</strong>, onde faço parte do squad de Inteligência Artificial. No meu dia a dia, desenvolvo soluções utilizando Flowise e N8N, enquanto aprofundo meu conhecimento em automação e IA aplicada. Minha experiência como desenvolvedora front-end inclui criação de sites com React.js, TypeScript, SCSS e Vite. Além disso, atuei como DBA na Yadax, trabalhando com Cassandra, MongoDB e Oracle, fortalecendo minhas habilidades em administração e gerenciamento de bancos de dados. Durante a graduação, participei de projetos de extensão que aprimoraram minhas habilidades de comunicação e liderança. Também participei de um <strong>projeto de iniciação científica</strong> focado em gestão do conhecimento em engenharia de software, o que melhorou minha escrita acadêmica e compreensão do processo de pesquisa.',
    'about.linkedin': 'Linkedin',
    'about.github': 'GitHub',

    // Projetos
    'projects.title': 'Meus Projetos.',
    'projects.common.github': 'GitHub',
    'projects.common.accessWebsite': 'Acesse o site',
    'projects.remaining':'restantes',
    'projects.showMore': 'Ver mais projetos',
    'projects.showLess': 'Ver menos projetos',

    'projects.bookManager.title': 'Gerenciador de Livros',
    'projects.bookManager.description': 'Projeto desenvolvido no curso de "Desenvolvimento Web Full Stack". Esta aplicação integra a API do Google Books para buscar e armazenar livros, permitindo que os usuários gerenciem sua biblioteca pessoal ou institucional de forma eficiente.',

    'projects.attendanceSystem.title': 'Sistema de Registro de Presenças',
    'projects.attendanceSystem.description': 'Desenvolvido para a disciplina "Oficina de Integração 2". Este sistema gerencia a frequência em um projeto de extensão universitário que oferece oficinas de programação para crianças e adolescentes. Os usuários podem registrar presenças, visualizar registros existentes e adicionar novas oficinas.',

    'projects.srDente.title': 'Projeto Sr. Dente',
    'projects.srDente.description': 'Projeto voluntário desenvolvido para o Pipoca Ágil, com objetivo de educar e informar famílias sobre saúde bucal. A plataforma oferece conteúdo acessível e educativo, guiando crianças nas transições dentárias e incentivando hábitos de higiene como escovação, uso de fio dental e prevenção de cáries de forma lúdica e familiar.',

    'projects.digitalGirls.title': 'Projeto Meninas Digitais',
    'projects.digitalGirls.description': 'Plataforma interativa criada para apoiar as atividades de mentoria no Projeto Meninas Digitais. Oferece recursos como tutoriais, links educativos, exemplos de projetos e dicas para as participantes do Technovation Girls, ajudando-as a acessar conteúdos relevantes de forma eficiente.',

    'projects.squadRoxo.title': 'Landing Page do Squad Roxo',
    'projects.squadRoxo.description': 'Projeto voluntário para o Pipoca Ágil, apresentando o time Squad Roxo Pastel. Esta landing page apresenta os membros da equipe e suas iniciativas. Atualizações futuras incluirão responsividade e testes automatizados.',

    'projects.marioGame.title': 'Jogo do Mario',
    'projects.marioGame.description': 'Um jogo simples no navegador com tema do Mario, onde os jogadores devem evitar obstáculos para continuar jogando. O jogo inclui uma tela inicial com instruções, pontuação durante a partida e opção de reinício após colisão.',

    'projects.todoList.title': 'Lista de Tarefas',
    'projects.todoList.description': 'Aplicativo de gerenciamento de tarefas que permite criar tarefas com descrição, prazo e categoria. As tarefas podem ser marcadas como concluídas, excluídas individualmente ou todas de uma vez.',

    'projects.ticketSystem.title': 'Sistema de Venda de Ingressos',
    'projects.ticketSystem.description': 'Projeto backend que simula um sistema de vendas de ingressos, incluindo autenticação de usuários e gerenciamento de diferentes tipos de ingressos. Desenvolvido com Node.js, Express, Sequelize e SQLite.',

    'projects.restApi.title': 'Desenvolvimento de API REST',
    'projects.restApi.description': 'API RESTful desenvolvida durante o curso de "Desenvolvimento Backend". O sistema permite o cadastro de gestores e alunos, incluindo autenticação e operações CRUD.',

    'projects.backendApi.title': 'API Web Backend',
    'projects.backendApi.description': 'Aplicação backend desenvolvida no curso de "Desenvolvimento Backend" para gerenciar um sistema de biblioteca com operações CRUD básicas para registros de livros.',

    // Artigos
    'articles.title': 'Artigos.',
    'articles.read': 'Ler Artigo',
    'articles.labelArticleIC': 'Leia o artigo completo',
    'articles.labelArticleMD': 'Leia o artigo completo',
    'articles.titlePaperIC': 'Atualizando uma Revisão Sistemática da Literatura sobre Diagnósticos de Gestão do Conhecimento em Organizações de Desenvolvimento de Software',
    'articles.abstractIC': 'Contexto: No cenário em constante evolução do desenvolvimento de software, as organizações enfrentam o desafio contínuo de lidar com o conhecimento gerado. A Gestão do Conhecimento (GC) pode ser aplicada para gerenciar esse conhecimento de forma eficiente e garantir a qualidade do produto. No entanto, embora existam várias abordagens de GC, realizar um diagnóstico de GC nas organizações permite identificar quais atividades de conhecimento apresentam o melhor custo-benefício. Uma Revisão Sistemática da Literatura (RSL) foi publicada em 2018, apresentando evidências sobre diagnósticos de GC em organizações de desenvolvimento de software. A partir da análise dessa RSL e do estado atual do tema, percebeu-se que a RSL de 2018 necessitava de manutenção com uma atualização. Objetivo: Este estudo visa atualizar e estender os resultados produzidos na RSL anterior. Método: Conduzimos a atualização da RSL de 2018, considerando um novo banco de dados, snowballing para frente e para trás e análises adicionais dos dados extraídos. Resultados: A partir da atualização, 16 novos estudos sobre diagnósticos de GC no contexto da Engenharia de Software foram identificados. Conclusão: Na Engenharia de Software, ainda faltam modelos consolidados para aplicação de diagnósticos de GC. Além disso, abordagens computacionais para fornecer suporte automatizado na aplicação e análise do diagnóstico ainda são pouco exploradas.',
    'articles.titlePaperMD': 'Meninas Digitais UTFPR-CP: Relato de Experiência do Projeto de Extensão',
    'articles.abstractMD': 'Este relatório apresenta as ações promovidas pelo projeto de extensão Meninas Digitais UTFPR-CP. O projeto, criado na Universidade Tecnológica Federal do Paraná, campus Cornélio Procópio, tem como objetivo aumentar a participação de meninas na computação e STEM, incentivando e apoiando alunas do ensino fundamental e médio de escolas públicas de Cornélio Procópio e região a conquistarem seu espaço nessas áreas. Para isso, o projeto promove ações como oficinas de programação, mentoria para a competição global Technovation Girls e grupos de discussão, incluindo nestas ações a resolução de desafios dos Objetivos de Desenvolvimento Sustentável (ODS).',

    // Rodapé
    'footer.developed': 'Desenvolvido por Daniela Alves.',
    'footer.rights': '2025 | Daniela Alves',
  },
};
