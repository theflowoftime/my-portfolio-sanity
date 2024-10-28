import {defineCliConfig} from 'sanity/cli'
import { dataset, projectId } from './environment'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  vite: {
    resolve: {
      alias: {
        '@': __dirname,
      },
    }
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
