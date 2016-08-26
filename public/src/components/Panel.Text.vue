<template>
    <!-- Reference only
        <style>
        .textBlock {
            display: flex;
            align-items: center;
            width: 100%;
            min-height: 200px;
        }
    </style>-->
    <div class="textBlock flow-text" :style="'display:flex;align-items:center;min-height:200px;width:100%;justify-content:' + align + ';background-color:' + bgcolor + ';color:' + color">
        <div style="width: 500px; margin-left: 10%; margin-right: 10%">{{text}}</div>
    </div>
</template>
<script>
export default {
    props: ["text", "align", "color", "bgcolor"]
}
</script>