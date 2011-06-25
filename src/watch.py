#! /usr/bin/env python
# -*- coding: utf-8 -*-

# This is a small utility for automatically compile source files as soon as they change.

import os, sys

files = {}
while 1:
	for arg in sys.argv[1:]:
		f = open(arg)
		cont = f.read()
		try:
			if cont != files[arg]:
				print arg
				raise KeyError
		except KeyError:
			if arg.endswith(".shpaml"):
				os.system("python shpaml.py "+arg+" > ../"+arg.split(".shpaml")[0])
			elif arg.endswith(".sass"):
				os.system("sass --update "+arg+":../"+arg.split(".sass")[0]+".css")
			elif arg.endswith(".coffee"):
				os.system("coffee -o ../ -c "+arg)
			else:
				os.system("mv "+arg+" ../")
			files[arg] = cont
	
