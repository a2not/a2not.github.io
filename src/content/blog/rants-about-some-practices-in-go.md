---
title: Rants about some practices in Go
pubDate: 2025-08-03
tags:
  - tech
  - golang
---

Recently I've been trying to improve my golang test game, but sometimes I come across some practices that I find questionable. Here are a few rants about them.

## Build tags to separate tests. (integration tests, e2e tests, etc.)

It's fine and all, but I find it more difficult to manage source code once I started to split source code with build tags, unless it is to abstract away some environmental differences, like windows, darwin, ...etc.

It enables me to write separate `TestMain` with initialization of global variables safely since it is global on when tags are specified.

However, it scares me that some test code is not discoverable by default.

I read some articles on this and I agree with the points made in them.

[Peter Bourgon · Don't use build tags for integration tests](https://peter.bourgon.org/blog/2021/04/02/dont-use-build-tags-for-integration-tests.html)

## `_test` package

Better share the testing utilities with the original package. No point limiting usage.

## testcontainers

What kind of problem it solves I don't see.

In a project like `open-telemetry-collector-contrib` where all kinds of integration tests are expected, it could be beneficial.

https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/61b13cfc8dd3ea6197da6f1201974ef504de009b/exporter/clickhouseexporter/integration_test.go

But in a normal application project, one docker compose would suffice. No need to compose-{up,down} it automatically.
