<template>
    <style>
        .cardBlock {
            display: table;
            width: 100%;
            margin-top: 4em;
            margin-bottom: 4em;
        }
        .cardCenter {
            display: table-cell;
            text-align: center;
            vertical-align: middle;
        }
        .customCard {
            margin-left: 20px;
            width: calc(100% / 6);
            max-width: 335px;
            height: 15px;
            display: inline-block;
        }
        @media only screen and (max-width:993px) {
            .customCard {
                width: calc(100% / 4);
            }
        }
        @media only screen and (max-width:601px) {
            .customCard {
                width: calc(100% / 2);
            }
        }
        .customCard img {
            width: 100%;
        }
        .material-icons {
            vertical-align: middle;
        }
    </style>
    <div class="cardBlock" :style="'background-color: ' + color">
        <div class="cardCenter">
            <div v-for="item in items" class="customCard">
                <img :src="item.img">
                <span class="flow-text">{{item.title}}</span>
                <div v-if="item.link && item.more">
                    <a :href="item.link">{{item.more}} <i class="material-icons">chevron_right</i></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["items", "color"]
}
</script>