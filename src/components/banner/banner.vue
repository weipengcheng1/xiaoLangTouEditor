<template>
    <a :href="obj.link">
        <img :src="obj.src" width="100%" alt="banner图片">
    </a>
</template>

<script>
export default {
    name: "banner",
    props: {
        obj: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    methods: {}
}
</script>

<style lang="scss" scoped>

</style>