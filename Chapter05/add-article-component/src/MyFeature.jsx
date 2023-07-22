import * as React from "react";
import ArticleList from "./ArticleList";

const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

function MyFeature() {
  const [articles, setArticles] = React.useState([
    {
      id: id.next(),
      title: "Article 1",
      summary: "Article 1 Summary",
      display: "none",
    },
    {
      id: id.next(),
      title: "Article 2",
      summary: "Article 2 Summary",
      display: "none",
    },
  ]);
  const [title, setTitle] = React.useState("");
  const [summary, setSummary] = React.useState("");

  const onChangeTitle = React.useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onChangeSummary = React.useCallback((e) => {
    setSummary(e.target.value);
  }, []);

  const onClickAdd = React.useCallback(() => {
    setArticles((state) => [
      ...state,
      {
        id: id.next(),
        title: title,
        summary: summary,
        display: "none",
      },
    ]);
    setTitle("");
    setSummary("");
  }, [summary, title]);

  const onClickRemove = React.useCallback((id) => {
    setArticles((state) => state.filter((article) => article.id !== id));
  }, []);

  return (
    <section>
      <header>
        <h1>Articles</h1>
        <input placeholder="Title" value={title} onChange={onChangeTitle} />
        <input
          placeholder="Summary"
          value={summary}
          onChange={onChangeSummary}
        />
        <button onClick={onClickAdd}>Add</button>
      </header>
      <ArticleList articles={articles} onClickRemove={onClickRemove} />
    </section>
  );
}

export default MyFeature;
