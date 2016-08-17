<script>
export default {
  data() {
    return {
    }
  },
  computed: {
  },
  vuex: {
    getters: {
      repoTree: ({ github }) => github.repoTree
    }
  },
  ready() {
  },
  methods: {},
  components: {}
};
</script>

<template lang="html">
  <div>
    <pre>
      {{{ repoTree }}}
    </pre>
  </div>
</template>

<style lang="css">
</style>
