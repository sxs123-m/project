document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('wedding-video');
    const toggleButton = document.getElementById('video-toggle');

    toggleButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            video.muted = false;
        } else {
            video.pause();
            video.muted = true;
        }
    });
});
