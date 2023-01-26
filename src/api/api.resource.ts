export interface Project {
  name: string;
  id: string;
  groupId: string | null;
  colorId: string;
  badges: Badge[];
  environments: Environment[];
  bandwidthUsed: number;
  storageUsed: number;
  domainsUsed: number;
}

export interface Badge {
  type: string;
  plan: boolean;
}

export interface Environment {
  type: string;
  created: boolean;
  versionCMS: string;
  versionForms: string;
  versionDeploy: string;
}

export interface Plan {
  name: string;
  bandwidthMax: number;
  storageMax: number;
  domainMax: number;
}

export interface Category {
  name: string;
  icon: string;
  subpages: Subpage[];
}

export interface Subpage {
  name: string;
  content: string;
}

// export interface Subpage {
//   name: string;
// }

// export interface MenuItem {
//   name: string;
//   icon: string;
//   subpages: Subpage[];
// }

// export interface Project {
//   name: string;
// }

// export interface ProjectItem {
//   name: string;
//   projects: Project[];
// }
