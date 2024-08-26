import React from 'react'

const SocialLink = () => {
  return (
    <>
      <ul className="fixed-social-icon">
        <li>
          <a href="">
            <img className="dark:block hidden " src="../linkedin-dark.svg" />
            <img className="dark:hidden " src="../linked-in-white.svg" />
          </a>
        </li>
        <li>
          <a href="">
            <img className="dark:block hidden " src="../facebook-dark.svg" />
            <img className="dark:hidden " src="../facebook-white.svg" />
          </a>
        </li>
        <li>
          <a href="">
            <img className="dark:block hidden " src="../instagram-dark.svg" />
            <img className="dark:hidden " src="../instagram-white.svg" />
          </a>
        </li>
      </ul>
    </>
  );
}

export default SocialLink