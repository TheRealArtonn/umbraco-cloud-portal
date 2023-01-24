import { MenuItem, ProjectItem } from './api.resource';

export const fakeMenuFixture: MenuItem[] = [
  {
    name: 'General',
    icon: 'general',
    subpages: [
      {
        name: 'Overview',
      },
      {
        name: 'Environments',
      },
      {
        name: 'Edit teams',
      },
      {
        name: 'Usage',
      },
    ],
  },
  {
    name: 'Configuration',
    icon: 'configuration',
    subpages: [
      {
        name: 'Hostnames',
      },
      {
        name: 'Cashing & Configuration',
      },
      {
        name: 'Manual certificate',
      },
      {
        name: 'Webhook',
      },
    ],
  },
  {
    name: 'Management',
    icon: 'management',
    subpages: [
      {
        name: 'Upgrade plan',
      },
      {
        name: 'Dedicated resources',
      },
      {
        name: 'Payment',
      },
      {
        name: 'Rename project',
      },
      {
        name: 'Delete project',
      },
    ],
  },
  {
    name: 'Connections',
    icon: 'connections',
    subpages: [
      {
        name: 'Security',
      },
      {
        name: 'Connections',
      },
      {
        name: 'Public access',
      },
    ],
  },
  {
    name: 'Advanced',
    icon: 'advanced',
    subpages: [
      {
        name: 'Outbound IP Addresses',
      },
      {
        name: 'IIS Logs',
      },
      {
        name: 'Custom Application Settings',
      },
      {
        name: 'Runtime Settings',
      },
    ],
  },
];

export const fakeProjectsFixture: ProjectItem[] = [
  {
    name: 'East clients',
    projects: [
      {
        name: 'Anubias market',
      },
    ],
  },
  {
    name: 'Projects group',
    projects: [
      {
        name: 'Project 1',
      },
      {
        name: 'Project 2',
      },
      {
        name: 'Project 3',
      },
      {
        name: 'Project 4',
      },
    ],
  },
];
