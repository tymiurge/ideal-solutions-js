## to remove DS_Store files 
```
find . -name .DS_Store -print0 | xargs -0 git rm --ignore-unmatch -f
```
and all the stuff with push

then 
```
echo ".DS_Store" >> ~/.gitignore_global
echo "._.DS_Store" >> ~/.gitignore_global
echo "**/.DS_Store" >> ~/.gitignore_global
echo "**/._.DS_Store" >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```
