import React from "react";
import "../Components/Next.css";
const Next = () => {
  return (
    <>
      <section className="banner container">
        <h1>The React Framework for Production</h1>

        <p>
          Next.js gives you the best developer experience with all the features
          you need for production: hybrid static & server rendering, TypeScript
          support, smart bundling, route pre-fetching, and more. No config
          needed.
        </p>
        <div>
          <button>Start Learning</button>
          <button>Documentation</button>
        </div>
      </section>
    </>
  );
};

export default Next;
