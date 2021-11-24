import { BaseModel } from '@willyan-company/generics';

export interface Category extends BaseModel {
  name?: string;
  icon?: string;
  color?: string;
}
