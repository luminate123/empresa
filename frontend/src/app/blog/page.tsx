import PostCard from "../../components/PostCard"


interface Post {
    id: number;
    title: string;
    body: string;
}
async function loadPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts: Post[] = await res.json()
    return posts

}

async function BlogPage() {

    const posts = await loadPost()
    console.log(posts)

    return (
        <div>
            <h1 className="pl-5">Lista de Blogs disponibles</h1>
            <div className="grid grid-cols-3 gap-4 justify-items-center mt-5">

                {
                    posts.map((post: Post) => (

                        <PostCard key={post.id} post={post} />
                    ))}

            </div>
        </div>


    );
}

export default BlogPage