import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Example from '@/store/example'

let example: Example

function initializeStores(store: Store<any>): void {
  example = getModule(Example, store)
}

export { initializeStores, example }
