import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

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
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">
                    {new Date(request.createdAt).toLocaleString()}
                  </div>
                  <div className={`font-bold ${request.status === "read" ? "text-green-600" : "text-red-600"}`}>
                    {request.status}
                  </div>
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