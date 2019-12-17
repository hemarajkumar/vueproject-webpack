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

    <div class="container">
		<h4>This page content is static, will update soon with dynamic data using vUE</h4>
		<div class="row margin10top col-12 noPad">
			<div id="ProductLists" class="col-12 noPad plp-products">
                <div class="col-12 col-sm-12 col-md-2 noPad">
					<app-facet></app-facet>
				</div>
                <div class="col-12 col-sm-12 col-md-10 noPad">
					<div class="plp-products__pagination col-12 col-sm-12">
						<select class="plp-products__sort-by js-sortBy">
							<option value="default" selected>Sort By</option>
							<option value="hightolow">High - Low</option>
							<option value="lowtohigh">Low - High</option>
						</select>
					</div>
                    <app-productlist></app-productlist>
                </div>
			</div>
        </div>
    </div>
    
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
