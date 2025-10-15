export type Clase = {
  id: string;
  title: string;
  description: string;
  tutor: string;
  modality: 'online' | 'presencial';
  rating: number;
  pricePerHour: number;
};
