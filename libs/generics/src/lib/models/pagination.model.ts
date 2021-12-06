import { BaseModel } from './base.model';

export interface Pagination<T extends BaseModel> {
  total: number;
  items: T[];
}
