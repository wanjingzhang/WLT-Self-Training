export function arrowFunctions() {

  // Demo 1
  function withACallBack(options, callback) {
    callback(options)
  }
   
  withACallBack('so long', function(options) {
      return options
    }
  )
   
  withACallBack('a little shorter', (options) => {
      return options
    }
  )
   
  withACallBack('very short', options => options)
   
  const store = {
    address: '101 Main Street',
    what: function() {
      return this.address
    },
    arrow: () => {
      return this.address
    }
  
  }
  
  console.log(store.what())       // '101 Main Street'
  // console.log(store.arrow())      // undefined
  // Demo1 End
  
  function Welcome(){
    this.happy = 'yes'
    withACallBack('traditional function', function (option) {
      console.log("withACallBack1");
      console.log(this)
    })
    withACallBack('arrow', (option) => {
      console.log("withACallBack2");
      console.log(this)
    })
  }
  
  var welcom = new Welcome(); 
                  // undefined

                  // {happy: 'yes'}

}
