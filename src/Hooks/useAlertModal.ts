import useToggleOpenWithExternalClick from './useToggleOpenWithExternalClick'

type AlertMessageKeys = keyof typeof ALERT_MESSAGE

// ALERT_MESSAGE 사용시
interface AlertMessageProps {
  alertMessageKey: AlertMessageKeys
  message?: undefined
}
// 직접 message 전달 시
interface MessageProps {
  alertMessageKey?: undefined
  message: string | React.ReactElement
}

const ALERT_MESSAGE = {
  comingSoon: '준비중입니다',
  error: '오류가 발생했습니다',
}

// modal\AlertModal 컴포넌트와 함께 사용합니다
export function useAlertModal({
  alertMessageKey,
  message,
}: AlertMessageProps | MessageProps): [(isOpen: boolean) => void, boolean, string | React.ReactElement] {
  const [isOpenModal, setIsOpenModal] = useToggleOpenWithExternalClick()
  const modalMessage = alertMessageKey ? ALERT_MESSAGE[alertMessageKey] : message

  return [setIsOpenModal, isOpenModal, modalMessage]
}
