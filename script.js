// Get video, controls, and buttons
const video = document.getElementById('video');
const playerButton = document.getElementById('player__button');
const volumeControl = document.getElementById('volume');
const playbackSpeedControl = document.getElementById('playbackSpeed');
const rewindButton = document.getElementById('rewind');
const forwardButton = document.getElementById('forward');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Toggle play/pause functionality
playerButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playerButton.textContent = '❚ ❚'; // Change to pause symbol
    } else {
        video.pause();
        playerButton.textContent = '►'; // Change to play symbol
    }
});

// Volume control
volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
});

// Playback speed control
playbackSpeedControl.addEventListener('input', () => {
    video.playbackRate = playbackSpeedControl.value;
});

// Rewind 10 seconds
rewindButton.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Forward 25 seconds
forwardButton.addEventListener('click', () => {
    video.currentTime += 25;
});

// Update progress bar as the video plays
video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percentage}%`;
});

// Seek video on progress bar click
progress.addEventListener('click', (e) => {
    const rect = progress.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const totalWidth = rect.width;
    const percentage = clickPosition / totalWidth;
    video.currentTime = percentage * video.duration;
});
