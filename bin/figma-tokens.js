#!/usr/bin/env node

const req = require('esm')(module)
req('../src/figma-tokens/cli').cli()
