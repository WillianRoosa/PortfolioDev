// SELETOR DE IDIOMAS //
const translations = {
  pt: {
    // HEADER //
    nav_especialidades: "Especialidades",
    nav_sobre: "Sobre",
    nav_experiencia: "Experiência",
    nav_projetos: "Projetos",
    nav_contato: "Contatos",

    // MAIN - TELA INICIAL //
    tela_intro: "Olá, Meu nome é",
    tela_portfolio: "Este é meu portfólio!",
    tela_descricao:
      "Desenvolvedor Backend Júnior com 1 ano de experiência em Java e Spring Boot, dedicado à construção de aplicações modernas, escaláveis e de alta performance. Apaixonado por boas práticas de programação, integração de APIs REST e uso eficiente de banco de dados como MySQL. Reconhecido pela minha capacidade de aprender rapidamente, adaptabilidade e espírito colaborativo, busco constantemente evoluir para entregar soluções de qualidade que façam a diferença.",
    tela_contato: "Entre em contato!",

    // MAIN - ESPECIALIDADES //
    especialidades_titulo: "MINHAS ",
    especialidades_titulo1: "ESPECIALIDADES.",
    especialidades_java:
      "Desenvolvo aplicações backend com Java, robustas e orientadas a objetos, aplicando princípios de SOLID, Collections API, tratamento de exceções e boas práticas de arquitetura para sistemas escaláveis.",
    especialidades_spring:
      "Utilizo o Spring Boot para construir APIs REST escaláveis e seguras, microsserviços, utilizando JPA, Spring Security e integrando com bancos de dados, garantindo escalabilidade, segurança e manutenibilidade.",
    especialidades_AWS:
      "Conhecimento em serviços de nuvem para deploy, escalabilidade e monitoramento de aplicações, com foco em boas práticas de cloud computing, com serviços da AWS como EC2,S3 e RDS.",
    especialidades_sql:
      "Modelagem e manipulação de dados em bancos relacionais, com foco em consultas otimizadas, normalização, integridade referencial e integração eficiente com aplicações backend em Java.",
    especialidades_js:
      "Criação de interfaces dinâmicas e responsivas para aplicações web, utilizando JavaScript moderno (ES6+), consumo de APIs REST e aplicação de boas práticas de usabilidade e acessibilidade.",
    especialidades_git:
      "Controle de versão e colaboração em projetos utilizando Git e GitHub, com foco em organização de branches, pull requests, versionamento semântico e integração contínua para equipes ágeis.",

    // MAIN - SOBRE //
    sobre_titulo: "QUEM ",
    sobre_titulo2: "SOU. ",
    sobre_intro: "PRAZER EM TE CONHECER,",
    sobre_intro2: "ME CHAMO WILLIAN!",
    sobre_faculdade: "Graduado em Gestão da Tecnologia da Informação",
    sobre_p1:
      "Meu nome é Willian Rosa, desenvolvedor backend com foco em Java e Spring Boot, apaixonado por criar soluções robustas, escaláveis e seguras. Tenho experiência no desenvolvimento de APIs RESTful, integração com bancos de dados relacionais (SQL), versionamento com GitHub e utilização de serviços em nuvem AWS para deploy e escalabilidade. Além disso, aplico boas práticas de programação, arquitetura limpa e segurança, sempre com o objetivo de entregar sistemas de alta qualidade e fácil manutenção.",
    sobre_p2:
      "Sou movido pela evolução contínua e pela busca em aprender novas tecnologias. Tenho me dedicado também a JavaScript para aplicações web interativas e à integração eficiente entre backend e frontend, construindo soluções completas e funcionais. Acredito no poder do trabalho em equipe, no compartilhamento de conhecimento e no desenvolvimento de projetos que gerem impacto real, unindo técnica, dedicação e inovação.",
    sobre_redes: "Abaixo segue minhas redes sociais.",

    // MAIN - EXPERIÊNCIAS //
    experiencias_titulo: "EXPERIÊNCIAS ",
    experiencias_titulo2: "PROFISSIONAIS.",
    experiencias_intro: "Estágio de Desenvolvedor e Suporte Técnico",
    experiencias_empresa: "Care - Business | Jun 2024 - Jan 2025 | Remoto",
    experiencias_p1:
      "Auxílio no desenvolvimento de tasks e melhorias, correção de bugs.",
    experiencias_p2:
      "Suporte técnico com clientes, visão analítica sobre melhorias no software.",
    experiencias_p3:
      "Contribuição nas sprints para melhorias e funcionamento no desempenho e validação do sistema ERP.",
    experiencias_p4:
      "Integração iPaaS, Microsoft Azure, ERP com IA, Validação de NF's e NFC.",
    experiencias_p5:
      "Alinhamento semanal de tasks no Asana e reuniões com clientes.",
    experiencias_intro2:
      "Estágio de Suporte para Desenvolvimento de sistema ERP",
    experiencias_empresa2:
      "Ultra Seven Informática | Jan 2024 - Jun 2024 | Remoto",
    experiencias_p6:
      "Auxílio no desenvolvimento de tasks e melhorias, correção de bugs.",
    experiencias_p7:
      "Suporte técnico com clientes, visão analítica sobre melhorias no software.",
    experiencias_p8:
      "Contribuição nas sprints para melhorias e funcionamento no desempenho e validação do sistema ERP.",
    experiencias_p9:
      "Integração iPaaS, Microsoft Azure, ERP com IA, Validação de NF's e NFC.",
    experiencias_p10:
      "Alinhamento semanal de tasks no Asana e reuniões com clientes.",

    // MAIN - PROJETOS //
    projetos_titulo: "MEUS ",
    projetos_titulo2: "PROJETOS.",
    projetos1: "Projeto 1",
    projetos_name1: "* API de envio de e-mail *",
    projetos_p1:
      "API desenvolvida com Java e Spring Boot, para disparos de e-mail via SMTP. com uso de segurança de dados do e-mail e senha do SMTP.",
    projetos2: "Projeto 2",
    projetos_name2: "* Desenvolvimento de portfólio *",
    projetos_p2:
      "Portfólio desenvolvido para divulgação dos meus trabalhos e evolução como desenvolvedor. Buscando mais espaço na área.",
    projetos3: "Projeto 3",
    projetos_name3: "* Jogo de Forças entre Heróis vs Vilões *",
    projetos_p3:
      "Um jogo breve aonde é possível apontar o nome de 3 heróis e duelar forças contra 3 vilões, e vencer o melhor!",
    projetos4: "Projeto 4",
    projetos_name4: "* Desafio baseado na série round6 *",
    projetos_p4:
      "Um desafio baseado na série round6, aonde é possível escolher a dificuldade que deseja encarar e tentar finalizar o desafio sem quebrar o vidro.",
    projetos5: "Projeto 5",
    projetos_name5: "* Desenvolvimento de site pessoal *",
    projetos_p5:
      "Este site foi desenvolvido para testar meus conhecimentos e gerar um pequeno desafio na linguagem PHP, na qual usava em meu estágio como desenvolvedor e suporte técnico.",
    projetos6: "Projeto 6",
    projetos_name6: "* Desenvolvimento de site de doações *",
    projetos_p6:
      "Este foi meu primeiro site desenvolvido, ainda em faculdade. Foi um site com o desafio de criar um sistema de doações, para realizar a atividade extensionista proposta pela faculdade.",

    // MAIN - PROJETOS //
    formulario_titulo: "ENTRE EM ",
    formulario_titulo2: "CONTATO.",
    form_nome: "Nome",
    form_email: "Email",
    form_tel: "WhatsApp",
    form_mensagem: "Mensagem",
    form_enviar: "ENVIAR",

    // FOOTER //
    footer: "Copyright © 2025 Willian Rosa. Todos os direitos reservados!",
  },
  en: {
    // HEADER //
    nav_especialidades: "Specialties",
    nav_sobre: "About",
    nav_experiencia: "Experiences",
    nav_projetos: "Projects",
    nav_contato: "Contact",

    // MAIN - TELA INICIAL //
    tela_intro: "Hi, my name is",
    tela_portfolio: "This is my portfolio!",
    tela_descricao:
      "Junior Backend Developer with 1 year of experience in Java and Spring Boot, dedicated to building modern, scalable, and high-performance applications. Passionate about good programming practices, REST API integration, and efficient use of databases like MySQL. Recognized for my ability to learn quickly, adaptability, and collaborative spirit, I constantly strive to evolve to deliver quality solutions that make a difference.",
    tela_contato: "Get in touch!",

    // MAIN - ESPECIALIDADES //
    especialidades_titulo: "MY ",
    especialidades_titulo1: "SPECIALTIES.",
    especialidades_java:
      "I develop backend applications with Java, robust and object-oriented, applying SOLID principles, Collections API, exception handling, and best architecture practices for scalable systems.",

    especialidades_spring:
      "I use Spring Boot to build scalable and secure REST APIs and microservices, with JPA, Spring Security, and database integration, ensuring scalability, security, and maintainability.",

    especialidades_AWS:
      "Knowledge in cloud services for deployment, scalability, and application monitoring, focusing on cloud computing best practices with AWS services such as EC2, S3, and RDS.",

    especialidades_sql:
      "Modeling and managing relational databases, focusing on optimized queries, normalization, referential integrity, and efficient integration with Java backend applications.",

    especialidades_js:
      "Creation of dynamic and responsive web interfaces using modern JavaScript (ES6+), REST API consumption, and the application of usability and accessibility best practices.",

    especialidades_git:
      "Version control and project collaboration using Git and GitHub, focusing on branch organization, pull requests, semantic versioning, and continuous integration for agile teams.",

    // MAIN - SOBRE //
    sobre_titulo: "WHO ",
    sobre_titulo2: "I AM. ",
    sobre_intro: "NICE TO MEET YOU,",
    sobre_intro2: "MY NAME IS WILLIAN!",
    sobre_faculdade: "Graduated in Information Technology Management",
    sobre_p1:
      "My name is Willian Rosa, a backend developer focused on Java and Spring Boot, passionate about creating robust, scalable, and secure solutions. I have experience in developing RESTful APIs, integrating with relational databases (SQL), version control with GitHub, and using AWS cloud services for deployment and scalability. In addition, I apply programming best practices, clean architecture, and security, always aiming to deliver high-quality and maintainable systems.",
    sobre_p2:
      "I am driven by continuous growth and the pursuit of learning new technologies. I have also been dedicating myself to JavaScript for interactive web applications and efficient integration between backend and frontend, building complete and functional solutions. I believe in the power of teamwork, knowledge sharing, and the development of projects that generate real impact, combining technique, dedication, and innovation.",
    sobre_redes: "Below are my social networks.",

    // MAIN - EXPERIÊNCIAS //
    experiencias_titulo: "PROFESSIONAL ",
    experiencias_titulo2: "EXPERIENCES.",
    experiencias_intro: "Internship as Developer and Technical Support",
    experiencias_empresa: "Care - Business | Jun 2024 - Jan 2025 | Remote",
    experiencias_p1:
      "Assistance in the development of tasks and improvements, bug fixing.",
    experiencias_p2:
      "Technical support with clients, providing analytical insights for software improvements.",
    experiencias_p3:
      "Contribution to sprints for performance improvements and ERP system validation.",
    experiencias_p4:
      "Integration with iPaaS, Microsoft Azure, ERP with AI, validation of invoices (NF’s and NFC).",
    experiencias_p5:
      "Weekly task alignment in Asana and meetings with clients.",

    experiencias_intro2: "Internship in ERP System Development Support",
    experiencias_empresa2:
      "Ultra Seven Informática | Jan 2024 - Jun 2024 | Remote",
    experiencias_p6:
      "Participation in bug fixing and adjustments to existing ERP features.",
    experiencias_p7:
      "Documentation of internal processes and system workflows for continuous improvement.",
    experiencias_p8:
      "Collaboration with the development team in implementing new features.",
    experiencias_p9:
      "Execution of functional tests ensuring quality of deliveries.",
    experiencias_p10:
      "Support in the integration of external APIs and performance analysis of the system.",

    // MAIN - PROJETOS //
    projetos_titulo: "MY ",
    projetos_titulo2: "PROJECTS.",
    projetos1: "Project 1",
    projetos_name1: "* Email Sending API *",
    projetos_p1:
      "API developed with Java and Spring Boot for sending emails via SMTP, with secure handling of email data and SMTP credentials.",
    projetos2: "Project 2",
    projetos_name2: "* Portfolio Development *",
    projetos_p2:
      "Portfolio developed to showcase my work and growth as a developer, aiming to expand my presence in the field.",
    projetos3: "Project 3",
    projetos_name3: "* Heroes vs Villains Battle Game *",
    projetos_p3:
      "A simple game where you can choose 3 heroes to face off against 3 villains, and the strongest wins!",
    projetos4: "Project 4",
    projetos_name4: "* Challenge based on Squid Game *",
    projetos_p4:
      "A challenge inspired by the Squid Game series, where you can choose the difficulty level and try to finish the game without breaking the glass.",
    projetos5: "Project 5",
    projetos_name5: "* Personal Website Development *",
    projetos_p5:
      "This website was developed to test my skills and create a small challenge in PHP, which I used during my internship as a developer and technical support.",
    projetos6: "Project 6",
    projetos_name6: "* Donation Website Development *",
    projetos_p6:
      "This was my first website, created during college. It was a project with the challenge of building a donation system to complete an extension activity required by the university.",

    // MAIN - FORMULÁRIO //
    formulario_titulo: "GET IN ",
    formulario_titulo2: "TOUCH.",
    form_nome: "Name",
    form_email: "Email",
    form_tel: "WhatsApp",
    form_mensagem: "Message",
    form_enviar: "SEND",

    // FOOTER //
    footer: "Copyright © 2025 Willian Rosa. All rights reserved!",
  },
};

