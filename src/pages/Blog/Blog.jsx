import './Blog.scss';

function Post () {
    return(
        <aside className="blog-post">
            <header className="blog-post__header">
                <span>Post name</span>
            </header>
            <main className="blog-post__main">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium soluta obcaecati qui similique ipsum, rerum consectetur incidunt neque nesciunt asperiores odio magnam officiis eveniet ex reiciendis! Aspernatur facere magnam a ut, odit corrupti in provident vitae, sint vel deserunt dolore vero, aut autem quidem dolores?</p>
            </main>
            <footer className="blog-post__footer">
                    <span>Place create Post</span>
                    <span>25/01/2025</span>
            </footer>

        </aside>
    )
};

function Blog () {
    return(
        <section className="page-blog container container_page">
            <h2 className="title-block">Blog</h2>
            <Post></Post>
            <Post></Post>
        </section>
    )
};

export default Blog;