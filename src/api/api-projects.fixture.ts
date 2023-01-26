import { Project } from './api.resource';

export const projectsFixture: Project[] = [
  {
    name: 'Anubias market',
    id: '15d52-d522a-sd422',
    groupId: '4245-2422',
    colorId: '#d0a5f3',
    badges: [
      {
        type: 'Professional',
        plan: true,
      },
      {
        type: 'Cloud',
        plan: false,
      },
    ],
    environments: [
      {
        type: 'Development',
        created: true,
        versionCMS: '10.2.1',
        versionForms: '10.2.1',
        versionDeploy: '10.2.1',
      },
      {
        type: 'Staging',
        created: true,
        versionCMS: '10.2.1',
        versionForms: '10.2.1',
        versionDeploy: '10.2.1',
      },
      {
        type: 'Live',
        created: true,
        versionCMS: '10.2.1',
        versionForms: '10.2.1',
        versionDeploy: '10.2.1',
      },
    ],
    bandwidthUsed: 60,
    storageUsed: 10,
    domainsUsed: 0,
  },
  {
    name: 'Deltas shop',
    id: 'dad22-w654b-qt4w2',
    groupId: '4245-2422',
    colorId: '#99EFC4',
    badges: [
      {
        type: 'Standard',
        plan: true,
      },
      {
        type: 'Cloud',
        plan: false,
      },
    ],
    environments: [
      {
        type: 'Development',
        created: true,
        versionCMS: '10.2.1',
        versionForms: '10.2.1',
        versionDeploy: '10.2.1',
      },
      {
        type: 'Staging',
        created: false,
        versionCMS: '',
        versionForms: '',
        versionDeploy: '',
      },
      {
        type: 'Live',
        created: true,
        versionCMS: '10.2.1',
        versionForms: '10.2.1',
        versionDeploy: '10.2.1',
      },
    ],
    bandwidthUsed: 20,
    storageUsed: 30,
    domainsUsed: 0,
  },
];
