<template>
  <section class="bg-gray">
    <siteheader/>
   
    <div class=" cover container bg-center-l" style="background-attachment:fixed" :style="{backgroundImage:'url('+require('@/assets/img/bg.jpeg')+')'}">
     <div class="bg-black-30  mt0 pa3">
      <div class="dtc v-mid pt5 ">
          <h2 class="f4-ns f6 b fw1 ttu tracked-mega mb2 white">MIFTAH ART AND SIGNS</h2>
          <div class="f4 white ">
              <p class=" pr0 ">
                  REVAMP YOUR CORPORATE IDENTITY 
                  <br/> Welcome!!!
              </p> 
          </div>
      </div>
     </div>
    </div> 
     <div class="fl w-100  pa2 bg-white ">
          <a class="db  tc">
            <img src="@/assets/img/des9.jpg" alt="Complete Wear" class="w-75 db outline center h3 black-10"/>
            <dl class="mt2 f6 lh-copy">
              <dt class="clip">Brand</dt>
              <dd class="ml0 black truncate w-100">Complete Wear</dd>
            </dl>
          </a>
      </div>

    <sitefooter/>
  </section>
</template>

<script type="text/javascript">

import siteheader from "@/components/generic/siteheader";
import sitefooter from "@/components/sitefooter";

export default {
  components: {
    siteheader,
    sitefooter
  },
   data(){
   } 
};
</script>