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
  if (context === undefined) {
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
    const translation = translations[language] as any;
    return translation[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Traduções
const translations = {
  en: {
    // Apresentation
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
    'about.description': `I am a <span>Software Engineering</span> undergraduate at UTFPR and an <span>intern at StartSe</span>, 
    where I am part of the Artificial Intelligence squad. In my daily work, 
    I develop solutions using Flowise and N8N while continuously deepening my 
    knowledge in automation and applied AI.  
    <br/>
    My experience as a front-end developer includes building websites with React.js, TypeScript, SCSS, and Vite. Additionally, I worked as a DBA at Yadax, 
    handling Cassandra, MongoDB, and Oracle, which strengthened my skills in database administration and management.  
    <br/>
    During my undergraduate studies, I participated in extension projects that enhanced my communication and leadership skills. 
    I also engaged in a <span>scientific research</span> project focused on knowledge management in software engineering, which improved my 
    academic writing and understanding of the research process.`,
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
    
    'projects.bookManager.title': 'Book Manager',
    'projects.bookManager.description': 'Project developed in the "Full Stack Web Development" course. This application integrates with the Google Books API to search for and store books, allowing users to manage their personal or institutional library efficiently.',
    
    'projects.attendanceSystem.title': 'Attendance Management System',
    'projects.attendanceSystem.description': 'Developed for the "Integration Workshop 2" course. This system manages attendance for a university extension project that provides programming workshops for children and teenagers. Users can record attendance, view existing records, and add new workshops.',
    
    'projects.srDente.title': 'Sr. Dente Project',
    'projects.srDente.description': 'Volunteer project developed for Pipoca Ágil to educate and inform families about oral health. The platform offers accessible and educational content, guiding children through dental transitions and encouraging hygiene habits such as brushing, flossing, and cavity prevention in a playful and family-centered way.',
    
    'projects.digitalGirls.title': 'Digital Girls Website',
    'projects.digitalGirls.description': 'Interactive platform created to support mentoring activities within the Digital Girls Project. It offers resources such as tutorials, educational links, project examples, and tips for Technovation Girls participants to help them access relevant content efficiently.',
    
    'projects.squadRoxo.title': 'Squad Roxo Landing Page',
    'projects.squadRoxo.description': 'Volunteer project for Pipoca Ágil showcasing the Squad Roxo Pastel team. This landing page introduces team members and their initiatives. Future updates will include responsiveness and automated testing.',
    
    'projects.marioGame.title': 'Mario Game',
    'projects.marioGame.description': 'A simple Mario-themed browser game where players avoid obstacles to keep playing. The game includes an intro screen with instructions, gameplay with score tracking, and a restart option after collision.',
    
    'projects.todoList.title': 'To-Do List',
    'projects.todoList.description': 'Task management app that allows users to create tasks with descriptions, due dates, and categories. Tasks can be marked as completed, deleted individually, or cleared all at once.',
    
    'projects.ticketSystem.title': 'Ticket Sales System',
    'projects.ticketSystem.description': 'Backend project that simulates a ticket sales system, including user authentication and management of different ticket types. Built with Node.js, Express, Sequelize, and SQLite.',
    
    'projects.restApi.title': 'REST API Project',
    'projects.restApi.description': 'RESTful API developed during the "Backend Development" course. The system allows for the registration of managers and students, including authentication and CRUD operations.',
    
    'projects.backendApi.title': 'Backend Web API',
    'projects.backendApi.description': 'A backend application developed in the "Backend Development" course to manage a library system with basic CRUD operations for book records.',
    
    // Articles
    'articles.title': 'Papers.',
    'articles.subtitle': 'Some articles I have written',
    'articles.read': 'Read Article',
    
    // Footer
    'footer.developed': 'Developed by Daniela Alves.',
    'footer.rights': '2025 | Daniela Alves',
    
   
    
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error loading content',
  },
  pt: {
    // Apresentation
    'presentation.greeting': 'Oi, eu sou',
    'presentation.title': 'Engenheira de Software | Estagiária em IA',
    'presentation.viewWork': 'Ver Meu Trabalho',
    'presentation.aboutMe': 'Sobre Mim',
    'presentation.aiDev': 'Desenvolvimento de IA',
    'presentation.webDev': 'Desenvolvimento Web',
    'presentation.dbManagement': 'Banco de Dados',
    'presentation.research': 'Pesquisa e Escrita',
    
    // Highlights
    'highlights.title': 'Explore Meu Portfólio.',
    'highlights.projects': 'Projetos',
    'highlights.research': 'Pesquisas Publicadas',
    'highlights.technologies': 'Tecnologias',
    'highlights.viewProjects': 'Ver Projetos',
    'highlights.readPapers': 'Ler Artigos',
    'highlights.seeSkills': 'Ver Habilidades',
    
    // About
    'about.title': 'Sobre mim.',
    'about.description': `Sou graduanda em <span>Engenharia de Software</span> na UTFPR e <span>estagiária na StartSe</span>, 
    onde faço parte do squad de Inteligência Artificial. No meu dia a dia, 
    desenvolvo soluções usando Flowise e N8N, aprofundando continuamente meu 
    conhecimento em automação e IA aplicada.  
    <br/>
    Minha experiência como desenvolvedora front-end inclui a construção de websites com React.js, TypeScript, SCSS e Vite. Além disso, trabalhei como DBA na Yadax, 
    lidando com Cassandra, MongoDB e Oracle, o que fortaleceu minhas habilidades em administração e gerenciamento de banco de dados.  
    <br/>
    Durante minha graduação, participei de projetos de extensão que aprimoraram minhas habilidades de comunicação e liderança. 
    Também me envolvi em um projeto de <span>iniciação científica</span> focado em gestão do conhecimento em engenharia de software, que melhorou minha 
    escrita acadêmica e compreensão do processo de pesquisa.`,
    'about.linkedin': 'Linkedin',
    'about.github': 'GitHub',
    
    // Projects
    'projects.title': 'Meus Projetos.',
    'projects.subtitle': 'Algumas coisas que construí recentemente',
    'projects.view': 'Ver Projeto',
    'projects.code': 'Ver Código',
    'projects.showMore': 'Ver mais projetos',
    'projects.showLess': 'Ver menos projetos',
    'projects.remaining': 'restantes',
    
    // Project Details
    'projects.common.github': 'GitHub',
    'projects.common.accessWebsite': 'Acessar o site',
    
    'projects.bookManager.title': 'Gerenciador de Livros',
    'projects.bookManager.description': 'Projeto desenvolvido no curso de "Desenvolvimento Web Full Stack". Esta aplicação integra com a API do Google Books para buscar e armazenar livros, permitindo aos usuários gerenciar sua biblioteca pessoal ou institucional de forma eficiente.',
    
    'projects.attendanceSystem.title': 'Sistema de Controle de Presença',
    'projects.attendanceSystem.description': 'Desenvolvido para o curso "Oficina de Integração 2". Este sistema gerencia a presença em um projeto de extensão universitária que oferece oficinas de programação para crianças e adolescentes. Os usuários podem registrar presenças, visualizar registros existentes e adicionar novas oficinas.',
    
    'projects.srDente.title': 'Projeto Sr. Dente',
    'projects.srDente.description': 'Projeto voluntário desenvolvido para a Pipoca Ágil para educar e informar famílias sobre saúde bucal. A plataforma oferece conteúdo acessível e educativo, orientando crianças através das transições dentárias e incentivando hábitos de higiene como escovação, uso do fio dental e prevenção de cáries de forma lúdica e centrada na família.',
    
    'projects.digitalGirls.title': 'Site Meninas Digitais',
    'projects.digitalGirls.description': 'Plataforma interativa criada para apoiar atividades de mentoria dentro do Projeto Meninas Digitais. Oferece recursos como tutoriais, links educativos, exemplos de projetos e dicas para participantes do Technovation Girls, ajudando-as a acessar conteúdo relevante de forma eficiente.',
    
    'projects.squadRoxo.title': 'Landing Page Squad Roxo',
    'projects.squadRoxo.description': 'Projeto voluntário para a Pipoca Ágil apresentando a equipe Squad Roxo Pastel. Esta landing page apresenta os membros da equipe e suas iniciativas. Atualizações futuras incluirão responsividade e testes automatizados.',
    
    'projects.marioGame.title': 'Jogo do Mario',
    'projects.marioGame.description': 'Um jogo simples do Mario para navegador onde os jogadores evitam obstáculos para continuar jogando. O jogo inclui uma tela de introdução com instruções, gameplay com rastreamento de pontuação e opção de reiniciar após colisão.',
    
    'projects.todoList.title': 'Lista de Tarefas',
    'projects.todoList.description': 'Aplicativo de gerenciamento de tarefas que permite aos usuários criar tarefas com descrições, datas de vencimento e categorias. As tarefas podem ser marcadas como concluídas, excluídas individualmente ou limpas todas de uma vez.',
    
    'projects.ticketSystem.title': 'Sistema de Venda de Ingressos',
    'projects.ticketSystem.description': 'Projeto backend que simula um sistema de venda de ingressos, incluindo autenticação de usuário e gerenciamento de diferentes tipos de ingressos. Construído com Node.js, Express, Sequelize e SQLite.',
    
    'projects.restApi.title': 'Projeto API REST',
    'projects.restApi.description': 'API RESTful desenvolvida durante o curso "Desenvolvimento Backend". O sistema permite o cadastro de gestores e estudantes, incluindo autenticação e operações CRUD.',
    
    'projects.backendApi.title': 'API Web Backend',
    'projects.backendApi.description': 'Uma aplicação backend desenvolvida no curso "Desenvolvimento Backend" para gerenciar um sistema de biblioteca com operações CRUD básicas para registros de livros.',
    
    // Articles
    'articles.title': 'Artigos.',
    'articles.subtitle': 'Alguns artigos que escrevi',
    'articles.read': 'Ler Artigo',
    
    // Footer
    'footer.developed': 'Desenvolvido por Daniela Alves.',
    'footer.rights': '2025 | Daniela Alves',
    

    // Common
    'common.loading': 'Carregando...',
    'common.error': 'Erro ao carregar conteúdo',
  }
};
