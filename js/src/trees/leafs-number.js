const testTree = [
    {
        title: 'parent 1', 
        children: [
            {title: 'leaf 1.1'},
            {title: 'leaf 1.2'}
        ]
    },
    {
        title: 'parent 2',
        children: [
            {title: 'leaf 2.1'},
            {title: 'leaf 2.2'},
            {
                title: 'parent 2.3', children: [
                    {title: 'leaf 2.3.1.'},
                    {title: 'leaf 2.3.2.'},
                    {title: 'leaf 2.3.3.'}
                ]
            }
        ]
    }
]
leafsNumber = tree => tree.reduce(
    (accumulator, node) => {
        if (!node.children) return accumulator + 1
        return accumulator + leafsNumber(node.children)
    },
    0
)

console.log(leafsNumber(testTree)) // outputs 7s