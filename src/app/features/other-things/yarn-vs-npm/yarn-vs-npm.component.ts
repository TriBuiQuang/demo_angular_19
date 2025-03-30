import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';

@Component({
	selector: 'app-yarn-vs-npm',
	imports: [FieldsetModule, TableModule],
	templateUrl: './yarn-vs-npm.component.html',
	styleUrl: './yarn-vs-npm.component.scss',
})
export class YarnVSNPMComponent {
	columns = ['Feature', 'Yarn', 'NPM'];

	data = [
		{ feature: 'Speed', yarn: 'Faster (parallel installation)', npm: 'Slower (sequential installation)' },
		{ feature: 'Offline Support', yarn: 'Yes (caches for offline use)', npm: 'Partial support' },
		{ feature: 'Security', yarn: 'Better (checksum verification)', npm: 'Weaker security' },
		{ feature: 'Lockfile', yarn: '`yarn.lock` (more stable)', npm: '`package-lock.json` (added later)' },
		{ feature: 'Workspace Support', yarn: 'Built-in support', npm: 'Available but less mature' },
		{ feature: 'Dependency Resolution', yarn: 'Better handling of conflicts', npm: 'Sometimes inconsistent' },
		{ feature: 'CLI Commands', yarn: 'More user-friendly', npm: 'Evolved over time' },
		{ feature: 'Plug’n’Play (PnP)', yarn: 'No `node_modules` (faster)', npm: 'Uses `node_modules`' },
		{ feature: 'Installation Size', yarn: 'Smaller (optimized hoisting)', npm: 'Slightly larger' },
		{ feature: 'Default Package Manager', yarn: 'Used in modern projects', npm: 'Default for Node.js' },
	];

	columnsPnPVSTranditionalNodeModules = ['Feature', 'Yarn PnP', 'Traditional node_modules'];

	dataPnPVSTranditionalNodeModules = [
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
