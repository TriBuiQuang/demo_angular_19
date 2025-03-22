import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
	selector: 'app-route-level-render-modes',
	imports: [FieldsetModule],
	templateUrl: './route-level-render-modes.component.html',
	styleUrl: './route-level-render-modes.component.scss',
})
export class RouteLevelRenderModesComponent {
	imgSrcConfig = './assets/img/route_level_render_modes_config.png';
}
