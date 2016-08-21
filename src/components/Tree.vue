<script>
export default {
  data() {
    return {
      copyTooltip: 'Copy repository tree to clipboard'
    }
  },
  vuex: {
    getters: {
      repoTree: ({ github }) => github.repoTree
    }
  },
  computed: {
    isDisabled() {
      return this.repoTree.length == 0 ? true : false
    }
  },
  watch: {
    repoTree(newVal, oldVal) {
      if(newVal) {
        this.copyTooltip = 'Copy repository tree to clipboard'
      }
    }
  }
}
</script>

<template lang="html">
  <div class="boxed-header">
    <span class="repo-tree">Repository Tree</span>
    <button type="button" class="btn btn-sm btn-primary right"
      tooltip="{{ copyTooltip }}"
      v-clipboard:copy="repoTree"
      :disabled="isDisabled"
      @click="copyTooltip = 'Copied'">Copy to clipboard</button>
  </div>
  <div class="boxed-content">
    <pre class="form-control">{{{ repoTree }}}</pre>
  </div>
</template>

<style lang="css">
	.boxed-header {
	  position: relative;
	  padding: 10px;
	  margin-bottom: -1px;
	  font-size: 13px;
	  line-height: 26px;
	  color: #68777d;
	  background-color: #f2f9fc;
	  border: 1px solid #c9e6f2;
	  border-radius: 3px;
	  border-bottom-right-radius: 0;
	  border-bottom-left-radius: 0;
	}

  .boxed-content {
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-top: 0;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  [tooltip]:before {
    content: attr(tooltip);
    background: #585858;
    padding: 2px 10px;
    margin-right: 10px;
    border-radius: 2px;
    color: #FFF;
    font: 500 12px;
    white-space: nowrap;
    position: absolute;
    bottom: 20%;
    right: 100%;
    visibility: hidden;
    opacity: 0;
    transition: .3s;
  }

  [tooltip]:hover:before {
    visibility: visible;
    opacity: 1;
  }
</style>
