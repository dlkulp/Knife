<template>
	<header>
		<!-- Menu -->
		<nav>
			<div class="nav-wrapper red darken-3">
				<a href="#" data-activates="mobile-menu" class="button-collapse"><i class="material-icons">menu</i></a>
				<ul class="left hide-on-med-and-down">
					<li><a v-link="{path: '/'}">Home</a></li>
					<li><a v-link="{path: '/browse'}">Browse</a></li>
					<li><a v-link="{path: '/'}">About</a></li>
				</ul>
				<a href="#" class="brand-logo center">Knife</a>
				<ul class="right hide-on-med-and-down">
					<li><a class="waves-effect waves-light btn modal-trigger" href="#modal1">Login</a></li>
				</ul>
				<ul class="side-nav" id="mobile-menu">
					<li><a v-link="{path: '/'}">Home</a></li>
					<li><a v-link="{path: '/browse'}">Browse</a></li>
					<li><a v-link="{path: '/'}">About</a></li>
					<li><a class="waves-effect waves-light btn modal-trigger" href="#modal1">Login</a></li>
				</ul>
			</div>
		</nav>

		<!-- Login -->
		<div id="modal1" class="modal">
			<div class="row">
				<div class="col s12">
					<ul class="tabs" style="overflow: hidden">
						<li class="tab col s3"><a class="active" href="#login">Login</a></li>
						<li class="tab col s3"><a href="#signup">Sign Up</a></li>
					</ul>
				</div>
				<div id="signup" class="col s12">
					<form>
						<div class="modal-content">
							<h4>Sign Up</h4>
							<label for="suname">Username <input id="suname" name="suname" type="text" required="required" placeholder="Username" /></label>
							<label for="spass">Password <input id="spass" name="spass" type="password" required="required" placeholder="Password" /></label>
							<label for="spassverify">Verify Password <input id="spassverify" name="spassverify" type="password" required="required" placeholder="Verify Password" /></label>
							<label for="semail">Email <input id="spassverify" name="semail" type="email" required="required" placeholder="Email" /></label>
							<label for="sslug">Unique Slug <input id="sslug" name="sslug" type="text" required="required" placeholder="Unique Slug" /></label>
						</div>
						<div class="modal-footer">
							<a id="signupSubmit" class="waves-effect waves-light btn-flat" value="signup">Sign Up</a>
						</div>
					</form>
				</div>
				<div id="login" class="col s12">
					<form>
						<div class="modal-content">
							<h4>Login</h4>
							<label for="luname">Username <input id="luname" name="luname" type="text" required="required" autofocus="autofocus" placeholder="Username" /></label>
							<label for="lpass">Password <input id="lpass" name="lpass" type="password" required="required" placeholder="Password" /></label>
						</div>
						<div class="modal-footer">
							<a id="loginSubmit" class="waves-effect waves-light btn-flat" value="login">Login</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		data () {
			return {}
		},
		route: {
			activate: (transition) => {
				transition.next();
				$(".modal-trigger").leanModal();
				$("ul.tabs").tabs();
			}
		}
	}
</script>