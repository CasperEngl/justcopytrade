import Link from 'next/link'

const FeesAndConditions = () => {
  return (
    <div className="prose prose-green">
      <h1>Fees &amp; Conditions for Strategy Followers</h1>
      <ul>
        <li>
          <p className="font-bold">Fee is included in spread</p>
          <p>
            Our compensation is included in spread that we receive from
            partnered brokers (“spread” is the difference between the bid and
            ask prices). We share these commissions with our strategy providers.
          </p>
          <p>
            Typical spread on EURUSD starts from 1.5 pips and can reach up to 3
            pips depends on selected broker.
          </p>
          <p>
            You won’t have to pay for monthly subscription (subscription fee),
            percentage of assets under management (management fee) or percentage
            of the profits earned (performance fee). No hidden fees.
          </p>
        </li>
        <li>
          <p className="font-bold">Safe funds allocation</p>
          <p>
            All deposits and withdrawals will be made with a regulated and
            licensed brokerage company of your choice. All trades will be
            executed in your account opened with a selected broker.
          </p>
        </li>
        <li>
          <p className="font-bold">Minimum deposit is €2000</p>
          <p>
            The minimum deposit required for account connection is 2000 EUR (or
            its equivalent in another currency). However, the investment sum
            depends on the trading strategies you want to connect to. Every
            trading strategy offers its recommended minimum you are to pay
            attention to.
          </p>
        </li>
        <li>
          <p className="font-bold">No long-term contracts</p>
          <p>
            You can connect to/disconnect from any trading strategy at any time
            and on your own decision. You can stop investing at any time and
            withdraw your funds. No strings attached.
          </p>
        </li>
        <li>
          <p className="font-bold">Server-based technology</p>
          <p>
            Some services require keeping your PC running to copy trading
            signals. With us you don’t need to install any plugins and rent a
            VPS server. We offer fully automated copy trading technology hosted
            on our servers.
          </p>
        </li>
        <li>
          <p className="font-bold">No limits on own trades</p>
          <p>
            You will have the possibility to copy an unlimited number of trading
            strategies as well as trade manually at the same brokerage account.
            You can use any Forex robots and EAs in parallel to trading signals
            coming from our platform.
          </p>
        </li>
        <li>
          <p className="font-bold">I still have some questions. How to ask?</p>
          <p>
            Please feel free to{' '}
            <Link href="/contact-us">
              <a>contact us</a>
            </Link>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default FeesAndConditions