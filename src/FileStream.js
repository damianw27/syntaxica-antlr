/* Copyright (c) 2012-2022 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

import { InputStream } from './InputStream.js';

/**
 * This is an InputStream that is loaded from a file all at once
 * when you construct the object.
 */
export class FileStream extends InputStream {
  constructor(fileName, encoding, decodeToUnicodeCodePoints) {
    super(null, decodeToUnicodeCodePoints);
    throw new Error('FileStream is only available when running in Node!');
  }

  static fromPath(path, encoding, callback) {
    throw new Error('FileStream is only available when running in Node!');
  }
}
