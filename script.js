

const blogPosts = document.querySelectorAll('.blog-posts article');

blogPosts.forEach(post => {
    post.addEventListener('click', () => {
        alert('You will be redirected to the blog post!');
    });
});

