import { Category } from './api.resource';

export const subpageFixture: Category[] = [
  {
    name: 'General',
    icon: 'general',
    subpages: [
      {
        name: 'Overview',
        content: 'Cool stats about the project and project resource usage',
      },
      {
        name: 'Environments',
        content: 'Environments manipulation and information',
      },
      {
        name: 'Edit teams',
        content: 'Teams and stuff',
      },
      {
        name: 'Usage',
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
        content: 'Example',
      },
      {
        name: 'CDN',
        content: 'Example',
      },
      {
        name: 'Manual certificate',
        content: 'Example',
      },
      {
        name: 'Webhook',
        content: 'Example',
      },
      {
        name: 'Connection details',
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
        content: 'Example',
      },
      {
        name: 'Security',
        content: 'Example',
      },
      {
        name: 'Secrets',
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
        content: 'Example',
      },
      {
        name: 'Dedicated resources',
        content: 'Example',
      },
      {
        name: 'Payment',
        content: 'Example',
      },
      {
        name: 'Rename project',
        content: 'Example',
      },
      {
        name: 'Delete project',
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
        content: 'Example',
      },
      {
        name: 'IIS Logs',
        content: 'Example',
      },
      {
        name: 'Custom App Settings',
        content: 'Example',
      },
      {
        name: 'Runtime Settings',
        content: 'Example',
      },
    ],
  },
];
