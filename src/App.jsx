import { useState, useEffect } from "react";
import Header from "./components/Header";
import CatCard from "./components/CatCard";
import LoadingState from "./components/LoadingState";

const API_URL = "https://api.freeapi.app/api/v1/public/cats/cat/random";

export default function App() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCat = () => {
    setError(null);
    setLoading(true);
    setCat(null);
    fetch(API_URL)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((json) => {
        setCat(json?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Couldn't fetch a cat.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7EFE5" }}>
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && <LoadingState />}

        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-28 gap-4 text-center">
            <div className="text-7xl">🙀</div>
            <h3
              className="text-2xl font-bold"
              style={{ fontFamily: "Fraunces, serif", color: "#2E241C" }}
            >
              Oh no, no cat!
            </h3>
            <p className="text-sm" style={{ color: "#a08060" }}>
              {error}
            </p>
            <button
              onClick={fetchCat}
              className="px-6 py-3 font-bold rounded-full text-white mt-2 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#8B5E3C" }}
            >
              Try again 🐾
            </button>
          </div>
        )}

        {cat && !loading && <CatCard cat={cat} onNew={fetchCat} />}
      </main>

      <footer className="text-center py-6 text-xs" style={{ color: "#a08060" }}>
        Powered by{" "}
        <span style={{ color: "#8B5E3C", fontWeight: 700 }}>FreeAPI</span> ·
        CatPeek 🐱
      </footer>
    </div>
  );
}
