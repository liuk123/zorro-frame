export interface Tag {
  color: string; //颜色
  value: string; //消息数量
}

export interface ChildrenItem {
  route: string;
  link: string;
  name: string;
  type: MenuType;
  children?: ChildrenItem[];
}
export interface Menu {
  route: string;
  link: string;
  name: string;
  type: MenuType;
  icon: string;
  badge?: Tag;
  open?: Boolean;
  children?: ChildrenItem[];
}

export interface BreadcrumbItem {
  name: string;
  icon?: string;
  link?: string;
  route?: string;
  type?: MenuType
}

export type MenuType = 'link' | 'router' | 'sub' ;