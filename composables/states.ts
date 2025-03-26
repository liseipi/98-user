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

//从一级或者二级中查询
export const findInNestedArray = (array, target, nestedKey = "items") => {
    // 先检查一级数组是否包含目标值
    const foundInTopLevel = array.find(item => item.id === target);
    if (foundInTopLevel !== undefined) {
        return foundInTopLevel; // 如果一级找到，直接返回
    }

    // 如果一级没找到，查询二级数组
    for (const item of array) {
        const nestedArray = item[nestedKey]; // 获取二级数组
        if (Array.isArray(nestedArray)) {
            const foundInNested = nestedArray.find(subItem => subItem.id === target);
            if (foundInNested !== undefined) {
                return foundInNested; // 返回二级数组中找到的值
            }
        }
    }

    // 如果都没找到，返回 null 或 undefined
    return null;
}