// CONFIGURAÇÃO DAS TRADUÇÕES DOS DATA-LANG, SPAN, PLACEHOLDER //
function setLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    const value = translations[lang][key] || "";

    if (el.querySelector("span[data-lang]")) {
      el.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent = value;
        }
      });
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-lang-placeholder]").forEach((el) => {
    const key = el.dataset.langPlaceholder;
    const value = translations[lang][key] || "";

    if (el.tagName === "INPUT" && el.type === "submit") {
      el.value = value;
    } else {
      el.placeholder = value;
    }
  });

  // LEITURA DO CURRÍCULO EM IDIOMA (pt) ou (en) //
  document.querySelectorAll("[data-lang-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-lang-placeholder");
    el.placeholder = translations[lang][key];
  });

  // Atualiza botão de currículo //
  const btnCurriculo = document.getElementById("btn-curriculo");
  btnCurriculo.onclick = () => {
    const urlCurriculo =
      lang === "pt"
        ? "documents/curriculo_java.pdf"
        : "documents/curriculo_java_en.pdf";
    window.open(urlCurriculo, "_blank");
  };
}

//  BOTÕES DE IDIOMA //
document
  .getElementById("lang-pt")
  .addEventListener("click", () => setLanguage("pt"));
document
  .getElementById("lang-en")
  .addEventListener("click", () => setLanguage("en"));

