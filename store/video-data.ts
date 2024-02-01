
import { Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'
import type{ VideoData } from '../models/state'

export default class Video extends VuexModule {
	private  videoList = []
  private selectedVideo = {}
  private probando = "hola"

  public get $probando() {
    return this.probando
  }

  private SET_SELECTED_VIDEO(selectedVideo: VideoData) {
    this.selectedVideo = selectedVideo
  }

  public videoSelected(selectedVideo: VideoData) {
    this.context.commit('SET_SELECTED_VIDEO', selectedVideo)
  } 
} 