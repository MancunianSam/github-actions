#!/bin/sh -l

echo "Hello $1"
files=$(ls)
pwd=$(pwd)
echo "::set-output name=files::$files"
echo "::set-output name=pwd::$pwd"