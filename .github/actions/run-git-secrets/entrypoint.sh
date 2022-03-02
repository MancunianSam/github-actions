#!/bin/sh -l
echo $(pwd)
echo $(ls)
echo $1
echo $(cat README.md)
echo $(git-secrets --scan)
git-secrets --scan