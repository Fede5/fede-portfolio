import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="max-w-xl mx-auto p-6 text-center space-y-4">
      <h1 className="text-3xl font-bold text-green-600">Thanks for reaching out!</h1>
      <p className="text-slate-600">I'll get back to you as soon as possible.</p>
      <Link
        to="/"
        className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
