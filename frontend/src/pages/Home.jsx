export default function Home(){
  return (
    <section className="space-y-8">
      <div className="py-16 text-center bg-gray-50 rounded-xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">Build it Right. Build it Fast.</h1>
        <p>From new builds to maintenance, Y-Not Build delivers quality with a personal touch across Umkomaas + 100km (KZN), worldwide on request.</p>
        <a href="/contact" className="btn btn-primary mt-6">Get a Free Consultation</a>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-3">What we do</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 list-disc pl-5">
          {`New builds; Renovations; Additions; Roofing; Plumbing; Electrical; Painting; Paving; Maintenance; Shopfitting; Anything construction-related`.split(";").map((s,i)=><li key={i}>{s.trim()}</li>)}
        </ul>
      </div>
    </section>
  )
}
