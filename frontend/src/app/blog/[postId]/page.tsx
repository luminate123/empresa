

async function loadpost(id: { id: any }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const posts = await res.json()
  return posts

}


async function BlogPublication({ params }: { params: any }) {

  const post = await loadpost(params.postId)

  return (
    <div>PostPage {post.id}
    {post.title}
    </div>
  )
}

export default BlogPublication