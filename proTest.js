//  const fs = require('fs');

//  fs.readFile('readme.md',(err, data)=>{
//      if (err) throw err;
//      console.log(data.toString())
//  })

function Promise(exec){
    this.PromiseState = 'padding';
    this.PromiseResult = null;
    // console.log(this)
    this.callback = [];
    self = this;
    function resolve(){
        if (self.PromiseState !== 'padding') return;
        self.PromiseState = 'fulfill'
        self.PromiseResult = data;
        if(self.callback.length !== 0){
            self.callback.forEach(()=>{
                this.onResolve(data);
            })
        }
    }
    function reject(){
        if (self.PromiseState !== 'padding') return;
        self.PromiseState = 'reject'
        self.PromiseResult = data;
        if(self.callback.length !== 0){
            self.callback.forEach((item)=>{
                item.onReject(data);
            })
        }

    }
    try{
        exec(resolve, reject);
    }catch(e){
        reject(e)
    }
}

Promise.prototype.then = function(onResolve, onReject){
    const self = this;
    function callback(type){
        try{
            let res = type(this.PromiseResult)
            if (res instanceof Promise){
                res.then(v=>{
                    resolve(v)
                },r=>{
                    reject(r)
                })
            }else{
                resolve(res)
            }
        }catch(e){
            reject(e)
    }
    }
    return new Promise((resolve, reject) => {
        if(this.PromiseState === 'fulfill'){
            callback(onResolve)
        }
        if(this.PromiseState === 'reject'){
            callback(onReject)
        }
        if(this.PromiseState === 'padding'){
            
            this.callback.push( {
                onResolve:callback(onResolve),
                onReject:callback(onReject)
                })
        }
    })
        }
// debugger

Promise.prototype.catch = function(){

}

Promise.resolve = function(obj){
    if(obj instanceof Promise){
        obj.then(v=>resolve(v),
        r=>reject(r))
    }else{
        resolve(obj)
    } 
}