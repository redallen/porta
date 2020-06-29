import { craftRequest, fetchData } from 'utils'
import { IDeveloperAccount, State } from 'types'

type BuyersAccount = {
  account: {
    id: number
    created_at: string
    updated_at: string
    org_name: string
    state: string
    admin_user_display_name: string
  }
}

const parseAccounts = (accounts: BuyersAccount[]) => accounts.map(({ account }) => ({
  id: account.id,
  createdAt: account.created_at,
  updatedAt: account.updated_at,
  orgName: account.org_name,
  adminName: account.admin_user_display_name,
  state: account.state as State
}))

const getDeveloperAccounts = async (): Promise<IDeveloperAccount[]> => {
  const request = craftRequest('/admin/api/accounts.json', new URLSearchParams({
    page: '1',
    perPage: '500'
  }))
  const data = await fetchData<{ accounts: BuyersAccount[] }>(request)
  return parseAccounts(data.accounts)
}

export { getDeveloperAccounts }
