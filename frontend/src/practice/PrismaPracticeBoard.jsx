import React from "react";

const snippets = {
  fetch: `// Plain fetch example
fetch('/api/v1/prisma/users')
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);`,
  axios: `// Axios example
import axios from 'axios';

axios.get('/api/v1/prisma/products', { params: { page: 1, pageSize: 10 } })
  .then(res => console.log(res.data))
  .catch(console.error);`,
  reactQuery: `// React Query + Axios example
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const usePrismaPosts = () =>
  useQuery({
    queryKey: ['prisma-posts'],
    queryFn: () => axios.get('/api/v1/prisma/posts', { params: { page: 1 } }).then(r => r.data),
  });
// Call usePrismaPosts() inside a component once you add logic.`
};

export const PrismaTaskCard = ({ task }) => (
  <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-100 shadow-lg shadow-slate-900/40">
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/80">{task.group}</p>
        <h3 className="text-lg font-semibold text-white">{task.title}</h3>
        <p className="text-sm text-slate-300">{task.description}</p>
      </div>
      <div className="flex flex-col items-end gap-2 text-right">
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase text-emerald-200">{task.method}</span>
        <span className="font-mono text-xs text-emerald-100/80">{task.path}</span>
      </div>
    </div>

    {task.params?.length ? (
      <div className="mt-3 space-y-2">
        <p className="text-[11px] font-semibold uppercase text-slate-300">Route params</p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {task.params.map((param) => (
            <input
              key={param}
              className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500"
              placeholder={param}
            />
          ))}
        </div>
      </div>
    ) : null}

    {task.query?.length ? (
      <div className="mt-3 space-y-2">
        <p className="text-[11px] font-semibold uppercase text-slate-300">Query string</p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {task.query.map((param) => (
            <input
              key={param}
              className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500"
              placeholder={param}
            />
          ))}
        </div>
      </div>
    ) : null}

    {task.method === 'POST' ? (
      <form className="mt-3 space-y-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
        <p className="text-[11px] font-semibold uppercase text-slate-300">Form body</p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {(task.bodyFields || []).map((field) => (
            <input
              key={field}
              className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500"
              placeholder={field}
            />
          ))}
        </div>
        {task.bodyFields?.length ? null : (
          <div className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-400">
            Add fields here as needed for this POST.
          </div>
        )}
        <div className="flex justify-end">
          <button type="button" className="rounded-lg bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-100 ring-1 ring-emerald-400/40">
            Submit (wire later)
          </button>
        </div>
      </form>
    ) : null}

    {task.notes ? (
      <p className="mt-3 text-[13px] text-emerald-200/90">{task.notes}</p>
    ) : null}
  </section>
);

