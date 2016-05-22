<template>
	<!-- Top Image -->
	<br>
	<div class="row parallax-container" style="height: 400px">
		<div class="parallax"><img v-bind:src="game.link"></img></div>
	</div>
	<div class="row">
		<div class="col s8">
			<br>
			<div class="row col s12 slider">
				<ul class="slides">
					<li v-for="link in game.gallery">
						<img v-bind:src="link"></img>
					</li>
				</ul>
			</div>
			<div class="row col s10 push-s1">
				<h1>{{game.name}}</h1>
				<p>{{game.desc}}</p>
			</div>
		</div>
		<div class="col s4">
			<team-profile></team-profile>
		</di>
	</div>
</template>

<script>
	import TeamProfile from "./TeamProfile.vue";
	export default {
		data () {
			return {
				game: {
					name: "Tom Clancy's The Division",
					desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
					link: "../../assets/game-cover.jpg",
					gallery: ["../../assets/game-gallery-1.jpg","../../assets/game-gallery-2.jpg","../../assets/game-gallery-3.jpg"]
				}
			}
		},
		components: {
			TeamProfile
		}
	}
</script>
