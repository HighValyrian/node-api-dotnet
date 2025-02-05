// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotnet from 'node-api-dotnet';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkgDir = path.join(__dirname, 'pkg');

const laVersion = fs.readdirSync(path.join(pkgDir, 'microsoft.extensions.logging.abstractions'))[0];
const skVersion = fs.readdirSync(path.join(pkgDir, 'microsoft.semantickernel'))[0];

// The dependency needs to be loaded explicitly because it's in a different directory.
dotnet.load(path.join(pkgDir,
  `microsoft.extensions.logging.abstractions/${laVersion}/lib/netstandard2.0/Microsoft.Extensions.Logging.Abstractions.dll`));

/** @type import('./Microsoft.SemanticKernel') */
const SK = dotnet.load(path.join(pkgDir,
  `microsoft.semantickernel/${skVersion}/lib/netstandard2.1/Microsoft.SemanticKernel.dll`));

export default SK;
