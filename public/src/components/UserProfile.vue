<template>
	<div class="container">
		<!-- Top Image -->
		<br><br>
		<div class="center row valign-wrapper">
			<img v-bind:src="user.image" class="valign circle z-depth-1 responsive-img col s4"></img>
			<div class="col s10" style="margin-left: 25px">
				<h1>{{user.name}}</h1>
				<p>{{user.desc}}</p>
			</div>
		</div>		
		<br>
		
		<!-- Teams/Games -->
		<div class="row">
			<div class="container">
				<div class="col s12">
					<ul class="tabs" style="overflow: hidden">
						<li class="tab col s6"><a class="active" href="#{{tab1}}">{{tab1}}</a></li>
						<li class="tab col s6"><a href="#{{tab2}}">{{tab2}}</a></li>
					</ul>
				</div>
			</div>
			
			<!-- Tab 1 -->
			<div id="{{tab1}}" class="col s12">
				<div class="container">
					<ul>
						<li v-for="team in user.teams" class="col s12 m6 l4">
							<div class="card hoverable small">
								<div class="card-image">
									<img class="activator" v-bind:src="team.link">
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-4">{{team.title}}<i class="material-icons right">more_vert</i></span>
								</div>
								<div class="card-action">
									<a v-link="{path: team.page}">team page</a>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">{{team.title}}<i class="material-icons right">close</i></span>
									<p>{{team.desc}}</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			
			<!-- Tab 2 -->
			<div id="{{tab2}}" class="col s12">
				<div class="container">
					<ul>
						<li v-for="game in user.games" class="col s12 m6 l4">
							<div class="card hoverable small">
								<div class="card-image">
									<img class="activator" v-bind:src="game.link">
								</div>
								<div class="card-content">
									<div class="card-title activator grey-text text-darken-4">{{game.title}}</div>
									<div class="material-icons right" style="position:absolute;right:5px;bottom:90px">more_vert</div>
								</div>
								<div class="card-action">
									<a v-link="{path: game.page}">game page</a>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">{{game.title}}<i class="material-icons right">close</i></span>
									<p>{{game.desc}}</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// app.authenticate().then(() => {
	// 	console.log("yay");
	// }).catch(() => {
	// 	console.log("error with credentials");
	// });
	export default {
		data () {
			return {
				tab1: "Teams",
				tab2: "Games",
				user: {
					name: "Broman McBroface", 
					desc: "I like big data and I cannot lie, you other programmers cannot lie. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
					image: "../../assets/notch.jpg",
					teams: [
						{title: "Ubisoft Montréal", desc: "Canadian Games", link: "../../assets/team.jpg", page:"/team-profile" }, 
					],
					games: [
						{title:"Tom Clancy's The Division", desc:"Lorem Ipsum", link: "../../assets/game-cover.jpg", page:"/game-profile"},
						{title: "Far Cry Primal", desc: "pal", link: "../../assets/far-cry-primal.jpg", page:"/game-profile" }
					]
				}
			}
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
