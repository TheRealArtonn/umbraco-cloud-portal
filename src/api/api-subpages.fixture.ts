import { Category } from './api.resource';

export const subpageFixture: Category[] = [
  {
    name: 'General',
    icon: 'general',
    subpages: [
      {
        name: 'Overview',
        path: '',
        content: 'Cool stats about the project and project resource usage',
      },
      {
        name: 'Environments',
        path: 'environments',
        content: 'Environments manipulation and information',
      },
      {
        name: 'Edit teams',
        path: 'edit-teams',
        content: 'Teams and stuff',
      },
      {
        name: 'Usage',
        path: 'usage',
        content: 'More detailed usage data and actions',
      },
    ],
  },
  {
    name: 'Configuration',
    icon: 'configuration',
    subpages: [
      {
        name: 'Hostnames',
        path: '',
        content: 'Example',
      },
      {
        name: 'CDN',
        path: '',
        content: 'Example',
      },
      {
        name: 'Manual certificate',
        path: '',
        content: 'Example',
      },
      {
        name: 'Webhook',
        path: '',
        content: 'Example',
      },
      {
        name: 'Connection details',
        path: '',
        content: 'Example',
      },
    ],
  },
  {
    name: 'Connections',
    icon: 'connections',
    subpages: [
      {
        name: 'Public access',
        path: '',
        content: 'Example',
      },
      {
        name: 'Security',
        path: '',
        content: 'Example',
      },
      {
        name: 'Secrets',
        path: '',
        content: 'Example',
      },
    ],
  },
  {
    name: 'Management',
    icon: 'management',
    subpages: [
      {
        name: 'Upgrade plan',
        path: '',
        content: 'Example',
      },
      {
        name: 'Dedicated resources',
        path: '',
        content: 'Example',
      },
      {
        name: 'Payment',
        path: '',
        content: 'Example',
      },
      {
        name: 'Rename project',
        path: '',
        content: 'Example',
      },
      {
        name: 'Delete project',
        path: '',
        content: 'Example',
      },
    ],
  },
  {
    name: 'Advanced',
    icon: 'advanced',
    subpages: [
      {
        name: 'Outbound IP Addresses',
        path: '',
        content: 'Example',
      },
      {
        name: 'IIS Logs',
        path: '',
        content: 'Example',
      },
      {
        name: 'Custom App Settings',
        path: '',
        content: 'Example',
      },
      {
        name: 'Runtime Settings',
        path: '',
        content: 'Example',
      },
    ],
  },
];
