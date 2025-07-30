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

// ✅ Tipagem para traduções
type Translations = {
  [key: string]: { [key: string]: string };
};

// 🌐 Traduções
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
    'about.description': 'I am a <strong>Software Engineering</strong> student at Univali, currently in my 6th semester. I have experience in <strong>web development</strong> with technologies like JavaScript, TypeScript, React, Node.js, and database management with MySQL and PostgreSQL.<br><br>Currently, I work as an <strong>AI intern at BRQ Digital Solutions</strong>, where I develop solutions using artificial intelligence and automation tools. I am passionate about technology and constantly seek to learn new skills and tackle complex challenges.<br><br>I have published research in the areas of <strong>software quality</strong> and <strong>machine learning</strong>, demonstrating my commitment to academic excellence and innovation in technology.',
    'about.linkedin': 'Linkedin',
    'about.github': 'GitHub',

    // Projects
    'projects.title': 'My Projects.',
    'projects.subtitle': 'Some things I have built recently',
    'projects.view': 'View Project',
    'projects.code': 'View Code',
    'projects.showMore': 'Show more projects',
    'projects.showLess': 'Show less projects',
    'projects.remaining': 'remaining',

    // Project Details
    'projects.common.github': 'GitHub',
    'projects.common.accessWebsite': 'Access the website',
    
    // Individual Projects
    'projects.bookManager.title': 'Book Manager System',
    'projects.bookManager.description': 'A comprehensive book management system built with modern web technologies. Features include book cataloging, user management, and inventory tracking with an intuitive user interface.',
    
    'projects.attendanceSystem.title': 'Attendance Registration System',
    'projects.attendanceSystem.description': 'A digital attendance tracking system for workshops and events. Built with React and Node.js, featuring real-time attendance monitoring and detailed reporting.',
    
    'projects.srDente.title': 'Sr. Dente - Dental Clinic',
    'projects.srDente.description': 'Modern and responsive website for a dental clinic. Features appointment scheduling, service information, and patient testimonials with a clean, professional design.',
    
    'projects.digitalGirls.title': 'Digital Girls Project',
    'projects.digitalGirls.description': 'Educational web platform promoting women in technology. Includes interactive courses, community features, and resources for career development in tech.',
    
    'projects.squadRoxo.title': 'Agile Popcorn - Team Purple',
    'projects.squadRoxo.description': 'Collaborative project management tool inspired by agile methodologies. Features sprint planning, task tracking, and team collaboration tools.',
    
    'projects.marioGame.title': 'Mario Jump Game',
    'projects.marioGame.description': 'Interactive browser game inspired by the classic Mario series. Built with vanilla JavaScript, featuring responsive controls and engaging gameplay.',
    
    'projects.todoList.title': 'Task Management App',
    'projects.todoList.description': 'Modern task management application with drag-and-drop functionality, priority setting, and progress tracking. Built with React and local storage.',
    
    'projects.ticketSystem.title': 'Ticket Sales System',
    'projects.ticketSystem.description': 'Complete ticket sales management system for events. Features inventory management, payment processing integration, and sales analytics.',
    
    'projects.restApi.title': 'REST API Development',
    'projects.restApi.description': 'Robust REST API built with Node.js and Express. Includes authentication, data validation, and comprehensive documentation.',
    
    'projects.backendApi.title': 'Backend API System',
    'projects.backendApi.description': 'Scalable backend API system with database integration, user authentication, and automated testing. Built following best practices.',

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
    'presentation.aiDev': 'Desenvolvimento de IA',
    'presentation.webDev': 'Desenvolvimento Web',
    'presentation.dbManagement': 'Banco de Dados',
    'presentation.research': 'Pesquisa e Escrita',

    // Destaques
    'highlights.title': 'Explore Meu Portfólio.',
    'highlights.projects': 'Projetos',
    'highlights.research': 'Pesquisas Publicadas',
    'highlights.technologies': 'Tecnologias',
    'highlights.viewProjects': 'Ver Projetos',
    'highlights.readPapers': 'Ler Artigos',
    'highlights.seeSkills': 'Ver Habilidades',

    // Sobre
    'about.title': 'Sobre mim.',
    'about.description': 'Sou estudante de <strong>Engenharia de Software</strong> na Univali, atualmente no 6º semestre. Tenho experiência em <strong>desenvolvimento web</strong> com tecnologias como JavaScript, TypeScript, React, Node.js e gerenciamento de banco de dados com MySQL e PostgreSQL.<br><br>Atualmente, trabalho como <strong>estagiária de IA na BRQ Digital Solutions</strong>, onde desenvolvo soluções utilizando inteligência artificial e ferramentas de automação. Sou apaixonada por tecnologia e busco constantemente aprender novas habilidades e enfrentar desafios complexos.<br><br>Tenho pesquisas publicadas nas áreas de <strong>qualidade de software</strong> e <strong>machine learning</strong>, demonstrando meu comprometimento com a excelência acadêmica e inovação em tecnologia.',
    'about.linkedin': 'Linkedin',
    'about.github': 'GitHub',

    // Projetos
    'projects.title': 'Meus Projetos.',
    'projects.subtitle': 'Algumas coisas que construí recentemente',
    'projects.view': 'Ver Projeto',
    'projects.code': 'Ver Código',
    'projects.showMore': 'Ver mais projetos',
    'projects.showLess': 'Ver menos projetos',
    'projects.remaining': 'restantes',

    // Detalhes de Projeto
    'projects.common.github': 'GitHub',
    'projects.common.accessWebsite': 'Acessar site',
    
    // Projetos Individuais
    'projects.bookManager.title': 'Sistema Gerenciador de Livros',
    'projects.bookManager.description': 'Sistema abrangente de gerenciamento de livros construído com tecnologias web modernas. Inclui catalogação de livros, gerenciamento de usuários e controle de inventário com interface intuitiva.',
    
    'projects.attendanceSystem.title': 'Sistema de Registro de Presença',
    'projects.attendanceSystem.description': 'Sistema digital de controle de presença para workshops e eventos. Construído com React e Node.js, com monitoramento em tempo real e relatórios detalhados.',
    
    'projects.srDente.title': 'Sr. Dente - Clínica Odontológica',
    'projects.srDente.description': 'Website moderno e responsivo para clínica odontológica. Inclui agendamento de consultas, informações de serviços e depoimentos de pacientes com design limpo e profissional.',
    
    'projects.digitalGirls.title': 'Projeto Digital Girls',
    'projects.digitalGirls.description': 'Plataforma web educacional promovendo mulheres na tecnologia. Inclui cursos interativos, recursos comunitários e materiais para desenvolvimento de carreira em tech.',
    
    'projects.squadRoxo.title': 'Pipoca Ágil - Squad Roxo',
    'projects.squadRoxo.description': 'Ferramenta colaborativa de gerenciamento de projetos inspirada em metodologias ágeis. Inclui planejamento de sprints, rastreamento de tarefas e ferramentas de colaboração em equipe.',
    
    'projects.marioGame.title': 'Jogo Mario Jump',
    'projects.marioGame.description': 'Jogo interativo para navegador inspirado na série clássica Mario. Construído com JavaScript vanilla, com controles responsivos e jogabilidade envolvente.',
    
    'projects.todoList.title': 'App de Gerenciamento de Tarefas',
    'projects.todoList.description': 'Aplicação moderna de gerenciamento de tarefas com funcionalidade de arrastar e soltar, definição de prioridades e acompanhamento de progresso. Construído com React e armazenamento local.',
    
    'projects.ticketSystem.title': 'Sistema de Venda de Ingressos',
    'projects.ticketSystem.description': 'Sistema completo de gerenciamento de vendas de ingressos para eventos. Inclui gestão de inventário, integração de processamento de pagamentos e análises de vendas.',
    
    'projects.restApi.title': 'Desenvolvimento de API REST',
    'projects.restApi.description': 'API REST robusta construída com Node.js e Express. Inclui autenticação, validação de dados e documentação abrangente.',
    
    'projects.backendApi.title': 'Sistema de API Backend',
    'projects.backendApi.description': 'Sistema de API backend escalável com integração de banco de dados, autenticação de usuários e testes automatizados. Construído seguindo as melhores práticas.',

    // Artigos
    'articles.title': 'Artigos.',
    'articles.read': 'Ler Artigo',
    'articles.labelArticleIC': 'Leia o artigo completo',
    'articles.labelArticleMD': 'Leia o artigo completo',
    'articles.titlePaperIC': 'Atualizando uma Revisão Sistemática da Literatura sobre Diagnósticos de Gestão do Conhecimento em Organizações de Desenvolvimento de Software',
    'articles.abstractIC': 'Contexto: No cenário em constante evolução do desenvolvimento de software, as organizações enfrentam o desafio contínuo de lidar com o conhecimento gerado. A Gestão do Conhecimento (GC) pode ser aplicada para gerenciar de forma eficiente o conhecimento em organizações de desenvolvimento de software e garantir a qualidade do produto. No entanto, embora existam diversas abordagens de GC, realizar um diagnóstico de GC nas organizações pode identificar quais atividades de conhecimento apresentam o melhor custo-benefício para a organização. Uma Revisão Sistemática da Literatura (RSL) foi publicada em 2018, apresentando evidências sobre diagnósticos de GC em organizações de desenvolvimento de software. A partir de uma avaliação dessa RSL e do estado atual do tema de pesquisa, observou-se que a RSL de 2018 necessitava de manutenção com uma atualização. Objetivo: Este estudo tem como objetivo atualizar e expandir os resultados produzidos na RSL anterior. Método: Conduzimos a atualização da RSL de 2018 considerando uma nova base de dados, técnicas de snowballing (retroativo e progressivo) e análises adicionais dos dados extraídos. Resultados: Com a atualização da RSL, foram identificados 16 novos estudos sobre diagnósticos de GC no contexto da Engenharia de Software. Conclusão: Na Engenharia de Software, ainda faltam modelos consolidados para aplicação de diagnósticos de GC. Além disso, abordagens computacionais para fornecer suporte automatizado na aplicação e análise de diagnósticos ainda não são amplamente exploradas.',
    'articles.titlePaperMD': 'Meninas Digitais UTFPR-CP: Relato de Experiência do Projeto de Extensão',
    'articles.abstractMD': 'Este relato apresenta as ações promovidas pelo projeto de extensão Meninas Digitais UTFPR-CP. O projeto, criado na Universidade Tecnológica Federal do Paraná, Campus Cornélio Procópio, tem como objetivo aumentar a participação de meninas na computação e nas áreas STEM, incentivando e apoiando alunas do ensino fundamental e médio de escolas públicas das cidades de Cornélio Procópio e região, no interior do Paraná, a conquistarem seu espaço nessas áreas. Para isso, o projeto promove ações como oficinas de programação, mentoria para a competição global Technovation Girls e grupos de discussão, incluindo nessas atividades a resolução de desafios relacionados aos Objetivos de Desenvolvimento Sustentável (ODS).',

    // Rodapé
    'footer.developed': 'Desenvolvido por Daniela Alves.',
    'footer.rights': '2025 | Daniela Alves',

    // Comum
    'common.loading': 'Carregando...',
    'common.error': 'Erro ao carregar conteúdo',
  }
};
