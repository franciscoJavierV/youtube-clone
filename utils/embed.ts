function generateEmbed(videoId : string){
   return `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}&controls=1&fs=1`
}

export {
    generateEmbed
}