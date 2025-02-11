export const useCounter = () => useState<number>('counter', () => 1)
export const useShareData = () => useState('shareData', () => {})