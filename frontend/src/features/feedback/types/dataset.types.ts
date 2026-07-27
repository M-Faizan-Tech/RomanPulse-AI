export interface DemoComment {
  id: number;
  comment: string;
  category: string;
}


export interface DemoDataset {
  id: string;
  name: string;
  description: string;
  comments: DemoComment[];
}