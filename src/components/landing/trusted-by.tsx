export function TrustedBy() {
  const companies = [
    { name: "TrafficAi", color: "text-blue-600" },
    { name: "StealthLabz", color: "text-purple-600" },
    { name: "CloudScale", color: "text-indigo-600" },
    { name: "DataPortal", color: "text-cyan-600" },
    { name: "SecureBase", color: "text-violet-600" },
    { name: "AppNest", color: "text-blue-500" },
  ];

  return (
    <section className="border-y bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by leading companies worldwide
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center opacity-60 transition-opacity hover:opacity-100"
            >
              <div className="text-center">
                <div
                  className={`text-xl font-bold ${company.color} flex items-center justify-center gap-1`}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span>{company.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
