// eslint-disable-next-line import/no-absolute-path
import logo from '/logo.svg'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import * as Dialog from '@radix-ui/react-dialog'
import NewTransactionModal from '../NewTransactionModal'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
