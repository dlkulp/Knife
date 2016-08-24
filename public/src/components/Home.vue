<template>
	<div >
		<h1 class="container">{{ title }}</h1>
		<p class="container">{{ description }}</p>
		<template v-for="panel in panels">
			<card-panel v-if="panel.type == 'card'" :items="panel.items" :color="panel.color"></card-panel>
			<text-panel v-if="panel.type == 'text'" style="min-height: 200px" :text="panel.text" :color="panel.color" :align="panel.align" :bgcolor="panel.bgcolor"></text-panel>
		</template>
	</div>
</template>

<script>
import cardPanel from "./Panel.Card.vue";
import textPanel from "./Panel.Text.vue";
export default {
	data () {
		return {
			title: "Knife Team Management System",
			description: "A application for managing entries to art competitions, game jams, or coding events. Created for CodeDay:2016 by Graham, Fauzi, and Damian.",
			panels: 
			[{
				"type": "card",
				"items": [{
					"img": "../../assets/media/reddit-icon.png",
					"title": "RED-DOT!!",
					"link": "//reddit.com",
					"desc": "Red-Dot",
					"more": "see more dots"
				}, {
					"img": "../../assets/media/vine-icon.jpg",
					"title": "VIME?",
					"link": "//vine.com",
					"desc": "Vime",
					"more": "see more vimes"
				}, {
					"img": "../../assets/media/twitter-icon.png",
					"title": "TWISTER!",
					"link": "//twister.com",
					"desc": "Twister",
					"more": "twist and shout"
				}]
			}, {
				"type" : "text",
				"align": "flex-start",
				"text" : "Lorem ipsum dolor sit amet",
				"bgcolor": "#c62828",
				"color" : "white"
			}, {
				"type": "card",
				"items": [{
					"img": "../../assets/media/reddit-icon.png",
					"title": "RED-DOT!!",
					"link": "//reddit.com",
					"desc": "Red-Dot",
					"more": "see more dots"
				}, {
					"img": "../../assets/media/vine-icon.jpg",
					"title": "VIME?",
					"link": "//vine.com",
					"desc": "Vime",
					"more": "see more vimes"
				}, {
					"img": "../../assets/media/twitter-icon.png",
					"title": "TWISTER!",
					"link": "//twister.com",
					"desc": "Twister",
					"more": "twist and shout"
				}, {
					"img": "../../assets/media/reddit-icon.png",
					"title": "RED-DOT!!",
					"link": "//reddit.com",
					"desc": "Red-Dot",
					"more": "see more dots"
				}, {
					"img": "../../assets/media/twitter-icon.png",
					"title": "TWISTER!",
					"link": "//twister.com",
					"desc": "Twister",
					"more": "twist and shout"
				}]
			}, {
				"type" : "text",
				"align": "flex-end",
				"text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"bgcolor": "#c62828",
				"color" : "white"
			}, {
				"type": "card",
				"items": [{
					"img": "../../assets/media/reddit-icon.png",
					"title": "RED-DOT!!",
					"link": "//reddit.com",
					"desc": "Red-Dot"
				}, {
					"img": "../../assets/media/twitter-icon.png",
					"title": "TWISTER!",
					"link": "//twister.com",
					"desc": "Twister"
				}]
			}, {
				"type" : "text",
				"align": "center",
				"text" : "Lorem ipsum dolor sit amet",
				"bgcolor": "#c62828",
				"color" : "white"
			}, {
				"type" : "text",
				"align": "flex-end",
				"text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			}]
		}
	},
	components: {
		cardPanel,
		textPanel
	}
}
</script>
