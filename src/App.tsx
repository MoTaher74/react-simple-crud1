
import './App.css'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
function App() {


  return (
    <>
       <Menu>
      <MenuButton>My account</MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <p className='m-2 bg-black'>mohamed atjer</p>
    </>
  )
}

export default App

