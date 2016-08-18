<script>
import Tree from './Tree.vue'
export default {
	vuex: {
		getters: {
			repoLink: ({ github }) => github.repoLink,
			siteLink: ({ github }) => github.siteLink,
			userName: ({ github }) => github.userName,
			repoName: ({ github }) => github.repoName
		}
	},
	components: {
		Tree
	}
}
</script>

<template>
  <div class="container page-content">
  	<h1 class="public">
  		<span class="octicon octicon-repo"></span>
		  <span class="author" itemprop="author">
		  	<a href="{{ siteLink+userName }}" rel="author" target="_blank">{{ userName }}</a>
		  </span>
		  <span class="path-divider">/</span>
		  <strong itemprop="name">
				<a href="{{ repoLink }}" target="_blank">{{ repoName }}</a>
			</strong>
		</h1>
		<div class="blankslate blankslate-spacious blankslate-large" v-if="repoLink.length == 0">
		  <h3>Welcome to GitHub repository tree view generater</h3>
		  <p>Copy your github repository link and <kbd>click</kbd> the <code>Generate</code> button, then you will see the pretty display of tree view.</p>
		</div>
		<tree v-else></tree>
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
