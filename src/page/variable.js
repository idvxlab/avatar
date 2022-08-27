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

import gulping from '../img/portrait/sports/3-gulping.svg'
import swimming from '../img/portrait/sports/3-swimming.svg'
import wiiningMedals from '../img/portrait/sports/3-winning medals.svg'
import feelingEnergeticAccessory from '../img/portrait/sports/3-feeling energetic accessory.svg'
import feelingEnergetic from '../img/portrait/sports/3-feeling energetic.svg'
import feelingStrong from '../img/portrait/sports/3-feeling strong.svg'


import cup from '../img/products/work/cup-1.png'
import folder from '../img/products/work/folder-1.png'
import lunchBox from '../img/products/work/lunchbox-1.png'
import laptop from '../img/products/work/laptop-1.png'
import notebook from '../img/products/work/notebook-1.png'
import usb from '../img/products/work/usb-1.png'
import mousePad from '../img/products/work/mousePad-1.png'

import cupO from '../img/products/work/cup.png'
import folderO from '../img/products/work/folder.png'
import lunchBoxO from '../img/products/work/lunchbox.png'
import laptopO from '../img/products/work/laptop.png'
import notebookO from '../img/products/work/notebook.png'
import usbO from '../img/products/work/usb.png'
import mousePadO from '../img/products/work/mousePad.png'

import cardholderO from '../img/products/study/O/cardholder.png'
import folderSO from '../img/products/study/O/folder.png'
import pencilcaseO from '../img/products/study/O/pencilcase.png'
import schoolbagO from '../img/products/study/O/schoolbag.png'
import notebookSO from '../img/products/study/O/notebook.png'
import bagO from '../img/products/study/O/bag.png'
import calendarO from '../img/products/study/O/calendar.png'

import cardholder from '../img/products/study/cardholder.png'
import folderS from '../img/products/study/folder.png'
import pencilcase from '../img/products/study/pencilcase.png'
import schoolbag from '../img/products/study/schoolbag.png'
import notebookS from '../img/products/study/notebook.png'
import bag from '../img/products/study/bag.png'
import calendar from '../img/products/study/calendar.png'



import equipmentbagO from '../img/products/sports/O/equipment bag.png'
import hoodyO from '../img/products/sports/O/hoody.png'
import skateboardO from '../img/products/sports/O/skateboard.png'
import socksO from '../img/products/sports/O/socks.png'
import tshirtO from '../img/products/sports/O/tshirt.png'
import bottleO from '../img/products/sports/O/bottle.png'
import capO from '../img/products/sports/O/cap.png'

import equipmentbag from '../img/products/sports/equipment bag.png'
import hoody from '../img/products/sports/hoody.png'
import skateboard from '../img/products/sports/skateboard.png'
import socks from '../img/products/sports/socks.png'
import tshirt from '../img/products/sports/tshirt.png'
import bottle from '../img/products/sports/bottle.png'
import cap from '../img/products/sports/cap.png'

//import cup from "../img/products/sports/cup.png";
//import socks from "../img/products/sports/socks.png";
//import tshirt from "../img/products/sports/tshirt.png";
//var url='http://202.120.165.128:5000/service/avatar'
var canvasW=1500
var versionn='1'
var url='https://avatar-api.idvxlab.com:8010/service_avatar/avatar'
var headp=[0.2,0.0,0.66,.66]
var peepsp=[.05,0.02,1,1]
var ProductsList={
'work':{'cup':{'pic':cup},'folder':{'pic':folder},'lunchbox':{'pic':lunchBox},'laptop':{'pic':laptop},'notebook':{'pic':notebook},'usb':{'pic':usb},'mousePad':{'pic':mousePad}},
'study':{'cardholder':{'pic':cardholder},'folder':{'pic':folderS},'pencilcase':{'pic':pencilcase},
'schoolbag':{'pic':schoolbag},'notebook':{'pic':notebookS},'bag':{'pic':bag},'calendar':{'pic':calendar}},
'sport':{'equipment bag':{'pic':equipmentbag},'hoody':{'pic':hoody},'skateboard':{'pic':skateboard},'socks':{'pic':socks},
    'tshirt':{'pic':tshirt},'bottle':{'pic':bottle},'cap':{'pic':cap}},

'travel':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'party':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
0:{'s1':{'pic':0},'s2':{'pic':0},'s3':{'pic':0},'s4':{'pic':0},'s5':{'pic':0},'s6':{'pic':0}}
}

var ProductsListO={
    'work':{'cup':{'pic':cupO},'folder':{'pic':folderO},'lunchbox':{'pic':lunchBoxO},
    'laptop':{'pic':laptopO},'notebook':{'pic':notebookO},'usb':{'pic':usbO},'mousePad':{'pic':mousePadO}},
'study':{'cardholder':{'pic':cardholderO},'folder':{'pic':folderSO},'pencilcase':{'pic':pencilcaseO},
'schoolbag':{'pic':schoolbagO},'notebook':{'pic':notebookSO},'bag':{'pic':bagO},'calendar':{'pic':calendarO}},
'sport':{'equipment bag':{'pic':equipmentbagO},'hoody':{'pic':hoodyO},'skateboard':{'pic':skateboardO},'socks':{'pic':socksO},
    'tshirt':{'pic':tshirtO},'bottle':{'pic':bottleO},'cap':{'pic':capO}},

'travel':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
'party':{'cup':{'pic':cup},'socks':{'pic':socks},'cup2':{'pic':cup},'tshirt':{'pic':tshirt},'tshirt2':{'pic':tshirt},'socks2':{'pic':socks}},
0:{'s1':{'pic':0},'s2':{'pic':0},'s3':{'pic':0},'s4':{'pic':0},'s5':{'pic':0},'s6':{'pic':0}}
}

