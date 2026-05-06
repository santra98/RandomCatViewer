export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(247,239,229,0.95)",
        backdropFilter: "blur(12px)",
        borderColor: "#E1CDB8",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐱</span>
            <span
              className="font-bold text-lg"
              style={{ fontFamily: "Fraunces, serif", color: "#2E241C" }}
            >
              CatPeek
            </span>
          </div>
          <p className="hidden md:block text-sm" style={{ color: "#a08060" }}>
            Discover a new breed every click
          </p>
        </div>
      </div>
    </header>
  );
}
