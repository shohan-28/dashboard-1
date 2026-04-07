import { NavLink, Outlet } from "react-router"
import Home from './components/Home';
import Member from './components/Member';
import Edit from './components/Edit';
import Search from './components/Search';


function App() {
  return (
    <>
      <section>
        <div>
          <div>

            <div className="drawer lg:drawer-open">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-gradient-to-r from-[#9d6dce] via-[#f95eac] to-[#f76e6e]">
                  <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    {/* Sidebar toggle icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                  </label>
                  <div className="px-4">Navbar Title</div>
                </nav>
                {/* Page content here */}
                <div className="min-h-screen bg-slate-100 ">
                  <div className="flex justify-start py-2">
                    <Outlet></Outlet>
                  </div>
                </div>
              </div>

              <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-[#b089ca] is-drawer-close:w-14 is-drawer-open:w-64">
                  {/* Sidebar content here */}
                  <ul className="menu w-full grow">
                    {/* List item */}
                    <li>
                      <NavLink
                        to="/Home"
                        className={({ isActive }) =>
                          `is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-2 px-2 py-1 rounded ${isActive ? "bg-white text-black font-semibold" : "text-white"
                          }`
                        }
                        data-tip="Dashboard"
                      >
                        {/* Home icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                        <span className="is-drawer-close:hidden">Dashboard</span>
                      </NavLink>
                    </li>

                    {/* List item */}
                    <li>
                      <NavLink
                        to="/Member"
                        className={({ isActive }) =>
                          `is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-2 px-2 py-1 rounded ${isActive ? "bg-white text-black font-semibold" : "text-white"
                          }`
                        }
                        data-tip="Member"
                      >
                        {/* Settings icon */}
                        <img
                          src="https://www.svgrepo.com/show/374474/team-member.svg"
                          alt="members icon"
                          className="size-4 inline-block"
                        />
                        <span className="is-drawer-close:hidden">Members</span>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/Edit"
                        className={({ isActive }) =>
                          `is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-2 px-2 py-1 rounded ${isActive ? "bg-white text-black font-semibold" : "text-white"
                          }`
                        }
                        data-tip="Edit"
                      >
                        {/* Settings icon */}
                        <img
                          src="https://www.svgrepo.com/show/505641/edit-3.svg"
                          alt="members icon"
                          className="size-4 inline-block"
                        />
                        <span className="is-drawer-close:hidden">Edit</span>
                      </NavLink>
                    </li>


                    <li>
                      <NavLink
                        to="/Search"
                        className={({ isActive }) =>
                          `is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-2 px-2 py-1 rounded ${isActive ? "bg-white text-black font-semibold" : "text-white"
                          }`
                        }
                        data-tip="Search"
                      >
                        <img
                          src="https://www.svgrepo.com/show/510179/search-file.svg"
                          alt="search icon"
                          className="size-4"
                        />
                        <span className="is-drawer-close:hidden">Search</span>
                      </NavLink>
                    </li>



                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default App
