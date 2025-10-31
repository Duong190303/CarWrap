import type { FormValues } from './types';

export const BRANDS = [
  'Aston Martin',
  'Bentley',
  'BMW',
  'Lamborghini',
  'Mercedes-Benz',
  'Nissan',
  'Porsche',
  'Subaru',
];

export const SERVICE_OPTIONS = [
  { value: 'wrapping', label: 'WRAPPING' },
  { value: 'detailing', label: 'DETAILING' },
  { value: 'ppf', label: 'PPF' },
  { value: 'tint', label: 'WINDOW TINTING' },
  { value: 'others', label: 'OTHERS' },
];

export const DEFAULT_VALUES: FormValues = {
  salutation: 'Mr',
  name: '',
  phone: '',
  email: '',
  services: [],
  brand: BRANDS[0],
  date: null,
  message: '',
  accept: false,
};
