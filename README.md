# zeplin-case

<a href="https://heroku.com/deploy?template=https://github.com/onurceri/zeplin-case">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>

## Run with Docker
> While the API is running, it runs a mongodb and by default continues with this mongodb connection.
You can define **MONGO_CONNECTION_STRING** to change this.

##### docker-compose build --no-cache
##### docker-compose up

## Run locally
> Create an .env file with the following keys<br />
PORT=(DEFAULT = 3081)<br />
MONGO_CONNECTION_STRING=(DEFAULT=mongodb://mongo-db:27017)

##### node ./server.js

## Run via Heroku
##### https://zeplin-case.herokuapp.com address is available. 
##### It uses MongoDB Cloud - Shared Cluster.
##### Also integrated with GitHub. Any changes made to the main branch starts an auto-deploy 

#### To send a request:
```
❯ curl -v --location --request POST 'https://zeplin-case.herokuapp.com/api/business/save-request' \                                                     
--header 'Content-Type: application/json' \
--data-raw '{
    "number": 67
}'
```
#### Response:
```
< HTTP/1.1 200 OK
< Bash-Id: 62fa0a6280929800169c5eb9
< Content-Type: application/json; charset=utf-8
< Content-Length: 42
[16,65,122,65,26,32,47,48,48,48,189,54,67]
```

##### If you want to send a new request to existed batch you can use the 'bash-id' request header.
```
❯ curl -v --location --request POST 'https://zeplin-case.herokuapp.com/api/business/save-request' \                                                       
--header 'bash-id: 62fa0a6280929800169c5eb9' \
--header 'Content-Type: application/json' \
--data-raw '{
    "number": 37
}'
```

#### Response:
```
< HTTP/1.1 200 OK
< Bash-Id: 62fa0a6280929800169c5eb9
< Content-Type: application/json; charset=utf-8
< Content-Length: 45
<
* Connection #0 to host zeplin-case.herokuapp.com left intact
[16,65,122,65,26,32,47,48,48,48,189,54,37,67]
```
