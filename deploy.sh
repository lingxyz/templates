#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 循环进入*-template目录，push到对应分支
for dir in `ls`; do
  if [ -d $dir ] && [[ $dir =~ template$ ]]
  then
    cd $dir
    echo $dir' deploy start ...'
    git init
    git add -A
    git commit -m 'deploy'
    cmd='git push -f git@github.com:zhanglingx/templates.git master:'$dir
    $cmd
    echo $dir' push success!'
    rm -rf .git
    cd -
  fi
done