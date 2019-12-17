<template>
    <div class="col-12 col-sm-12 noPad plp-products__list">
        <div class="plp-products__product">
            <div class="plp-products__img-container">
                <a href="javascript:void(0);" class="js-navigatePdp plp-products__img-container--link">
                    <img srcset="dist/images/clothing2.jpg" class="plp-products__img">
                </a>
            </div>
            <span class="plp-products__name">{{ productTitle }}</span>
            <div class="plp-products__price">
                <span class="plp-products__now-price">
                    £29.00
                </span>
            </div>
            <button class="btn btn-danger plp-products--add-basket-btn">Add to Basket</button>
		</div>

         <div class="plp-products__product">
            <div class="plp-products__img-container">
                <a href="javascript:void(0);" class="js-navigatePdp plp-products__img-container--link">
                    <img srcset="dist/images/clothing2.jpg" class="plp-products__img">
                </a>
            </div>
            <span class="plp-products__name">{{ productTitle }}</span>
            <div class="plp-products__price">
                <span class="plp-products__now-price">
                    £29.00
                </span>
            </div>
            <button class="btn btn-danger plp-products--add-basket-btn">Add to Basket</button>
		</div>

         <div class="plp-products__product">
            <div class="plp-products__img-container">
                <a href="javascript:void(0);" class="js-navigatePdp plp-products__img-container--link">
                    <img srcset="dist/images/clothing2.jpg" class="plp-products__img">
                </a>
            </div>
            <span class="plp-products__name">{{ productTitle }}</span>
            <div class="plp-products__price">
                <span class="plp-products__now-price">
                    £29.00
                </span>
            </div>
            <button class="btn btn-danger plp-products--add-basket-btn">Add to Basket</button>
		</div>

         <div class="plp-products__product">
            <div class="plp-products__img-container">
                <a href="javascript:void(0);" class="js-navigatePdp plp-products__img-container--link">
                    <img srcset="dist/images/clothing2.jpg" class="plp-products__img">
                </a>
            </div>
            <span class="plp-products__name">{{ productTitle }}</span>
            <div class="plp-products__price">
                <span class="plp-products__now-price">
                    £29.00
                </span>
            </div>
            <button class="btn btn-danger plp-products--add-basket-btn">Add to Basket</button>
		</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                productTitle: 'Mens Wear'
            }
        }
    }; 
</script>
