const MenuLinks = [
  {
      id:1,
      name: "Home",
      link: "./#home",
  },
  {
      id:2,
      name: "About",
      link: "./#about",
  },
  {
      id:3,
      name: "Services",
      link: "./#services",
  },
]


const Navitem: React.FC = () => {
 return(
  <>
  <nav>
      <div className="container py-3 md:py-2">
          <div className="flex justify-between items-center">
              {/* logo section */}
              <div>
                  <a href="#" className="flex items-center gap-3">
                  <img src="./images/health logo.png" alt="logo" className="w-8" />
                  <span className="text-2xl sm:text-3xl font-semibold">KeepSafe</span>
               </a>
              </div>
              {/* navlinks section */}
              <div className="hidden md:block">
                  <ul className="flex items-center gap-8">
                      {
                          MenuLinks.map(({id, name, link}) =>{
                              return(
                                  <li key={id}
                                  className="cursor-pointer py-4">
                                      <a href="#" className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-all duration-300 ">{name}

                                      </a>
                                  </li>
                              )
                          })
                      }
                      <button className="btn-primary">Sign In</button>
                  </ul>
              </div>
          </div>
      </div>
  </nav>
  </>
 )
}

export default Navitem;
