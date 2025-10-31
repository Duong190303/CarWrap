export type FormValues = {
  salutation: 'Mr' | 'Ms' | 'Mx';
  name: string;
  phone: string;
  email: string;
  services: string[];
  brand: string;
  date: Date | null;
  message: string;
  accept: boolean;
};

export type LeftPaneProps = {
  titleLines?: [string, string, string, string];
  description?: string;
  hotline?: string;
};

export type BookingFormProps = {
  initial?: Partial<FormValues>;
  apiEndpoint?: string; // default: /api/booking
};

export type BookingSectionProps = LeftPaneProps & {
  initial?: Partial<FormValues>;
  backgroundUrl?: string;
};
