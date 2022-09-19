import './app.css'
// import App from './App.svelte'
import Home from './pages/Home.svelte'

// export const app = new App({
//   target: document.getElementById('app')
// })

export const home = new Home({
  target: document.getElementById('app')
})
