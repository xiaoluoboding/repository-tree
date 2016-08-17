<script>
import { setRepoLink, setRepoTree } from '../vuex/actions'
import GitHub from 'github-api'
const gh = new GitHub()
export default {
	vuex: {
    getters: {
      repoLink: ({ github }) => github.repoLink,
      siteLink: ({ github }) => github.siteLink,
			userName: ({ github }) => github.userName,
			repoName: ({ github }) => github.repoName
    },
		actions: {
			setRepoLink,
			setRepoTree
		}
	},
  computed: {
    inputValue: {
      get () {
        return this.repoLink
      },
      set (val) {
				if (val.includes(this.siteLink)) {
					this.setRepoLink(val)
				}
      }
    }
  },
	methods: {
		getTree() {
			const self = this
	    let repo = gh.getRepo(this.userName,this.repoName)
	    repo.getTree('master?recursive=1', function(err, data) {
	      if (err) { console.dir(err.status) }
	      // console.log(data.tree);
	      self.setRepoTree(data.tree)
	    })
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
				<label for="repoLink">Repo Link:</label>
			  <input id="repoLink" class="form-control" type="text"
			  	placeholder="https://github.com/xiaoluoboding/repository-tree"
			  	v-model="inputValue">
			  <span class="input-group-button">
				  <button type="button" class="btn btn-primary" @click="getTree">Generate</button>
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

	#repoLink {
		width: 480px;
	}
</style>
