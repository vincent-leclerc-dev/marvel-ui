#!/bin/bash
docker build -t marvel-ui-prod -f Dockerfile.prod .

docker run -it -p 8081:8080 --rm --name marvel-ui-prod-app marvel-ui-prod