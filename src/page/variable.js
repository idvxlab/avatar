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
import brainWave from '../img/portrait/study/2-brain wave.svg'
import feelingSleepy from '../img/portrait/study/2-feeling sleepy.svg'
import fullMark from '../img/portrait/study/2-full mark.svg'
import reading from '../img/portrait/study/2-reading.svg'
import zoningOut from '../img/portrait/study/2-zoning out.svg'
import brainstorming from '../img/portrait/work/1-brainstorming.svg'
import doPre from '../img/portrait/work/1-doing presentation.svg'
import slackingOff from '../img/portrait/work/1-slacking off.svg'
import waitingForLunch from '../img/portrait/work/1-waiting for lunch.svg'
import workingOvertime from '../img/portrait/work/1-working overtime.svg'

import cup from '../img/products/work/cup.png'
import folder from '../img/products/work/folder.png'
import foodContainer from '../img/products/work/food container.png'
import laptop from '../img/products/work/laptop.png'
import notebook from '../img/products/work/notebook.png'
import usb from '../img/products/work/usb.png'

//import cup from "../img/products/sports/cup.png";
import socks from "../img/products/sports/socks.png";
import tshirt from "../img/products/sports/tshirt.png";
//var url='http://202.120.165.128:5000/service/avatar'
var canvasW=509
var versionn='1'
var url='https://avatar-api.idvxlab.com:8010/service_avatar/avatar'
var headp=[0.233,0.038,0.58,.58]
var peepsp=[.05,0.02,1,1]
var ProductsList={
    'work':{'cup':{'pic':cup},'folder':{'pic':folder},'foodContainer':{'pic':foodContainer},
    'laptop':{'pic':laptop},'notebook':{'pic':notebook},'usb':{'pic':usb}},
'study':{'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks},'cup':{'pic':cup},'socks':{'pic':socks}},
'sport':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'travel':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'party':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'party1':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
0:{'s1':{'pic':0},'s2':{'pic':0},'s3':{'pic':0},'s4':{'pic':0},'s5':{'pic':0},'s6':{'pic':0}}
}
var PortraitBarList={'study':{'brainWave':{'pic':brainWave},'feelingSleepy':{'pic':feelingSleepy},'fullMark':{'pic':fullMark},
'reading':{'pic':reading},'zoningOut':{'pic':zoningOut}},
'work':{'brainstorming':{'pic':brainstorming},'doingPresentation':{'pic':doPre},
'slackingOff':{'pic':slackingOff},'waitingForLunch':{'pic':waitingForLunch},'workingOverTime':{'pic':workingOvertime}},
'sport':{'peep1':{'pic':dress},'peep2':{'pic':gaming},'peep3':{'pic':explaining},'peep4':{'pic':gymShirt}},
'travel':{'peep1':{'pic':device},'peep2':{'pic':dress},'peep3':{'pic':paper},'peep4':{'pic':gymShirt}},
'party':{'peep1':{'pic':paper},'peep2':{'pic':sportyTee},},
0:{'s1':{'pic':0},'s2':{'pic':0},'s3':{'pic':0},'s4':{'pic':0},'s5':{'pic':0},'s6':{'pic':0}}
}
var StyleBarList={'study':{'cup':{'style1':[{x:0.1,y:0.1,sx:0.2,sy:0.2,degree:0.1},{x:0.4,y:0.4,sx:0.2,sy:0.2,degree:0.1}],'style2':[{x:0.5,y:0.5,sx:0.2,sy:0.2,degree:-0.1}]},
          'socks':{'style1':[{x:0.2,y:0.18,scale:.25,rotate:Math.PI/4},{x:0.5,y:0.18,scale:.25}],'style2':[{x:0.4,y:0.18,scale:.25,rotate:Math.PI/4},{x:0.8,y:0.18,scale:.25}]},
          'cup2':{'style1':[{x:0.1,y:0.1,scale:1}]},
          'tshirt':{'style1':[{x:0.1,y:0.1,scale:1}]},
          'tshirt2':{'style1':[{x:0.1,y:0.1,scale:1}]},
          'socks2':{'style1':[{x:0.1,y:0.1,scale:1}]}},
'work':{'cup':{'style1':[{x:0.25,y:0.3,sx:0.2,sy:0.3,ty:0.2,degree:0},],
                'style2':[{x:0.3,y:0.3,sx:0.15,sy:0.22,ty:0.2},{x:0.45,y:0.56,sx:0.15,sy:0.22,ty:-0.1,degree:0},
                    {x:0.5,y:0.26,sx:0.15,sy:0.22,ty:-0.2,degree:0}]},
          'folder':{'style1':[{x:0.3,y:0.25,sx:0.22,sy:0.22}]},
                'foodContainer':{'style1':[{x:0.47,y:0.25,sx:0.2,sy:0.10,ty:-0.8,degree:Math.PI*1/3}]},
          'laptop':{'style1':[{x:0.55,y:0.45,sx:0.3,sy:0.3,degree:2*Math.PI/16}]},
          'notebook':{'style1':[{x:0.3,y:0.65,sx:0.25,sy:0.25}]},
          'usb':{'style1':[{x:0.55,y:0.42,sx:.15,sy:.15,degree:-Math.PI/20}]}},
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
export{ProductsList,StyleBarList,PortraitBarList,svg1,svg2,svg3,svg4,url,headp,peepsp,versionn,canvasW}