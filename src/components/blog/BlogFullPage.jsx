import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../../data/products";
import { GoArrowLeft } from "react-icons/go";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRegUser,
} from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogFullPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    AOS.init({ duration: 800 });
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the blog post you are looking for doesn't exist.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-green-600 hover:underline"
        >
          <GoArrowLeft />
          Back to Blog
        </Link>
      </div>
    );
  }

  // Related posts excluding the current one
  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 text-gray-800 pb-16">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div data-aos="fade-up">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[380px] object-cover rounded-xl shadow"
          />
        </div>

        <div className="mt-8" data-aos="fade-up">
          <div className="flex items-center justify-between mb-4">
            <span className="text-green-700 font-medium text-sm">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.date}</span>
          </div>
          <h1 className="text-4xl font-bold leading-snug mb-6 text-gray-900">
            {post.title}
          </h1>

          <div
            className="prose max-w-none prose-lg prose-green mb-8"
            data-aos="fade-up"
          >
            <p>{post.content}</p>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 mt-12" data-aos="fade-up">
            <FaRegUser className="text-green-600 text-2xl" />
            <div>
              <p className="font-semibold text-gray-700">Sudhan Kandel</p>
              <p className="text-sm text-gray-500">Author & Web Developer</p>
            </div>
          </div>

          {/* Social Share */}
          <div className="flex gap-4 mt-8" data-aos="fade-up">
            <a
              href="https://www.facebook.com/thelamenepali"
              className="text-white bg-blue-600 p-2 rounded-full hover:scale-105 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.x.com/thelamenepali"
              className="text-white bg-sky-500 p-2 rounded-full hover:scale-105 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-white bg-blue-800 p-2 rounded-full hover:scale-105 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* Back to Blog */}
          <div className="mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-green-700 hover:underline text-sm"
            >
              <GoArrowLeft /> Back to Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <section
          className="mt-16 bg-white py-10 px-6 md:px-0"
          data-aos="fade-up"
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Related Posts
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.slug}`}
                  className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg shadow-sm hover:shadow transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <p className="text-sm text-green-600">{item.category}</p>
                  <h4 className="text-lg font-semibold text-gray-800 mt-1">
                    {item.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogFullPage;
