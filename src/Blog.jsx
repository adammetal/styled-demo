import styled from "styled-components";
import BlogSection from "./BlogSection";
import getDevToResource from "./getDevToResource";

const Container = styled.main`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  gap: 1rem;
  padding: 1rem;
`;

const resource = getDevToResource();

function Blog() {
  return (
    <Container>
      <aside>Sidebar</aside>
      <BlogSection blogResource={resource} />
    </Container>
  );
}

export default Blog;
