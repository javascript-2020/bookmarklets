
<script>

(async()=>{

      var format    = [3,2,3];
      var chars     = [];
      for(var i=65;i<=90;i++)chars.push(String.fromCharCode(i));    //  uppercase
      for(var i=97;i<=122;i++)chars.push(String.fromCharCode(i));   //  lowercase
      for(var i=48;i<=57;i++)chars.push(String.fromCharCode(i));    //  numbers
      
      var str       = '';
      format.forEach((n,i)=>{
      
            for(var j=0;j<n;j++){
              
                  str  += char();
                  
            }//for
            if(i<format.length-1){
                  str  += '-';
            }
            
      });
      
      navigator.clipboard.writeText(str);
      console.log(str);

/*
      document.createElement('div');
      div.style.cssText   = ` position:absolute;left:0;right:0;width:100px;height:50px;
                              border:1px solid blue;border-radius:5px;
                              display:flex;justify-content:center;align-items:center
                            `;
      document.body.append(div);
*/      
      
      
      function char(){
        
            var i   = Math.floor(Math.random()*chars.length);
            var c   = chars[i];
            return c;
            
      }//char
      
      
})();

</script>