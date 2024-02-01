export interface State {
    user : User;
    videoList: VideoData[];
    selectedVideo: VideoData;
}

export interface User {
    nane: string
    email:string
}
export interface VideoData{
    embed: string
}