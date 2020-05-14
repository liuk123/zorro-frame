export interface Tag {
  color: string; //颜色
  value: string; //消息数量
}

export interface ChildrenItem {
  title: string;
  type: MenuType;
  disabled: boolean;
  selected: boolean;
  route?: string;
  link?: string;
  children?: ChildrenItem[];
}
export interface Menu {
 
  title: string;
  type: MenuType;
  icon: string;
  disabled: boolean;
  selected: boolean;
  route?: string;
  link?: string;
  badge?: Tag;
  open?: Boolean;
  children?: ChildrenItem[];
}

export interface BreadcrumbItem {
  title: string;
  icon?: string;
  link?: string;
  route?: string;
  type?: MenuType
}

export type MenuType = 'link' | 'router' | 'sub' ;