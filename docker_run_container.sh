#!/usr/bin/env bash

docker run \
  --rm \
  --name ngrx-store-effects-app \
  --env PORT=5000 \
  -p 8000:5000 \
  ngrx-store-effects-app:latest
