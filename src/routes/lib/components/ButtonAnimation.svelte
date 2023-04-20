<script lang="ts">
</script>

<!-- 
<button class=" button relative border-2 border-#D6001C rounded-full p-[70px]">
    <p class="absolute top-[58px] left-[47px]">Coucou</p>
    <div class="background__btn" />
</button> -->
<a href="/." class="font-noto-semi-bold uppercase"><slot /></a>

<style>
    a {
        width: 140px;
        height: 140px;
        position: relative;
        color: #d6001c;
        z-index: 0;
        border: 2px solid #d6001c;
        background: transparent;
        /* overflow: hidden; */
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        transition: all 0.2s;
    }
    a:hover {
        color: white;
    }
    a::before {
        content: "";
        position: absolute;
        top: 70px;
        left: 70px;
        right: 70px;
        bottom: 70px;
        width: 0%;
        height: 0%;
        background: #d6001c;
        border-radius: 100%;
        z-index: -1;
        transition: all 0.4s;
        transition-timing-function: cubic-bezier(1, -0.05, 0, 1.76);
    }
    a:hover::before {
        width: 101%;
        height: 101%;
        top: -1px;
        left: -1px;
        right: 0px;
        bottom: 0px;
    }
</style>
