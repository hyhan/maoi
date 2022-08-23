import type { App } from 'vue'
import { Button } from './Button'
import { Icon } from './Icon'

export { Button, Icon }

export default {
  install(app: App): void {
    app.component(Button.name, Button)
    app.component(Icon.name, Icon)
  },
}
