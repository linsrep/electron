/* const information = document.getElementById('info')
information.innerText = `Esta aplicação está usando o Chrome na versão (v${versions.chrome()}), Node.js (v${versions.node()}), e ElectronJS (v${versions.electron()})`
 */
const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong'
}

func()