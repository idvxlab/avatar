import svg2 from "../img/000000.svg";
import svg1 from "../img/000001.svg";
import svg3 from "../img/000002.svg";
import svg4 from "../img/000003.svg";
import p1 from '../img/portrait/Device.svg'
import p2 from '../img/portrait/Gaming.svg'
import p3 from '../img/portrait/Explaining.svg'
import p4 from '../img/portrait/Gym Shirt.svg'
import cup from "../img/products/sports/cup.png";
import socks from "../img/products/sports/socks.png";
import tshirt from "../img/products/sports/tshirt.png";

var ProductsList={
'study':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'work':{'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks},'cup':{'pic':cup},'socks':{'pic':socks}},
'sport':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'travel':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'party':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'party1':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'party2':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'party3':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'party4':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
0:{'s1':{'pic':0},'s2':{'pic':0},'s3':{'pic':0},'s4':{'pic':0},'s5':{'pic':0},'s6':{'pic':0}}
}
var PortraitBarList={'study':{'peep1':{'pic':p1},'peep2':{'pic':p2},'peep3':{'pic':p3},'peep4':{'pic':p4}},
'work':{'peep1':{'pic':p1},'peep2':{'pic':p2},'peep3':{'pic':p3},'peep4':{'pic':p4}},
'sport':{'peep1':{'pic':p1},'peep2':{'pic':p2},'peep3':{'pic':p3},'peep4':{'pic':p4}},
'travel':{'peep1':{'pic':p1},'peep2':{'pic':p2},'peep3':{'pic':p3},'peep4':{'pic':p4}},
'party':{'peep1':{'pic':p1},'peep2':{'pic':p2},'peep3':{'pic':p3},'peep4':{'pic':p4}},
0:{'s1':{'pic':0},'s2':{'pic':0},'s3':{'pic':0},'s4':{'pic':0},'s5':{'pic':0},'s6':{'pic':0}}
}
var StyleBarList={'study':{'cup':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
          'socks':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
          'cup2':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
          'tshirt':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
          'tshirt2':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
          'socks2':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},},
'work':{'cup':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'socks':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'cup2':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'tshirt':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'tshirt2':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'socks2':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},},
'sport':{'cup':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'socks':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'cup2':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'tshirt':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'tshirt2':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'socks2':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},},
'travel':{'cup':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'socks':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'cup2':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'tshirt':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'tshirt2':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'socks2':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},},
'party':{'cup':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'socks':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'cup2':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'tshirt':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'tshirt2':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},
            'socks2':{'style1':{x:10,y:10,scale:1},'style2':{x:100,y:100,scale:0.5}},},
0:{'s1':{'pic':0},'s2':{'pic':0},'s3':{'pic':0},'s4':{'pic':0},'s5':{'pic':0},'s6':{'pic':0}}
}
export{ProductsList,StyleBarList,PortraitBarList,svg1,svg2,svg3,svg4}