<template>
  <section>
    <siteheader/>

      <div class="cf w-100 tc pa4">
        <article class="dib mw8 tc pa3 ">
            <h1 class="f1 glow tracked-light">How can you contact us?</h1>
            <p class="f4 center measure lh-copy">
                You can contact us by filling up the form below and typing your message, by calling, sending a mail or visiting our Head office, details of which are provided below: 
            </p>
                       
        </article>
      </div>       
         <div class="center mw7 ph2 w-100-l w-80 bg-black-40">
            <article class="pa4 black-80 bg-white center">
                <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                  <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
                    <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="name">First Name</label>
                    <input class="pa2 bn br2 bg-black-10 w-100 measure" type="text" name=""  id="email-address">
                  </div>
                    <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="name">Last Name</label>
                    <input class="pa2 bn br2 bg-black-10 w-100 measure" type="text" name=""  id="email-address">
                  </div>
                  <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
                    <input class="pa2 bn br2 bg-black-10 w-100 measure" type="email" name="email-address"  id="email-address">
                  </div>
                  <div class="mt3">
                    <label class="db fw4 lh-copy f6" for="message">Message</label>
                    <textarea class="b pa2 bn br2 bg-black-10 w-100 measure" type="password" name="password"  id="password"></textarea>
                  </div>
                </fieldset>
                <div class="mt3">
                  <input type="button" value="Submit" class="br2 bg-black white pa2" >
                </div>
            </article>
        </div>           
    <sitefooter/>
  </section>
</template>

<script>
import { HTTP } from "@/common";
import notify from "@/components/notify";
import siteheader from "@/components/generic/siteheader";
import sitefooter from "@/components/sitefooter";
import faqpost from "@/components/faq-post";

export default {
  components: { notify, siteheader, sitefooter, faqpost },
  data() {
    return {
     
    
    };
  },
  methods: {
    toggleMenu(menuName) {
      
    },
  }
};
</script>
