import dashboard from '../assets/dashboard.svg'
import leads from '../assets/leads.svg'
import transaction from '../assets/transaction.svg'
import analytics from '../assets/analytics.svg'
import intagration from '../assets/integration.svg'
import calendar from '../assets/calendar.svg'
import pages from '../assets/pages.svg'
import settings from '../assets/settings.svg'
import documentation from '../assets/documentation.svg'

function LeftSidebar() {
  return (
    <>
      <div className='shadow-2xl min-h-screen h-[100vh] overflow-auto z-50 fixed bg-white'>
        <div className='w-80 pl-3 pr-3 pt-3 pb-6 flex flex-col gap-3'>
          <button className="hover:bg-base-200 collapse collapse-content cursor-pointer py-3 text-2xl font-medium items-center flex gap-2">
            <span className='bg bg-primary text-white rounded-xl text-base p-2'>DW</span>DashWind
          </button>

          <div className='rounded-box w-full'>
            <button className="hover:bg-base-200 collapse collapse-content p-3 cursor-pointer text-sm font-medium items-center flex gap-2">
              <img src={dashboard} alt="" width={24} height={24} />Dashboard
            </button>
            <button className="hover:bg-base-200 collapse collapse-content p-3 cursor-pointer text-sm font-medium items-center flex gap-2">
              <img src={leads} alt="" width={24} height={24} />Leads
            </button>
            <button className="hover:bg-base-200 collapse collapse-content p-3 cursor-pointer text-sm font-medium items-center flex gap-2">
              <img src={transaction} alt="" width={24} height={24} />Transactions
            </button>
            <button className="hover:bg-base-200 collapse collapse-content p-3 cursor-pointer text-sm font-medium items-center flex gap-2">
              <img src={analytics} alt="" width={24} height={24} />Analytics
            </button>
            <button className="hover:bg-base-200 collapse collapse-content p-3 cursor-pointer text-sm font-medium items-center flex gap-2">
              <img src={intagration} alt="" width={24} height={24} />Intagration
            </button>
            <button className="hover:bg-base-200 collapse collapse-content p-3 cursor-pointer text-sm font-medium items-center flex gap-2">
              <img src={calendar} alt="" width={24} height={24} />Calendar
            </button>

            <div tabIndex={0} className="collapse collapse-arrow hover:bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-md font-medium items-center flex gap-2">
                <img src={settings} alt="" width={24} height={24} />Settings
              </div>
              <div className="collapse-content">
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow hover:bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-md font-medium items-center flex gap-2">
                <img src={pages} alt="" width={24} height={24} />Pages
              </div>
              <div className="collapse-content">
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow hover:bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-md font-medium items-center flex gap-2">
                <img src={documentation} alt="" width={24} height={24} />Documentation
              </div>
              <div className="collapse-content">
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default LeftSidebar

