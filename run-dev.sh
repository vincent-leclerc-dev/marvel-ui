#!/bin/bash
docker build -t marvel-ui-dev -f Dockerfile.dev .

docker run -it -p 8080:8080 --rm --name marvel-ui-dev-app marvel-ui-dev