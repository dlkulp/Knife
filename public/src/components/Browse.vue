<template>
<br>
	<h1 class="container">{{ title }}</h1>
	<br>
	<div class="row">
		<!-- Menu -->
		<div class="container">
			<div class="col s12">
				<ul class="tabs" style="overflow: hidden">
					<li class="tab col s4"><a class="active" :href="'#' + tab1">{{tab1}}</a></li>
					<li class="tab col s4"><a :href="'#' + tab2">{{tab2}}</a></li>
					<li class="tab col s4"><a :href="'#' + tab3">{{tab3}}</a></li>
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
								<img class="activator" :src="team.link">
							</div>
							<div class="card-content">
								<span class="card-title activator grey-text text-darken-4">{{team.title}}</span><i class="material-icons right">more_vert</i>
							</div>
							<div class="card-action">
								<a v-link="{path: '/team-profile?t=' + team.slug}">team page</a>
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
								<img class="activator" :src="game.link">
							</div>
							<div class="card-content">
								<span class="card-title activator grey-text text-darken-4 truncate">{{game.title}}<i class="material-icons right">more_vert</i></span>
							</div>
							<div class="card-action">
								<a v-link="{path: '/game-profile?g=' + game.slug}">game page</a>
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
		
		<!-- Tab 3 -->
		<div id="{{tab3}}" class="col s12">
			<div class="container">
				<div v-for="user in users" class="col s12 z-depth-1" style="margin-bottom: 30px;">
					<div class="row">
						<img :src="user.image" class="col s6 m4 l3"></img>
						<div class="row col l9">
							<h3 style="margin-bottom: -.5rem;">{{user.name}}</h3>
							<h6><i>{{user.loc}}</i></h6>
							<div v-for="media in user.media" class="chip">
								<a :href="media.link">{{media.text}}</a>
							</div>
							<p class="flow-text" style="margin-top: 1.25rem">{{user.tagLine}}</p>
						</div>
					</div>
					<ul class="collapsible" data-collapsible="accordion">
						<li>
							<div class="collapsible-header"><i class="material-icons">keyboard_arrow_down</i>Games</div>
							<div class="collapsible-body">
								<ul class="row" style="overflow-x: scroll; overflow-y: hidden; white-space: nowrap">
									<li v-for="game in user.games" class="col s6 m5 l4" style="display: inline-block; float: initial">
										<div class="card hoverable">
											<div class="card-image">
												<img class="activator" :src="game.link">
											</div>
											<div class="card-content">
												<span class="card-title activator grey-text text-darken-4">{{game.title}}<i class="material-icons right">more_vert</i></span>
											</div>
											<div class="card-action">
												<a v-link="{path: '/game-profile?g=' + game.slug}">game page</a>
											</div>
											<div class="card-reveal">
												<span class="card-title grey-text text-darken-4">{{game.title}}<i class="material-icons right">close</i></span>
												<p>{{game.desc}}</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<div class="collapsible-header"><i class="material-icons">keyboard_arrow_down</i>Teams</div>
							<div class="collapsible-body">
								<ul class="row" style="overflow-x: scroll; overflow-y: hidden; white-space: nowrap">
									<li v-for="team in user.teams" class="col s6 m5 l4" style="display: inline-block; float: initial">
										<div class="card hoverable">
											<div class="card-image">
												<img class="activator" :src="team.link">
											</div>
											<div class="card-content">
												<span class="card-title activator grey-text text-darken-4">{{team.title}}<i class="material-icons right">more_vert</i></span>
											</div>
											<div class="card-action">
												<a v-link="{path: '/team-profile?t=' + team.slug}">team page</a>
											</div>
											<div class="card-reveal">
												<span class="card-title grey-text text-darken-4">{{team.title}}<i class="material-icons right">close</i></span>
												<p>{{team.desc}}</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
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
				tab3: "Users",
				games: [
					{title:"Tom Clancy's The Division", desc:"Lorem Ipsum", link: "../../assets/game-cover.jpg", slug:"the-division"},
					{title: "Ark Survival", desc: "gurl", link: "../../assets/ark.jpg", slug:"ark" }, 
					{title: "Battlefield Hardline", desc: "y'all", link: "../../assets/battlefield.jpg", slug:"battlefield-hardline" }, 
					{title: "Far Cry Primal", desc: "pal", link: "../../assets/far-cry-primal.jpg", slug:"far-cry-primal" }, 
					{title: "Rainbow Six Siege", desc: "person", link: "../../assets/rainbow-six.jpg", slug:"rainbow6" }, 
					{title: "Neko Atsume", desc: "buddy", link: "../../assets/nekoatsume.jpg", slug:"nekoAtsume" },
					{title: "Quantum Break", desc: "bud", link: "../../assets/quantum-break.jpg", slug:"Quantum-Break" }
				],
				teams: [
					{title: "Ubisoft Montréal", desc: "Canadian Games", link: "../../assets/team.jpg", slug:"Ubisoft-Montreal" }, 
					{title: "Mojang Studios", desc: "you", link: "../../assets/mojang-office.jpg", slug:"mojang" }, 
					{title: "Blizzard Studios", desc: "him", link: "../../assets/blizzard.jpg", slug:"blizzard_studios" }, 
					{title: "Gabe Newell", desc: "her", link: "../../assets/gabe-newell.jpg", slug:"gabe-is-awesome" }
				],
				users: [
					{name: "Broman McBroface", 
					tagLine: "I like big data and I cannot lie, you other programmers cannot lie.", 
					loc: "San Francisco, USA",
					media: [{text:"Github", link:"https://github.com/bromanko"}, {text:"Docker", link:"https://hub.docker.com/u/bromanko/"}, {text:"Personal Site", link:"http://bromanko.com"}],
					desc: "I like big data and I cannot lie, you other programmers cannot lie. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
					image: "../../assets/notch.jpg",
					teams: [
						{title: "Ubisoft Montréal", desc: "Canadian Games", link: "../../assets/team.jpg", slug:"ubisoft-montreal" }
					],
					games: [
						{title:"Tom Clancy's The Division", desc:"Lorem Ipsum", link: "../../assets/game-cover.jpg", slug:"the-division"},
						{title: "Far Cry Primal", desc: "pal", link: "../../assets/far-cry-primal.jpg", slug:"far-cry-primal" }
					]},
					{name:"Bromitri Bromichev", loc: "Moscow, Russia", tagLine:"I like big guns and I cannot lie, you other comrades cannot lie.", image: "../../assets/logo.png"},
					{name:"Broeux Bropond", media:[{text:"Malware Bytes", link:"https://forums.malwarebytes.org/profile/203781-broeux/"}], desc:"I like big cheese and I cannot lie, you other frenchmen cannot lie", image: "../../assets/logo.png"}
				]
			}
		},
		route: {
			activate: (transition) => {
				transition.next();
				$(".parallax").parallax();
				$("ul.tabs").tabs();
				$(".slider").slider({full_width: true});
				$('.collapsible').collapsible();
			}
		}
	}
</script>
