function TraitBar({ label, value }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs w-32 flex-shrink-0" style={{ color: "#a08060" }}>
        {label}
      </span>
      <div className="flex gap-1 flex-1">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="h-1.5 flex-1 rounded-full"
              style={{ backgroundColor: i < value ? "#D6A76C" : "#E1CDB8" }}
            />
          ))}
      </div>
      <span
        className="text-xs font-bold w-4 text-right"
        style={{ color: "#8B5E3C" }}
      >
        {value}
      </span>
    </div>
  );
}

function Pill({ label, show }) {
  if (!show) return null;
  return (
    <span
      className="text-xs font-medium px-2.5 py-1 rounded-full border"
      style={{
        backgroundColor: "#F7EFE5",
        borderColor: "#D6A76C",
        color: "#5c3d24",
      }}
    >
      {label}
    </span>
  );
}

export default function CatCard({ cat, onNew }) {
  const traits = [
    ["Adaptability", "adaptability"],
    ["Affection", "affection_level"],
    ["Child Friendly", "child_friendly"],
    ["Dog Friendly", "dog_friendly"],
    ["Energy Level", "energy_level"],
    ["Grooming", "grooming"],
    ["Health Issues", "health_issues"],
    ["Intelligence", "intelligence"],
    ["Shedding", "shedding_level"],
    ["Social Needs", "social_needs"],
    ["Stranger Friendly", "stranger_friendly"],
    ["Vocalisation", "vocalisation"],
  ];

  const temperamentList = (cat.temperament || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <div
      className="animate-pop flex flex-col lg:flex-row rounded-3xl overflow-hidden border"
      style={{
        backgroundColor: "#FFFDF9",
        borderColor: "#E1CDB8",
        boxShadow: "0 4px 32px rgba(46,36,28,0.10)",
        animationFillMode: "forwards",
      }}
    >
      <div
        className="lg:w-80 xl:w-96 flex-shrink-0 flex flex-col"
        style={{ borderRight: "1px solid #E1CDB8" }}
      >
        <div
          className="relative flex flex-1 items-center justify-center overflow-hidden"
          style={{ minHeight: "300px", backgroundColor: "#f0e4d4" }}
        >
          {cat.image && (
            <img
              src={cat.image}
              alt={cat.name}
              className="h-full w-full object-contain object-center"
              style={{ minHeight: "300px" }}
              onError={(e) => {
                e.target.style.display = "none";
                document.getElementById("cat-fallback").style.display = "flex";
              }}
            />
          )}
          <div
            id="cat-fallback"
            className="absolute inset-0 items-center justify-center text-8xl"
            style={{
              display: cat.image ? "none" : "flex",
              backgroundColor: "#f0e4d4",
            }}
          >
            🐱
          </div>

          <span
            className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: "rgba(46,36,28,0.55)", color: "#D6A76C" }}
          >
            #{cat.id}
          </span>
        </div>

        <div
          className="p-5 flex flex-col gap-2.5"
          style={{ backgroundColor: "#FFFDF9" }}
        >
          <button
            onClick={onNew}
            className="w-full py-3 rounded-2xl font-bold text-sm text-white flex items-center
                       justify-center gap-2 transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.97]"
            style={{
              backgroundColor: "#8B5E3C",
              boxShadow: "0 4px 14px rgba(139,94,60,0.28)",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 4v6h-6" />
              <path d="M1 20v-6h6" />
              <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
            </svg>
            Show Me Another Cat
          </button>

          {cat.wikipedia_url && (
            <a
              href={cat.wikipedia_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-2xl font-semibold text-xs flex items-center
                         justify-center gap-1.5 border transition-all hover:opacity-80"
              style={{
                borderColor: "#E1CDB8",
                color: "#8B5E3C",
                backgroundColor: "#F7EFE5",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Read on Wikipedia
            </a>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto" style={{ maxHeight: "640px" }}>
        <div
          className="px-7 pt-7 pb-5 border-b"
          style={{ borderColor: "#E1CDB8" }}
        >
          <h1
            className="text-3xl font-bold"
            style={{ fontFamily: "Fraunces, serif", color: "#2E241C" }}
          >
            {cat.name}
          </h1>
          {cat.alt_names && (
            <p className="text-sm mt-1 italic" style={{ color: "#a08060" }}>
              Also: {cat.alt_names}
            </p>
          )}
          <div className="flex flex-wrap gap-2 mt-3">
            <Pill label="🏠 Indoor" show={cat.indoor === 1} />
            <Pill label="🛋️ Lap Cat" show={cat.lap === 1} />
            <Pill label="🌿 Hypoallergenic" show={cat.hypoallergenic === 1} />
            <Pill label="✨ Hairless" show={cat.hairless === 1} />
            <Pill label="🌱 Natural Breed" show={cat.natural === 1} />
            <Pill label="💎 Rare" show={cat.rare === 1} />
            <Pill label="🔱 Rex" show={cat.rex === 1} />
            <Pill label="🦵 Short Legs" show={cat.short_legs === 1} />
            <Pill label="🐾 Suppressed Tail" show={cat.suppressed_tail === 1} />
            <Pill label="🧪 Experimental" show={cat.experimental === 1} />
          </div>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-4 border-b"
          style={{ borderColor: "#E1CDB8" }}
        >
          {[
            [
              "Origin",
              `${cat.origin ?? "—"} ${cat.country_code ? `(${cat.country_code})` : ""}`,
            ],
            ["Life Span", cat.life_span ? `${cat.life_span} yrs` : "—"],
            [
              "Weight",
              cat.weight?.imperial ? `${cat.weight.imperial} lbs` : "—",
            ],
            ["Metric", cat.weight?.metric ? `${cat.weight.metric} kg` : "—"],
          ].map(([label, value], i, arr) => (
            <div
              key={label}
              className="px-5 py-4"
              style={{
                borderRight: i < arr.length - 1 ? "1px solid #E1CDB8" : "none",
              }}
            >
              <p
                className="text-[10px] font-semibold uppercase tracking-wider mb-0.5"
                style={{ color: "#a08060" }}
              >
                {label}
              </p>
              <p className="text-sm font-bold" style={{ color: "#2E241C" }}>
                {value}
              </p>
            </div>
          ))}
        </div>

        {temperamentList.length > 0 && (
          <div
            className="px-7 py-5 border-b"
            style={{ borderColor: "#E1CDB8" }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-wider mb-2.5"
              style={{ color: "#a08060" }}
            >
              Temperament
            </p>
            <div className="flex flex-wrap gap-1.5">
              {temperamentList.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#f0e4d4", color: "#5c3d24" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        {cat.description && (
          <div
            className="px-7 py-5 border-b"
            style={{ borderColor: "#E1CDB8" }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-wider mb-2"
              style={{ color: "#a08060" }}
            >
              About
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#5c3d24", lineHeight: "1.8" }}
            >
              {cat.description}
            </p>
          </div>
        )}

        <div className="px-7 py-6">
          <p
            className="text-[10px] font-semibold uppercase tracking-wider mb-4"
            style={{ color: "#a08060" }}
          >
            Personality Traits
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {traits.map(([label, key]) =>
              cat[key] !== undefined ? (
                <TraitBar key={key} label={label} value={cat[key]} />
              ) : null,
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
