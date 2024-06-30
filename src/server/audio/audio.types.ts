export type Rate = 'slow' | 'normal';

export interface Audio {
  text: string;
  path: string;
  voice: string;
  rate: Rate;
}
