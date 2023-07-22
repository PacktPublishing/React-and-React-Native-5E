import ArticleItem from "./ArticleItem";

function ArticleList({ articles, onClickRemove }) {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem
          key={article.id.value}
          article={article}
          onClickRemove={onClickRemove}
        />
      ))}
    </ul>
  );
}

export default ArticleList;
