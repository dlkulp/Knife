<template>
	<footer class="page-footer red darken-3">
		<div class="container">
			<div class="row">
				<div class="col l6 s12">
					<h5 class="white-text">Jam Description</h5>
					<p class="grey-text text-lighten-4">A descirption of the jam</p>
				</div>
				<div class="col l4 offset-l2 s12">
					<h5 class="white-text">Social Media</h5>
					<div v-for="media in socialMedia" class="chip">
						<img :src="media.icon" class="circle small" alt="{{media.text}} icon">
						<a class="grey-text" :href="media.link">{{media.text}}</a>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-copyright">
			<div class="container">
				<div class="left">
					© 2016 &nbsp; <a class="grey-text text-lighten-4 right" href="http://gl0vgames.com">GL0V Games</a>
				</div>
				<div class="right">
					<a href="#" class="waves-effect waves-light btn">contact us</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		data () {
			return {
				socialMedia: [
					{icon: "../../assets/media/twitter-icon.png", link: "http://twitter.com", text: "Twister"},
					{icon: "../../assets/media/vine-icon.jpg", link: "http://vine.co", text: "Vime"},
					{icon: "../../assets/media/Facebook-icon.png", link: "http://facebook.com", text: "Facebok"},
					{icon: "../../assets/media/reddit-icon.png", link: "http://reddit.com", text: "Red-dot"}
				]
			};
		}
	}
</script>
