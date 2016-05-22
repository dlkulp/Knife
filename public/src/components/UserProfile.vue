<template>
	<div class="container">
		<!-- Top Image -->
		<br><br>
		<div class="center row valign-wrapper">
			<img v-bind:src="user.image" class="valign circle z-depth-2 responsive-img col s4"></img>
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
					<ul class="tabs">
						<li class="tab col s3"><a class="active" href="#{{tab1}}">{{tab1}}</a></li>
						<li class="tab col s3 pull-3"><a href="#{{tab2}}">{{tab2}}</a></li>
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
									<span class="card-title activator grey-text text-darken-4">{{game.title}}<i class="material-icons right">more_vert</i></span>
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
					image: "../../assets/logo.png",
					teams: [
						{title: "Ubisoft Montreal", desc: "Canadian Games", link: "../../assets/team.jpg", page:"/team-profile" }, 
						{title: "hi", desc: "you", link: "../../assets/logo.png", page:"/team-profile" }, 
						{title: "hello", desc: "him", link: "../../assets/logo.png", page:"/team-profile" }, 
						{title: "howdy", desc: "her", link: "../../assets/logo.png", page:"/team-profile" }
					],
					games: [
						{title:"Tom Clancy's The Division", desc:"Lorem Ipsum", link: "../../assets/game-cover.jpg", page:"/game-profile"},
						{title: "bye", desc: "gurl", link: "../../assets/logo.png", page:"/game-profile" }, 
						{title: "adios", desc: "y'all", link: "../../assets/logo.png", page:"/game-profile" }, 
						{title: "goodbye", desc: "pal", link: "../../assets/logo.png", page:"/game-profile" }, 
						{title: "later", desc: "person", link: "../../assets/logo.png", page:"/game-profile" }, 
						{title: "hasta luego", desc: "buddy", link: "../../assets/logo.png", page:"/game-profile" }
					]
				}
			}
		}
	}
</script>
