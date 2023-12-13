export interface PayoutInterface {
  dateAndTime: string;
  username: string;
  status: string;
  value: string;
}

export interface MetaData {
  page?: number;
  limit: number;
  totalCount: number;
  totalPage?: number;
}