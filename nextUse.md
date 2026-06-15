<!-- SKILLS SECTION -->
 <div className="grid items-start content-start grid-cols-1 bg-[#0D1520] p-4 border-[1px] border-cyan-800 border-opacity-15 rounded-lg gap-y-3">
        {/* MERN STACK */}
        <div className="flex gap-3 items-center">
          <button
            type="button"
            className="bg-gray-900 border-[1px] border-slate-800 text-xl text-purple-400 w-8 h-8 text-center inline-block rounded-lg p-2"
          >
            <GoStack size="16" className="mx-auto" />
          </button>
          <div>
            <h2 className="text-gray-200 text-sm font-bold mb-[-2px] tracking-wide">
              MERN Stack
            </h2>
            <p className="text-gray-500 text-[10px] leading-4 tracking-wide mt-[2px]">
              Full stack web development
            </p>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="grid">
          {/* React.js */}
          <p className="flex justify-between text-xs text-purple-100 text-opacity-80 mb-1">
            <span>React.js</span>
            <span>90%</span>
          </p>

          <div className="h-1 overflow-hidden rounded-full bg-slate-800 mb-3">
            <div className="animate-progress-reactjs h-full w-[90%] bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          </div>

          {/* Node.js + Express.js */}
          <p className="flex justify-between text-xs text-purple-100 text-opacity-80 mb-1">
            <span>Node.js + Express.js</span>
            <span>80%</span>
          </p>
          <div className="h-1 overflow-hidden rounded-full bg-slate-800 mb-3">
            <div className="animate-progress-expressjs h-full w-[80%] bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          </div>

          {/* MongoDB */}
          <p className="flex justify-between text-xs text-purple-100 text-opacity-80 mb-1">
            <span>MongoDB</span>
            <span>88%</span>
          </p>
          <div className="h-1 overflow-hidden rounded-full bg-slate-800">
            <div className="animate-progress-mongodb h-full w-[88%] bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          </div>
        </div>
      </div>

      {/* FRONTEND SECTION */}
      <div className="grid items-start content-start grid-cols-1 bg-[#0D1520] p-4 border-[1px] border-cyan-800 border-opacity-15 rounded-lg gap-y-3">
        <div className="flex gap-3 items-center">
          <button
            type="button"
            className="bg-gray-900 border-[1px] border-slate-800 text-xl text-purple-400 w-8 h-8 text-center inline-block rounded-lg p-2"
          >
            <GoStack size="16" className="mx-auto" />
          </button>
          <div>
            <h2 className="text-gray-200 text-sm font-bold mb-[-2px] tracking-wide">
              Frontend
            </h2>
            <p className="text-gray-500 text-[10px] leading-4 tracking-wide mt-[2px]">
              UI & styling tools
            </p>
          </div>
        </div>

        {/* FRONTEND SECTION BUTTONS */}
        <div className="flex flex-wrap gap-2 items-start content-start">
          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-md border-[1px] border-purple-100 border-opacity-20 text-gray-300"
          >
            Next.js
          </button>

          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-md border-[1px] border-purple-100 border-opacity-20 text-gray-300"
          >
            TypeScript
          </button>

          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-md border-[1px] border-purple-100 border-opacity-20 text-gray-300"
          >
            Tailwind CSS
          </button>

          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-md border-[1px] border-purple-100 border-opacity-20 text-gray-300"
          >
            Redux
          </button>

          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-md border-[1px] border-purple-100 border-opacity-20 text-gray-300"
          >
            Framer Motion
          </button>

          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-md border-[1px] border-purple-100 border-opacity-20 text-gray-300"
          >
            REST API
          </button>
        </div>
      </div>

      {/* EMAIL DEVELOPMENT SECTION */}
      <div className="grid items-start content-start grid-cols-1 bg-[#0D1520] p-4 border-[1px] border-cyan-800 border-opacity-15 rounded-lg gap-y-3">
        <div className="flex gap-3 items-center">
          <button
            type="button"
            className="bg-gray-900 border-[1px] border-slate-800 text-xl text-purple-400 w-8 h-8 text-center inline-block rounded-lg p-2"
          >
            <GoStack size="16" className="mx-auto" />
          </button>
          <div>
            <h2 className="text-gray-200 text-sm font-bold mb-[-2px] tracking-wide">
              Email Development
            </h2>
            <p className="text-gray-500 text-[10px] leading-4 tracking-wide mt-[2px]">
              Pixel-perfect across all clients
            </p>
          </div>
        </div>

        {/* EMAIL BUTTON SECTION */}
        <div className="flex flex-wrap gap-2 items-start content-start">
          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-md border-[1px] border-purple-100 border-opacity-20 text-gray-300"
          >
            MJML
          </button>

          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-md border-[1px] border-purple-100 border-opacity-20 text-gray-300"
          >
            HTML Email
          </button>

          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-md border-[1px] border-purple-100 border-opacity-20 text-gray-300"
          >
            Mailchimp
          </button>

          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-md border-[1px] border-purple-100 border-opacity-20 text-gray-300"
          >
            Klaviyo
          </button>

          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-md border-[1px] border-purple-100 border-opacity-20 text-gray-300"
          >
            Litmus
          </button>

          <button
            type="button"
            className="text-xs tracking-wider py-1 px-3 rounded-md border-[1px] border-purple-100 border-opacity-20 text-gray-300"
          >
            Responsive
          </button>
        </div>
        <div className="grid">
          {/* React.js */}
          <p className="flex justify-between text-xs text-purple-100 text-opacity-80 mb-1 tracking-wide">
            <span>Email compatibility</span>
            <span>98%</span>
          </p>

          <div className="h-1 overflow-hidden rounded-full bg-slate-800">
            <div className="animate-progress-email reactjs h-full w-[98%] bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          </div>
        </div>
      </div>


<!-- Image masking -->
## CSS
.profile-image {
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0) 100%
  );

  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0) 100%
  );
}

HTML:
<div class="relative">
  <Image src="https://img.magnific.com/free-photo/waterfall-chae-son-national-park-lampang-thailand_554837-639.jpg?semt=ais_hybrid&w=740&q=80" alt="Profile" class="profile-image w-[400px] h-[400px]"  />
</div>
