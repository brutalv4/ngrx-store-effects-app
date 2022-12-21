#!/usr/bin/env bash

docker run \
  --detach \
  --rm \
  --name ngrx-store-effects-app \
  --env PORT=3000 \
  -p 3000:3000 \
  -v "$PWD":/app \
  -v "/app/node_modules" \
  ngrx-store-effects-app:latest
