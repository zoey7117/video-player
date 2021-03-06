const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const timestamp = document.getElementById('timestamp')
const progress = document.getElementById('progress')

video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)
stop.addEventListener('click', stopVideo)
progress.addEventListener('click', setVideoProgress)
