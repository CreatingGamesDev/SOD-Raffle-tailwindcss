import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        
        {/* <!-- Hero --> */}
        <section className="body-font bg-slate-900 text-gray-400">
          <div className="container mx-auto flex flex-col items-center justify-center px-5 pt-24">
              <div className="relative bg-slate-800 px-6 pt-10 pb-8 shadow-xl ring-1 ring-slate-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">

            <div className="w-full text-center lg:w-2/3">
              <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">Shadow of Despair RAFFLE</h1>
              <p className="mb-8 leading-relaxed">All proceeds go towards the trader!</p>
              <div className="flex justify-center">
                <button className="inline-flex rounded border-0 bg-fuchsia-500 py-2 px-6 text-lg text-white hover:bg-fuchsia-600 focus:outline-none">How to Play</button>
                <button className="ml-4 inline-flex rounded border-0 bg-gray-800 py-2 px-6 text-lg text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">Prize Table</button>
              </div>
            </div>
              </div>
          </div>
        </section>
        {/* <!-- Raffle Participants --> */}
        <section className="body-font bg-slate-900 text-gray-400/80">
          <div className="container mx-auto px-5 py-10">
            <h1 className="title-font mb-10 text-center text-4xl text-white/80">Participants</h1>
            {/* <!-- Raffle stats --> */}
            <div className="-m-4 flex flex-wrap justify-center text-center">
              <div className="w-1/2 p-4 sm:w-1/4">
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-fuchsia-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h2 className="title-font text-3xl font-medium text-white sm:text-4xl">46</h2>
                <p className="leading-relaxed">Players</p>
              </div>
              <div className="w-1/2 p-4 sm:w-1/4">
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-fuchsia-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                  </svg>
                </div>
                <h2 className="title-font text-3xl font-medium text-white sm:text-4xl">1683</h2>
                <p className="leading-relaxed">Tickets</p>
              </div>
              <div className="w-1/2 p-4 sm:w-1/4">
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-fuchsia-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <h2 className="title-font text-3xl font-medium text-white sm:text-4xl">500K</h2>
                <p className="leading-relaxed">Raised</p>
              </div>
            </div>
            {/* <!-- Raffle Table --> */}
            <div className="mt-8">
              <table className="mx-auto table-auto">
                <thead>
                  <tr className="bg-fuchsia-600 text-center text-2xl font-bold text-black/80">
                    <th className="w-1/4">Name</th>
                    <th className="w-1/4">Quantity</th>
                    <th className="w-1/4">Ticket Range</th>
                    <th className="w-1/4">Deposit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center text-xl font-semibold">
                    <td>phantomhaze8</td>
                    <td>Adam</td>
                    <td>858</td>
                    <td>858</td>
                  </tr>

                  <tr className="bg-gray-700 text-center text-xl font-semibold text-fuchsia-600/80">
                    <td>Lorcan109</td>
                    <td>Chris</td>
                    <td>1,280</td>
                    <td>858</td>
                  </tr>
                  <tr className="text-center text-xl font-semibold">
                    <td>Jimthe2nd</td>
                    <td>Chris</td>
                    <td>1,280</td>
                    <td>858</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* <!-- Prizes --> */}
        <section className="body-font bg-slate-900 text-gray-400">
          <div className="container mx-auto flex flex-wrap px-5 py-24">
            <h1 className="title-font mx-auto mb-12 text-3xl font-medium text-white sm:text-4xl">Shadow of Despair RAFFLE</h1>
            <div className="relative mx-auto flex pt-10 pb-20 sm:items-center md:w-2/3">
              <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-800"></div>
              </div>
              <div className="title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-500 text-sm font-medium text-white sm:mt-0">1</div>
              <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
                <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                  <h2 className="title-font mb-1 text-xl font-medium text-white">10x Random Cooking Mats</h2>
                </div>
              </div>
            </div>
            <div className="relative mx-auto flex pb-20 sm:items-center md:w-2/3">
              <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-800"></div>
              </div>
              <div className="title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-500 text-sm font-medium text-white sm:mt-0">2</div>
              <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
                <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                  <h2 className="title-font mb-1 text-xl font-medium text-white">50x random blueprints</h2>
                </div>
              </div>
            </div>
            <div className="relative mx-auto flex pb-20 sm:items-center md:w-2/3">
              <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-800"></div>
              </div>
              <div className="title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-500 text-sm font-medium text-white sm:mt-0">3</div>
              <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
                <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                  <h2 className="title-font mb-1 text-xl font-medium text-white">The 400 Blows</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- How to Play --> */}
        <section className="text-gray-400 bg-slate-900 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 w-full">How Do I Play?</h2>
            <div className="w-full md:pl-6">
              <p className="leading-relaxed text-base">
            
                Tickets Are 1,000 GOLD Each. Purchase Tickets via Shadow of Despair Guild Bank Deposit.
                Bulk Deposit preferred. (Example 12 Tickets = 12,000 GOLD) ***You can win up to 2 times***
              </p>
              <div className="title text-2xl pt-5 pb-3">Bonus Tickets Given</div>
              <ul className='list-disc pl-6'>
                <li>25+ Tickets purchased gives you 3 FREE Tickets ** (Good Deal) **</li>
                <li>50+ Tickets purchased gives you 8 FREE Tickets ** (Great Deal) **</li>
                <li>100+ Tickets purchased gives you 20 FREE Tickets ** (Best Deal) **</li>
                <li> (You can make multiple deposit thruout the week if you so desire.  All deposits will be totaled up for free tickets)</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
