// {
//     "data": [
     const data = [
        {
            "name": "Овощи",
            "id": 1,
            "isSelected": true,
            "children": [
                {
                    "name": "Огурцы",
                    "id": 11,
                    "isSelected": false,
                    "children": [
                        {
                            "name": "Корнишоны",
                            "id": 111,
                            "isSelected": true,
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "Фрукты",
            "id": 2,
            "isSelected": false,
            "children": [
                {
                    "name": "Апельсин",
                    "id": 22,
                    "isSelected": true,
                    "children": []
                }
            ]
        },
        {
            "name": "Мучное",
            "id": 3,
            "isSelected": false,
            "children": []
        },
        {
            "name": "Мясо",
            "id": 4,
            "isSelected": true,
            "children": []
        }
    ]
// }
export default data;