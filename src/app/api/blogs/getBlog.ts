export const getBlogs = async () =>{
    try{
        const res = await fetch("http://localhost:3000/api/blogs", {
          cache: "no-store"
        })
        if(!res.ok){
          throw new Error("Failed to fetch blogs.")
      }
      return res.json();

    }
    catch(error){
      console.log("Error loadings blogs: ",error)
    }
  }