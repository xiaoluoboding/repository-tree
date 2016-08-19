<script>
export default {
  vuex: {
    getters: {
      repoTree: ({ github }) => github.repoTree
    }
  }
}
</script>

<template lang="html">
  <div class="boxed-header">
    <span class="repo-tree">Repository Tree</span>
    <button type="button" class="btn btn-sm btn-primary right" @click="copy">Copy to clipboard</button>
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
</style>
