import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">Contact Me</h1>
      <p className="text-slate-600 dark:text-slate-300">
        Send me a message and I’ll get back to you as soon as possible.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;

          fetch("https://formspree.io/f/xvgkvopp", {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" }
          })
            .then((res) => {
              if (res.ok) {
                navigate("/thanks");
              } else {
                alert("Something went wrong. Try again.");
              }
            })
            .catch(() => {
              alert("Something went wrong. Try again.");
            });
        }}
        className="space-y-4"
      >
        <input
          type="text"
          name="_honey"
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg px-3 py-2 mt-1"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
