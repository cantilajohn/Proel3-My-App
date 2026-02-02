IF NOT "%1"=="" (
    git init
    git remote add origin %1
)

git config user.email "cantilajohn64@gmail.com"
git config user.name "paul"
git config --global core.editor "code --wait"

git add .
git commit

IF NOT "%1"=="" (
    git push -u origin master
) ELSE (
    git push
)


