#!/usr/bin/env bash

docker build \
  --file Dockerfile \
  --tag ngrx-store-effects-app:latest \
  --build-arg NODE_VERSION="12.22.12-alpine" \
  .
