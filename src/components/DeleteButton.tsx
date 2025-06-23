"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirm("Are you sure you want to delete this request?")) return;

    const res = await fetch(`/api/request/${id}/delete`, {
      method: "POST",
    });

    if (res.ok) {
      router.refresh(); // Refreshes the /admin page data
    } else {
      alert("Failed to delete request.");
    }
  };

  return (
    <form onSubmit={handleDelete} style={{ display: "inline" }}>
      <button
        type="submit"
        className="ml-2 text-sm bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
      >
        Delete
      </button>
    </form>
  );
}