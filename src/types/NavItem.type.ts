export type NavItem = {
  icon?: Object;
  label: String;
  route: String;
  active: Boolean;
  subItems?: NavItem[];
};
