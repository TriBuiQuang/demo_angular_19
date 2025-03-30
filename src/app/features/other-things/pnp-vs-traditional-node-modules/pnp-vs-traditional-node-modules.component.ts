import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';

@Component({
	selector: 'app-pnp-vs-traditional-node-modules',
	imports: [FieldsetModule, TableModule],
	templateUrl: './pnp-vs-traditional-node-modules.component.html',
	styleUrl: './pnp-vs-traditional-node-modules.component.scss',
})
export class PNPVSTraditionalNodeModulesComponent {
	columnsPnPVSTraditionalNodeModules = ['Feature', 'Yarn PnP', 'Traditional node_modules'];

	dataPnPVSTraditionalNodeModules = [
		{ feature: 'Package Storage', pnp: 'Single `.pnp.cjs` file', nodeModules: 'Files copied to `node_modules`' },
		{ feature: 'Installation Speed', pnp: '🚀 Faster (direct mapping)', nodeModules: '⏳ Slower (file copying)' },
		{ feature: 'Disk Space', pnp: '🏆 Smaller', nodeModules: '🔥 Large (`node_modules` can be huge)' },
		{
			feature: 'Security',
			pnp: '✅ Prevents undeclared dependencies',
			nodeModules: '❌ Risk of implicit dependencies',
		},
		{ feature: 'Compatibility', pnp: '❌ Some tools need extra config', nodeModules: '✅ Works with most tools' },
	];
}
