const os = require('os')
const fs = require('fs')

// Creates tool folder in user directory, if successful message displays that folder was created
exports.createDirectory = (result) => {
  const toolName = result[0].ToolName
  const version = result[0].Version
  const folderName = `${toolName}_v${version}`
  const username = os.userInfo().username
  const toolDirectory = `C:\\Users\\${username}\\AppData\\Roaming\\Alteryx\\Tools\\${folderName}`

  fs.mkdir(toolDirectory, (err) => {
    if (err) {
      return console.error(err)
    }
    return console.log(`\n${folderName} folder has been created`)
  })
}