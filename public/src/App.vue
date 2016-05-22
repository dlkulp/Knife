<template>
	<main>
		<user-profile></user-profile>
	</main>
</template>

<script>
	import Home from "./components/Home.vue";
	import Browse from "./components/Browse.vue";
	import UserProfile from "./components/UserProfile.vue";

	export default {
		components: {
			Home,
			Browse,
			UserProfile
		}
	}
</script>
