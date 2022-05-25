import * as singleSpa from 'single-spa'

singleSpa.registerApplication(
  'app1',
  () => import('./modules/app1/index'),
  location => location.pathname.startsWith('/app1')
)
singleSpa.registerApplication(
  'app2',
  () => import('./modules/app2/index'),
  location => location.pathname.startsWith('/app2')
)

singleSpa.start()

// window.addEventListener('single-spa:before-routing-event', () => {
//   console.log('before routing event occurred!')
// })

// window.addEventListener('single-spa:routing-event', () => {
//   console.log('routing event occurred!')
// })

// window.addEventListener('single-spa:app-change', () => {
//   console.log(singleSpa.getMountedApps())
// })
