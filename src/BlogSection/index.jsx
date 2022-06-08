import styled from "styled-components";
import { Suspense } from "react";
import BlogPostList from "./BlogPostList";

const Section = styled.section`
  max-width: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
`;

function BlogSection({ blogResource }) {
  return (
    <Section>
      <Suspense fallback="Loading...">
        <BlogPostList blogResource={blogResource} />
      </Suspense>
    </Section>
  );
}

export default BlogSection;
