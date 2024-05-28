

async function loadpost(id: { id: any }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const posts = await res.json()
  return posts

}


async function BlogPublication({ params }: { params: any }) {

  const post = await loadpost(params.clientId)

  return (
    <div className="pl-6">
    <h1>UsersPage</h1>
    {post.id} - {post.name}
    <br />
    {post.email}
    </div>
  )
}

export default BlogPublication