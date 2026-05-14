import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { rosemontBlogs } from "@/data/rosemontBlogs";

function social() {
  return [
    {
      icon: FaFacebookF,
      link: (url) =>
        "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(url),
    },
    {
      icon: FaXTwitter,
      link: (url, title) =>
        "https://twitter.com/intent/tweet?url=" +
        encodeURIComponent(url) +
        "&text=" +
        encodeURIComponent(title),
    },
    {
      icon: FaLinkedinIn,
      link: (url, title) =>
        "https://www.linkedin.com/shareArticle?mini=true&url=" +
        encodeURIComponent(url) +
        "&title=" +
        encodeURIComponent(title),
    },
  ];
}

export const blogDetailsData = {
  blogDetails: rosemontBlogs.map((blog) => ({
    slug: blog.slug,
    blogPost: {
      title: blog.title,
      description: blog.excerpt,
      image: blog.image,
      date: blog.date,
      author: blog.author,
      postTags: blog.tags,
      category: blog.category,
      readTime: blog.readTime,
    },
    sections: [
      {
        title: "Rosemont Perspective",
        content: blog.body[0],
      },
      {
        title: "Why It Matters",
        content: blog.body[1],
      },
      {
        title: "Key Takeaways",
        list: blog.points,
      },
    ],
    socialIcons: social(),
  })),
};
