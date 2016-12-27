<template>
    <div>
        <ul>
            <p>购物车: {{lastCheckout}}</p>
            <li v-for="item in cartList">
                {{item.id}} : {{item.quantity}}个
            </li>
        </ul>

        <ul>
            <p>库存: {{lastCheckout}}</p>
            <li v-for="item in productList">
                {{item.id}} : {{item.inventory}}个
            </li>
        </ul>


        <button v-for="item in productList"
                v-show="item.inventory>0"
                @click='addToCart(item.id)'>向购物车添加产品{{item.id}}
        </button>

        <button @click='submitCart'>提交购物车</button>
        <button @click='successSubmit'>成功提交</button>
        <button @click='failSubmit'>提交失败</button>
        <button @click='resetCart'>重新购买</button>

        <button @click='getGoods'>补充库存</button>
        <router-link :to="{name:'hello'}">hello</router-link>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: mapGetters({
            cartList: "getCurrentQuantity",
            lastCheckout: "getLastCheckout",
            productList: "getCurrentProducts"
        }),
        methods: {
            async getGoods () {
                const response = await fetch('/api/getGoods');
                const data = await response.json();
                if (await data.success) {
                    let products = data.data.products;

                    this.setInventory(products);
                }
            },
            ...mapActions([
                'addToCart',
                'submitCart',
                'successSubmit',
                'failSubmit',
                'resetCart',
                'setInventory'
            ])
        }
        ,
        mounted () {
            this.getGoods();
        },
    }
</script>
