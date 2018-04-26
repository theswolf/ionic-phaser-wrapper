import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { DemoPageModule } from '../pages/demo/demo.module';

platformBrowserDynamic().bootstrapModule(AppModule);
