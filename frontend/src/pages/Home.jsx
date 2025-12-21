import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 text-slate-100">
      {/* Animated background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-pink-600/20 blur-[120px]" />
        <div className="absolute bottom-20 right-1/3 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[100px]" />
      </div>

      {/* Header */}
      <header className="relative border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">Practice Playground</span>
            </div>
            <h1 className="mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
              CRUD Operations <span className="block mt-2">Practice Arena</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Master full-stack development with hands-on CRUD operations across MongoDB and PostgreSQL. 
              Learn form handling, API integration, and modern React patterns.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 backdrop-blur-sm">
                <span className="text-2xl">🍃</span>
                <span className="text-slate-300">MongoDB + Mongoose</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 backdrop-blur-sm">
                <span className="text-2xl">🐘</span>
                <span className="text-slate-300">PostgreSQL + Prisma</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 backdrop-blur-sm">
                <span className="text-2xl">⚛️</span>
                <span className="text-slate-300">React + Modern Tools</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8">
        {/* What You'll Learn */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">What You'll Master</h2>
            <p className="mt-3 text-slate-400">Build production-ready skills with these technologies</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="🎯"
              title="Vanilla Fetch API"
              description="Pure JavaScript form handling and HTTP requests without dependencies"
              gradient="from-purple-500/10 to-pink-500/10"
            />
            <FeatureCard
              icon="📡"
              title="Axios Integration"
              description="Streamlined HTTP client with interceptors and error handling"
              gradient="from-pink-500/10 to-fuchsia-500/10"
            />
            <FeatureCard
              icon="🔄"
              title="React Query"
              description="Server state management with caching, synchronization, and real-time updates"
              gradient="from-fuchsia-500/10 to-purple-500/10"
            />
            <FeatureCard
              icon="✅"
              title="React Hook Form"
              description="Performant form validation with minimal re-renders"
              gradient="from-purple-500/10 to-violet-500/10"
            />
            <FeatureCard
              icon="🚀"
              title="Full Stack Integration"
              description="Combine React Query, Axios, and React Hook Form seamlessly"
              gradient="from-violet-500/10 to-pink-500/10"
            />
            <FeatureCard
              icon="🗄️"
              title="Dual Databases"
              description="Compare and contrast Prisma (PostgreSQL) vs Mongoose (MongoDB)"
              gradient="from-pink-500/10 to-purple-500/10"
            />
          </div>
        </section>

        {/* Examples Section */}
        <section className="mb-20">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-3xl">📖</span>
                <h2 className="text-3xl font-bold text-white">Completed Examples</h2>
              </div>
              <p className="text-slate-400">Study these reference implementations before tackling practice problems</p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Prisma Examples */}
            <div className="group relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:shadow-purple-500/20">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl transition-all group-hover:bg-purple-500/20" />
              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-3xl backdrop-blur-sm">
                    🐘
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">PostgreSQL (Prisma)</h3>
                    <p className="text-sm text-purple-300">Type-safe database client</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <ExampleLink to="/examples/vanilla-fetch-prisma" number="01" label="Vanilla JS + Fetch API" accent="purple" />
                  <ExampleLink to="/examples/axios-prisma" number="02" label="Axios HTTP Client" accent="purple" />
                  <ExampleLink to="/examples/react-query-prisma" number="03" label="React Query" accent="purple" />
                  <ExampleLink to="/examples/fullstack-prisma" number="04" label="Full Stack (RQ + Axios + RHF)" accent="purple" />
                </div>
              </div>
            </div>

            {/* Mongoose Examples */}
            <div className="group relative overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-transparent p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-pink-500/40 hover:shadow-pink-500/20">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-pink-500/10 blur-3xl transition-all group-hover:bg-pink-500/20" />
              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/20 text-3xl backdrop-blur-sm">
                    🍃
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">MongoDB (Mongoose)</h3>
                    <p className="text-sm text-pink-300">Flexible schema modeling</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <ExampleLink to="/examples/vanilla-fetch-mongoose" number="01" label="Vanilla JS + Fetch API" accent="pink" />
                  <ExampleLink to="/examples/axios-mongoose" number="02" label="Axios HTTP Client" accent="pink" />
                  <ExampleLink to="/examples/react-query-mongoose" number="03" label="React Query" accent="pink" />
                  <ExampleLink to="/examples/fullstack-mongoose" number="04" label="Full Stack (RQ + Axios + RHF)" accent="pink" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CRUD Operations Section */}
        <section className="mb-20">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                <h2 className="text-3xl font-bold text-white">CRUD Operations</h2>
              </div>
              <p className="text-slate-400">Clean, focused pages for each operation type</p>
            </div>
          </div>

          <div className="space-y-10">
            {/* POST Operations */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 text-3xl shadow-lg shadow-green-500/20">
                  ➕
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Create (POST)</h3>
                  <p className="text-slate-400">Add new resources to your database</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <CrudCard to="/crud/create-user" title="Create User" subtitle="POST /users" icon="👤" variant="green" />
                <CrudCard to="/crud/create-post" title="Create Post" subtitle="POST /posts" icon="📝" variant="green" />
                <CrudCard to="/crud/create-product" title="Create Product" subtitle="POST /products" icon="🛍️" variant="green" />
                <CrudCard to="/crud/create-order" title="Create Order" subtitle="POST /orders" icon="📦" variant="green" />
              </div>
            </div>

            {/* GET Operations */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 text-3xl shadow-lg shadow-blue-500/20">
                  🔍
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Read (GET)</h3>
                  <p className="text-slate-400">Fetch and display data from your database</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                <CrudCard to="/crud/list-users" title="List Users" subtitle="GET /users" icon="👥" variant="blue" />
                <CrudCard to="/crud/get-user" title="Get User" subtitle="GET /users/:id" icon="👤" variant="blue" />
                <CrudCard to="/crud/list-posts" title="List Posts" subtitle="GET /posts" icon="📄" variant="blue" />
                <CrudCard to="/crud/list-products" title="List Products" subtitle="GET /products" icon="🛒" variant="blue" />
                <CrudCard to="/crud/list-orders" title="List Orders" subtitle="GET /orders" icon="📋" variant="blue" />
              </div>
            </div>

            {/* UPDATE Operations */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-600/20 text-3xl shadow-lg shadow-yellow-500/20">
                  ✏️
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Update (PATCH/PUT)</h3>
                  <p className="text-slate-400">Modify existing resources in your database</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <CrudCard to="/crud/update-user" title="Update User" subtitle="PATCH /users/:id" icon="👤" variant="yellow" />
                <CrudCard to="/crud/update-post" title="Update Post" subtitle="PATCH /posts/:id" icon="📝" variant="yellow" />
                <CrudCard to="/crud/update-product" title="Update Product" subtitle="PATCH /products/:id" icon="🛍️" variant="yellow" />
                <CrudCard to="/crud/update-order-status" title="Update Order" subtitle="PATCH /orders/:id" icon="📦" variant="yellow" />
              </div>
            </div>

            {/* DELETE Operations */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-rose-600/20 text-3xl shadow-lg shadow-red-500/20">
                  🗑️
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Delete (DELETE)</h3>
                  <p className="text-slate-400">Remove resources from your database</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <CrudCard to="/crud/delete-user" title="Delete User" subtitle="DELETE /users/:id" icon="👤" variant="red" />
                <CrudCard to="/crud/delete-post" title="Delete Post" subtitle="DELETE /posts/:id" icon="📝" variant="red" />
                <CrudCard to="/crud/delete-product" title="Delete Product" subtitle="DELETE /products/:id" icon="🛍️" variant="red" />
                <CrudCard to="/crud/delete-order" title="Delete Order" subtitle="DELETE /orders/:id" icon="📦" variant="red" />
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-purple-900/30 p-10 shadow-2xl backdrop-blur-sm">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-[100px]" />
          <div className="relative">
            <div className="mb-8 flex items-center gap-3">
              <span className="text-4xl">🚀</span>
              <h2 className="text-3xl font-bold text-white">Getting Started</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-purple-300">Quick Setup</h3>
                <ol className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-sm font-bold text-purple-300">1</span>
                    <span>Start backend server at <code className="rounded bg-black/40 px-2 py-1 text-pink-300">localhost:5000</code></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-sm font-bold text-purple-300">2</span>
                    <span>Review completed examples for reference implementations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-sm font-bold text-purple-300">3</span>
                    <span>Tackle practice problems and implement the CRUD logic</span>
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold text-pink-300">Learning Tips</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-pink-400">→</span>
                    <span>Compare Prisma vs Mongoose approaches side-by-side</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pink-400">→</span>
                    <span>Practice all HTTP methods: GET • POST • PUT • DELETE</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pink-400">→</span>
                    <span>Use browser DevTools to monitor network requests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description, gradient }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${gradient} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/20 hover:shadow-xl`}>
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{description}</p>
      <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-white/5 blur-2xl transition-all group-hover:bg-white/10" />
    </div>
  )
}

function ExampleLink({ to, number, label, accent = 'purple' }) {
  const colors = {
    purple: 'border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-400/50 text-purple-100',
    pink: 'border-pink-500/30 bg-pink-500/5 hover:bg-pink-500/10 hover:border-pink-400/50 text-pink-100'
  }

  return (
    <Link
      to={to}
      className={`group flex items-center gap-4 rounded-xl border ${colors[accent]} px-5 py-3.5 backdrop-blur-sm transition-all duration-200 hover:translate-x-1 hover:shadow-lg`}
    >
      <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${accent === 'purple' ? 'bg-purple-500/20 text-purple-300' : 'bg-pink-500/20 text-pink-300'} font-bold text-sm`}>
        {number}
      </span>
      <span className="flex-1 font-medium">{label}</span>
      <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}

function PracticeCard({ to, title, subtitle, variant = 'purple' }) {
  const colors = {
    purple: 'border-purple-500/30 from-purple-500/10 to-purple-600/5 hover:border-purple-400/50 hover:shadow-purple-500/20',
    pink: 'border-pink-500/30 from-pink-500/10 to-pink-600/5 hover:border-pink-400/50 hover:shadow-pink-500/20'
  }

  const badgeColors = {
    purple: 'bg-purple-500/20 text-purple-300',
    pink: 'bg-pink-500/20 text-pink-300'
  }

  return (
    <Link
      to={to}
      className={`group relative overflow-hidden rounded-2xl border ${colors[variant]} bg-gradient-to-br backdrop-blur-sm p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/5 blur-2xl transition-all group-hover:bg-white/10" />
      <div className="relative">
        <div className={`mb-3 inline-flex items-center gap-1.5 rounded-full ${badgeColors[variant]} px-3 py-1 text-xs font-semibold`}>
          {subtitle}
        </div>
        <h4 className="text-lg font-bold text-white">{title}</h4>
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-400 transition-colors group-hover:text-white">
          <span>Start Challenge</span>
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

function CrudCard({ to, title, subtitle, icon, variant = 'green' }) {
  const colors = {
    green: 'border-green-500/30 from-green-500/10 to-emerald-600/5 hover:border-green-400/50 hover:shadow-green-500/20',
    blue: 'border-blue-500/30 from-blue-500/10 to-cyan-600/5 hover:border-blue-400/50 hover:shadow-blue-500/20',
    yellow: 'border-yellow-500/30 from-yellow-500/10 to-orange-600/5 hover:border-yellow-400/50 hover:shadow-yellow-500/20',
    red: 'border-red-500/30 from-red-500/10 to-rose-600/5 hover:border-red-400/50 hover:shadow-red-500/20'
  }

  return (
    <Link
      to={to}
      className={`group relative overflow-hidden rounded-2xl border ${colors[variant]} bg-gradient-to-br backdrop-blur-sm p-5 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/5 blur-2xl transition-all group-hover:bg-white/10" />
      <div className="relative">
        <div className="mb-3 text-3xl">{icon}</div>
        <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
        <p className="text-xs text-slate-400 font-mono mb-3">{subtitle}</p>
        <div className="flex items-center gap-2 text-xs text-slate-400 transition-colors group-hover:text-white">
          <span>Open Form</span>
          <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

