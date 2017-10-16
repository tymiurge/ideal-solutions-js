/**
 * the task: 
 *      there is a tree of the following structure:
 *          - parent 1
 *              - sub-parent 1.1
 *                  - child 1.1.1.
 *                  - child 1.1.2.
 *                  - child 1.1.3.
 *              - sub-parent 1.2.
 *                  - child 1.2.1. 
 *                  - child 1.2.2.
 *                  - child 1.2.3.
 *      all children have some set of fields, like child 1.1.1 = {title: 'child name', run1: 'failed', run2: 'passed', run3: 'skipped}
 *      parents and sub-parents do not have these fields
 *      it is required to get summary for each of parents and each of sub-parents, so that in the end they would be like: 
 *          parent = {title: 'parent title', run1: {failed: 5, passed: 6, skipped: 1}}
 * 
 *      solution follows (not still encapsulated in a react component since i had to solve this task in scope of one of my projects)
 * 
 *      DON'T REALLY LIKE THE SOLUTION - consumes lots of resources and doesn't look elegant - need to think additionally 
 * 
 */

 
import React, { Component } from 'react'
import { Container, Table, Icon, Button, Popup, Input } from 'semantic-ui-react'
import TreeGrid from './tree-grid'
import { v4 } from 'js-uuid'
import deepAssign from 'deep-assign'

const treeField = {
    title: 'Run Title', field: 'title'
}

const fields = [
    {
        title: '1', field: 'run1' 
    }, {
        title: '2', field: 'run2' 
    }, {
        title: '3', field: 'run3' 
    }, {
        title: '4', field: 'run4' 
    }, {
        title: '5', field: 'run5' 
    }    
]

const items = [
    {
    id: v4(),
    title: 'Vulkan Stavka',
    children: [{
        id: v4(),
        title: 'web',
        children: [
            {
                id: v4(),
                title: 'Registration',
                children: [{
                    id: v4(),title: 'test 1', run1: 'failed', run2: 'passed', run3: 'skipped', run4: 'failed', run5: 'failed'
                }, {
                    id: v4(),title: 'test 2', run1: 'passed', run2: 'passed', run3: 'passed', run4: 'passed', run5: 'passed'
                }, {
                    id: v4(),title: 'test 3', run1: 'passed', run2: 'failed', run3: 'passed', run4: 'skipped', run5: 'passed'
                }, {
                    id: v4(),title: 'test 4', run1: 'failed', run2: 'passed', run3: 'skipped', run4: 'failed', run5: 'failed'
                }, {
                    id: v4(),title: 'test 5', run1: 'passed', run2: 'passed', run3: 'passed', run4: 'passed', run5: 'passed'
                }, {
                    id: v4(),title: 'test 6', run1: 'passed', run2: 'failed', run3: 'passed', run4: 'skipped', run5: 'passed'
                }]
            }, {
                id: v4(),
                title: 'Login',
                children: [{
                    id: v4(),title: 'test 1', run1: 'failed', run2: 'passed', run3: 'skipped', run4: 'failed', run5: 'failed'
                }, {
                    id: v4(),title: 'test 2', run1: 'passed', run2: 'passed', run3: 'passed', run4: 'passed', run5: 'passed'
                }, {
                    id: v4(),title: 'test 3', run1: 'passed', run2: 'failed', run3: 'passed', run4: 'skipped', run5: 'passed'
                }, {
                    id: v4(),title: 'test 4', run1: 'failed', run2: 'passed', run3: 'skipped', run4: 'failed', run5: 'failed'
                }, {
                    id: v4(),title: 'test 5', run1: 'passed', run2: 'passed', run3: 'passed', run4: 'passed', run5: 'passed'
                }, {
                    id: v4(),title: 'test 6', run1: 'passed', run2: 'failed', run3: 'passed', run4: 'skipped', run5: 'passed'
                }]
            }
        ]
    }, {
        id: v4(),
        title: 'mobile',
        children: [{
            id: v4(),
            title: 'Registration',
            children: [
                {
                    id: v4(),title: 'test 1', run1: 'failed', run2: 'passed', run3: 'skipped', run4: 'failed', run5: 'failed'
                }, {
                    id: v4(),title: 'test 2', run1: 'passed', run2: 'passed', run3: 'passed', run4: 'passed', run5: 'passed'
                }, {
                    id: v4(),title: 'test 3', run1: 'passed', run2: 'failed', run3: 'passed', run4: 'skipped', run5: 'passed'
                }, {
                    id: v4(),title: 'test 4', run1: 'failed', run2: 'passed', run3: 'skipped', run4: 'failed', run5: 'failed'
                }, {
                    id: v4(),title: 'test 5', run1: 'passed', run2: 'passed', run3: 'passed', run4: 'passed', run5: 'passed'
                }, {
                    id: v4(),title: 'test 6', run1: 'passed', run2: 'failed', run3: 'passed', run4: 'skipped', run5: 'passed'
                }    
            ]
        }]
    }]
}, {
    id: v4(),
    title: 'Vulkan Bet',
    children: [{
        id: v4(),
        title: 'web',
        children: [
            {
                id: v4(),
                title: 'Registration',
                children: [{
                    id: v4(),
                    title: 'test 1', run1: 'failed', run2: 'passed', run3: 'skipped', run4: 'failed', run5: 'failed'
                }, {
                    id: v4(),title: 'test 2', run1: 'passed', run2: 'passed', run3: 'passed', run4: 'passed', run5: 'passed'
                }, {
                    id: v4(),title: 'test 3', run1: 'passed', run2: 'failed', run3: 'passed', run4: 'skipped', run5: 'passed'
                }, {
                    id: v4(),title: 'test 4', run1: 'failed', run2: 'passed', run3: 'skipped', run4: 'failed', run5: 'failed'
                }, {
                    id: v4(),title: 'test 5', run1: 'passed', run2: 'passed', run3: 'passed', run4: 'passed', run5: 'passed'
                }, {
                    id: v4(),title: 'test 6', run1: 'passed', run2: 'failed', run3: 'passed', run4: 'skipped', run5: 'passed'
                }]
            }, {
                id: v4(),
                title: 'Login',
                children: [{
                    id: v4(),title: 'test 1', run1: 'failed', run2: 'passed', run3: 'skipped', run4: 'failed', run5: 'failed'
                }, {
                    id: v4(),title: 'test 2', run1: 'passed', run2: 'passed', run3: 'passed', run4: 'passed', run5: 'passed'
                }, {
                    id: v4(),title: 'test 3', run1: 'passed', run2: 'failed', run3: 'passed', run4: 'skipped', run5: 'passed'
                }, {
                    id: v4(),title: 'test 4', run1: 'failed', run2: 'passed', run3: 'skipped', run4: 'failed', run5: 'failed'
                }, {
                    id: v4(),title: 'test 5', run1: 'passed', run2: 'passed', run3: 'passed', run4: 'passed', run5: 'passed'
                }, {
                    id: v4(),title: 'test 6', run1: 'passed', run2: 'failed', run3: 'passed', run4: 'skipped', run5: 'passed'
                }]
            }
        ]
    }, {
        id: v4(),
        title: 'mobile',
        children: [{
            id: v4(),
            title: 'Registration',
            children: [
                {
                    id: v4(),title: 'test 1', run1: 'failed', run2: 'passed', run3: 'skipped', run4: 'failed', run5: 'failed'
                }, {
                    id: v4(),title: 'test 2', run1: 'passed', run2: 'passed', run3: 'passed', run4: 'passed', run5: 'passed'
                }, {
                    id: v4(),title: 'test 3', run1: 'passed', run2: 'failed', run3: 'passed', run4: 'skipped', run5: 'passed'
                }, {
                    id: v4(),title: 'test 4', run1: 'failed', run2: 'passed', run3: 'skipped', run4: 'failed', run5: 'failed'
                }, {
                    id: v4(),title: 'test 5', run1: 'passed', run2: 'passed', run3: 'passed', run4: 'passed', run5: 'passed'
                }, {
                    id: v4(),title: 'test 6', run1: 'passed', run2: 'failed', run3: 'passed', run4: 'skipped', run5: 'passed'
                }    
            ]
        }]
    }]
}
]
    

