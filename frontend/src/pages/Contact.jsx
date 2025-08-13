import { useState } from "react";
const API = import.meta.env.VITE_API_BASE;

export default function Contact(){
  const [form, setForm] = useState({name:"", email:"", message:""});
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try{
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if(res.ok) setStatus("ok");
      else setStatus(data.error || "Error sending message");
    }catch(err){
      setStatus("Network error");
    }
  };

  return (
    <section className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={submit} className="space-y-3">
        <input className="w-full border p-3 rounded" placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
        <input className="w-full border p-3 rounded" placeholder="Your email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
        <textarea className="w-full border p-3 rounded" rows="5" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})}/>
        <button className="btn btn-primary" disabled={status==="sending"}>Send</button>
      </form>
      {status && <p className="mt-3 text-sm">{status==="ok" ? "Thanks! We’ll be in touch." : String(status)}</p>}
      <div className="mt-6 text-sm">
        <div>Phone: 0681100585 / 0798471559</div>
        <div>Email: stafford@ynotbuild.co.za / dylan@ynotbuild.co.za</div>
        <div>Address: Whidenham, Umkomaas, KZN</div>
      </div>
    </section>
  )
}
