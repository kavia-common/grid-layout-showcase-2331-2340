#!/bin/bash
cd /home/kavia/workspace/code-generation/grid-layout-showcase-2331-2340/frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

