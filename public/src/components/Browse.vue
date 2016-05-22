<template>
<br>
	<h1 class="container">{{ title }}</h1>
	<br>
	<div class="row">
		<!-- Menu -->
		<div class="container">
			<div class="col s12">
				<ul class="tabs">
					<li class="tab col s3"><a class="active" href="#{{tab1}}">{{tab1}}</a></li>
					<li class="tab col s3"><a href="#{{tab2}}">{{tab2}}</a></li>
					<li class="tab col s3 disabled"><a href="#"></a></li>
					<li class="tab col s3 disabled"><a href="#"></a></li>
				</ul>
			</div>
		</div>
		<!-- Tab 1 -->
		<div id="{{tab1}}" class="col s12">
			<div class="container">
				<ul>
					<li v-for="team in teams" class="col s6 m4 l3">
						<div class="card hoverable small">
							<div class="card-image">
								<img class="activator" v-bind:src="team.link">
							</div>
							<div class="card-content">
								<span class="card-title activator grey-text text-darken-4">{{team.title}}</span><i class="material-icons right">more_vert</i>
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
					<li v-for="game in games" class="col s6 m4 l3">
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
</template>

<script>
	export default {
		data () {
			return {
				title: "Browse",
				tab1: "Teams",
				tab2: "Games",
				games: [
					{title:"Tom Clancy's The Division", desc:"Lorem Ipsum", link: "../../assets/game-cover.jpg", page:"/game-profile"},
					{title: "hi", desc: "you", link: "../../assets/logo.png", page:"/game-profile" }, 
					{title: "hello", desc: "him", link: "../../assets/logo.png", page:"/game-profile" }, 
					{title: "howdy", desc: "her", link: "../../assets/logo.png", page:"/game-profile" }
				],
				teams: [
					{title: "Ubisoft Montreal", desc: "Canadian Games", link: "../../assets/team.jpg", page:"/team-profile" }, 
					{title: "adios", desc: "y'all", link: "../../assets/logo.png", page:"/team-profile" }, 
					{title: "goodbye", desc: "pal", link: "../../assets/logo.png", page:"/team-profile" }, 
					{title: "later", desc: "person", link: "../../assets/logo.png", page:"/team-profile" }, 
					{title: "hasta luego", desc: "buddy", link: "../../assets/logo.png", page:"/team-profile" }
				]
			}
		}
	}
</script>
