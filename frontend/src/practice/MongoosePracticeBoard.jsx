import React from "react";

const snippets = {
  fetch: `// Plain fetch example (plug into a handler later)
fetch('/api/v1/tags')
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);`,
  axios: `// Axios example
import axios from 'axios';

axios.get('/api/v1/products/filter', { params: { minPrice: 50, maxPrice: 200 } })
  .then(res => console.log(res.data))
  .catch(console.error);`,
  reactQuery: `// React Query + Axios (example hook usage only)
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useTopSelling = () =>
  useQuery({
    queryKey: ['top-selling'],
    queryFn: () => axios.get('/api/v1/products/stats/top-selling').then(r => r.data),
  });
// Call useTopSelling() inside a component when you wire functionality.`
};

export const MongooseTaskCard = ({ task }) => (
  <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-100 shadow-lg shadow-slate-900/40">
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-300/80">{task.group}</p>
        <h3 className="text-lg font-semibold text-white">{task.title}</h3>
        <p className="text-sm text-slate-300">{task.description}</p>
      </div>
      <div className="flex flex-col items-end gap-2 text-right">
        <span className="rounded-full bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase text-amber-200">{task.method}</span>
        <span className="font-mono text-xs text-amber-100/80">{task.path}</span>
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
          <button type="button" className="rounded-lg bg-amber-500/20 px-4 py-2 text-sm font-semibold text-amber-100 ring-1 ring-amber-400/40">
            Submit (wire later)
          </button>
        </div>
      </form>
    ) : null}

    {task.notes ? (
      <p className="mt-3 text-[13px] text-amber-200/90">{task.notes}</p>
    ) : null}
  </section>
);

