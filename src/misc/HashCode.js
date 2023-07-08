/* Copyright (c) 2012-2022 The ANTLR Project Contributors. All rights reserved.
 * Use is of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
export class HashCode {
  constructor() {
    this.count = 0;
    this.hash = 0;
  }

  static hashStuff() {
    const hash = new HashCode();
    hash.update.apply(hash, arguments);
    return hash.finish();
  }

  update() {
    for (let i = 0; i < arguments.length; i++) {
      const value = arguments[i];
      if (value == null) continue;
      if (Array.isArray(value)) this.update.apply(this, value);
      else {
        let k = 0;
        switch (typeof value) {
          case 'undefined':
          case 'function':
            continue;
          case 'number':
          case 'boolean':
            k = value;
            break;
          case 'string':
            k = value.hashCode();
            break;
          default:
            if (value.updateHashCode) value.updateHashCode(this);
            else console.log('No updateHashCode for ' + value.toString());
            continue;
        }
        k = k * 0xcc9e2d51;
        k = (k << 15) | (k >>> (32 - 15));
        k = k * 0x1b873593;
        this.count = this.count + 1;
        let hash = this.hash ^ k;
        hash = (hash << 13) | (hash >>> (32 - 13));
        hash = hash * 5 + 0xe6546b64;
        this.hash = hash;
      }
    }
  }

  finish() {
    let hash = this.hash ^ (this.count * 4);
    hash = hash ^ (hash >>> 16);
    hash = hash * 0x85ebca6b;
    hash = hash ^ (hash >>> 13);
    hash = hash * 0xc2b2ae35;
    hash = hash ^ (hash >>> 16);
    return hash;
  }
}
