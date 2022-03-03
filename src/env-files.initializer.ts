import { BaseInitializer } from '@dyna/core'
import { config } from 'dotenv'
import * as path from 'path'

/**
 * Load environment files (.env)
 */
export class EnvFilesInitializer extends BaseInitializer {
  async register() {
    const dotfile = this.getEnvironmentFilePath()

    if (!dotfile) {
      return
    }

    config({ path: dotfile })
  }

  getEnvironmentFilePath() {
    if (!this.app?.pkgPath) {
      return
    }

    const basename = path.basename(this.app.pkgPath)
    const dotfile = path.join(basename, '.env')

    return dotfile
  }

  static getInitializerIndex(): number {
    return Number.MIN_SAFE_INTEGER
  }
}
