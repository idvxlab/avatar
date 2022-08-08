import svg2 from "../img/000000.svg";
import svg1 from "../img/000001.svg";
import svg3 from "../img/000002.svg";
import svg4 from "../img/000003.svg";
import device from '../img/portrait/Device.svg'
import gaming from '../img/portrait/Gaming.svg'
import explaining from '../img/portrait/Explaining.svg'
import gymShirt from '../img/portrait/Gym Shirt.svg'
import dress from '../img/portrait/Dress.svg'
import paper from '../img/portrait/Paper.svg'
import sportyTee from '../img/portrait/Sporty Tee.svg'
import brainstorm from '../img/products/work/brainstorming.svg'
import brainstorm2 from '../img/products/work/brainstorming 2.svg'
import waitingforlunch from '../img/products/work/waiting for lunch.svg'
import waitingforlunch2 from '../img/products/work/waiting for lunch 2.svg'
import cup from "../img/products/sports/cup.png";
import socks from "../img/products/sports/socks.png";
import tshirt from "../img/products/sports/tshirt.png";
//var url='http://202.120.165.128:5000/service/avatar'
var url='http://172.16.229.198:5000/service/avatar'
var headp=[0.237,0.027,0.6,0.6]
var peepsp=[0.2,0.38,0.6,0.6]
var ProductsList={
'study':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'work':{'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks},'cup':{'pic':cup},'socks':{'pic':socks}},
'sport':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'travel':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'party':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'party1':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
0:{'s1':{'pic':0},'s2':{'pic':0},'s3':{'pic':0},'s4':{'pic':0},'s5':{'pic':0},'s6':{'pic':0}}
}
var PortraitBarList={'study':{'peep1':{'pic':device},'peep2':{'pic':gaming},'peep3':{'pic':explaining},'peep4':{'pic':gymShirt}},
'work':{'peep1':{'pic':brainstorm},'peep2':{'pic':brainstorm2},'peep3':{'pic':waitingforlunch},'peep4':{'pic':waitingforlunch2}},
'sport':{'peep1':{'pic':dress},'peep2':{'pic':gaming},'peep3':{'pic':explaining},'peep4':{'pic':gymShirt}},
'travel':{'peep1':{'pic':device},'peep2':{'pic':dress},'peep3':{'pic':paper},'peep4':{'pic':gymShirt}},
'party':{'peep1':{'pic':paper},'peep2':{'pic':sportyTee},},
0:{'s1':{'pic':0},'s2':{'pic':0},'s3':{'pic':0},'s4':{'pic':0},'s5':{'pic':0},'s6':{'pic':0}}
}
var StyleBarList={'study':{'cup':{'style1':[{x:0.1,y:0.1,scale:0.3}],'style2':[{x:0.5,y:0.5,scale:0.3}]},
          'socks':{'style1':[{x:0.2,y:0.18,scale:.25,rotate:Math.PI/4},{x:0.5,y:0.18,scale:.25}],'style2':[{x:0.4,y:0.18,scale:.25,rotate:Math.PI/4},{x:0.8,y:0.18,scale:.25}]},
          'cup2':{'style1':[{x:0.1,y:0.1,scale:1}]},
          'tshirt':{'style1':[{x:0.1,y:0.1,scale:1}]},
          'tshirt2':{'style1':[{x:0.1,y:0.1,scale:1}]},
          'socks2':{'style1':[{x:0.1,y:0.1,scale:1}]}},
'work':{'cup':{'style1':[{x:0.1,y:0.1,scale:0.3}],'style2':[{x:0.5,y:0.5,scale:0.3}]},
            'socks':{'style1':[{x:0.2,y:0.18,scale:.25,rotate:Math.PI/4},{x:0.5,y:0.18,scale:.25}],'style2':[{x:0.4,y:0.18,scale:.25,rotate:Math.PI/4},{x:0.8,y:0.18,scale:.25}]},
            'cup2':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'tshirt':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'tshirt2':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'socks2':{'style1':[{x:0.1,y:0.1,scale:1}]}},
'sport':{'cup':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'socks':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'cup2':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'tshirt':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'tshirt2':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'socks2':{'style1':[{x:0.1,y:0.1,scale:1}]},},
'travel':{'cup':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'socks':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'cup2':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'tshirt':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'tshirt2':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'socks2':{'style1':[{x:0.1,y:0.1,scale:1}]}},
'party':{'cup':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'socks':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'cup2':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'tshirt':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'tshirt2':{'style1':[{x:0.1,y:0.1,scale:1}]},
            'socks2':{'style1':[{x:0.1,y:0.1,scale:1}]}},
0:{'s1':{'pic':0},'s2':{'pic':0},'s3':{'pic':0},'s4':{'pic':0},'s5':{'pic':0},'s6':{'pic':0}}
}
export{ProductsList,StyleBarList,PortraitBarList,svg1,svg2,svg3,svg4,url,headp,peepsp}