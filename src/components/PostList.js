import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPosts, getUsers } from "../services/Api";
import PostFilter from "./PostFilter";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const { tag } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getPosts();
        const usersData = await getUsers();
        const usersMap = usersData.reduce((acc, user) => {
          acc[user.id] = user;
          return acc;
        }, {});

        const postsWithUsers = postsData.map((post) => ({
          ...post,
          user: usersMap[post.userId] || {},
        }));
        setPosts(postsWithUsers);
        setTags([...new Set(postsWithUsers.map((post) => post.tags).flat())]);
        const postByTag = postsWithUsers.filter((post) =>
          post.tags.includes(tag)
        );
        console.log(postByTag);
        setFilteredPosts(postsWithUsers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [tag]);

  const handleFilter = (tag) => {
    console.log(tag);
    if (tag === "all") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.tags.includes(tag)));
    }
  };

  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center">Blog</h2>
            <p className="text-secondary mb-5 text-center lead fs-4">
              This is an example for Infobae's interview.
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-md-center text-center mb-5">
          <PostFilter tags={tags} onFilter={handleFilter} />
        </div>
      </div>
      <div className="container overflow-hidden">
        <div className="row gy-3 gy-lg-0 gx-xxl-5">
          {filteredPosts.map((post, i) => (
            <div className="col-12 col-lg-4 mb-5">
              <article>
                <figure className="rounded overflow-hidden mb-3 bsb-overlay-hover">
                  <Link to={`/post/${post.id}`}>
                    <img
                      className="img-fluid bsb-scale bsb-hover-scale-up"
                      loading="lazy"
                      src={`https://picsum.photos/id/${i}/500/300`}
                      alt={post.tags.join(" ")}
                    />
                  </Link>
                </figure>
                <div className="entry-header mb-3">
                  <div classNameName="entry-meta list-unstyled d-flex mb-2">
                    {post.tags.map((tag) => (
                      <span className="badge bg-secondary mx-1">{tag}</span>
                    ))}
                  </div>
                  <h2 className="entry-title h4 mt-2">
                    <Link
                      to={`/post/${post.id}`}
                      className="link-dark text-decoration-none lead"
                    >
                      {post.title}
                    </Link>
                  </h2>
                </div>
                <div className="entry-footer">
                  <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <a
                        className="fs-7 link-secondary text-decoration-none d-flex align-items-center"
                        href="#!"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="none"
                          className="bi bi-calendar3"
                          viewBox="0 0 25 25"
                        >
                          <path
                            d="M8.9707 19.42V13.89"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.28234 12.67C2.25751 12.2167 2.32536 11.7631 2.48175 11.3369C2.63813 10.9106 2.87975 10.5208 3.19187 10.1911C3.504 9.86141 3.88006 9.59877 4.29708 9.41931C4.71411 9.23985 5.16335 9.14734 5.61735 9.14734C6.07135 9.14734 6.52058 9.23985 6.9376 9.41931C7.35463 9.59877 7.73069 9.86141 8.04281 10.1911C8.35493 10.5208 8.59657 10.9106 8.75296 11.3369C8.90934 11.7631 8.97717 12.2167 8.95234 12.67V18.3C8.97717 18.7533 8.90934 19.207 8.75296 19.6332C8.59657 20.0594 8.35493 20.4492 8.04281 20.7789C7.73069 21.1086 7.35463 21.3712 6.9376 21.5507C6.52058 21.7301 6.07135 21.8227 5.61735 21.8227C5.16335 21.8227 4.71411 21.7301 4.29708 21.5507C3.88006 21.3712 3.504 21.1086 3.19187 20.7789C2.87975 20.4492 2.63813 20.0594 2.48175 19.6332C2.32536 19.207 2.25751 18.7533 2.28234 18.3V12.67Z"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.97076 18.3C8.96813 18.7399 9.05217 19.176 9.21809 19.5835C9.38402 19.9909 9.62857 20.3617 9.93779 20.6747C10.247 20.9876 10.6148 21.2366 11.0203 21.4073C11.4257 21.5781 11.8608 21.6674 12.3008 21.67H16.4208C17.3814 21.6693 18.316 21.357 19.0841 20.78C19.8522 20.203 20.4125 19.3924 20.6808 18.47L22.1808 13.39C22.3002 13.0523 22.3372 12.691 22.2889 12.3361C22.2405 11.9812 22.1081 11.643 21.9028 11.3496C21.6974 11.0562 21.4249 10.816 21.108 10.6491C20.7911 10.4822 20.4389 10.3934 20.0808 10.39H14.5608V5.10999C14.5621 4.91825 14.5256 4.72818 14.4535 4.55054C14.3813 4.3729 14.2749 4.21121 14.1402 4.07471C14.0056 3.9382 13.8454 3.82953 13.6687 3.75494C13.4921 3.68036 13.3025 3.64132 13.1108 3.64001V3.64001C12.7953 3.64144 12.4889 3.74572 12.2381 3.93701C11.9872 4.1283 11.8056 4.39617 11.7208 4.70001L8.97076 13.86"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span className="ms-2 fs-6">
                          {post.reactions.likes}
                        </span>
                      </a>
                    </li>

                    <li className="mx-4">
                      <a
                        className="link-secondary text-decoration-none d-flex align-items-center"
                        href="#!"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          className="bi bi-chat-dots"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z"
                            fill="#000000"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z"
                            fill="#000000"
                          />
                        </svg>
                        <span className="ms-2 fs-6">{post.views}</span>
                      </a>
                    </li>
                    <li>
                      <p className="card-text fs-6">
                        <strong>Author:</strong>{" "}
                        {post.user.firstName
                          ? `${post.user.firstName} ${post.user.lastName}`
                          : "Unknown"}
                      </p>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostList;
