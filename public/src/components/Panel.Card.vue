<template>
    <style>
        /* Reference only
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
        }*/
        .customCard {
            width: calc(100% / 6);
        }
        @media only screen and (max-width:1601px) {
            .customCard {
                width: calc(100% / 4);
            }
        }
        @media only screen and (max-width:1025px) {
            .customCard {
                width: calc(100% / 1.5);
            }
        }
    </style>
    <div class="cardBlock" :style="'display:table;width:100%;margin-top:4em;margin-bottom:4em;background-color: ' + color">
        <div class="cardCenter" style="display:table-cell;text-align:center;vertical-align:middle;">
            <div v-for="item in items" class="customCard" style="vertical-align:top;margin-left:20px;max-width:335px;display:inline-block;">
                <img :src="item.img" style="width: 100%;">
                <span class="flow-text">{{item.title}}</span>
                <div v-if="item.link && item.more">
                    <a :href="item.link">{{item.more}} <i class="material-icons" style="vertical-align: middle;">chevron_right</i></a>
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