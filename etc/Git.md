# Git & GitHub Related Stuff

Common solutions:
* __Untracking files without breaking everything!__  
  _Problem_: Accidentally added a config file and now Git is tracking it? Using `git rm` will remove the file from your local system, the server and every other contributor's local copy! You **don't** want to do this.  
  Also, just adding it to `.gitignore` will not remove its traces after it has been added to the tree. =(  

  _Solution_: Elegantly [Untrack Files In Git Repos Without Deleting Them](http://www.arlocarreon.com/blog/git/untrack-files-in-git-repos-without-deleting-them/).

* __Deploying only a sub-folder of a branch to GitHub pages__.  
  _Problem_: Want to keep the jekyll source on master and generated files on gh-pages?  
  _Solution_: [This](https://gist.github.com/cobyism/4730490).

* __Rebasing - Including the `Initial Commit`__  
  _Problem_: Want to squash from/till the first commit?  
 _Solution_: Eg. for master: `git rebase -i --root master`. This will start the rebase so you can change from the root of the branch :)
