# marvel-ui

## Prerequisites
- AWS account,
- AWS cli,
- Docker,
- GitLab account
- Git cli,
- Vue cli,
- Visual Studio Code.

### build and run on local container
```zsh
$ ./run-dev.sh
```

url: http://localhost:8080


### build and simulate prod on local container
```zsh
$ ./simulate-prod.sh
```

url: http://localhost:8081

### build and deploy on AWS S3 bucket
```zsh
npm run deploy
```