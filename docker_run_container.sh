#!/usr/bin/env bash

docker run \
  --rm \
  --name ngrx-store-effects-app \
  -p 3000:3000 \
  ngrx-store-effects-app:latest