const sections = [
  {
    title: "GET",
    tasks: [
      { group: "Users", title: "List users", method: "GET", path: "/api/v1/prisma/users", description: "Select id, email, username, role." },
      { group: "Users", title: "User by id with profile", method: "GET", path: "/api/v1/prisma/users/:id", description: "Include profile when fetching a single user.", params: ["id"] },
      { group: "Products", title: "Active products", method: "GET", path: "/api/v1/prisma/products", description: "stock > 0 ordered by createdAt desc." },
      { group: "Posts", title: "Published posts (paginated)", method: "GET", path: "/api/v1/prisma/posts", description: "Pagination with author and tags included.", query: ["page", "pageSize"] },
      { group: "Categories", title: "Root categories with children", method: "GET", path: "/api/v1/prisma/categories/roots", description: "parentId null with nested children." },
      { group: "Products", title: "Product detail + reviews", method: "GET", path: "/api/v1/prisma/products/slug/:slug", description: "Find by slug, include reviews, compute avg + count.", params: ["slug"] },
      { group: "Orders", title: "Orders for user", method: "GET", path: "/api/v1/prisma/orders/user/:userId", description: "Include items with product name/price.", params: ["userId"] },
      { group: "Posts", title: "Posts by tag", method: "GET", path: "/api/v1/prisma/posts/tag/:slug", description: "Published posts containing a tag slug.", params: ["slug"] },
      { group: "Categories", title: "Top categories by product count", method: "GET", path: "/api/v1/prisma/categories/stats/top", description: "groupBy product counts, top 5." },
      { group: "Orders", title: "Monthly revenue", method: "GET", path: "/api/v1/prisma/orders/stats/monthly", description: "Group orders by month for the current year." },
      { group: "Users", title: "Spending leaderboard", method: "GET", path: "/api/v1/prisma/users/stats/spending", description: "Sum totalAmount for paid orders; include email." },
      { group: "Products", title: "Recommendations by tag overlap", method: "GET", path: "/api/v1/prisma/products/:id/recommendations", description: "Similar products sharing tags; exclude the base product.", params: ["id"] },
    ],
  },
  {
    title: "POST / Create",
    tasks: [
      { group: "Users", title: "Create user", method: "POST", path: "/api/v1/prisma/users", description: "Create user and return without password.", bodyFields: ["email", "username", "password"] },
      { group: "Categories", title: "Create category with slug", method: "POST", path: "/api/v1/prisma/categories", description: "Slug derived if missing; optional parentId.", bodyFields: ["name", "slug?", "description?", "parentId?"] },
      { group: "Tags", title: "Create tag", method: "POST", path: "/api/v1/prisma/tags", description: "Unique slug enforced.", bodyFields: ["name", "slug?"] },
      { group: "Products", title: "Create product with relations", method: "POST", path: "/api/v1/prisma/products", description: "Validate category/tag IDs before create.", bodyFields: ["name", "slug?", "description?", "price", "stock", "categoryId?", "tagIds[]?"] },
      { group: "Posts", title: "Create post (published sets timestamp)", method: "POST", path: "/api/v1/prisma/posts", description: "Status PUBLISHED sets publishedAt; connect author/category/tags.", bodyFields: ["title", "slug?", "content", "status", "authorId", "categoryId?", "tagIds[]?"] },
      { group: "Tags", title: "Bulk create tags", method: "POST", path: "/api/v1/prisma/tags/bulk", description: "createMany skipDuplicates for tags array.", bodyHint: `{"tags": [{"name": "AI", "slug": "ai"}]}` },
      { group: "Orders", title: "Create order (server-side pricing)", method: "POST", path: "/api/v1/prisma/orders", description: "Compute unitPrice and totalAmount from product prices.", bodyHint: `{"userId": 1, "items": [{"productId": 2, "quantity": 1}]}` },
      { group: "Reviews", title: "Create review (unique per user/product)", method: "POST", path: "/api/v1/prisma/reviews", description: "Return 409 if duplicate exists.", bodyFields: ["userId", "productId", "rating", "comment?"] },
      { group: "Profiles", title: "Create profile (one-to-one)", method: "POST", path: "/api/v1/prisma/profiles", description: "Reject if profile already exists for userId.", bodyFields: ["userId", "bio", "avatarUrl?"] },
      { group: "Transactions", title: "Transactional order with stock deduction", method: "POST", path: "/api/v1/prisma/orders/tx", description: "Decrement stock then create order within a transaction.", bodyFields: ["userId", "items[0].productId", "items[0].quantity"] },
      { group: "Idempotency", title: "Idempotent order creation", method: "POST", path: "/api/v1/prisma/orders/idempotent", description: "Use Idempotency-Key header to avoid duplicates.", bodyFields: ["userId", "totalAmount", "items[0].productId", "items[0].quantity"], notes: "Send Idempotency-Key header." },
      { group: "Import", title: "Seed import with resume token", method: "POST", path: "/api/v1/prisma/products/import", description: "batchId + skipUntilSlug to resume bulk product imports.", bodyFields: ["batchId", "skipUntilSlug?", "products[0].name", "products[0].slug", "products[0].price?", "products[0].stock?"] },
    ],
  },
  {
    title: "PATCH / PUT",
    tasks: [
      { group: "Users", title: "Update names", method: "PATCH", path: "/api/v1/prisma/users/:id/name", description: "Patch firstName/lastName only.", params: ["id"], bodyFields: ["firstName", "lastName"] },
      { group: "Products", title: "Update product stock", method: "PATCH", path: "/api/v1/prisma/products/:id/stock", description: "Reject negative stock values.", params: ["id"], bodyFields: ["stock"] },
      { group: "Profiles", title: "Update profile bio", method: "PATCH", path: "/api/v1/prisma/profiles/:userId/bio", description: "Patch bio by userId.", params: ["userId"], bodyFields: ["bio"] },
      { group: "Posts", title: "Update post status", method: "PATCH", path: "/api/v1/prisma/posts/:id/status", description: "Draft->Published sets publishedAt; Archived clears it.", params: ["id"], bodyFields: ["status"] },
      { group: "Categories", title: "Replace category parent", method: "PUT", path: "/api/v1/prisma/categories/:id/parent", description: "Prevent cycles; allow null parent.", params: ["id"], bodyFields: ["parentId"] },
      { group: "Products", title: "Replace product tags", method: "PATCH", path: "/api/v1/prisma/products/:id/tags", description: "Set tags via connect list.", params: ["id"], bodyFields: ["tagIds[]"] },
      { group: "Products", title: "Optimistic stock update", method: "PATCH", path: "/api/v1/prisma/products/:id/stock/versioned", description: "Guard with expectedUpdatedAt (version check).", params: ["id"], bodyFields: ["stock", "expectedUpdatedAt"] },
      { group: "Products", title: "Bulk discount", method: "PATCH", path: "/api/v1/prisma/products/discount", description: "Apply percentage discount to category products using updateMany.", bodyFields: ["categoryId", "percent"] },
      { group: "Reviews", title: "Update review + recompute averages", method: "PATCH", path: "/api/v1/prisma/reviews/:id", description: "Transactionally patch review then aggregate stats.", params: ["id"], bodyFields: ["rating?", "comment?"] },
      { group: "Orders", title: "Idempotent order status + history", method: "PATCH", path: "/api/v1/prisma/orders/:id/status/idempotent", description: "Idempotency-Key header; append history entry.", params: ["id"], bodyFields: ["status"], notes: "Send Idempotency-Key header." },
      { group: "Profiles", title: "Merge patch profile", method: "PATCH", path: "/api/v1/prisma/profiles/:userId/merge", description: "JSON merge semantics; null clears optional fields.", params: ["userId"], bodyFields: ["bio?", "avatarUrl?"] },
      { group: "Products", title: "Guarded price update", method: "PATCH", path: "/api/v1/prisma/products/price/guarded", description: "Update price only when stock > 0 and price would decrease.", bodyFields: ["productId", "newPrice"] },
    ],
  },
  {
    title: "DELETE",
    tasks: [
      { group: "Tags", title: "Delete tag", method: "DELETE", path: "/api/v1/prisma/tags/:id", description: "Hard delete; return 404 if missing.", params: ["id"] },
      { group: "Users", title: "Delete user unless admin", method: "DELETE", path: "/api/v1/prisma/users/:id", description: "403 when role is ADMIN.", params: ["id"] },
      { group: "Products", title: "Soft delete product", method: "DELETE", path: "/api/v1/prisma/products/:id", description: "Set isDeleted + deletedAt instead of removal.", params: ["id"] },
      { group: "Products", title: "Restore soft-deleted product", method: "POST", path: "/api/v1/prisma/products/:id/restore", description: "Flip isDeleted false and clear deletedAt.", params: ["id"] },
      { group: "Categories", title: "Delete category only if empty", method: "DELETE", path: "/api/v1/prisma/categories/:id/safe", description: "Block when children or products exist; return counts.", params: ["id"] },
      { group: "Orders", title: "Cancel order (stateful delete)", method: "DELETE", path: "/api/v1/prisma/orders/:id/cancel", description: "Only PENDING/PROCESSING; restore stock; paymentStatus FAILED.", params: ["id"] },
      { group: "Reviews", title: "Delete review + recompute", method: "DELETE", path: "/api/v1/prisma/reviews/:id", description: "Transactionally delete review and recalc averages.", params: ["id"] },
      { group: "Posts", title: "Delete post with tag cleanup", method: "DELETE", path: "/api/v1/prisma/posts/:id", description: "Detach tags then delete post.", params: ["id"] },
      { group: "Products", title: "Idempotent delete with tombstone", method: "DELETE", path: "/api/v1/prisma/products/:id/idempotent", description: "Return tombstone if already deleted.", params: ["id"] },
      { group: "Posts", title: "Multi-tenant safe delete", method: "DELETE", path: "/api/v1/prisma/posts/:id/tenant", description: "Require matching X-Tenant-Id header; otherwise 404.", params: ["id"], notes: "Set X-Tenant-Id header when testing." },
      { group: "Orders", title: "Audited delete", method: "DELETE", path: "/api/v1/prisma/orders/:id/audited", description: "Delete order and create audit log entry within a transaction.", params: ["id"], bodyFields: ["reason?"] },
    ],
  },
];

const PrismaPracticeBoard = () => {
  return (
    <div className="space-y-8 bg-slate-950 px-4 py-8 sm:px-8">
      <header className="space-y-3 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-slate-100 shadow-xl shadow-slate-900/50">
        <h1 className="text-2xl font-bold tracking-tight text-white">Prisma API Practice Board</h1>
        <p className="text-sm text-slate-300">
          Static Tailwind layouts for every Prisma practice task. Wire up your own fetch/axios/React Query logic.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {Object.entries(snippets).map(([label, code]) => (
            <div key={label} className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">{label}</p>
              <pre className="whitespace-pre-wrap rounded-lg bg-slate-900/80 p-3 font-mono text-[11px] text-emerald-100">{code}</pre>
            </div>
          ))}
        </div>
      </header>

      {sections.map((section) => (
        <div key={section.title} className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase text-emerald-200">{section.tasks.length} tasks</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {section.tasks.map((task) => (
              <PrismaTaskCard key={`${task.title}-${task.path}`} task={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrismaPracticeBoard;
export const prismaSections = sections;
