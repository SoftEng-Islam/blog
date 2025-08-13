import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import SettingsView from "../views/SettingsView.vue";
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/HomeView.vue"),
			// component: HomeView,
		},
		{
			path: "/about-me",
			name: "About Me",
			component: () => import("../views/aboutMeView.vue"),
			// component: HomeView,
		},
	],
});

export default router;
