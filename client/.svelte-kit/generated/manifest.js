const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../../src/routes/__error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/dashboard/index.svelte"),
	() => import("../../src/routes/dashboard/general/index.svelte"),
	() => import("../../src/routes/auth/index.svelte"),
	() => import("../../src/routes/auth/successmessage/index.svelte"),
	() => import("../../src/routes/auth/ParticlesAuth.svelte"),
	() => import("../../src/routes/auth/AuthSlider.svelte"),
	() => import("../../src/routes/auth/addAccount/index.svelte"),
	() => import("../../src/routes/auth/register/index.svelte"),
	() => import("../../src/routes/auth/forgot/index.svelte"),
	() => import("../../src/routes/auth/logout/index.svelte"),
	() => import("../../src/routes/auth/login/index.svelte"),
	() => import("../../src/routes/auth/reset/index.svelte"),
	() => import("../../src/routes/auth/ads/index.svelte"),
	() => import("../../src/routes/auth/ads/redirect/index.svelte"),
	() => import("../../src/routes/auth/sp/index.svelte"),
	() => import("../../src/routes/auth/sp/redirect/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/dashboard/index.svelte
	[/^\/dashboard\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/dashboard/general/index.svelte
	[/^\/dashboard\/general\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/auth/index.svelte
	[/^\/auth\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/auth/successmessage/index.svelte
	[/^\/auth\/successmessage\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/auth/ParticlesAuth.svelte
	[/^\/auth\/ParticlesAuth\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/auth/AuthSlider.svelte
	[/^\/auth\/AuthSlider\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/auth/addAccount/index.svelte
	[/^\/auth\/addAccount\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/auth/register/index.svelte
	[/^\/auth\/register\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/auth/forgot/index.svelte
	[/^\/auth\/forgot\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/auth/logout/index.svelte
	[/^\/auth\/logout\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/auth/login/index.svelte
	[/^\/auth\/login\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/auth/reset/index.svelte
	[/^\/auth\/reset\/?$/, [c[0], c[14]], [c[1]]],

	// src/routes/auth/ads/index.svelte
	[/^\/auth\/ads\/?$/, [c[0], c[15]], [c[1]]],

	// src/routes/auth/ads/redirect/index.svelte
	[/^\/auth\/ads\/redirect\/?$/, [c[0], c[16]], [c[1]]],

	// src/routes/auth/sp/index.svelte
	[/^\/auth\/sp\/?$/, [c[0], c[17]], [c[1]]],

	// src/routes/auth/sp/redirect/index.svelte
	[/^\/auth\/sp\/redirect\/?$/, [c[0], c[18]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];