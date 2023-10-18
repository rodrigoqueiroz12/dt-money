import Summary from '../../components/Summary'
import Header from '../../components/header'
import SearchForm from './components/SearchForm'
import {
  PriceHighlight,
  TransactionTitle,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'
import { CalendarBlank, TagSimple } from 'phosphor-react'

export default function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const transactionsQuantity = transactions.length

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionTitle>
          <span>Transações</span>
          <span>{transactionsQuantity} itens</span>
        </TransactionTitle>

        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width={'40%'}>{transaction.description}</td>
                  <td>
                    <PriceHighlight $variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>
                    <TagSimple />
                    {transaction.category}
                  </td>
                  <td>
                    <CalendarBlank />
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
