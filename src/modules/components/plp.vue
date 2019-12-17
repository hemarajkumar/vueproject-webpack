<template>
    <div>
    <header class="navbar">
        <div class="container nopad headerNav" style="position: relative;">
            <nav class="navbar">
                <div id='cssmenu'>
                    <app-header></app-header>
                </div>
            </nav>
            <app-baskettotal></app-baskettotal>
        </div>
    </header>
    <app-facet></app-facet>
    <app-productlist></app-productlist>
    </div>
 </template>

<script>
    import Header from '../header/rendertopmenu.vue';
    import miniBasket from '../minibasket/minibasket.vue';
    import productList from '../plp/products.vue';
    import facet from '../plp/facets.vue';
    export default {
        components: {
            'app-header': Header,
            'app-baskettotal': miniBasket,
            'app-productlist': productList,
            'app-facet': facet
        },
        data() {
            return {
            } 
        }
    }; 
</script>