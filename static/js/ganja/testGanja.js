Algebra(2,0,1, ()=>{

    let point = (x,y,z)=>z*1e12-x*1e02+y*1e01
    let line = (x,y,z)=>x*1e1+y*1e2+z*1e0
    var redbluelerp = (t) => (floor(t*255) * 65536 + floor((1-t)*255));
    let {cos, sin, PI, floor} = Math
    let P = point(0,0,1)
    //let quad = new window.Quad().getQuad()
    let circle = (n,t) => [...Array(n)].map((x,i)=>{
        let a = i*(2*PI/n)+t,
            r = .5+.51 * sin(t)
        return line(cos(a), sin(a), -r+(P.e02*cos(a)-P.e01*sin(a)))})

    var svg = document.querySelector("#animation").appendChild(this.graph(()=>{
        let t = performance.now()/4000,
            cc = redbluelerp(sin(t))

        return [cc, P,
            cc, ...circle(200,4*sin(t))
        ]
    }, {animate:1,
        pointRadius:1,
        lineWidth:.3,
        scale:2,
        grid:false
    }))
    svg.style.background=redbluelerp(1-sin(1))
//        svg.style.background='transparent';
    svg.style.width ='100%';
    svg.style.height='100%';

})