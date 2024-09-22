// import RecentTransactions from '@/components/RecentTransactions';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
// import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
// import { getLoggedInUser } from '@/lib/actions/user.actions';

import HeaderBox from "@/components/HeaderBox"
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async (
) => {

  const loggedIn = await getLoggedInUser()


  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={  loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1356.98}
          />
        </header>

     
      </div>
     
      <RightSidebar 
        user={loggedIn}
    
        banks={[{},{}]}
        
      />
    </section>
  )
}

export default Home