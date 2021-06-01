<template>
    <van-form @submit="onSubmit">
        <van-field v-model="userName" name="用户名" label="用户名" placeholder="用户名"></van-field>
        <van-field v-model="phone" name="手机号" label="手机号" placeholder="手机号"></van-field>
        <van-field v-model="address" name="收货地址" label="收货地址" placeholder="收货地址"></van-field>
        <div style="margin: 16px">
            <van-button round block type="info" native-type="submit">{{ obj.btnText }}</van-button>
        </div>
    </van-form>
</template>

<script>

export default {
    name: "form",
    props: {
        obj: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data() {
        return {
            userName: "",
            phone: "",
            address: ""
        }
    },
    methods: {
        onSubmit() {
            alert("submit true")
        }
    }
}
</script>

<style lang="scss" scoped>

</style>