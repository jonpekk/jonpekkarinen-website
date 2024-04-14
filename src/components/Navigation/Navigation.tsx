import Link from "../Link/Link"

function Navigation() {
  return (
    <>
      <nav
        className="md:flex md:justify-between md:px-20 md:py-6 border border-b-stone-500"
      >
        <div
          className="px-3 py-6 md:px-0 md:py-0 flex justify-between peer relative"
        >
          <div>
            <a href='/' className="h4-style">Jon Pekkarinen</a>
          </div>
          <div className="group md:hidden">
            <input type="checkbox" id="main-nav-toggle" className="hidden" />
            <label htmlFor="main-nav-toggle">
              <span className="sr-only">Toggle main menu</span>
              <svg className="block group-has-[:checked]:hidden w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden group-has-[:checked]:block w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </label>
          </div>
        </div>
        <ul
          className="absolute left-0 right-0 hidden peer-has-[:checked]:flex border border-t-stone-500 md:border-t-0 shadow-b-2xl md:shadow-none rounded-b md:rounded-0 flex-col gap-4 px-4 py-6 md:py-0 bg-stone-200 md:flex md:flex-row md:justify-evenly md:gap-10 md:peer-has-[:checked]:flex md:relative"
        >
          <li><Link href="#">Work</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="/about">About Me</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation