import type { ProductData } from '../types';

export const productData: ProductData = {
  hero: {
    title: "Transforme sua Carreira com o Curso de Marketing Digital Pro",
    subtitle: "Aprenda as estratégias que os especialistas usam para gerar resultados incríveis. Do zero ao avançado, domine o marketing digital e destaque-se no mercado.",
    ctaText: "Quero me inscrever agora!",
    ctaLink: "#",
    imageUrl: "https://picsum.photos/1200/800?random=1"
  },
  features: [
    {
      icon: "fa-solid fa-rocket",
      title: "Conteúdo Abrangente",
      description: "Aulas que cobrem SEO, Mídias Sociais, Email Marketing, Google Ads, e muito mais. Tudo o que você precisa em um só lugar."
    },
    {
      icon: "fa-solid fa-users",
      title: "Comunidade Exclusiva",
      description: "Acesse nosso grupo exclusivo de alunos para networking, tirar dúvidas e compartilhar experiências com outros profissionais."
    },
    {
      icon: "fa-solid fa-award",
      title: "Certificado de Conclusão",
      description: "Receba um certificado reconhecido para comprovar suas novas habilidades e impulsionar seu currículo."
    },
    {
      icon: "fa-solid fa-life-ring",
      title: "Suporte Personalizado",
      description: "Nossa equipe de especialistas está pronta para te ajudar a superar qualquer desafio durante sua jornada de aprendizado."
    }
  ],
  testimonials: [
    {
      quote: "Este curso foi um divisor de águas na minha carreira. O conteúdo é prático e os resultados apareceram muito rápido. Recomendo demais!",
      name: "Ana Silva",
      title: "Analista de Marketing",
      avatarUrl: "https://picsum.photos/100/100?random=2"
    },
    {
      quote: "Eu não sabia nada sobre marketing digital e hoje consigo gerenciar campanhas complexas. A didática dos professores é fantástica.",
      name: "João Pereira",
      title: "Empreendedor",
      avatarUrl: "https://picsum.photos/100/100?random=3"
    },
    {
      quote: "O melhor investimento que fiz em 2024. A comunidade é super ativa e o suporte faz toda a diferença. Vale cada centavo!",
      name: "Carla Martins",
      title: "Freelancer",
      avatarUrl: "https://picsum.photos/100/100?random=4"
    }
  ],
  faq: [
    {
      question: "Por quanto tempo terei acesso ao curso?",
      answer: "O acesso ao curso é vitalício! Você pode estudar no seu ritmo e revisitar as aulas sempre que precisar, incluindo todas as futuras atualizações."
    },
    {
      question: "Preciso ter conhecimento prévio em marketing?",
      answer: "Não! O curso foi desenhado para levar você do básico ao avançado, mesmo que esteja começando do absoluto zero."
    },
    {
      question: "O certificado é reconhecido?",
      answer: "Sim, nosso certificado é amplamente aceito no mercado de trabalho e pode ser adicionado ao seu LinkedIn para aumentar sua visibilidade."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Você terá acesso ao suporte via plataforma de aulas e também na nossa comunidade exclusiva, onde instrutores e alunos interagem diariamente."
    }
  ],
  aiAssistant: {
    personality: "Você é um assistente virtual especialista no curso 'Marketing Digital Pro'. Sua função é responder perguntas de potenciais alunos de forma amigável, entusiasmada e prestativa. Use emojis para deixar a conversa mais leve. Seja conciso e direto nas respostas. Use as informações do curso fornecidas para basear todas as suas respostas. Não invente informações.",
    themeColor: 'cyan',
    avatarUrl: 'https://picsum.photos/100/100?random=5',
    welcomeMessage: 'Olá! 👋 Sou seu assistente virtual. Como posso ajudar com suas dúvidas sobre o curso de Marketing Digital Pro?'
  }
};