// IDIOMA INICIAL //
setLanguage("pt");

// MÁSCARA DE TELEFONE (BR) +E.164 //
const form = document.querySelector("#form-contato");
const telInput = document.querySelector('input[name="telefone"]');
const telHidden = document.querySelector("#telefone_e164");

function formatTelBrasil(digitos) {
  const d = digitos.slice(0, 11); // garante no máx 11 dígitos
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10)
    return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7, 11)}`;
}

function formatE164(digitos) {
  const d = digitos.replace(/\D/g, "");
  if (d.length === 10 || d.length === 11) {
    return `+55${d}`;
  }

  if ((d.startsWith("55") && d.length === 12) || d.length === 13) {
    return `+${d}`;
  }
  return "";
}

telInput.addEventListener("input", (e) => {
  const num = e.target.value.replace(/\D/g, "");
  e.target.value = formatTelBrasil(num);
  telHidden.value = formatE164(num);
});

// CONFIGURAÇÃO API BACKEND COM SPRING - ENVIO FORMULÁRIO //
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-contato");

  const telInput = form.elements["telefone"];
  const telHidden = form.elements["telefone_e164"];

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const num = telInput.value.replace(/\D/g, "");
    const e164 = formatE164(num);
    if (!e164) {
      telInput.focus();
      alert("Digite um número válido (ex: (12) 98888-7777).");
      return;
    }
    telHidden.value = e164;

    const status = document.getElementById("form-status");
    status.textContent = "Enviando email...";

    const formData = {
      nome: form.elements["nome"].value,
      email: form.elements["email"].value,
      telefone: form.elements["telefone"].value,
      mensagem: form.elements["mensagem"].value,
    };

    try {
      const envio = await fetch(
        "https://springmail-sg2l.onrender.com/api/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (envio.ok) {
        status.textContent = "✅ Mensagem enviada com sucesso!";
        form.reset();
        telHidden.value = "";
      } else {
        status.textContent = "❌ Falha ao enviar email, tente novamente.";
      }
    } catch (err) {
      status.textContent = "❌ Erro de conexão.";
    }
  });
});
