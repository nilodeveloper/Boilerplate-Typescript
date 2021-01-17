#!/bin/bash

name=$2

if [ $1 = 'create' ]
then				
	if [ $3 = 'test' ]
	then
		cat ./models/test.model | sed "s/User/${name^}/g" > ../src/__tests__/${name,,}.spec.js		
	fi
	cat ./models/controller.model | sed "s/*NameController/${name^}Controller/g" | sed "s/*name/${name,,}/g" | sed "s/*Name/${name^}/g" > ../src/app/controllers/${name^}Controller.ts
	cat ./models/router.model | sed "s/*NameController/${name^}Controller/g"| sed "s/*NameRouter/${name^}Router/g" | sed "s/*name/${name,,}/g" | sed "s/*Name/${name^}/g" > ../src/app/routes/${name^}Router.ts
	sed -i "2i import ${name^}Router from \"./routes/${name^}Router\";" ../src/app/routes.ts
	sed -i "/this.user(),/a this.${name,,}()," ../src/app/routes.ts
	sed -i "/routes(): any{/i     ${name,,}(){return ${name^}Router;}" ../src/app/routes.ts
	echo 🎮 Arquivo de controller ${name^}Controller.ts criado com sucesso.✔️
	echo 🪧 Arquivo de router ${name^}Router.ts criado com sucesso.✔️
	echo 🧪 Arquivo de testes ${name,,}.spec.js criado com sucesso.✔️
	if [ $4 = 'database' ]
	then
		cd ..
		npx typeorm migration:create -n CreateTable${name^}
		npx typeorm entity:create -n ${name^}
	fi
else
	if [ $1 = 'remove' ]
	then
		rm ../src/__tests__/${name,,}.spec.js
		rm ../src/app/controllers/${name^}Controller.ts
		rm ../src/app/routes/${name^}Router.ts
		rm ../src/app/database/entity/${name^}.ts
		echo ❌ ${name,,} deletado do projeto.	
	fi
fi
