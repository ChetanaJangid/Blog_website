document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postsContainer = document.getElementById('posts');

    postForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title && content) {
            const postElement = createPostElement(title, content);
            postsContainer.appendChild(postElement);

            // Clear the form
            postForm.reset();
        }
    });

    function createPostElement(title, content) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const titleElement = document.createElement('h3');
        titleElement.textContent = title;

        const contentElement = document.createElement('p');
        contentElement.textContent = content;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);

        return postElement;
    }
});