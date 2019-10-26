# MeetApp-Rocketseat
Projeto realizado em uma máquina utilizando windows 7.

# Backend
Necessário subir o Docker Toolbox e as imagens para o postgre, mongo, e redis.

Iniciar os serviços do docker
### `docker start database`
### `docker start redismeetapp`
### `docker start mongomeetapp`

Instalar as dependencies
### `yarn`

Executar o projeto
### `yarn dev`

# Frontend
Instalar as dependencies
### `yarn`

Executar o projeto
### `yarn start`

# Mobile
Utilizando Genymotion e um emulador para Samsung Galaxy S8

Instalar as dependencies
### `yarn`

Executar o projeto
### `react-native run-android`

Tive problemas ao executar o projeto ao clonar diretamente do git para testar.

Foi necessário fazer o download do debug.keystore diretamente do site oficial e colar na pasta android/app do projeto
Esse passo eu realizei e subi junto do projeto atual aqui no git, explicando caso necessário.
https://raw.githubusercontent.com/facebook/react-native/master/template/android/app/debug.keystore


