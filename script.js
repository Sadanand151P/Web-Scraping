// ==========================================
// CODEALPHA SOCIAL MEDIA CAMPAIGN
// JAVASCRIPT FILE
// ==========================================


// Get all posts

const posts =
    document.querySelectorAll(".post");


// Show all posts

function showAll() {

    posts.forEach(function(post) {

        post.style.display = "block";

    });

}


// Filter posts by platform

function filterPosts(platform) {

    posts.forEach(function(post) {

        if (
            post.classList.contains(platform)
        ) {

            post.style.display = "block";

        } else {

            post.style.display = "none";

        }

    });

}


// Display all posts when page loads

showAll();