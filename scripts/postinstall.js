// @ts-check
const fs = require('fs')
const path = require('path')

/**
 * @param {string} origin
 * @param {string} workspace
*/
const moveFolder = async (origin, workspace) => {
  const target = path.join(workspace, origin)

  if( fs.existsSync(origin) ) {
    if( !fs.existsSync(target) ) {
      await fs.promises.rename(
        origin,
        path.join(workspace, origin)
      )
    } else {
      const files = await fs.promises.readdir(origin)
      for( const file of files ) {
        await fs.promises.rename(
          path.join(origin, file),
          path.join(target, file),
        )
      }

      await fs.promises.rmdir(origin)
    }
  }
}

const main = async () => {
  await moveFolder('.aeria', 'api')
  await moveFolder('.aeria-ui', 'web')
}

main()

