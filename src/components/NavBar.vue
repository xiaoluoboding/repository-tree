<script>
import { setFullRepoName } from '../vuex/actions'
export default {
	name: 'NavBar',

	vuex: {
    getters: {
      fullRepoName: ({ main }) => main.fullRepoName
    },
		actions: {
			setFullRepoName
		}
	},

  computed: {
    inputValue: {
      get () {
        return this.fullRepoName
      },
      set (val) {
        this.setFullRepoName(val)
      }
    }
  }
}
</script>

<template>
	<div class="header">
		<div class="container">
			<div class="header-logo">
				<a href="#!"><span class="mega-octicon octicon-mark-github"></span></a>
			</div>
			<form>
				<label for="fullRepoName">Full Repo Name:</label>
			  <input id="fullRepoName" class="form-control" type="text"
			  	placeholder="xiaoluoboding/repository-tree"
			  	v-model="inputValue">
			  <span class="input-group-button">
				  <button type="button" class="btn btn-primary">Generate</button>
			  </span>
			</form>
		</div>
	</div>
</template>

<style>
	.header {
	  padding: 10px;
	  background-color: #f5f5f5;
	  border-bottom: 1px solid #e5e5e5;
	}

	.header-logo {
		float: left;
		margin-right: 10px;
	}

	#fullRepoName {
		width: 480px;
	}
</style>