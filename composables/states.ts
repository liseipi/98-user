export const useCounter = () => useState<number>('counter', () => 1)
export const useShareData = () => useState('shareData', () => {
})

//返回今天日期格式函数
export const useToday = (date: Date = new Date()): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要+1，并且补0
    const day = String(date.getDate()).padStart(2, '0'); // 日期补0
    return `${year}-${month}-${day}`;
}