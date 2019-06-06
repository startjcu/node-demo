#!/usr/bin/env sh

if [ -d $1 ]; then
	echo 'error: dir exists'
	exit
else
	mkdir $1
	cd $1
	mkdir css js
	touch index.html css/style.css js/main.js
	echo 'hi html' >> index.html 
	echo 'hi css' >> css/style.css 
	echo 'hi js' >> js/main.js
	echo 'success'
	exit
fi
