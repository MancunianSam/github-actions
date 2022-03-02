#!/bin/sh -l
echo $(pwd)
git-secrets --scan $1/*