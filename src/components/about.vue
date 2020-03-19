<template>
	<section >
        <siteheader/>    
        <div class="cf w-100 tc pa4">
            <article class="dib mw8 tc pa3 pa5-ns">
                <h1 class="f1 glow tracked-light">Who we are </h1>
                <p class="f4 center measure lh-copy">
                
                </p>
            </article>
        </div>
        <div class="cf w-100 center pt2 bg-near-white pb4">
            <h1 class="f2-l tc mt1 f4">Payments & Delivery</h1>
                <p class="f4 center measure lh-copy">
                    Payment is only done after agreement of purchasing a particular outfit in our store after contacting us.
                    We do NOT accept online payments yet.
                </p>
        </div>
        <sitefooter/>    
    </section>
</template>

<script>
import {HTTP} from '@/common';
import notify from "@/components/notify"
import siteheader from "@/components/generic/siteheader"
import sitefooter from "@/components/sitefooter"


export default {
	components: {notify,siteheader,sitefooter},
	data(){ return {notifications:[]}},
	methods: {
      popup(){
          console.log("POPUP")
      },
    }
}
</script>
