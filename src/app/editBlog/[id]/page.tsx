import { getBlogs } from "@/app/api/blogs/getBlog";
import EditBlogForm from "@/app/components/EditBlogForm";
import { weblogData } from "@/app/types/props";

const getById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog.");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return;
  }
};

export default async function EditBlog({ params }: { params: { id: any} }){
    const {id} = params
    const{blog} = await getById(id)
    const{title, description} = blog;

    return (
        <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
    <EditBlogForm title={title} description={description} id={id} />
    </div>
  );
}



// const getBlogById = async(id:string) =>{
//     try {
//         const res = await fetch(`http://localhost:3000/api/blogs/${id}`,{
//             cache:"no-store",
//             headers:{
//                 "Content-Type":"application/json"
//             }
//         });
//         if(!res.ok){
//             throw new Error("Failed to fetch blog.")
//         }
//         const data = await res.json();
//         return data;

//     } catch (error) {
//         console.log(error)
//     }
// }

// export default async function editBlog({ params }: { params: { id: string} }) {
//   const {id} = params;
//   const blogData = await getBlogById(id);
 
//      if (!blogData || !blogData.blog) {
//         return <div>Error loading blog data</div>;
//     }
//   const {blog} = blogData;
//   const {title, description} = blog;
//   return <EditBlogForm id={id} title={title} description={description} />;
// }
