suppose **feature1** branch has been created from **develop**

some commits were made into **feature1** and into **develop**

### to rebase **feature1** onto **develop**:

```
git checkout feature1
git pull --rebase origin develop
```

### resolving conflicts
in case of some merge conflicts occured during rebase - resolve the conflict one by one and run 
```
git rebase --continue
```
after each conflict resolving 

### reseting rebase
```
git reset --hard ORIG_HEAD
```

### sync histories of **feature1** and **origin/feature1**
after rebasing the **feature1** and **origin/feature1** have different history. that will lead to "**feature1** and **origin/feature1** have diverged" message at each try to push into **origin/feature1**
to sync the histories:

```
git push origin develop -f
```

