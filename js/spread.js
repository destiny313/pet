const stuff = [
    [
        '♈',
        '♉',
        '♊',
        '♋',
        '♌',
    ], [
        '♍',
        '♎',
    ], [
        [
            '♏',
            '♐',
            '♑',
        ],
        [
            '♒',
            '♓',
        ],
        [
            '🌸',
            '🌷',
            '🌹',
            '🌺',
        ]
    ], [
        '🌻',
        '🌼',
        '🌽',
    ],[
        [
            { value: '🍅' },
            { value: '🍎' },
        ], [
            { value: '🍏' },
            { get: () => '🍑' },
        ], [
            { get: () => '🍒' },
            { get: () => '🍓' },
        ],
    ]
];

/**
 * Из представленного массива stuff необходимо заполнить
 * константы zodiacSigns, flowers, food соответственно
 * знаками задиака, цветами и съедобными объектами.
 * Значения должны получиться плоскими массивами
 * без оберток в виде объектов и методов вида:
 * 🍅 🍎 🍏 🍑 🍒 🍓
 * Попробуйте написать как можно меньше кода для достижения
 * результата.
 */

// const zodiacSigns = 
// const flowers = 
// const food = 

function restruct(obj) {
    let result = [];
    for (let i = 0; i < obj.length; i++) {
        
        
        if (Array.isArray(obj[i])) {
            result.push(...restruct(obj[i]));
            
        }
        else {
            
            if ((obj[i].constructor.name) == 'String') {              
                 
                 result.push(obj[i]);                 
                 
            }
            else {
                
                if ((obj[i].constructor.name) == 'Object') {
                    
                    result.push(...restruct(Object.values(obj[i])));
                    
                }
                else {                    
                    result.push(obj[i]());
                }
                
            }
        }
        
    }      
    return result;
}

const zodiacSigns = [];
const flowers = [];
const food = [];

let general_arr = restruct(stuff);

// console.log('All :', general_arr);

for (let i = 0; i < general_arr.length; i++) {
    if (i <= 11) {
        zodiacSigns.push(general_arr[i]);
    }
    else if (i > 11 && i < 19) {
        flowers.push(general_arr[i]);
    } 
    else {
        food.push(general_arr[i]);
    }

}