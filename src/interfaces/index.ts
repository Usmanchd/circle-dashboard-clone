export type Status = "TO DO" | "REVIEW" | "DOING" | "COMPLETE";

export interface CardItem {
  id: number;
  status: string;
  type: string;
  title: string;
  description?: string;
  attachments: number;
  flag: string;
  date: string;
  comments: number;
}

export interface StatusEnum {
  id: Status;
  color: string;
}

export interface NavLink {
  name: string;
  to: string;
  icon: string;
  divider?: boolean;
  active?: boolean;
  notifications?: number;
  child?: {
    name: string;
    to: string;
    icon: string;
    divider?: boolean;
    active?: boolean;
  }[];
}
