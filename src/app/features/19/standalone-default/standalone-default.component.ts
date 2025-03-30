import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
	selector: 'app-standalone-default',
	imports: [FieldsetModule],
	templateUrl: './standalone-default.component.html',
	styleUrl: './standalone-default.component.scss',
})
export class StandaloneDefaultComponent {
	imgSrcStrictEnforcement = './assets/img/standalone_strict_enforcement.png';
	imgSrcStrictUnusedEnforcement = './assets/img/standalone_unused_import_config.png';
	imgSrcStrictUnusedResult = './assets/img/standalone_unused_import_CLI_build.png';
}
