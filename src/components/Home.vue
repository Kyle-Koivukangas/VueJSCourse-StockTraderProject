<template>
    <div class="component-container">
        <div class="title-box">
            <h2 class="text-center">Stock Trader Home</h2>
            <hr>
        </div>

        <div class="content">
            <br>
            <div class="img-container"><img class="img1" src="../assets/matplotlib.png" alt=""></div>
            <h4>Welcome to Stock Trader! Your online <br> stockmarket - market-marketingplace!!</h4>
            
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi iure, dolor, accusantium natus dignissimos earum laborum asperiores nesciunt id explicabo sunt aliquam repellat inventore, vitae placeat excepturi sint reprehenderit. </p>

            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi iure, dolor, accusantium natus dignissimos earum laborum asperiores nesciunt id explicabo sunt aliquam repellat inventore, vitae placeat excepturi sint reprehenderit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi iure, dolor, accusantium natus dignissimos earum laborum asperiores nesciunt id explicabo sunt aliquam repellat inventore, vitae placeat excepturi sint reprehenderit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi iure, dolor, accusantium natus dignissimos earum laborum asperiores nesciunt id explicabo sunt aliquam repellat inventore, vitae placeat excepturi sint reprehenderit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi iure, dolor, accusantium natus dignissimos earum laborum asperiores nesciunt id explicabo sunt aliquam repellat inventore, vitae placeat excepturi sint reprehenderit. </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    components: {

    },

}
</script>

<style lang="scss">
@import '../styles/_variables.scss';

.img-container {
    float:right;
}
.img1 {
    height: 200px;
    width: 300px;
}

.title-box {
    @include center--auto();
    font-family: $font1;
    width: 90%;
}

.content {
    @include center--auto();
    width: 90%;
    font-family: $font2;
}
</style>