export type MockClass = {
  id: string;
  title: string;
  description: string;
  tutor: string;
  modality: 'online' | 'presencial';
  rating: number;
  pricePerHour: number;
};

export const classes: MockClass[] = [
  {
    id: '1',
    title: 'Matemáticas para bachillerato',
    description: 'Refuerza tus conocimientos con sesiones personalizadas enfocadas en álgebra y cálculo.',
    tutor: 'Laura Méndez',
    modality: 'online',
    rating: 4.8,
    pricePerHour: 18
  },
  {
    id: '2',
    title: 'Guitarra acústica desde cero',
    description: 'Aprende acordes, ritmos y técnica con un enfoque práctico y progresivo.',
    tutor: 'Carlos Rivera',
    modality: 'presencial',
    rating: 4.6,
    pricePerHour: 22
  },
  {
    id: '3',
    title: 'Programación web moderna',
    description: 'Domina HTML, CSS, JavaScript y frameworks modernos con proyectos reales.',
    tutor: 'Sofía Torres',
    modality: 'online',
    rating: 4.9,
    pricePerHour: 25
  }
];
