import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { blogCategories, blogPosts } from "../../data/products";
import Newsletter from "../contact/NewsLetter";

const Blog = () => {
  const posts = blogPosts;
  const categories = blogCategories;

  return (
    <div className="bg-white text-gray-800">
      {/* Hero / Featured Post */}
      <section className="relative h-[85vh] mb-16 overflow-hidden">
        <img
          src={posts[0].image}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-center items-baseline p-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            {posts[0].title}
          </h1>
          <p className="text-lg text-gray-200">{posts[0].excerpt}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:flex md:gap-12">
        {/* Posts Grid */}
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <article
              key={post.id}
              className="rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={post.image}
                alt=""
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <span className="text-sm text-green-600">{post.category}</span>
                <h2 className="mt-2 text-xl font-semibold text-gray-900 clamp-2">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-700 flex-1 clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-green-600 hover:underline"
                  >
                    Read More <GoArrowUpRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </main>

        {/* Sidebar */}
        <aside className="mt-12 md:mt-0 w-full md:w-80 space-y-8">
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/category/${cat}`}
                    className="text-green-600 hover:underline"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
            <ul className="space-y-4">
              {posts.slice(1, 4).map((post) => (
                <li key={post.id} className="flex items-center gap-3">
                  <img
                    src={post.image}
                    alt=""
                    className="h-12 w-16 object-cover rounded"
                  />
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-gray-800 hover:underline text-sm"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Newsletter Signup Moved Here */}
      <Newsletter/>
    </div>
  );
};

export default Blog;
