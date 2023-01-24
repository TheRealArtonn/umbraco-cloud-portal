export interface Plan {
  name: string;
}

export interface Subpage {
  name: string;
}

export interface MenuItem {
  name: string;
  icon: string;
  subpages: Subpage[];
}

export interface Project {
  name: string;
}

export interface ProjectItem {
  name: string;
  projects: Project[];
}
