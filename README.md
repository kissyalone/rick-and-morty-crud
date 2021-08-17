# rick-and-morty-vitafor

## instalação

Clone o repositório:
```sh 
git clone https://github.com/landish/rick-and-morty-vitafor.git
```
Instale as dependências do PHP:
```sh
composer install
```
Instale as dependências do NPM:
```sh
npm install
```
Rode os assets do projeto:
```sh
npm run dev
```

**Duplique** e **renomeie** os seguintes arquivos:
```
.env.example para .env
(Pasta database)
database.sqlite.example para database.sqlite
```

Gere a chave do Laravel:
```sh
php artisan key:generate
```
Rode as tabelas e seeders:
```sh
php artisan migrate --seed
```

## Rode o servidor virtual:
```sh
php artisan serve
```