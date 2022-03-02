#!/bin/sh -l
echo $(pwd)
echo $(ls)
echo $1
echo $(git-secrets --scan)
git-secrets --scan