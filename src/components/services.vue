<template>
	<section class="">
		<siteheader/>      
    <div class="cover container bg-center-l" style="background-attachment:fixed" :style="{backgroundImage:'url('+require('@/assets/img/bg.jpg')+')'}">
      <div class="bg-black-50 mt0 pa3">
        <div class="dtc v-mid pt5">
            <h2 class="f4-ns f6 b fw1 ttu tracked-mega mb2 white">HGCLOTHINGS</h2>
            <h1 class="f4 f-headline-l tracked ttu mv0 fw1 white">WELCOME TO OUR STORE</h1>
            <div class="f4 white ">
                <p class="b pr0 ">
                    HERE YOU GET THE BEST OUTFITS EVER! 
                </p>
            </div>
        </div>
      </div>
    </div> 
 
   
    <sitefooter/>
	</section>
</template>

<script>
import {HTTP} from '@/common';
import notify from "@/components/notify"
import siteheader from '@/components/generic/siteheader';
import sitefooter from "@/components/sitefooter";

export default {
	components: {notify, siteheader, sitefooter},
	data(){ return {
	methods: {
  }
    }
}
}
</script>
