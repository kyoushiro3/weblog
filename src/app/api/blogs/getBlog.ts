export const getBlogs = async () => {
  try {
    const res = await fetch("https://weblog-kimdarren.vercel.app/api/blogs", {
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
