<template>
    <style>
        /* https://css-tricks.com/centering-in-the-unknown/ */
        /* This parent can be any width and height */
        .block {
            text-align: center;

            /* May want to do this if there is risk the container may be narrower than the element inside */
            white-space: nowrap;
        }
        
        /* The ghost, nudged to maintain perfect centering */
        .block:before {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
            margin-right: -0.25em; /* Adjusts for spacing */
        }

        /* The element to be centered, can also be of any width and height */ 
        .centered {
            display: inline-block;
            vertical-align: middle;
        }
    </style>
    <div class="block" :style="'background-color: ' + color">
        <ul class="row centered">
            <li v-for="item in items" class="col s6 m5 l2" style="display: inline-block; float: initial">
                <div class="card small">
                    <div class="card-image">
                        <img :src="item.img">
                    </div>
                    <div class="card-content">
                        <span class="card-title">{{item.title}}</span>
                    </div>
                    <div v-if="item.link && item.more" class="card-action">
                        <a :href="item.link">{{item.more}} ></a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ["items", "color"]
}
</script>