const sections = [
  {
    title: "GET & Aggregations",
    tasks: [
      {
        group: "Get",
        title: "All tags",
        method: "GET",
        path: "/api/v1/tags",
        description: "Fetch every tag (no filters).",
      },
      {
        group: "Get",
        title: "Tag by id",
        method: "GET",
        path: "/api/v1/tags/:id",
        description: "Route param driven lookup for a single tag.",
        params: ["id"],
      },
      {
        group: "Get",
        title: "Users by role",
        method: "GET",
        path: "/api/v1/users",
        description: "Filter users by role via query string.",
        query: ["role", "page?", "limit?"],
      },
      {
        group: "Get",
        title: "Active users (paginated)",
        method: "GET",
        path: "/api/v1/users",
        description: "isActive only, sorted by createdAt desc with pagination.",
        query: ["page", "limit"],
      },
      {
        group: "Get",
        title: "Products by price range",
        method: "GET",
        path: "/api/v1/products/filter",
        description: "Filter active products within min/max price.",
        query: ["minPrice", "maxPrice"],
      },
      {
        group: "Get",
        title: "Posts by category slug",
        method: "GET",
        path: "/api/v1/posts/category/:slug",
        description: "Published posts in a category identified by slug.",
        params: ["slug"],
      },
      {
        group: "Get",
        title: "Order details (populated)",
        method: "GET",
        path: "/api/v1/orders/:id",
        description: "User + items.product populated response for a single order.",
        params: ["id"],
      },
      {
        group: "Get",
        title: "Posts by author",
        method: "GET",
        path: "/api/v1/posts/author/:authorId",
        description: "Published posts for one author, sorted by publishedAt desc.",
        params: ["authorId"],
      },
      {
        group: "Aggregation",
        title: "User spending stats",
        method: "GET",
        path: "/api/v1/users/stats/spending",
        description: "Total spent and order count per user (exclude cancelled).",
      },
      {
        group: "Aggregation",
        title: "Top selling products",
        method: "GET",
        path: "/api/v1/products/stats/top-selling",
        description: "Unwind order items to rank by quantity and revenue.",
      },
      {
        group: "Aggregation",
        title: "Monthly sales report",
        method: "GET",
        path: "/api/v1/orders/stats/monthly",
        description: "Current-year revenue and order counts grouped by month.",
        query: ["year?"],
      },
      {
        group: "Aggregation",
        title: "Category product counts",
        method: "GET",
        path: "/api/v1/categories/stats/products",
        description: "Root categories with product counts, sorted by volume.",
      },
      {
        group: "Aggregation",
        title: "Top rated products",
        method: "GET",
        path: "/api/v1/products/stats/ratings",
        description: "Average rating and review counts, limited to top 10.",
      },
      {
        group: "Search",
        title: "Full-text product search",
        method: "GET",
        path: "/api/v1/products/search",
        description: "Text search across name/description/tags with score filter.",
        query: ["q", "minScore?"],
      },
      {
        group: "Geo",
        title: "Nearby stores",
        method: "GET",
        path: "/api/v1/stores/nearby",
        description: "Find stores within a radius of provided lat/lng.",
        query: ["lat", "lng", "radius (m)"],
      },
      {
        group: "Debug",
        title: "Explain active users query",
        method: "GET",
        path: "/api/v1/users/debug/explain",
        description: "Return executionStats to inspect index usage.",
        query: ["role?"]
      }
    ],
  },
  {
    title: "POST / Create",
    tasks: [
      {
        group: "Create",
        title: "Create tag",
        method: "POST",
        path: "/api/v1/tags",
        description: "Basic tag creation with name and slug.",
        bodyFields: ["name", "slug"],
      },
      {
        group: "Create",
        title: "Create user",
        method: "POST",
        path: "/api/v1/users",
        description: "Username, email, password, role defaults to user.",
        bodyFields: ["username", "email", "password"],
      },
      {
        group: "Create",
        title: "Create category (slug generation)",
        method: "POST",
        path: "/api/v1/categories",
        description: "Slug auto-kebab if missing; prevent duplicates.",
        bodyFields: ["name", "slug?", "description?", "parent?"],
      },
      {
        group: "Create",
        title: "Create product with relations",
        method: "POST",
        path: "/api/v1/products",
        description: "Validate category and tags exist, lowercase slug.",
        bodyFields: ["name", "slug?", "category", "tags[]", "price", "stock"],
      },
      {
        group: "Create",
        title: "Create post (published timestamp)",
        method: "POST",
        path: "/api/v1/posts",
        description: "If status is published, set publishedAt; validate author.",
        bodyFields: ["title", "slug?", "content", "status", "author"],
      },
      {
        group: "Bulk",
        title: "Bulk create tags",
        method: "POST",
        path: "/api/v1/tags/bulk",
        description: "Insert many tags, skip duplicates, return counts.",
        bodyFields: ["tags[0].name", "tags[0].slug"],
      },
      {
        group: "Orders",
        title: "Create order (server-side total)",
        method: "POST",
        path: "/api/v1/orders",
        description: "Compute item prices and totalAmount on the server.",
        bodyFields: ["userId", "items[0].product", "items[0].quantity"],
      },
      {
        group: "Reviews",
        title: "Create review (one per product/user)",
        method: "POST",
        path: "/api/v1/reviews",
        description: "Enforce uniqueness on user+product combination.",
        bodyFields: ["product", "user", "rating", "comment?"],
      },
      {
        group: "Transactions",
        title: "Transactional order creation",
        method: "POST",
        path: "/api/v1/orders/transactional",
        description: "Deduct stock, create order, mark paymentStatus pending in a transaction.",
        bodyFields: ["userId", "items[0].product", "items[0].quantity"],
      },
      {
        group: "Idempotency",
        title: "Idempotent order creation",
        method: "POST",
        path: "/api/v1/orders/idempotent",
        description: "Use Idempotency-Key header; return existing order on repeat.",
        bodyFields: ["userId", "items[0].product", "items[0].quantity"],
        notes: "Set Idempotency-Key in headers when you wire the request.",
      },
      {
        group: "Hooks",
        title: "Product with pre-save hooks",
        method: "POST",
        path: "/api/v1/products/hooked",
        description: "Auto-generate slug; guard images length <= 5.",
        bodyFields: ["name", "slug?", "images[]"],
      },
      {
        group: "Transactions",
        title: "Category + first product",
        method: "POST",
        path: "/api/v1/categories/with-product",
        description: "Transactional create category then first product; rollback on failure.",
        bodyFields: ["category.name", "category.slug?", "product.name", "product.price?"],
      },
      {
        group: "Moderation",
        title: "Moderated post create",
        method: "POST",
        path: "/api/v1/posts/moderated",
        description: "Reject content with banned phrases; log moderation.",
        bodyFields: ["title", "content", "author", "status"],
      },
      {
        group: "Aggregates",
        title: "Review + update product aggregates",
        method: "POST",
        path: "/api/v1/reviews/with-aggregate",
        description: "Create review then recompute product averages in a transaction.",
        bodyFields: ["product", "user", "rating", "comment?"],
      },
      {
        group: "Bulk",
        title: "Idempotent product import",
        method: "POST",
        path: "/api/v1/products/import",
        description: "Use batchId and optional skipUntilSlug to resume bulk imports.",
        bodyFields: ["batchId", "skipUntilSlug?", "products[0].name", "products[0].slug"],
      },
      {
        group: "Security",
        title: "Secure user with audit",
        method: "POST",
        path: "/api/v1/users/secure",
        description: "Hash password and store createdIp/userAgent audit fields.",
        bodyFields: ["username", "email", "password"],
      }
    ],
  },
  {
    title: "PUT/PATCH / Update",
    tasks: [
      {
        group: "Users",
        title: "Replace user profile",
        method: "PUT",
        path: "/api/v1/users/:id",
        description: "Replace profile fields (firstName, lastName, addresses).",
        params: ["id"],
        bodyFields: ["firstName", "lastName", "addresses[]"],
      },
      {
        group: "Users",
        title: "Patch user activation",
        method: "PATCH",
        path: "/api/v1/users/:id/activation",
        description: "Toggle isActive with boolean guard.",
        params: ["id"],
        bodyFields: ["isActive"],
      },
      {
        group: "Products",
        title: "Patch product price (floor)",
        method: "PATCH",
        path: "/api/v1/products/:id/price",
        description: "Ensure price >= 0 and not below cost.",
        params: ["id"],
        bodyFields: ["price", "cost?"],
      },
      {
        group: "Posts",
        title: "Update post status",
        method: "PATCH",
        path: "/api/v1/posts/:id/status",
        description: "Draft->Published sets publishedAt; Archived clears it.",
        params: ["id"],
        bodyFields: ["status"],
      },
      {
        group: "Categories",
        title: "Replace category parent",
        method: "PUT",
        path: "/api/v1/categories/:id/parent",
        description: "Prevent cycles; allow null parent.",
        params: ["id"],
        bodyFields: ["parent"],
      },
      {
        group: "Users",
        title: "Patch address by index",
        method: "PATCH",
        path: "/api/v1/users/:id/addresses/:index",
        description: "Partial update for a specific address slot.",
        params: ["id", "index"],
        bodyFields: ["street?", "city?", "state?", "zipCode?", "country?"],
      },
      {
        group: "Products",
        title: "Add/remove product images",
        method: "PATCH",
        path: "/api/v1/products/:id/images",
        description: "Atomic add/remove arrays; enforce max 5.",
        params: ["id"],
        bodyHint: `{"add": ["a.jpg"], "remove": ["b.jpg"]}`,
      },
      {
        group: "Orders",
        title: "Patch order status (state machine)",
        method: "PATCH",
        path: "/api/v1/orders/:id/status",
        description: "pending -> processing -> shipped -> delivered or pending -> cancelled.",
        params: ["id"],
        bodyFields: ["status"],
      },
      {
        group: "Products",
        title: "Optimistic stock patch",
        method: "PATCH",
        path: "/api/v1/products/:id/stock",
        description: "Use currentVersion (__v) to guard concurrent updates.",
        params: ["id"],
        bodyFields: ["stock", "currentVersion"],
      },
      {
        group: "Products",
        title: "Bulk discount by category",
        method: "PATCH",
        path: "/api/v1/products/discount",
        description: "Apply percentage discount to category products using updateMany.",
        bodyFields: ["categoryId", "percent"],
      },
      {
        group: "Reviews",
        title: "Patch review + recompute aggregates",
        method: "PATCH",
        path: "/api/v1/reviews/:id",
        description: "Transactionally update review and product averages.",
        params: ["id"],
        bodyFields: ["rating?", "comment?"],
      },
      {
        group: "Orders",
        title: "Idempotent status patch",
        method: "PATCH",
        path: "/api/v1/orders/:id/status/idempotent",
        description: "Guard duplicate transitions using Idempotency-Key header.",
        params: ["id"],
        bodyFields: ["status"],
      },
      {
        group: "Posts",
        title: "JSON merge patch",
        method: "PATCH",
        path: "/api/v1/posts/:id/merge",
        description: "Merge semantics; null removes optional fields like featuredImage.",
        params: ["id"],
      },
      {
        group: "Tags",
        title: "Upsert tag by slug",
        method: "PUT",
        path: "/api/v1/tags/:slug",
        description: "Replace name or create if missing; return created flag.",
        params: ["slug"],
        bodyFields: ["name"],
      },
      {
        group: "Posts",
        title: "Protected patch",
        method: "PATCH",
        path: "/api/v1/posts/:id/protected",
        description: "Allow only author or admin to update; expect 403 otherwise.",
        params: ["id"],
        bodyFields: ["title?", "content?", "status?"],
      },
    ],
  },
  {
    title: "DELETE / Soft / Cascade",
    tasks: [
      {
        group: "Tags",
        title: "Hard delete tag",
        method: "DELETE",
        path: "/api/v1/tags/:id",
        description: "Return 404 if tag missing.",
        params: ["id"],
      },
      {
        group: "Users",
        title: "Delete user (no admins)",
        method: "DELETE",
        path: "/api/v1/users/:id",
        description: "403 if role is admin.",
        params: ["id"],
      },
      {
        group: "Products",
        title: "Soft delete product",
        method: "DELETE",
        path: "/api/v1/products/:id",
        description: "Set isActive=false and add deletedAt/deletedBy.",
        params: ["id"],
      },
      {
        group: "Products",
        title: "Restore soft-deleted product",
        method: "POST",
        path: "/api/v1/products/:id/restore",
        description: "Reverse soft delete flags.",
        params: ["id"],
      },
      {
        group: "Categories",
        title: "Delete category safely",
        method: "DELETE",
        path: "/api/v1/categories/:id",
        description: "Block deletion if children or products exist.",
        params: ["id"],
      },
      {
        group: "Posts",
        title: "Delete post + detach tags",
        method: "DELETE",
        path: "/api/v1/posts/:id",
        description: "Remove post, confirm tags untouched.",
        params: ["id"],
      },
      {
        group: "Users",
        title: "Delete user cascade",
        method: "DELETE",
        path: "/api/v1/users/:id/cascade",
        description: "Transaction: delete user, delete reviews, optionally anonymize posts.",
        params: ["id"],
      },
      {
        group: "Orders",
        title: "Cancel order with stock restore",
        method: "DELETE",
        path: "/api/v1/orders/:id/cancel",
        description: "Only pending/processing; restore stock; set paymentStatus failed.",
        params: ["id"],
      },
      {
        group: "Reviews",
        title: "Delete review + recompute",
        method: "DELETE",
        path: "/api/v1/reviews/:id",
        description: "Transactionally remove review and recompute product averages.",
        params: ["id"],
      },
      {
        group: "Posts",
        title: "Schedule post deletion (TTL)",
        method: "DELETE",
        path: "/api/v1/posts/:id/schedule",
        description: "Set expiresAt for TTL-based removal; suggest TTL index.",
        params: ["id"],
        bodyFields: ["expiresAt"],
      },
      {
        group: "Products",
        title: "Idempotent delete with tombstone",
        method: "DELETE",
        path: "/api/v1/products/:id/idempotent",
        description: "Return tombstone if already deleted.",
        params: ["id"],
      },
      {
        group: "Posts",
        title: "Multi-tenant safe delete",
        method: "DELETE",
        path: "/api/v1/posts/:id/tenant",
        description: "Scoped by tenant header; return 404 on mismatch.",
        params: ["id"],
        notes: "Send X-Tenant-Id header when wiring the request.",
      },
      {
        group: "Categories",
        title: "Delete category with reparenting",
        method: "DELETE",
        path: "/api/v1/categories/:id/reparent",
        description: "Transactionally reparent children to parent/null then delete.",
        params: ["id"],
      },
      {
        group: "Orders",
        title: "Delete order with audit log",
        method: "DELETE",
        path: "/api/v1/orders/:id/audited",
        description: "Transactionally delete order and create audit entry.",
        params: ["id"],
      },
    ],
  },
];

const MongoosePracticeBoard = () => {
  return (
    <div className="space-y-8 bg-slate-950 px-4 py-8 sm:px-8">
      <header className="space-y-3 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-slate-100 shadow-xl shadow-slate-900/50">
        <h1 className="text-2xl font-bold tracking-tight text-white">Mongoose API Practice Board</h1>
        <p className="text-sm text-slate-300">
          Static Tailwind-only layouts for every practice task. Wire up fetch, axios, or React Query yourself using the snippets below.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {Object.entries(snippets).map(([label, code]) => (
            <div key={label} className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">{label}</p>
              <pre className="whitespace-pre-wrap rounded-lg bg-slate-900/80 p-3 font-mono text-[11px] text-amber-100">{code}</pre>
            </div>
          ))}
        </div>
      </header>

      {sections.map((section) => (
        <div key={section.title} className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase text-amber-200">{section.tasks.length} tasks</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {section.tasks.map((task) => (
              <MongooseTaskCard key={`${task.title}-${task.path}`} task={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MongoosePracticeBoard;
export const mongooseSections = sections;
