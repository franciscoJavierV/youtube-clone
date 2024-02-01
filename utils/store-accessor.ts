import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Video from '../store/video-data'

let videoModule: Video

function initializeStores(store: Store<any>): void {
  videoModule = getModule(Video, store)
}

export { initializeStores, Video }
