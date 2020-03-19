<template>
  <div>
    <div class="w-50-ns ph2 w-100 fl">
      <article class="center br1 mv2">
        <h1
          @click="toggle"
          class="f4-l f6 bg-near-black white mv0 pv2 br1 ph3 pointer"
        >{{post.Title}}</h1>
        <div v-if="isVisible" class="pa3 bb br bl br2 br--bottom">
          <p class="f6 f5-l lh-copy measure mv0">{{post.Description}}</p>
        </div>
      </article>
    </div>

    <div v-if="index+1 == 2" class="w-100 fl"></div>
  </div>
</template>

<script>
export default {
  props: ["post", "index"],
  created() {},
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>
