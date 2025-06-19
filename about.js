document.addEventListener('DOMContentLoaded', () => {

    function setupLikeButton(buttonId, countId, localStorageCountKey, localStorageLikedKey) {
        const btn = document.getElementById(buttonId);
        const countSpan = document.getElementById(countId);

        if (!btn || !countSpan) {
            return;
        }

        let currentCount = parseInt(localStorage.getItem(localStorageCountKey)) || 0;
        let userHasLiked = localStorage.getItem(localStorageLikedKey) === 'true';

        countSpan.textContent = currentCount;

        if (userHasLiked) {
            btn.classList.add('active');
        }

        function updateDisplayAndStorage() {
            countSpan.textContent = currentCount;
            localStorage.setItem(localStorageCountKey, currentCount);
            localStorage.setItem(localStorageLikedKey, userHasLiked);
        }

        btn.addEventListener('click', () => {
            if (userHasLiked) {
                currentCount--;
                userHasLiked = false;
                btn.classList.remove('active');
            } else {
                currentCount++;
                userHasLiked = true;
                btn.classList.add('active');
            }
            updateDisplayAndStorage();
        });
    }

    setupLikeButton('likeBtn', 'likeCount', 'likeCountIndex', 'userLikedIndex');

    setupLikeButton('likeBtnAbout', 'likeCountAbout', 'likeCountAboutPage', 'userLikedAboutPage');

});