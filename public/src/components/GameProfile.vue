<template>
	<style>
		#vue {
			overflow: hidden;
			background-repeat: no-repeat;
			background-size: 100% 600px;
			background-image: linear-gradient(rgba(0,0,0,0), rgba(255,255,255,1)), url({{game.gallery[0]}})
		}
		#metadata ul {
			padding: .1px 8px 8px 8px;
		}
	</style>

	<br>
	<div class="row">
		<div class="col l6 z-depth-1" style="background-color: rgba(0, 0, 0, 0.5);">
			<div class="row col l8 push-l4 white-text">
				<h2>{{game.name}}</h2>
				<h4>{{game.studio}}</h4>
			</div>
		</div>
	</div>
	<div class="row">
		<div id="slideshow" class="col l5 push-l2">
			<div class="row col l12 slider">
				<ul class="slides">
					<li v-for="link in game.gallery">
						<img :src="link"></img>
					</li>
				</ul>
			</div>
			<div id="metadata" class="row col l12">
				<div class="col l3">
					<ul class="z-depth-1">
						<h5>Features</h5>
						<li v-for="feature in game.features">-&nbsp;{{feature}}</li>
					</ul>
					
					<ul class="z-depth-1">
						<h5>Specs</h5>
						<li v-for="(spec, val) in game.specs">
							<b>{{spec}}:</b>&nbsp;{{val}}
						</li>
					</ul>
					
					<ul class="z-depth-1">
						<h5>Download</h5>
						<li><a :href="game.download">Download Here</a></li>
					</ul>

					<ul class="z-depth-1">
						<h5>Mirrors</h5>
						<li v-for="mirror in game.mirrors"><a :href="mirror">Mirror {{$index + 1}}</a></li>
					</ul>
					
					<ul class="z-depth-1">
						<h5>Meta</h5>
						<li v-for="(item, val) in game.meta">
							<b>{{item}}:</b>&nbsp;{{val}}
						</li>
					</ul>
				</div>
				<div class="col l9">
					<p>{{game.desc}}</p>
				</div>
			</div>
		</div>
		<div id="sidebar" class="col l3 push-l2 white z-depth-1">
			<sidebar :studio="game.studio"></sidebar>
		</div>
	</div>
</template>

<script>
	import Sidebar from "./Sidebar.vue";
	export default {
		data () {
			return {
				url: window.location.href.match("([^=|\/]*)$")[0],
				game: {
					name: "Tom Clancy's The Division",
					studio: "Ubisoft Montréal",
					desc: "We live in a complex world. The more advanced it gets, the more vulnerable it becomes. We’ve created a house of cards: remove just one, and everything falls apart. <br />Black Friday – a devastating pandemic sweeps through New York City, and one by one, basic services 		fail. In only days, without food or water, society collapses into chaos. The Division, an autonomous unit of tactical agents, is activated. Leading seemingly ordinary lives among us, these agents are trained to operate independently in order to save society. <br />When 			society falls, we rise.<br /><br />Features<br />TAKE BACK NEW YORK<br /> Welcome to a next-gen experience in a persistent and dynamic open world environment that is built from the ground up for co-op and where exploration and player progression are essential. Teaming up 		with other Division agents, your mission is to restore order, investigate the source of the virus, and take back New York. <br />A LIVING, BREATHING WORLD <br />Enter a universe where time of day and weather conditions impact your gaming experience. Use the environment for 		strategic advantage to dominate fights and ambush your enemies. Utilize your gas mask to provide protection from the virus, and upgrade it to enter the most highly contaminated areas. <br />URBAN JUNGLE <br />New York City is being overrun by hostile groups trying to take 		advantage of the crisis. Beware of the thugs who roam in packs through the city, preying on the weak. Fight against the Cleaners, who wear hazmat suits and wield flamethrowers, set on cleaning New York from the virus by burning everything and everyone. Engage with the Rikers,	 a gang of convicts that escaped Rikers Island when the chaos hit, and who are ravaging the city and vying for its control. <br />GEAR UP AND CUSTOMIZE YOUR AGENT <br />Harness state-of-the-art technology, both networked and prototype, as a member of The Division. Customize 		your character and your backpack, your lifeline in mid-crisis New York. Communicate with other agents at all times with your smartwatch. Loot fallen enemies and customize and level up your weapons, gear, and skills. <br />CUTTING-EDGE TECH <br />Choose and upgrade your 			skills, and synergize with your teammates to increase your chances of winning in combat. Switch your skills such as the seeker mine that finds your enemy and explodes; the turret that triggers high-octane and efficient diversion; or the pulse that gives you a tactical read 		on your environment. Use the ECHO tech, a data collection tool that renders moments frozen in time, to learn valuable information about your immediate environment and find hidden loot, and help uncover the truth behind the pandemic. <br />SEAMLESS MULTIPLAYER: THE DARK ZONE 		<br />Enter the Dark Zone, a walled-off quarantine zone in the middle of Manhattan where the most valuable loot was left behind when the military evacuated. It’s also the most dangerous area in the game, where fear, betrayal, and tension are high. Team up with other players 		to take down your enemies and extract legendary loot via helicopter. It’s your choice to collaborate with other agents, or attack them and steal their loot. <br />SNOWDROP™ ENGINE <br />Powered by the fully next-gen Snowdrop engine, Tom Clancy’s The Division™ sets a 		new bar in video game realism and open world rendering. Experience a chaotic and devastated New York like you’ve never seen before. ", 
					gallery: ["../../assets/game-cover.jpg", "../../assets/game-gallery-1.jpg","../../assets/game-gallery-2.jpg","../../assets/game-gallery-3.jpg"],
					features: ["Multiplayer Coop", "Multiplayer PvP", "Open World", "Third-Person Shooter", "Dynamic Weather", "Campaign"],
					specs: {"Supported Platforms": "Windows® 7, Windows 8.1, Windows 10 (64-bit versions only)",
							"Processor": "Intel Core i5-2400 | AMD FX-6100, or better",
							"RAM": "6GB",
							"Hard Drive Space": "40GB"},
					download: "//tomclancy-thedivision.ubi.com/game/en-US/buy/index.aspx",
					mirrors: ["//store.steampowered.com/app/365590/"],
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
