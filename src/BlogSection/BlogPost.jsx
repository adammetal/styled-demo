import { Article, Title, Author, Content } from "../ui-kit/Article";
import { AlertButton, CustomButton, Button } from "../ui-kit/Button";
import { Panel } from "../ui-kit/Panel";

function BlogPost({ title, author, content }) {
  return (
    <Article>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Content dangerouslySetInnerHTML={{ __html: content }}/>
      <Panel>
        <Button>Comment</Button>
        <AlertButton>Delete</AlertButton>
        <CustomButton color="black">Unicorn!</CustomButton>
      </Panel>
    </Article>
  );
}

export default BlogPost;
