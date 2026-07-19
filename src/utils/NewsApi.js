const NEWS_API_BASE = "https://nomoreparties.co/news/v2";
const DAYS_AGO = 7;

// ⚠️ Replace this with your own API key from https://newsapi.org/register
const API_KEY = "ee8d410e8af24de7b286dd2327607303";

function getDateRange() {
  const to = new Date();
  const from = new Date();
  from.setDate(to.getDate() - DAYS_AGO);

  const fmt = (d) => d.toISOString().split("T")[0];
  return { from: fmt(from), to: fmt(to) };
}

export function searchNews(keyword) {
  const { from, to } = getDateRange();

  const params = new URLSearchParams({
    q: keyword,
    from,
    to,
    pageSize: 100,
    language: "en",
    apiKey: API_KEY,
  });

  return fetch(`${NEWS_API_BASE}/everything?${params}`).then((res) => {
    if (!res.ok) {
      return res.json().then((err) => {
        throw new Error(err.message || "Failed to fetch news");
      });
    }
    return res.json();
  });
}

export function getNewsCardData(article, keyword) {
  return {
    title: article.title,
    text: article.description || article.content,
    date: article.publishedAt,
    source: article.source?.name || "Unknown",
    link: article.url,
    image: article.urlToImage || "",
    keyword,
  };
}
