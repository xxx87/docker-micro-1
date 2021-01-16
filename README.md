# node-api-app1
Simple NodeJS application for demonstration of work through ExpressGateway as a microservice

[Link to ExpressGateway repo](https://github.com/xxx87/express-gateway)
## Get started

### To Run App
- Install dependencies
```
npm i
```
- Run app
```
npm run
```
- Run tests
```
npm run test
```
- check lint errors
```
npm run lint
```

### Docker steps
- Build Docker image
```
docker build -t <some-fency-name> .
```
- Run docker container
```
docker run -it --name <name-of-container> <some-fency-name>
```
- To stop
```
docker stop <name-of-container>
```

### Docker compose steps
- Build images
```
docker-compose build
```
- run all containers
```
docker-compose up -it
```
- To stop
```
docker-compose down
```

## Basic routes:
- For healthcheck: http://localhost:3001/first-micros/healthcheck
- For Swagger specs: http://localhost:3001/first-micros/api-specs/