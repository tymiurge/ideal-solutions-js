just a heap of solutions for different languages/technologies encountered
 - either during books reading
 - or during surfing over stackoverflow 
 - or during practising 
 - or during new language learning

by and large - my creative chaos that is handsomly ordered in my eyes only


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
