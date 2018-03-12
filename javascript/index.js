// 我到现在还没算出那个算法题，[2,2,3,7]数组里选取一个元素为目标T经过程序计算后返回结果是 -> [2,2,3]和[7]。 因为2+2+3和7都等于7。
// 计算元素不能重复，不限于加减乘除

// 就是 等号两边的数字相等， 参数就是数组里的数。
// 最后都会归结为:
//  - a+b = 0
class Compute{
  constructor() {
    this.operators = {
      add: (a,b) => a+b,
      sub: (a,b) => a-b,
      mul: (a,b) => a*b,
      div: (a,b) => a/b
    }
    this.keys = Object.keys(this.operators)
  }

  _iterator(x, y) {
    return this.keys.map(opt => ({opt, res: this.operators[opt](x, y), x, y}) )
  }

  _recusive([res, ...arr]) {
    if(arr.length == 1){
     return this._iterator(res, arr[0]).find(i => i.res === 0)
    }

    const y = arr[0]
    const iteratorRes = this._iterator(res, y)
    for (var i = iteratorRes.length - 1; i >= 0; i--) {
      arr[0] = iteratorRes[i].res
      const tmp = this._recusive(arr)
      const opt = iteratorRes[i].opt
      if(tmp) return {x: res, y, opt, eql: tmp}
    }
  }

  _beautify(obj, root) {
    if(typeof obj.eql == 'number' || obj.eql === undefined) {
      return ` ${obj.opt} ${obj.y} `
    }

    return `${root ? obj.x : ''} ${obj.opt} ${obj.y} ${this._beautify(obj.eql)}`
  }

  run(arr) {
    const res = this._recusive(arr)
    res.str = this._beautify(res, true)
    return res
  }
}

const compute = new Compute()
console.log(compute.run([1,2,3,4]))
