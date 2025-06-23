import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import DeleteButton from "@/components/DeleteButton";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login?callbackUrl=/admin");
  }

  // Use isAdmin instead of role
  if (!session.user.isAdmin) {
    redirect("/");
  }

  const requests = await prisma.serviceRequest.findMany({
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <section>
        <h2 className="text-xl font-semibold mb-4">All Service Requests</h2>
        <div className="space-y-4">
          {requests.length === 0 && (
            <div className="text-gray-500">No service requests found.</div>
          )}
          {requests.map(request => (
            <div key={request.id} className="border p-4 rounded shadow bg-white">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold">{request.service}</div>
                  <div className="text-sm text-gray-700">
                    {request.name} &lt;{request.email}&gt;
                  </div>
                  <div className="text-sm text-gray-500">{request.phone}</div>
                  <div className="text-sm text-gray-500">{request.timeSlot}</div>
                  <div className="text-sm text-gray-500">
                    {new Date(request.date).toLocaleString().slice(0, 9)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">
                    {new Date(request.createdAt).toLocaleString()}
                  </div>
                  <form action={`/api/request/${request.id}/status`} method="POST" style={{ display: "inline" }}>
                    <select name="status" defaultValue={request.status} className="mr-2 p-1 border rounded">
                      <option value="unread">Unread</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                    <button
                      type="submit"
                      className="text-sm bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                    >
                      Update
                    </button>
                  </form>
                  <DeleteButton id={request.id} />
                  <span className="ml-2 text-sm">
                   Status : {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </span>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Requested by: {request.user?.email || "Unknown"}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}