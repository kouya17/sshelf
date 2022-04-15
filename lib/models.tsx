export interface MenuItem {
  name: string;
  path: string;
}

export interface Shelf {
  id: number,
  name: string,
  memo: string,
  port: number,
  created_at: string
}

export interface PartRegisterInfo {
  "code": string,
  "name": string,
  "count": number,
  "shelf_id": number,
  "memo": string
}

export interface IPart {
  "id": number,
  "name": string,
  "count": number,
  "shelf_id": number,
  "memo": string,
  "created_at": string,
  "updated_at": string
}