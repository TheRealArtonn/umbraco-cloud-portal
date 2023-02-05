import { App } from './app-element';
import './shared/navigation-header';
import './pages/dashboard';
import './pages/organization';
import './pages/project';

window.umbracoCloudPortal = { router: null };

customElements.define('app-element', App);
