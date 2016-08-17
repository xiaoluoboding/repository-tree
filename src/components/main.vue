<script>
	export default {
		name: 'Main'
	}
</script>

<template>
  <div class="container page-content">
  	<h1 class="public">
  		<span class="octicon octicon-repo"></span>
		  <span class="author" itemprop="author">
		  	<a href="/xiaoluoboding" rel="author">xiaoluoboding</a>
		  </span>
		  <span class="path-divider">/</span>
		  <strong itemprop="name">
				<a href="/xiaoluoboding/astrolabe">astrolabe</a>
			</strong>
		</h1>
		<div class="blankslate blankslate-spacious blankslate-large">
		  <h3>Welcome to GitHub repository tree view generater</h3>
		  <p>Copy your github repository link and <kbd>click</kbd> the <code>Generate</code> button, then you will see the pretty display of tree view.</p>
		</div>
  </div>
</template>

<style>
	.page-content {
		padding-top: 20px;
	}

	.page-content h1 {
	  position: relative;
	  max-width: 635px;
	  padding-left: 18px;
	  padding-bottom: 20px;
	  font-size: 16px;
	  line-height: 26px;
	  color: #666;
	}

	.boxed-header {
	  position: relative;
	  padding: 10px;
	  margin-bottom: -1px;
	  font-size: 13px;
	  line-height: 20px;
	  color: #68777d;
	  background-color: #f2f9fc;
	  border: 1px solid #c9e6f2;
	  border-radius: 3px;
	  border-bottom-right-radius: 0;
	  border-bottom-left-radius: 0;
	}
</style>