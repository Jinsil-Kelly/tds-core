#!/bin/sh

set -o nounset -o errexit

## Used by the Publish stage of the Jenkinsfile
## Publishes a package to npm

### ATTENTION: No-op for for now until we solidify our publishing strategy with split versions ###

#npm publish

#npm access grant read-write telusdigital:developers @telusdigital/tds
#npm access grant read-only  telusdigital:read-only  @telusdigital/tds
