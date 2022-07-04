export enum ROW_TYPES {
  TEXT,
  IMAGE,
  HTML,
}

export type TableHeader = {
  identifier: string;
  headerClassList: string;
  rowClassList: string;
  title: string;
  type: string;
};