class RunsHistory extends Component {

    
    objectKeysSum = arr => arr.reduce((accumulator, current) => 
        {
            for (let key in current) {
                if (current.hasOwnProperty(key))
                    accumulator[key] = (accumulator[key] || 0) + current[key]
            }
            return accumulator 
        }, 
        {}
    );
      

    nodeSummurizer = (node, field) => {
        if (!node.children) return {[node[field]] : 1}
        return node.children.reduce(
            (total, current) => {
                if (!current.children) {
                    total[current[field]] = (total[current[field]] || 0) + 1
                    return total
                }
                return this.objectKeysSum([
                    ...current.children.map(item => this.nodeSummurizer(item, field)), 
                    total
                ])
            },
            {}
        )
    }

    singleFieldMapper = (tree, field) => tree.map(node => {
        if (!node.children) return node
        const children = this.singleFieldMapper(node.children, field)
        const summary = this.nodeSummurizer(node, field)
        return Object.assign({}, node, {children, [field]: summary})
    })

    fieldsMapper = (tree, fields) => {
        return fields.reduce(
            (accumulator, current) => {
                let treeWithField = this.singleFieldMapper(tree, current)
                accumulator = deepAssign(accumulator, treeWithField)
                return accumulator
            },
            {}
        )
    }

    render() {
        //const normilizedItems = this.normilize(items, ['run1', 'run2', 'run3', 'run4', 'run5'])
        let summarizedTree = this.fieldsMapper(items, ['run1', 'run2', 'run3', 'run4', 'run5'])
        
        console.log('finished')
        return (
            <Container>
                <TreeGrid treeField={treeField} fields={fields} treeNodes={items} />
            </Container>
        )
    }
}

export default RunsHistory
