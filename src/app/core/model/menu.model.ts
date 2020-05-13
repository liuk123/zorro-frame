export interface Tag {
    color: string; //颜色
    value: string; //消息数量
  }
  
  export interface ChildrenItem {
    state: string;
    name: string;
    type: 'link' | 'sub' | 'extLink' | 'extTabLink';
    children?: ChildrenItem[];
  }
  export interface Menu {
    state: string;
    name: string;
    type: 'link' | 'sub' | 'extLink' | 'extTabLink';
    icon: string;
    label?: Tag;
    badge?: Tag;
    open?: Boolean;
    children?: ChildrenItem[];
  }