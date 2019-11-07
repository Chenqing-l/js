const CreateTree=function(key){
    this.key=key;
    this.left=null;
    this.right=null;
}

class Tree{
    constructor(){
     this.root=null;   
    }
    inset(node){
        const newNode=new createTree(node)
            if(this.root===null){
                this.root=newNode;
node.left=newNode;
            }else{
                this.insetNode(this.root,newNode) 
            }
        console.log(this.root)
    }
    inserNode(node,newNode){
        if(newNode.key<node.key){
            if(node.left===null){
                node.left=newNode;
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.rigth===null){
                node.right=newNode;
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
}



const tree= new Tree()
tree.inserNode()