export const getBlogs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-store"
    })
    
    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data = await res.json();
    return { blogs: data.blogs }; 
  } catch (error) {
    console.error(error);
    return { blogs: [] };
  }
};
