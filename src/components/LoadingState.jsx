export default function LoadingState() {
  return (
    <div
      className="flex flex-col lg:flex-row rounded-3xl overflow-hidden border"
      style={{
        backgroundColor: "#FFFDF9",
        borderColor: "#E1CDB8",
        boxShadow: "0 4px 32px rgba(46,36,28,0.10)",
      }}
    >
      <div
        className="lg:w-80 xl:w-96 flex-shrink-0 flex flex-col"
        style={{ borderRight: "1px solid #E1CDB8" }}
      >
        <div className="shimmer flex-1" style={{ minHeight: "300px" }} />
        <div className="p-5 flex flex-col gap-2.5">
          <div className="h-11 rounded-2xl shimmer" />
          <div className="h-9 rounded-2xl shimmer" />
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <div
          className="px-7 pt-7 pb-5 border-b"
          style={{ borderColor: "#E1CDB8" }}
        >
          <div className="h-8 rounded-xl shimmer w-52 mb-2" />
          <div className="h-4 rounded-full shimmer w-36 mb-3" />
          <div className="flex gap-2 flex-wrap">
            {[72, 80, 96].map((w, i) => (
              <div
                key={i}
                className="h-7 rounded-full shimmer"
                style={{ width: w }}
              />
            ))}
          </div>
        </div>

        <div
          className="grid grid-cols-4 border-b"
          style={{ borderColor: "#E1CDB8" }}
        >
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="px-5 py-4">
                <div className="h-2.5 rounded-full shimmer w-12 mb-1.5" />
                <div className="h-4 rounded-full shimmer w-16" />
              </div>
            ))}
        </div>

        <div className="px-7 py-5 border-b" style={{ borderColor: "#E1CDB8" }}>
          <div className="h-2.5 rounded-full shimmer w-24 mb-2.5" />
          <div className="flex gap-1.5 flex-wrap">
            {[60, 80, 70, 90, 65, 75].map((w, i) => (
              <div
                key={i}
                className="h-6 rounded-full shimmer"
                style={{ width: w }}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="px-7 py-5 border-b" style={{ borderColor: "#E1CDB8" }}>
          <div className="h-2.5 rounded-full shimmer w-16 mb-2" />
          {["100%", "95%", "88%", "72%"].map((w, i) => (
            <div
              key={i}
              className="h-3 rounded-full shimmer mb-2"
              style={{ width: w }}
            />
          ))}
        </div>

        {/* Traits */}
        <div className="px-7 py-6">
          <div className="h-2.5 rounded-full shimmer w-32 mb-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Array(12)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-3 rounded-full shimmer w-28" />
                  <div className="flex gap-1 flex-1">
                    {Array(5)
                      .fill(null)
                      .map((__, j) => (
                        <div
                          key={j}
                          className="h-1.5 flex-1 rounded-full shimmer"
                        />
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
