//工单状态 0=待接单,1=已接单,2=已完成,3=已回访,-1=已拒绝
export const workStatueTypes = [
    {
        value: 0,
        label: '待接单'
    },
    {
        value: 1,
        label: '已接单'
    },
    {
        value: 2,
        label: '已完成'
    },
    {
        value: 3,
        label: '已回访'
    },
    {
        value: -1,
        label: '已拒绝'
    }
]

export const userType = [
    {
        value: 1,
        label: '业主'
    },
    {
        value: 2,
        label: '租户'
    }
]

//是否开票
export const invoicingType = [
    {
        value: 0,
        label: '否'
    },
    {
        value: 1,
        label: '是'
    }
]

//是否安装智能水表
export const IsInstallType = [
    {
        value: 0,
        label: '否'
    },
    {
        value: 1,
        label: '是'
    }
]

export const InstallType = [
    {
        value: 1,
        label: '新装'
    },
    {
        value: 2,
        label: '更换'
    },
    {
        value: 3,
        label: '重置'
    }
]

export const InstallPosition = [
    {
        value: 1,
        label: '水槽下'
    },
    {
        value: 2,
        label: '阳台'
    },
    {
        value: 3,
        label: '管井'
    },
    {
        value: 4,
        label: '室外'
    }
]

export const PowerType = [
    {
        value: 1,
        label: '电池'
    },
    {
        value: 2,
        label: '常电'
    }
]

export const PowersStatus = [
    {
        value: 1,
        label: '通电'
    },
    {
        value: 2,
        label: '断电'
    }
]

//指令类型
export const CommandType = [
    {
        value: 0,
        label: '不分类型'
    },
    {
        value: 'open_valve',
        label: '开阀'
    },
    {
        value: 'close_valve',
        label: '关阀'
    },
    {
        value: 'cal_meter',
        label: '调表'
    }
]
//处理结果
export const DoneType = [

    {
        value: 1,
        label: '不指定'
    },
    {
        value: 2,
        label: '待处理'
    },
    {
        value: 3,
        label: '处理中'
    },
    {
        value: 4,
        label: '已完成'
    },
    {
        value: 5,
        label: '失败'
    },
    {
        value: 6,
        label: '撤销'
    }
]

//用水减免类型
export const ReliefReasonType = [
    {
        value: 1,
        label: '用水故障'
    },
    {
        value: 2,
        label: '阀门没开'
    },
    {
        value: 3,
        label: '读数不准'
    },
    {
        value: 4,
        label: '其他'
    }
]

//数据来源
export const DataOriginType = [
    {
        value: 1,
        label: '人工'
    },
    {
        value: 2,
        label: '电子'
    }
]

//⼊账去向
export const DepositDestinationType = [
    {
        value: 1,
        label: '客户'
    },
    {
        value: 2,
        label: '抄表'
    },
    {
        value: 3,
        label: '调表'
    }
]

//房屋状态
export const HousingStatusType = [
    {
        value: 1,
        label: '居住中'
    },
    {
        value: 2,
        label: '即将入住'
    },
    {
        value: 3,
        label: '装修中'
    }
]

//阀门状态
export const ValveStatus = [
    {
        value: -1,
        label: '-'
    },
    {
        value: 0,
        label: '关阀'
    },
    {
        value: 1,
        label: '开阀'
    }
]