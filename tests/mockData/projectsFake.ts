import type { Project } from '@/modules/projects/interfaces/project.interface';

export const projectsFake: Project[] = [
  {
    id: '2fd9f892-515e-466a-8f48-8f8c336dc174',
    name: 'Casupá',
    version: 2.5,
    description: 'Proyecto de Casupá',
    tasks: [
      {
        id: '08777c5d-6e26-4122-9c18-92b2f0fa894b',
        name: 'Nueva implantación de obra',
        completedAt: new Date('2025-07-25T02:57:30.173Z'),
      },
      {
        id: 'a276f84e-e419-4bd2-8b76-9aafc5dab60a',
        name: 'Resumen de implantación',
        completedAt: new Date('2025-07-25T02:57:31.473Z'),
      },
      {
        id: '4a120ba8-bf93-4e55-8994-c685c87e0df4',
        name: 'Comienza del proyecto',
        completedAt: new Date('2025-07-24T23:25:56.108Z'),
      },
    ],
  },
  {
    id: 'afa29287-9814-479d-9f9b-b2cecb33d699',
    name: 'Uruguay',
    version: 3.5,
    description: 'Proyecto de la R.O.U.',
    tasks: [],
  },
  {
    id: '5dbb23b7-1baa-4ff4-bee7-dcd3e68d9baf',
    name: 'Brasil',
    version: 1.5,
    description: 'Proyecto de la República del Brasil',
    tasks: [],
  },
  {
    id: '30e613fc-d527-40b3-a29e-5731cc6890f6',
    name: 'Rio de los pájaros',
    version: 2.9,
    description: 'Proyecto sobre el río Uruguay',
    tasks: [],
  },
];
