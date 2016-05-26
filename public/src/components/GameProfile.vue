<template>
	<!-- Top Image -->
	<br>
	<div class="row parallax-container" style="height: 400px">
		<div class="parallax"><img v-bind:src="game.link"></img></div>
	</div>
	<div class="row">
		<div class="col s8 z-depth-2">
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
				<br>
				
				<ul>
					<h4>Features</h4>
					<li v-for="feature in game.features">-&nbsp;{{feature}}</li>
				</ul>
				
				<ul>
					<h4>Specs</h4>
					<li v-for="(spec, val) in game.specs">
						<b>{{spec}}:</b>&nbsp;{{val}}
					</li>
				</ul>
				
				<h4>Downloads</h4>
				<p><a v-bind:href="game.download">Download Here</a></p>
				
				<ul>
					<h4>Meta</h4>
					<li v-for="(item, val) in game.meta">
						<b>{{item}}:</b>&nbsp;{{val}}
					</li>
				</ul>
			</div>
		</div>
		<div class="col s4">
			<sidebar></sidebar>
		</div>
	</div>
</template>

<script>
	import Sidebar from "./Sidebar.vue";
	export default {
		data () {
			return {
				game: {
					name: "Tom Clancy's The Division",
					desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
					link: "../../assets/game-cover.jpg",
					gallery: ["../../assets/game-gallery-1.jpg","../../assets/game-gallery-2.jpg","../../assets/game-gallery-3.jpg"],
					features: ["Multiplayer Coop", "Multiplayer PvP", "Open World", "Third-Person Shooter", "Dynamic Weather", "Campaign"],
					specs: {"Supported Platforms": "Windows® 7, Windows 8.1, Windows 10 (64-bit versions only)",
							"Processor": "Intel Core i5-2400 | AMD FX-6100, or better",
							"RAM": "6GB",
							"Hard Drive Space": "40GB"},
					download: "//tomclancy-thedivision.ubi.com/game/en-US/buy/index.aspx",
					mirrors: [],
					meta:  {"Engine": "Snowdrop",
							"Version": "1.0",
							"Release Date": "8 March, 2016"}
				}
			}
		},
		components: {
			Sidebar
		},
		route: {
			activate: (transition) => {
				transition.next();
				$(".parallax").parallax();
				$("ul.tabs").tabs();
				$(".slider").slider({full_width: true});
			}
		}
	}
</script>
