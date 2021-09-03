const Navbar = () => (
  <nav class="flex items-center justify-between flex-wrap p-6 border-b-2">
    <div class="flex items-center flex-shrink-0 text-gray-800 mr-6">
      <span class="text-4xl font-bold tracking-tight">Memories</span>
    </div>
    <div class="mt-2 w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Docs
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Examples
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Blog
        </a>
      </div>
      <div>
        <a
          href="#"
          class="inline-block text-sm text-purple-600 px-4 py-2 leading-none border rounded border-purple-600 hover:border-transparent hover:text-white hover:bg-purple-600 mt-4 lg:mt-0"
        >
          Sign-in
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