var PortraitBarList={'study':{'brainWave':{'pic':brainWave},'feelingSleepy':{'pic':feelingSleepy},'fullMark':{'pic':fullMark},
'reading':{'pic':reading},'zoningOut':{'pic':zoningOut}},
'work':{'brainstorming':{'pic':brainstorming},'doingPresentation':{'pic':doPre},
'slackingOff':{'pic':slackingOff},'waitingForLunch':{'pic':waitingForLunch},'workingOverTime':{'pic':workingOvertime}},
'sport':{'peep1':{'pic':gulping},
'peep2':{'pic':swimming},
'peep3':{'pic':wiiningMedals},'peep4':{'pic':feelingEnergetic,'pic_a':feelingEnergeticAccessory},'peep5':{'pic':feelingStrong},
//'peep7':{'pic':sport_a7}
},
'travel':{'peep1':{'pic':device},'peep2':{'pic':dress},'peep3':{'pic':paper},'peep4':{'pic':gymShirt}},
'party':{'peep1':{'pic':paper},'peep2':{'pic':sportyTee},},
0:{'s1':{'pic':0},'s2':{'pic':0},'s3':{'pic':0},'s4':{'pic':0},'s5':{'pic':0},'s6':{'pic':0}}
}
var StyleBarList={'study':{
        'cardholder':{'style1':[{x:0.25,y:0.5,sx:0.34,sy:0.43,degree:-.9,ty:.29}],
                                        'style2':[{x:0.5,y:0.5,sx:0.2,sy:0.2,degree:-0.1}]},
          'bag':{'style1':[{x:0.23,y:0.33,sx:.56,sy:.56}],'style2':[{x:0.4,y:0.18,scale:.25,rotate:Math.PI/4},{x:0.8,y:0.18,scale:.25}]},
          'notebook':{'style1':[{x:0.18,y:0.57,sx:0.3,sy:0.25,tx:.25,degree:-Math.PI*7/30}]},
          'folder':{'style1':[{x:0.3,y:0.42,sx:0.35,sy:0.35,tx:.15,ty:.0,degree:-Math.PI*3.5/20}]},
          'pencilcase':{'style1':[{x:0.07,y:0.37,sx:.5,sy:.26}]},
          'calendar':{'style1':[{x:.24,y:0.18,sx:0.43,sy:.43,ty:.12,degree:.08}]},
          'schoolbag':{'style1':[{x:0.2,y:0.27,sx:0.5,sy:0.5}]}},

'work':{'cup':{'style1':[{x:0.25,y:0.3,sx:0.4,sy:0.4,degree:0},],
                'style2':[{x:0.3,y:0.3,sx:0.15,sy:0.22,ty:0.2},{x:0.45,y:0.56,sx:0.15,sy:0.22,ty:-0.1,degree:0},
                    {x:0.5,y:0.26,sx:0.15,sy:0.22,ty:-0.2,degree:0}]},
        'mousePad':{'style1':[
            {x:0.14,y:0.25,sx:0.5,sy:0.5}]},
        'folder':{'style1':[{x:0.3,y:0.42,sx:0.35,sy:0.35,tx:.15,ty:.0,degree:-Math.PI*3.5/20}]},
        'lunchbox':{'style1':[{x:0.34,y:0.42,sx:0.28,sy:0.235}]},
        'laptop':{'style1':[{x:0.6,y:0.52,sx:0.21,sy:0.21,degree:2*Math.PI/16},{x:0.62,y:0.3,sx:0.21,sy:0.21,degree:2*Math.PI/16},{x:0.25,y:0.3,sx:0.21,sy:0.21,degree:2*Math.PI/16}]},
        'notebook':{'style1':[{x:0.18,y:0.57,sx:0.3,sy:0.25,tx:.25,degree:-Math.PI*7/30}]},
        'usb':{'style1':[{x:0.55,y:0.37,sx:.22,sy:.22,degree:-Math.PI/20}]}},
'sport':{'equipment bag':{'style1':[{x:0.31,y:0.25,sx:.33,sy:.52}]},
        'hoody':{'style1':[{x:0.31,y:0.38,sx:.38,sy:.38}]},
        'skateboard':{'style1':[{x:0.415,y:0.4,sx:.2,sy:.2}]},
        'socks':{'style1':[{x:0.22,y:0.22,sx:.26,sy:.26},{x:0.565,y:0.255,sx:.26,sy:.26}]},
        'tshirt':{'style1':[{x:0.24,y:0.39,sx:.5,sy:.5}]},
        'bottle':{'style1':[{x:0.34,y:0.4,sx:.3,sy:.5}]},
        'cap':{'style1':[{x:0.32,y:0.24,sx:.35,sy:.35}]}},
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
export{ProductsList,StyleBarList,PortraitBarList,svg1,svg2,svg3,svg4,url,headp,peepsp,versionn,canvasW,ProductsListO}