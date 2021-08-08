const branches = [
	{
		label: 'stable',
		version: '1.x',
		aliases: ['1','stable'],
	},
	{
		label: 'dev',
		version: '2.x',
		aliases: ['dev'],
	},
];

const [defaultBranch] = branches;

export default {
	data() {
		return {
			branches,
			defaultBranch,
			selectedBranch: defaultBranch.version,
		};
	},
	mounted() {
		this.selectedBranch = localStorage.getItem('branch-version') || defaultBranch.version;
	},
	methods: {
		getBranch(version) {
			return this.branches.find(branch => branch.aliases.includes(version) || branch.version === version);
		},
		updateBranch(branch) {
			this.selectedBranch = branch;
		},
	},
};
