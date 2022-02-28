import { BaseInitializer } from '@dyna/core';
import { config } from 'dotenv';
import * as path from 'path';

export class EnvFilesInitializer extends BaseInitializer {

  public iIndex: number = Number.MIN_SAFE_INTEGER;

  async register() {
    if (!this.app?.pkgPath) {
      return;
    }

    config({
      path: path.basename(this.app?.pkgPath),
    });
  }

}