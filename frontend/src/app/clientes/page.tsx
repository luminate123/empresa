import UserCard from "@/components/UsersCard";

interface Client {
    id: number;
    title: string;
    body: string;
}

async function loadPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const posts: Client[] = await res.json()
    return posts

}


async function ClientePage() {

    const posts = await loadPost()
    console.log(posts)

    return (
        <div>
            <h1 className="pl-5">Lista de Blogs disponibles</h1>
            <div className="grid grid-cols-3 gap-4 justify-items-center mt-5">

                {
                    posts.map((post: Client) => (

                        <UserCard key={post.id} post={post} />
                    ))}

            </div>
        </div>


    );
}

export default ClientePage