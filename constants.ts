import { ProjectIdea, Difficulty } from './types';

export const INITIAL_PROJECTS: ProjectIdea[] = [
  {
    id: '1',
    title: 'Event-Driven Microservices Blueprint with Clean Architecture',
    description: 'CQRS ve Event Sourcing kalıplarını kullanan, RabbitMQ ile asenkron haberleşen, .NET 8 ve Angular tabanlı bir e-ticaret veya lojistik mimari şablonu.',
    why: "Adayın 'Software Architecture Enthusiast' iddiasını, karmaşık kurumsal ihtiyaçlara cevap verebilecek somut bir referans mimari ile desteklemesini sağlar.",
    difficulty: Difficulty.MEDIUM,
    tags: ['.NET 8', 'PostgreSQL', 'RabbitMQ', 'Angular 18', 'Ocelot API Gateway', 'xUnit']
  }
];