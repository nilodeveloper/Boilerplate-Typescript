#!/bin/bash

if [ $1 = 'create' ]
then				
	if [ $3 = 'test' ]
	then
		echo  > ../src/__tests__/$2.spec.js	
		echo Arquivo de testes $2.spec.js criado
	fi
fi
