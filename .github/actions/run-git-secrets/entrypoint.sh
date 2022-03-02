#!/bin/sh -l
echo $(pwd)
echo $(ls)
echo $1
git-secrets --scan $1/*