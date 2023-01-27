import '../../shared/side-menu-project-subpages';
import '../../components/header-container';
import '../../components/page-container';

import './project-overview';
import './project-environments';
import './project-edit-teams';
import './project-usage';

import { ProjectElement } from './project';

customElements.define('project-element', ProjectElement);
