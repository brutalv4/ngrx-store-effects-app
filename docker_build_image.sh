#!/usr/bin/env bash

docker build \
  --file Dockerfile \
  --tag ngrx-store-effects-app:latest \
  .
