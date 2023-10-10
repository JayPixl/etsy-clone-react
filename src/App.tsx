import { useState, useEffect } from 'react'

import etsyLogo from './images/Etsy-Logo.png'
import footerImg from './images/layered-peaks-haikei.svg'
import footerImg2 from './images/layered-peaks-haikei2.svg'
import footerImg3 from './images/layered-peaks-haikei3.svg'
import facebookIcon from './images/facebook-svgrepo-com.svg'
import instagramIcon from './images/instagram-logo-bold-svgrepo-com.svg'
import pinterestIcon from './images/pinterest-180-svgrepo-com.svg'
import twitterIcon from './images/twitter-154-svgrepo-com.svg'
import youtubeIcon from './images/youtube-168-svgrepo-com.svg'
import usFlag from './images/united-states-of-america-united-states-svgrepo-com.svg'

import LinkAccordion from './components/link-accordion'


export default function App() {

  const api_base = process.env.NODE_ENV === "production" ? "/api" : "http://127.0.0.1:3001/api"

  const [inputs, setInputs] = useState({ search: "" })
  const [navOpen, setNavOpen] = useState(false)
  const [loading, setLoading] = useState<'loading' | 'loaded' | 'error'>("loading")

  const loadData = (data: any) => {
    setCategories(() => data.results.categories)
    setPopularListings(() => data.results.popularListings)
    setOtherListings(() => data.results.otherListings)

    setLoading(() => 'loaded')
  }

  const loadError = () => {
    if (window.confirm("There was an error while fetching the data for the page... Would you like to reload?"))

      setLoading('error')
  }

  useEffect(() => {
    fetch(`${api_base}/data`)
      .then(res => res.json())
      .then((data: any) => data?.results ? loadData(data) : loadError())
      .catch(() => loadError())
  }, [])

  const [categories, setCategories] = useState([
    {
      imageUrl: "https://i.etsystatic.com/6841042/c/1024/1024/0/0/il/e7597d/3912828889/il_300x300.3912828889_7al8.jpg",
      label: "Mother's Day Gifts"
    },
    {
      imageUrl: "https://i.etsystatic.com/19750099/c/672/672/0/0/il/073cf2/4163911823/il_300x300.4163911823_3qu6.jpg",
      label: "Personalized Jewelry"
    },
    {
      imageUrl: "https://i.etsystatic.com/6734380/r/il/4ddd33/3165103255/il_300x300.3165103255_onhs.jpg",
      label: "Home Decor & Gifts"
    },
    {
      imageUrl: "https://i.etsystatic.com/6515718/r/il/12c2bd/3990269772/il_300x300.3990269772_ikyr.jpg",
      label: "Outdoor Decor"
    },
    {
      imageUrl: "https://i.etsystatic.com/6739878/c/2850/2850/75/0/il/dc83c9/4711488168/il_300x300.4711488168_4kh4.jpg",
      label: "Wedding Decor & Gifts"
    },
    {
      imageUrl: "https://i.etsystatic.com/13869225/c/1850/1850/434/173/il/25a89d/4236152087/il_300x300.4236152087_1llm.jpg",
      label: "Gifts on Sale"
    }
  ])

  const [popularListings, setPopularListings] = useState([
    {
      imageUrl: "https://i.etsystatic.com/34269816/r/il/f9cc97/4040914287/il_340x270.4040914287_lzjb.jpg",
      label: "Personalized Cutting Board Wedding Gift, Customize you...",
      stars: "★★★★★",
      reviews: "2,842",
      price: "36.95",
      oldPrice: "61.59",
      freeShipping: true
    },
    {
      imageUrl: "https://i.etsystatic.com/23702777/r/il/14c918/4184624086/il_340x270.4184624086_s698.jpg",
      label: "Birth Flower Jewelry Travel Case, Birth Month Flower Gift...",
      stars: "★★★★★",
      reviews: "15,992",
      price: "9.95",
      oldPrice: "19.90",
      freeShipping: true
    },
    {
      imageUrl: "https://i.etsystatic.com/14647199/r/il/07ef6a/3336462729/il_794xN.3336462729_dzs1.jpg",
      label: "Personalized Name Necklace, Gift for Her, Peronsalized Gift...",
      stars: "★★★★★",
      reviews: "7,415",
      price: "48.00",
      oldPrice: "120.00",
      freeShipping: true
    },
    {
      imageUrl: "https://i.etsystatic.com/24303637/c/775/616/0/149/il/ff8d9d/4476404866/il_340x270.4476404866_lhf4.jpg",
      label: "Personalized Hand Embroidered Corner Bookma...",
      stars: "★★★★★",
      reviews: "1,282",
      price: "12.99",
      freeShipping: true
    },
    {
      imageUrl: "https://i.etsystatic.com/21882344/c/2380/1892/284/590/il/f06f50/4620121616/il_340x270.4620121616_mw4s.jpg",
      label: "Married Ornament, Wedding Gift, Wedding Date ornamen...",
      stars: "★★★★★",
      reviews: "11,500",
      price: "14.95"
    }
  ])

  const [otherListings, setOtherListings] = useState([
    {
      imageUrl: "https://i.etsystatic.com/6588137/r/il/737903/3021989716/il_680x540.3021989716_bvw3.jpg",
      price: "25.00"
    },
    {
      imageUrl: "https://i.etsystatic.com/5768875/c/1754/1394/277/89/il/af2a26/4040555653/il_680x540.4040555653_45ky.jpg",
      price: "18.00"
    },
    {
      imageUrl: "https://i.etsystatic.com/15605620/r/il/d25b7c/4029212960/il_680x540.4029212960_2oxd.jpg",
      price: "8.28"
    },
    {
      imageUrl: "https://i.etsystatic.com/6748817/r/il/acc7e2/2933109654/il_680x540.2933109654_nsxp.jpg",
      price: "15.00"
    },
    {
      imageUrl: "https://i.etsystatic.com/9374302/r/il/b688a5/3266279171/il_680x540.3266279171_2odf.jpg",
      price: "290.00"
    },
    {
      imageUrl: "https://i.etsystatic.com/12201809/c/1280/1017/0/246/il/b66994/4579112734/il_680x540.4579112734_qnmx.jpg",
      price: "21.97"
    },
  ])


  return <>
    <a href='https://github.com/JayPixl/etsy-clone-react' className="fixed bottom-2 left-2 z-50">
      <div
        className="rounded-full py-2 px-4 font-bold bg-zinc-900 text-zinc-200 flex flex-row items-center opacity-50 hover:opacity-90 transition"
      >
        <div className="font-mono mr-2">View Page Source</div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      </div>
    </a>

    <div className="fixed bottom-2 right-2 z-50">
      <div
        className="rounded-full relative cursor-pointer p-2 group bg-zinc-900 text-zinc-200 flex flex-row items-center opacity-50 hover:opacity-90 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
        </svg>
        <div className='group-hover:translate-x-0 rounded-xl w-80 rounded-br-none cursor-default absolute -top-0 right-[100%] -translate-y-[100%] translate-x-[150%] bg-zinc-900 text-zinc-200 transition text-sm font-light'>
          <div className='relative w-full h-full p-3'>
            <div className='font-bold text-base mb-4 text-center w-full border-b border-zinc-200'>
              Note!
            </div>
            <div className=''>
              &nbsp;&nbsp;This is not actually the Etsy homepage, it is a clone of the site using React and TailwindCSS.
              It is not meant to plagiarize the Etsy company or any of its users or assets;
              this is simply a web development project for practice.
              All items relating to the Etsy company or Etsy listings belong to &copy; Etsy, inc.
            </div>
            <a href='https://www.etsy.com/' className='underline hover:no-underline italic mt-2 w-full text-center block'>
              Go to the Etsy site here!
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="wrapper max-w-screen">
      <div className="topbar border-b-[3px] border-zinc-100">
        <div className="topnav py-3 px-4 w-full flex flex-row items-center justify-between">
          <div className="logo h-12 w-20 mr-4 ml-2 shrink-0">
            <img src={etsyLogo} alt="Etsy Logo" className='h-full' />
          </div>
          <div className="searchbar invisible md:visible rounded-full border-2 border-zinc-800 flex flex-row items-center w-full relative overflow-hidden bg-zinc-100 focus-within:bg-white transition">
            <input
              className='searchinput peer w-full bg-inherit font-nunito focus:outline-none m-3 mr-0 text-lg'
              type="text"
              placeholder="Search for anything"
              value={inputs.search}
              onChange={e => setInputs({ ...inputs, search: e.target.value })}
            />
            <span className="searchicon h-12 w-12 flex items-center justify-center cursor-pointer transition scale-125 -tranzinc-x-1 hover:bg-zinc-200 hover:text-zinc-800 peer-focus:hover:bg-zinc-800 peer-focus:hover:text-white peer-focus:bg-zinc-800 peer-focus:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </span>
          </div>
          <div className="signin shrink-0 ml-4 mr-2 font-light p-3 rounded-full transition hover:bg-zinc-200">
            <a href="#">Sign In</a>
          </div>
          <div className="cart shrink-0 rounded-full flex items-center justify-center transition cursor-pointer hover:bg-zinc-200 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
        </div>
        <div className="toplinks">
          <div className="responsivenav relative z-30 flex items-center justify-center md:hidden px-4 mb-4">
            <div className="searchbar flex rounded-full border-2 border-zinc-800 md:hidden flex-row items-center w-full relative overflow-hidden bg-zinc-100 focus-within:bg-white transition">
              <input
                className='searchinput peer w-full bg-inherit font-nunito focus:outline-none m-3 mr-0 text-lg'
                type="text"
                placeholder="Search for anything"
                value={inputs.search}
                onChange={e => setInputs({ ...inputs, search: e.target.value })}
              />
              <span className="searchicon h-12 w-12 flex items-center justify-center cursor-pointer transition scale-125 -tranzinc-x-1 hover:bg-zinc-200 hover:text-zinc-800 peer-focus:hover:bg-zinc-800 peer-focus:hover:text-white peer-focus:bg-zinc-800 peer-focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
            </div>
            <div className="hamburger h-8 w-8 m-4 cursor-pointer rounded-md overflow-hidden hover:bg-slate-100" onClick={() => setNavOpen(!navOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
                <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <nav>
            <div className="covering"></div>
            <div className={`linkslist absolute md:static w-full z-20 bg-zinc-100 md:bg-inherit ${navOpen ? "flex" : "hidden md:flex"}`}>
              <ul className='px-4 flex flex-col md:flex-row w-full justify-around font-light text-xs'>
                {[
                  "Home Favorites",
                  "Jewelry & Accessories",
                  "Clothing & Shoes",
                  "Home & Living",
                  "Wedding & Party",
                  "Toys & Entertainment",
                  "Art & Collectibles",
                  "Craft Supplies",
                  "Gifts & Gift Cards"
                ].map(link => <li key={`toplink${link.slice(0, 8)}`} className="toplink text-center py-4 px-2 transition hover:opacity-70">
                  <a href="#">{link}</a>
                </li>)}
              </ul>
              <div className="xbutton absolute right-4 top-4 flex cursor-pointer justify-center items-center h-8 w-8 font-bold font-2xl rounded-lg hover:bg-slate-200 md:hidden" onClick={() => setNavOpen(!navOpen)}>x</div>
            </div>
          </nav>

        </div>
      </div>
      <div className="contentbody">
        <main>
          <section className="topsplash">
            <div className="splashbackground absolute w-full h-[36rem] sm:h-[23rem] lg:h-[11rem] bg-[#f8ebe6] -z-10" />
            <h1 className="serifheading font-bitter font-light text-3xl text-center p-4">Shower them with extra-special gifts.</h1>
            <div className="flexgrid flex justify-center w-full">
              <div className="splashgrid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                {categories.map((category, index) => <div className="gridcontainer my-4 group" key={`cat${index}`}>
                  <div className="griditem mx-4 md:mx-6 max-w-[8rem] md:max-w-[9rem] flex flex-col items-center border-b-2 border-transparent hover:border-slate-800 font-semibold cursor-pointer h-full transition">
                    <div className="gridimage bg-cover bg-center rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 transition group-hover:scale-105 group-hover:shadow-md" style={{ backgroundImage: loading === 'loaded' ? `url('${category.imageUrl}')` : 'linear-gradient(to bottom right, #dddddd, #676767)' }} />
                    <div className="gridlabel text-center">
                      {loading === 'loaded' ? category.label : <div className='flex flex-row items-center py-2'>
                        <div className='rounded-full bg-zinc-300 h-2 w-2 mx-1' />
                        <div className='rounded-full bg-zinc-300 h-2 w-2 mx-1' />
                        <div className='rounded-full bg-zinc-300 h-2 w-2 mx-1' />
                      </div>}
                    </div>
                  </div>
                </div>)}
              </div>
            </div>
          </section>
          <section className="popular p-8 flex flex-col justify-center items-center">
            <h1 className="sansheader pb-2 pl-2 font-semibold text-3xl w-full text-center sm:text-left">
              Popular gifts right now
            </h1>
            <div className="listings grid w-full max-w-[18rem] sm:max-w-none grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
              {popularListings.map((listing, index) => <div className="listing p-2 cursor-pointer rounded-lg relative group hover:shadow-lg transition my-2" key={`listing${index}`}>
                <div className="likebutton opacity-0 h-8 w-8 p-2 rounded-full absolute top-4 translate-y-[100%] right-4 transition bg-white group-hover:opacity-100 group-hover:translate-y-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <div className="listingimage overflow-hidden rounded-xl">
                  {loading === 'loaded' ? <img
                    src={listing.imageUrl}
                    alt={listing.label}
                    className='object-cover w-full h-[12rem]'
                  /> : <div
                    className='w-full h-[12rem]'
                    style={{ backgroundImage: 'linear-gradient(to bottom right, #dddddd, #676767)' }}
                  />}
                </div>
                {loading === 'loaded' ? <>
                  <div className="listinglabel pt-2 font-semibold">
                    {listing.label}
                  </div>
                  <div className="rating">
                    <span className="stars">
                      {listing.stars}
                    </span>
                    <span className="reviews text-xs ml-2">
                      ({listing.reviews})
                    </span>
                  </div>
                  <div className="price">
                    <span className="newprice font-extrabold">
                      ${listing.price}
                    </span>
                    {listing.oldPrice && <span className="oldprice text-green-900 text-sm ml-2">
                      <del>${listing.oldPrice}</del> ({Math.round((Number(listing.price) / Number(listing.oldPrice)) * 100)}% off)
                    </span>}
                  </div>
                  {listing.freeShipping && <div className="shipping text-xs inline rounded-md py-1 px-2 bg-green-200">FREE shipping</div>}
                </> : <div className='flex flex-row items-center justify-center py-2 w-full'>
                  <div className='rounded-full bg-zinc-300 h-4 w-4 mx-1' />
                  <div className='rounded-full bg-zinc-300 h-4 w-4 mx-1' />
                  <div className='rounded-full bg-zinc-300 h-4 w-4 mx-1' />
                </div>}
              </div>)}
            </div>
          </section>
          <section className="mothersday mt-8 p-8">
            <div className="mothersdaygrid grid grid-cols-[1fr_1fr_1fr] grid-rows-[6rem_10rem_8rem_4rem] md:grid-rows-[10rem_14rem] md:grid-cols-[1.5fr_1fr_0.75fr_1.25fr] lg:grid-rows-[18rem_22rem] gap-3 md:gap-6">
              <div className="mdgrid1 mdgrid relative rounded-lg overflow-hidden col-span-3 md:col-span-1">
                <div className="flexcenter w-full h-full flex flex-col justify-center">
                  <div className="heading1 text-sm mb-2">Editor's Picks</div>
                  <div className="heading2 text-2xl font-semibold">Mother's Day Gifts 2023</div>
                  <div className="heading3 font-semibold py-2 cursor-pointer group">Shop these unique finds&nbsp;&nbsp;<span className="arrowbutton group-hover:ml-2 transition-all">➔</span></div>
                </div>
              </div>

              {otherListings.map((listing, index) => <div className="mdgrid relative rounded-lg overflow-hidden group" key={`otherlisting${index}`}>
                <a href="#" className='w-full h-full'>
                  <div className="likebutton opacity-0 h-8 w-8 p-2 rounded-full absolute top-4 translate-y-[100%] right-4 transition bg-white group-hover:opacity-100 group-hover:translate-y-0 z-30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                  <div className="floatingprice opacity-0 p-2 rounded-full absolute bottom-4 translate-y-[100%] left-4 transition bg-white group-hover:opacity-100 group-hover:translate-y-0">
                    ${loading === 'loaded' ? listing.price : ' ...'}
                  </div>
                  {loading === 'loaded' ? <img
                    src={listing.imageUrl}
                    className='object-cover w-full h-full'
                  /> : <div
                    className='w-full h-full'
                    style={{ backgroundImage: 'linear-gradient(to bottom right, #dddddd, #676767)' }}
                  />}
                </a>
              </div>
              )}

              <div className="mdgrid8 mdgrid col-span-3 md:col-span-1 flex h-full flex-row justify-end md:flex-col md:justify-center">
                <div className="flexcenter group w-full h-full md:h-auto flex flex-col justify-center invisible md:visible">
                  <div className="p">Make her day with one-of-a-kind presents that show your love all year long.</div>
                </div>
                <div className="flexcenter group w-full h-full md:h-auto flex flex-col justify-center items-end md:items-start">
                  <div className="heading3 font-semibold py-2 cursor-pointer group">See more&nbsp;&nbsp;<span className="arrowbutton group-hover:ml-2 transition-all">➔</span></div>
                </div>
              </div>
            </div>
          </section>

          <section className="footer">
            <img className="footerimg w-full" src={footerImg} alt="footer image" />
            <footer>
              <div className="footerpink bg-[#fdebd2] flex flex-col justify-center items-center">
                <h1 className="serifheading text-5xl font-bitter font-light text-center p-4">What is Etsy?</h1>
                <a className="readstory underline hover:no-underline" href="#">Read our wonderfully weird story.</a>
                <div className="pargrid flex flex-col w-full items-center sm:items-start sm:flex-row p-12 gap-4">
                  <div className="pargrid1 w-full">
                    <h2 className="parheader text-2xl font-bold mb-2">A community doing good</h2>
                    <div className="info">
                      Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We&#39;re also a community pushing for positive change for small businesses, people, and the planet.
                      <div className="tooltip relative underline decoration-dotted cursor-help group inline-block">
                        Here are some of the ways we&#39;re making a positive impact, together.
                        <span className="tooltiptext absolute z-10 text-xs opacity-0 left-[50%] -top-4 -translate-y-[100%] -translate-x-[50%] bg-white shadow-lg group-hover:opacity-100 hidden group-hover:block transition rounded-lg max-w-[15rem] w-full">
                          <div className='w-full h-full relative p-3'>
                            <ul className='list-disc pl-5'>
                              <li>Your purchases on Etsy in 2020 generated nearly $4 billion in income for small businesses.</li>
                              <li>We advocate for policy—at the global and local level—that benefits creative entrepreneurs and helps small businesses grow and thrive.</li>
                              <li>We are deepening our commitment to a sustainable future and are working towards a new goal to reach net zero emissions by 2030.</li>
                            </ul>
                            <div className='border-8 border-transparent border-t-white z-30 absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[100%]' />
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pargrid2 w-full">
                    <h2 className="parheader text-2xl font-bold mb-2">Support independent creators</h2>
                    <p className="info">There&#39;s no Etsy warehouse &#45; just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
                  </div>
                  <div className="pargrid3 w-full">
                    <h2 className="parheader text-2xl font-bold mb-2">Peace of mind</h2>
                    <p className="info">Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
                  </div>
                </div>
                <h3 className="blurb text-2xl font-semibold text-center">
                  Have a question? Well, we've got some answers.
                </h3>
                <button className="helpcenter bg-[#fdebd2] text-zinc-800 rounded-full py-2 px-4 border-zinc-800 border-2 m-2 mb-12">Go to Help Center</button>
              </div>
              <img src={footerImg2} alt="footer img" className="footerimg w-full" />
              <div className="footerlb bg-[#d7e6f5] flex flex-col justify-center items-center text-center p-8">
                <h4 className='font-semibold'>Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Etsy.</h4>
                <div className="subscribe w-full max-w-[30rem] mt-4 mx-8">
                  <div className="emailbar rounded-full border-zinc-800 border-2 flex flex-row items-center justify-between w-full relative bg-white overflow-hidden">
                    <input className='emailinput w-full peer bg-inherit font-nunito py-2 pl-5 focus:ring-0 focus:outline-0 text-lg' type="text" placeholder="Enter Your Email" />
                    <span className="emailicon h-12 flex items-center justify-center cursor-pointer transition peer-focus:bg-zinc-800 peer-focus:text-white hover:bg-zinc-200 px-2">
                      Subscribe
                    </span>
                  </div>
                </div>
              </div>
              <img src={footerImg3} alt="footer img" className="footerimg w-full" />
              <div className="footermb bg-[#4d6bc6] pb-4">
                <div className="tooltip tooltip2 w-full text-white text-center relative underline decoration-dotted cursor-help group inline-block">
                  Etsy is powered by 100% renewable electricity.
                  <span className="tooltiptext absolute hidden z-10 text-xs opacity-0 left-[50%] -top-4 -translate-y-[100%] -translate-x-[50%] bg-white shadow-lg group-hover:opacity-100 group-hover:block transition-opacity rounded-lg max-w-[15rem] w-full text-zinc-800">
                    <div className='h-full w-full p-2'>
                      Etsy&#39;s 100% renewable electricity commitment includes the electricity used by the data centers that host Etsy.com, the Sell on Etsy app, and the Etsy app, as well as the electricity that powers Etsy&#39;s global offices and employees working remotely from home in the US.
                    </div>
                    <div className='border-8 border-transparent border-t-white z-30 absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[100%]' />
                  </span>
                </div>
              </div>
              <div className="footerdb bg-[#2f466c] py-6 px-10">
                <div className="bottomgrid flex flex-row w-full text-left flex-wrap text-white">
                  <LinkAccordion header='Shop' options={["Gift cards", "Sitemap", "Etsy blog", "Etsy United Kingdom", "Etsy Germany", "Gift Canada"]} />
                  <LinkAccordion header='Sell' options={["Sell on Etsy", "Teams", "Forums", "Affiliates & Creators"]} />
                  <LinkAccordion header='About' options={["Etsy, Inc", "Policies", "Investors", "Careers", "Press", "Impact"]} />
                  <div className='w-full md:w-[50%] lg:w-[25%] flex flex-col items-center md:items-start'>
                    <LinkAccordion header='Help' options={["Help Center", "Privacy Settings"]} />
                    <button className="etsyappbutton rounded-full border-2 border-white py-2 px-4 mt-2 flex flex-row items-center text-xs font-light">
                      <div className="applogo bg-white text-[#2f466c] flex items-center justify-center h-5 w-5 font-bitter rounded-md mr-3 font-semibold text-base">
                        E
                      </div>
                      Download the Etsy App!
                    </button>
                    <div className="socials flex flex-row gap-4 flex-wrap py-4 max-w-full">
                      {[
                        {
                          label: "Instagram",
                          link: instagramIcon
                        },
                        {
                          label: "Facebook",
                          link: facebookIcon
                        },
                        {
                          label: "Pinterest",
                          link: pinterestIcon
                        },
                        {
                          label: "Twitter",
                          link: twitterIcon
                        },
                        {
                          label: "YouTube",
                          link: youtubeIcon
                        }
                      ].map(icon => <a href='#' className='relative group h-8 w-8' key={icon.label}>
                        <img src={icon.link} alt={icon.label} className='z-10' />
                        <div className='bg-white opacity-0 w-full h-full absolute top-0 left-0 scale-0 rounded-full group-hover:scale-150 group-hover:opacity-50 origin-center transition-transform' />
                      </a>)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="footerpurple bg-[#232347] p-4 flex flex-col justify-between items-center text-white">
                <div className="lang bg-inherit hover:bg-[#323267] flex flex-row justify-center items-center py-2 px-3 rounded-full cursor-pointer">
                  <img src={usFlag} alt="US Flag" className='h-6 w-6 border border-zinc-500 rounded-full' />
                  <span className='w-full font-light text-sm ml-3'>United States | English (US) | $ (USD)</span>
                </div>
                <div className="cr text-xs py-1 text-center">
                  <span className='block sm:inline mx-2'>&copy; 2023 Etsy, Inc.</span>
                  <a href="#" className='mx-2 whitespace-nowrap'>Terms of Use</a>
                  <a href="#" className='mx-2 whitespace-nowrap'>Privacy</a>
                  <a href="#" className='mx-2 whitespace-nowrap'>Internet-based ads</a>
                  <a href="#" className='mx-2 whitespace-nowrap'>Local Shops</a>
                  <a href="#" className='mx-2 whitespace-nowrap'>Regions</a>
                </div>
              </div>
            </footer>
          </section>
        </main>
      </div>
    </div>
  </>
}
