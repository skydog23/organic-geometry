let graphics = Algebra(2, 0, 1, () => {
    let P = 1e12, 
        Q = 1e12 - .5e02 - .5e01,
        m = ()=>Q&P;
     let c = this.graph(
        [ 0x0000ff, m, "m",0xff0000, P, "P", Q, "Q"],
        {lineWidth:4,pointRadius:2, fontSize:2,scale:2,grid:false}); 
      c.style.width='100%'; 
      c.style.height='250px'; 
      c.style.background='white';
      c.style.border='1px solid black';
      return c;
    })

let dgraphics = Algebra(2,0,1,()=>{ 
    let p =  1e1-1e2,
     q = 1e1 + .5e2,
     M = ()=>p^q;
     let c = this.graph(
        [0xff0000, p, "p", q, "q", 0x0000ff, M],
        {lineWidth:4,pointRadius:2, fontSize:2,scale:2,grid:false}); 
      c.style.width='100%'; 
      c.style.height='250px'; 
      c.style.background='white';
      c.style.border='1px solid black';
      return c;
    })

    console.log("Value from duality.js:", graphics);