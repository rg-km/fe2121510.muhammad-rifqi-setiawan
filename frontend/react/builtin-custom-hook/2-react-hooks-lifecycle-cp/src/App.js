import React from "react";
 
export default function App() {
  return <RandomQuote />;
}
 
export function RandomQuote() {
  //beginanswer
  const [quote, setQuote] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  //endanswer
  React.useEffect(() => {
    //beginanswer
    getQuote();
    //endanswer
  }, []);
 
  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  }
 
  //beginanswer
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <a className="navbar-brand" href="/" data-id="brand">
          Random Quote
        </a>
      </nav>
      <div className="container p-3">
        <div
          className="d-flex flex-column justify-content-center align-items-center bg-warning"
          style={{
            borderTopLeftRadius: 100,
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
            padding: "5rem",
          }}
        >
          <div className="d-flex justify-content-center">
            {loading && "Loading..."}
          </div>
          <figure>
            <blockquote className="blockquote">
              <p className="display-4" data-testid="quote">
                {quote && quote.content}.
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              {quote && quote.author}
            </figcaption>
          </figure>
          <button className="btn btn-primary" onClick={getQuote}>
            Get another quote
          </button>
        </div>
      </div>
    </>
  );
  //endanswer
}