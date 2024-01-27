const DynamicElementGraphData = [
    {
        id: 1,
        name: 'COST',
        icon:'https://github.com/sayanghoshofficial/PAKMAN-Dashboard/assets/99132893/f9e4e185-0983-4251-b907-118198daad29',
        bottomContaint: {
            value: 24000,
            startUnit: '$',
            endUnit: '',
            rightTop: '/Day',
            rightDown: 'Run Rate'
        },
        thirdBox: [
            {
                value: 0.40,
                startUnit: '$',
                unit: '/Instance HR'
            }
        ]
    },
    {
        id: 2,
        name: 'MONITORING',
        icon: 'https://github.com/sayanghoshofficial/PAKMAN-Dashboard/assets/99132893/0c065a5f-e38d-4604-9e5c-94b25ee39ad5',
        bottomContaint: {
            value: 3400000,
            startUnit: '',
            endUnit: '',
            rightTop: 'Requests',
            rightDown: 'Last 5 hours 30 minutes'
        },
        bottomExtra: {
            value: 3412,
            anothervalue: 'Unique Visitors'
        },
        thirdBox: [
            {
                value: 30500,
                unit: 'TMNG'
            },
            {
                value: 10000,
                unit: 'SOCL'
            },
            {
                value: 17400,
                unit: 'REBL'
            }
        ]
    },
    {
        id: 3,
        name: 'INVENTORY',
        icon: 'https://github.com/sayanghoshofficial/PAKMAN-Dashboard/assets/99132893/63ea47ba-8cf9-4381-a3cc-c066a4ea6323',
        bottomContaint: {
            value: 6500,
            startUnit: '$',
            endUnit: '',
            rightTop: 'current',
            rightDown: 'instances'
        },
        bottomExtra: {
            value: 25000,
            anothervalue: 'Unique Last 30 days'
        },
        thirdBox: [
            {
                value: 153,
                unit: 'LBs'
            },
            {
                value: 57,
                unit: 'ASG'
            },
            {
                value: 132,
                unit: 'S3'
            },
            {
                value: 9000,
                unit: 'EBS'
            }
        ]


    },
    {
        id: 4,
        name: 'UTILIZATION',
        icon: 'https://github.com/sayanghoshofficial/PAKMAN-Dashboard/assets/99132893/a8afc7c4-48c9-4bb5-9573-c9f0764e8b5e',
        bottomContaint: {
            value: 39,
            startUnit: '',
            endUnit: '%',
            rightTop: '',
            rightDown: 'Overall'
        },
        thirdBox: [
            {
                value: 12,
                unit: 'CPU'
            },
            {
                value: 35,
                unit: 'I/O'
            },
            {
                value: 80,
                unit: 'DISK'
            }
        ]
    },
    {
        id: 5,
        name: 'COMPLIANCE',
        icon: 'https://github.com/sayanghoshofficial/PAKMAN-Dashboard/assets/99132893/fa9d22f7-b8d7-4129-a06b-1231afaa58e6',
        bottomContaint: {
            value: 99.82,
            startUnit: '',
            endUnit: '%',
            rightTop: 'Compliance',
            rightDown: 'All Apps'
        },
        bottomExtra: {
            value: 58,
            anothervalue: 'Rules'
        },
        thirdBox: [
            {
                value: 98.4,
                sign: '%',
                unit: 'TMNG',
            },
            {
                value: 98.1,
                sign: '%',
                unit: 'REBL'
            },
            {
                value: 96.7,
                sign: '%',
                unit: 'SOCL'
            }
        ],
        complianceL1Bottom: [
            {
                id: 1,
                value: 200000,
                purpose: 'Scanned'
            },
            {
                id: 2,
                value: 25,
                purpose: 'Issues Found'
            },
            {
                id: 3,
                value: 0.001,
                percentSign: '%',
                purpose: 'Items with issues'
            }
        ]
    },
    {
        id: 6,
        name: 'STORAGE',
        icon: 'https://github.com/sayanghoshofficial/PAKMAN-Dashboard/assets/99132893/e76affbb-24cb-4a1e-97b2-b148351b8790',
        bottomContaint: {
            value: 4.15,
            startUnit: '',
            endUnit: '',
            rightTop: '',
            rightDown: 'PB In Use'
        },
        thirdBox: [
            {
                value: 1.25,
                sign: 'PB',
                unit: 'EBs'
            },
            {
                value: '1.50',
                sign: 'PB',
                unit: 'S3'
            },
            {
                value: 0.65,
                sign: 'PB',
                unit: 'Other'
            }
        ]
    },

]

module.exports = DynamicElementGraphData;