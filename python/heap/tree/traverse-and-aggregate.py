 """
 there is a tree with the following structure: 
 [
    {
      title: 'parent 1',
      children: [
        {
          title: 'child 1.1.',
          status: 'failed',
          steps: [
            {title: 'child 1.1. step 1', image: 'image name 1'},
            {title: 'child 1.1. step 1', image: 'image name 2'}
          ]
        }
      ]
    }
 ]
 
 the task is to traverse the tree and agreegate all encountered images into a list
 """
 
 def traverse_for_images(nodes, aggregator):
        for node in nodes:
            if 'children' in node.keys():
                aggregator = aggregator + traverse_for_images(node['children'], aggregator)
            else:
                for step in node['steps']:
                    if 'image' in step.keys():
                        aggregator = aggregator + [step['image']]
        return aggregator
        
images = traverse_for_images(some_tree, [])
