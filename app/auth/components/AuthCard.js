export default function AuthCard({ children }) {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,.15)] border">
      {children}
    </div>
  );
}
