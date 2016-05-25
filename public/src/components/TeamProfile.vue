<template>
	<!-- Top Image -->
	<br>
	<div class="row parallax-container" style="height: 400px">
		<div class="parallax" style="margin-top: 200px;"><img v-bind:src="team.link"></img></div>
	</div>
	<div class="container">
		<div class="col s10" style="margin-left: 25px">
			<h1>{{team.name}}</h1>
			<p>{{team.desc}}</p>
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
						<li v-for="user in team.users" class="col s12 m6 l4">
							<div class="card hoverable small">
								<div class="card-image">
									<img class="activator" v-bind:src="user.image">
								</div>
								<div class="card-content">
									<div class="card-title activator grey-text text-darken-4">{{user.name}}</div><i class="material-icons right">more_vert</i>
								</div>
								<div class="card-action">
									<a v-link="{path: user.page}">user page</a>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">{{user.name}}<i class="material-icons right">close</i></span>
									<p>{{user.desc}}</p>
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
						<li v-for="game in team.games" class="col s12 m6 l4">
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
				tab1: "Members",
				tab2: "Games",
				team: {
					name: "Ubisoft Montreal",
					desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
					link: "../../assets/team.jpg",
					users: [
						{name:"Broman McBroface", desc:"I like big data and I cannot lie, you other programmers cannot lie.", image: "../../assets/logo.png", page:"/user-profile"},
						{name:"Bromitri Bromichev", desc:"I like big guns and I cannot lie, you other comrades cannot lie.", image: "../../assets/logo.png", page:"/user-profile"},
						{name:"Broeux Bropond", desc:"I like big cheese and I cannot lie, you other frenchmen cannot lie", image: "../../assets/logo.png", page:"/user-profile"}
					],
					games: [
						{title:"Tom Clancy's The Division", desc:"Lorem Ipsum", link: "../../assets/game-cover.jpg", page:"/game-profile"},
						{title: "Far Cry Primal", desc: "pal", link: "../../assets/far-cry-primal.jpg", page:"/game-profile" }, 
						{title: "Rainbow Six Siege", desc: "person", link: "../../assets/rainbow-six.jpg", page:"/game-profile" }
					]
				}
			}
		}
	}
</script>
