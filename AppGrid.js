import React from 'react';
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import GridLayout from 'react-grid-layout';

class MyFirstGrid extends React.Component {

  constructor(){
    super();
    this.state = {
      violationText: "Click a violation number to see more information about it."
    }
    this.populateGridLayout(violationTestString);
  }

  style = [
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
    {border: '1px solid', backgroundColor: 'rgb(200,255,200)'},
  ]

  populateGridLayout(text){
    var violationMap = binning(extractViolationsNumberIn(text));
    var keys = violationMap.keys();

    for(var item of keys){
      var r = 255;
      var gb = 255;
      var numViolations = violationMap.get(item);
      if(numViolations > 6){
        gb = 0;
      }else{
        gb = 255 - (40*numViolations);
      }

      this.style[item-1].backgroundColor = "rgb(" + r + "," + gb + "," + gb + ")";
    }
  }

  onClick(index){
    console.log("test" + index)
    this.setState({violationText: "Violation Description: " + ViolationsMap.get(index-1)})
  }


  // layout is an array of objects, see the demo for more complete usage
  layout = [
    {i: '1', x: 0, y: 0, w: 1, h: 1, static: true, resizable: false},
    {i: '2', x: 1, y: 0, w: 1, h: 1, static: true, resizable: false},
    {i: '3', x: 2, y: 0, w: 1, h: 1, static: true, resizable: false},
    {i: '4', x: 3, y: 0, w: 1, h: 1, static: true, resizable: false},
    {i: '5', x: 4, y: 0, w: 1, h: 1, static: true, resizable: false},
    {i: '6', x: 5, y: 0, w: 1, h: 1, static: true, resizable: false},
    {i: '7', x: 6, y: 0, w: 1, h: 1, static: true, resizable: false},
    {i: '8', x: 7, y: 0, w: 1, h: 1, static: true, resizable: false},
    {i: '9', x: 0, y: 1, w: 1, h: 1, static: true, resizable: false},
    {i: '10', x: 1, y: 1, w: 1, h: 1, static: true, resizable: false},
    {i: '11', x: 2, y: 1, w: 1, h: 1, static: true, resizable: false},
    {i: '12', x: 3, y: 1, w: 1, h: 1, static: true, resizable: false},
    {i: '13', x: 4, y: 1, w: 1, h: 1, static: true, resizable: false},
    {i: '14', x: 5, y: 1, w: 1, h: 1, static: true, resizable: false},
    {i: '15', x: 6, y: 1, w: 1, h: 1, static: true, resizable: false},
    {i: '16', x: 7, y: 1, w: 1, h: 1, static: true, resizable: false},
    {i: '17', x: 0, y: 2, w: 1, h: 1, static: true, resizable: false},
    {i: '18', x: 1, y: 2, w: 1, h: 1, static: true, resizable: false},
    {i: '19', x: 2, y: 2, w: 1, h: 1, static: true, resizable: false},
    {i: '20', x: 3, y: 2, w: 1, h: 1, static: true, resizable: false},
    {i: '21', x: 4, y: 2, w: 1, h: 1, static: true, resizable: false},
    {i: '22', x: 5, y: 2, w: 1, h: 1, static: true, resizable: false},
    {i: '23', x: 6, y: 2, w: 1, h: 1, static: true, resizable: false},
    {i: '24', x: 7, y: 2, w: 1, h: 1, static: true, resizable: false},
    {i: '25', x: 0, y: 3, w: 1, h: 1, static: true, resizable: false},
    {i: '26', x: 1, y: 3, w: 1, h: 1, static: true, resizable: false},
    {i: '27', x: 2, y: 3, w: 1, h: 1, static: true, resizable: false},
    {i: '28', x: 3, y: 3, w: 1, h: 1, static: true, resizable: false},
    {i: '29', x: 4, y: 3, w: 1, h: 1, static: true, resizable: false},
    {i: '30', x: 5, y: 3, w: 1, h: 1, static: true, resizable: false},
    {i: '31', x: 6, y: 3, w: 1, h: 1, static: true, resizable: false},
    {i: '32', x: 7, y: 3, w: 1, h: 1, static: true, resizable: false},
    {i: '33', x: 0, y: 4, w: 1, h: 1, static: true, resizable: false},
    {i: '34', x: 1, y: 4, w: 1, h: 1, static: true, resizable: false},
    {i: '35', x: 2, y: 4, w: 1, h: 1, static: true, resizable: false},
    {i: '36', x: 3, y: 4, w: 1, h: 1, static: true, resizable: false},
    {i: '37', x: 4, y: 4, w: 1, h: 1, static: true, resizable: false},
    {i: '38', x: 5, y: 4, w: 1, h: 1, static: true, resizable: false},
    {i: '39', x: 6, y: 4, w: 1, h: 1, static: true, resizable: false},
    {i: '40', x: 7, y: 4, w: 1, h: 1, static: true, resizable: false},
    {i: '41', x: 0, y: 5, w: 1, h: 1, static: true, resizable: false},
    {i: '42', x: 1, y: 5, w: 1, h: 1, static: true, resizable: false},
    {i: '43', x: 2, y: 5, w: 1, h: 1, static: true, resizable: false},
    {i: '44', x: 3, y: 5, w: 1, h: 1, static: true, resizable: false},
    {i: '45', x: 4, y: 5, w: 1, h: 1, static: true, resizable: false},
    {i: '46', x: 5, y: 5, w: 1, h: 1, static: true, resizable: false},
    {i: '47', x: 6, y: 5, w: 1, h: 1, static: true, resizable: false},
    {i: '48', x: 7, y: 5, w: 1, h: 1, static: true, resizable: false},
    {i: '49', x: 0, y: 6, w: 1, h: 1, static: true, resizable: false},
    {i: '50', x: 1, y: 6, w: 1, h: 1, static: true, resizable: false},
    {i: '51', x: 2, y: 6, w: 1, h: 1, static: true, resizable: false},
    {i: '52', x: 3, y: 6, w: 1, h: 1, static: true, resizable: false},
    {i: '53', x: 4, y: 6, w: 1, h: 1, static: true, resizable: false},
    {i: '54', x: 5, y: 6, w: 1, h: 1, static: true, resizable: false},
    {i: '55', x: 6, y: 6, w: 1, h: 1, static: true, resizable: false},
    {i: '56', x: 7, y: 6, w: 1, h: 1, static: true, resizable: false},
    {i: '57', x: 0, y: 7, w: 1, h: 1, static: true, resizable: false},
    {i: '58', x: 1, y: 7, w: 1, h: 1, static: true, resizable: false},
    {i: '59', x: 2, y: 7, w: 1, h: 1, static: true, resizable: false},
    {i: '60', x: 3, y: 7, w: 1, h: 1, static: true, resizable: false},
    {i: '61', x: 4, y: 7, w: 1, h: 1, static: true, resizable: false},
    {i: '62', x: 5, y: 7, w: 1, h: 1, static: true, resizable: false},
    {i: '63', x: 6, y: 7, w: 1, h: 1, static: true, resizable: false},
  ];

  render() {
    return (
      <div>
        <GridLayout className="layout" layout={this.layout} cols={8} rowHeight={50} width={500}>
          <div key="1" style={this.style[0]} onMouseDown={() => this.onClick(1)}>1</div>
          <div key="2" style={this.style[1]} onMouseDown={() => this.onClick(2)}>2</div>
          <div key="3" style={this.style[2]} onMouseDown={() => this.onClick(3)}>3</div>
          <div key="4" style={this.style[3]} onMouseDown={() => this.onClick(4)}>4</div>
          <div key="5" style={this.style[4]} onMouseDown={() => this.onClick(5)}>5</div>
          <div key="6" style={this.style[5]} onMouseDown={() => this.onClick(6)}>6</div>
          <div key="7" style={this.style[6]} onMouseDown={() => this.onClick(7)}>7</div>
          <div key="8" style={this.style[7]} onMouseDown={() => this.onClick(8)}>8</div>
          <div key="9" style={this.style[8]} onMouseDown={() => this.onClick(9)}>9</div>
          <div key="10" style={this.style[9]} onMouseDown={() => this.onClick(10)}>10</div>
          <div key="11" style={this.style[10]} onMouseDown={() => this.onClick(11)}>11</div>
          <div key="12" style={this.style[11]} onMouseDown={() => this.onClick(12)}>12</div>
          <div key="13" style={this.style[12]} onMouseDown={() => this.onClick(13)}>13</div>
          <div key="14" style={this.style[13]} onMouseDown={() => this.onClick(14)}>14</div>
          <div key="15" style={this.style[14]} onMouseDown={() => this.onClick(15)}>15</div>
          <div key="16" style={this.style[15]} onMouseDown={() => this.onClick(16)}>16</div>
          <div key="17" style={this.style[16]} onMouseDown={() => this.onClick(17)}>17</div>
          <div key="18" style={this.style[17]} onMouseDown={() => this.onClick(18)}>18</div>
          <div key="19" style={this.style[18]} onMouseDown={() => this.onClick(19)}>19</div>
          <div key="20" style={this.style[19]} onMouseDown={() => this.onClick(20)}>20</div>
          <div key="21" style={this.style[20]} onMouseDown={() => this.onClick(21)}>21</div>
          <div key="22" style={this.style[21]} onMouseDown={() => this.onClick(22)}>22</div>
          <div key="23" style={this.style[22]} onMouseDown={() => this.onClick(23)}>23</div>
          <div key="24" style={this.style[23]} onMouseDown={() => this.onClick(24)}>24</div>
          <div key="25" style={this.style[24]} onMouseDown={() => this.onClick(25)}>25</div>
          <div key="26" style={this.style[25]} onMouseDown={() => this.onClick(26)}>26</div>
          <div key="27" style={this.style[26]} onMouseDown={() => this.onClick(27)}>27</div>
          <div key="28" style={this.style[27]} onMouseDown={() => this.onClick(28)}>28</div>
          <div key="29" style={this.style[28]} onMouseDown={() => this.onClick(29)}>29</div>
          <div key="30" style={this.style[29]} onMouseDown={() => this.onClick(30)}>30</div>
          <div key="31" style={this.style[30]} onMouseDown={() => this.onClick(31)}>31</div>
          <div key="32" style={this.style[31]} onMouseDown={() => this.onClick(32)}>32</div>
          <div key="33" style={this.style[32]} onMouseDown={() => this.onClick(33)}>33</div>
          <div key="34" style={this.style[33]} onMouseDown={() => this.onClick(34)}>34</div>
          <div key="35" style={this.style[34]} onMouseDown={() => this.onClick(35)}>35</div>
          <div key="36" style={this.style[35]} onMouseDown={() => this.onClick(36)}>36</div>
          <div key="37" style={this.style[36]} onMouseDown={() => this.onClick(37)}>37</div>
          <div key="38" style={this.style[37]} onMouseDown={() => this.onClick(38)}>38</div>
          <div key="39" style={this.style[38]} onMouseDown={() => this.onClick(39)}>39</div>
          <div key="40" style={this.style[39]} onMouseDown={() => this.onClick(40)}>40</div>
          <div key="41" style={this.style[40]} onMouseDown={() => this.onClick(41)}>41</div>
          <div key="42" style={this.style[41]} onMouseDown={() => this.onClick(42)}>42</div>
          <div key="43" style={this.style[42]} onMouseDown={() => this.onClick(43)}>43</div>
          <div key="44" style={this.style[43]} onMouseDown={() => this.onClick(44)}>44</div>
          <div key="45" style={this.style[44]} onMouseDown={() => this.onClick(45)}>45</div>
          <div key="46" style={this.style[45]} onMouseDown={() => this.onClick(46)}>46</div>
          <div key="47" style={this.style[46]} onMouseDown={() => this.onClick(47)}>47</div>
          <div key="48" style={this.style[47]} onMouseDown={() => this.onClick(48)}>48</div>
          <div key="49" style={this.style[48]} onMouseDown={() => this.onClick(49)}>49</div>
          <div key="50" style={this.style[49]} onMouseDown={() => this.onClick(50)}>50</div>
          <div key="51" style={this.style[50]} onMouseDown={() => this.onClick(51)}>51</div>
          <div key="52" style={this.style[51]} onMouseDown={() => this.onClick(52)}>52</div>
          <div key="53" style={this.style[52]} onMouseDown={() => this.onClick(53)}>53</div>
          <div key="54" style={this.style[53]} onMouseDown={() => this.onClick(54)}>54</div>
          <div key="55" style={this.style[54]} onMouseDown={() => this.onClick(55)}>55</div>
          <div key="56" style={this.style[55]} onMouseDown={() => this.onClick(56)}>56</div>
          <div key="57" style={this.style[56]} onMouseDown={() => this.onClick(57)}>57</div>
          <div key="58" style={this.style[57]} onMouseDown={() => this.onClick(58)}>58</div>
          <div key="59" style={this.style[58]} onMouseDown={() => this.onClick(59)}>59</div>
          <div key="60" style={this.style[59]} onMouseDown={() => this.onClick(60)}>60</div>
          <div key="61" style={this.style[60]} onMouseDown={() => this.onClick(61)}>61</div>
          <div key="62" style={this.style[61]} onMouseDown={() => this.onClick(62)}>62</div>
          <div key="63" style={this.style[62]} onMouseDown={() => this.onClick(63)}>63</div>
        </GridLayout>
        <h4 style={{marginLeft: 10}}>{this.state.violationText}</h4>
      </div>
    )
  }
}

var violationTestString = "3. MANAGEMENT, FOOD EMPLOYEE AND CONDITIONAL EMPLOYEE; KNOWLEDGE, RESPONSIBILITIES AND REPORTING - Comments: OBSERVED NO EMPLOYEE HEALTH POLICY AVAILABLE. INSTRUCTED MANAGER TO PROVIDE EMPLOYEE HEALTH POLICY FOR ALL EMPLOYEES. PRIORITY FOUNDATION CITATION ISSUED 7-38-010 | 38. INSECTS, RODENTS, & ANIMALS NOT PRESENT - Comments: OBSERVED OVER 20 MICE DROPPINGS SCATTERED ALONG BASEBOARDS IN CUDDLE BUGS STORAGE CLOSET. INSTRUCTED MANAGER TO CALL AN EXTERMINATOR FOR SERVICE, CLEAN AND SANITIZE ALL AREAS. PRIORITY FOUNDATION CITATION ISSUED 7-38-020(A) | 38. INSECTS, RODENTS, & ANIMALS NOT PRESENT - Comments: OBSERVED 1/4' GAP BETWEEN OUTER ENTRANCE DOORS. INSTRUCTED TO SEAL ALL OUTER OPENINGS ON DOOR TO PREVENT PEST ENTRY. | 39. CONTAMINATION PREVENTED DURING FOOD PREPARATION, STORAGE & DISPLAY - Comments: OBSERVED BOXES OF CEREAL STORED ON FLOOR IN KITCHEN AND STAIRWAY AREAS. INSTRUCTED MANAGER TO ELEVATE ALL STOCK SIX INCHES OFF FLOOR. | 44. UTENSILS, EQUIPMENT & LINENS: PROPERLY STORED, DRIED, & HANDLED - Comments: OBSERVED LAUNDRY FACILITIES(WASHER AND DRYER) LOCATED INSIDE KITCHEN. INSTRUCTED MANAGER THAT ALL SOILED LINENS SHALL BE KEPT IN CLEAN, NONABSORBENT RECEPTACLES OR CLEAN WASHABLE LAUNDRY BAG AND STORED AND TRANSPORTED TO PREVENT CONTAMINATION OF FOOD, CLEAN EQUIPMENT, CLEAN UTENSILS, AND SINGLE SERVICE ARTICLES. | 47. FOOD & NON-FOOD CONTACT SURFACES CLEANABLE, PROPERLY DESIGNED, CONSTRUCTED & USED - Comments: OBSERVED DAMAGED DOOR GASKET ON REACH-IN COOLER IN KITCHEN. INSTRUCTED TO REPLACE AND MAINTAIN. | 55. PHYSICAL FACILITIES INSTALLED, MAINTAINED & CLEAN - Comments: OBSERVED OPENINGS IN LOWER WALL NEAR UTILITY SINK, AROUND PIPE FITTINGS ABOVE UTILITY SINK AND WATER HEATER, AND ALONG WALL BASES IN UTILITY ROOM. INTRUCTED MANAGER TO SEAL ALL OPENINGS ALONG WALLS IN UTILITY ROOM. | 55. PHYSICAL FACILITIES INSTALLED, MAINTAINED & CLEAN - Comments: OBSERVED STOCK ON FLOOR AND ALONG WALLS IN STORAGE AREAS. INSTRUCTED TO STORE STOCK SIX INCHES OFF AND AWAY FROM WALLS FOR EASY CLEANING AND PEST CONTROL IN ALL STORAGE AREAS.";

function extractViolationsNumberIn(risk) {
  if(risk == null){
  	return [];
  }
  var regex = /\|\s\d+/g;
  var array = [];
  var match;
  while (match = regex.exec(risk)) {
  //console.log(match[0]);
    var replacement = '| '
    array.push(parseInt(match[0].replace(replacement, '')))
  }
  return array;
}

function binning (listOfViolations) {
  var binnedMap = new Map();
  for (var i = 0; i < listOfViolations.length; i++) {
    var element = listOfViolations[i];
    if (binnedMap.has(element)) {
      var count = binnedMap.get(element);
      var val = count + 1;
      binnedMap.set(element, val);
    }
    else {
      binnedMap.set(element, 1);
    }
  }
  return binnedMap;
}

var ViolationsMap = new Map();
ViolationsMap.set(1, "Person in charge present, demonstrates knowledge, and performs duties")
ViolationsMap.set(2, "City of Chicago Food Service Sanitation Certificate")
ViolationsMap.set(3, "Management, food employee and conditional employee; knowledge, responsibilities and reporting")
ViolationsMap.set(4, "Proper use of restriction and exclusion")
ViolationsMap.set(5, "Procedures for responding to vomiting and diarrheal events")
ViolationsMap.set(6, "Proper eating, tasting, drinking, or tobacco use")
ViolationsMap.set(7, "No discharge from eyes, nose, and mouth")
ViolationsMap.set(8, "Hands clean & properly washed")
ViolationsMap.set(9, "No bare hand contact with RTE food or a pre-approved alternative procedure properly allowed")
ViolationsMap.set(10, "Adequate handwashing sinks properly supplied and accessible")
ViolationsMap.set(11, "Food obtained from approved source")
ViolationsMap.set(12, "Food received at proper temperature")
ViolationsMap.set(13, "Food in good condition, safe, & unadulterated")
ViolationsMap.set(14, "Required records available: shellstock tags, parasite")
ViolationsMap.set(15, "Food separated and protected")
ViolationsMap.set(16, "Food-contact surfaces: cleaned & sanitized ")
ViolationsMap.set(17, "Proper disposition of returned, previously served, reconditioned & unsafe food")
ViolationsMap.set(18, "Proper cooking time & temperatures")
ViolationsMap.set(19, "Proper reheating procedures for hot holding")
ViolationsMap.set(20, "Proper cooling time and temperature")
ViolationsMap.set(21, "Proper hot holding temperatures")
ViolationsMap.set(22, "Proper cold holding temperatures")
ViolationsMap.set(23, "Proper date marking and disposition")
ViolationsMap.set(24, "Time as a Public Health Control; procedures & records")
ViolationsMap.set(25, "Consumer advisory provided for raw/undercooked food")
ViolationsMap.set(26, "Pasteurized foods used; prohibited foods not offered")
ViolationsMap.set(27, "Food additives: approved and properly used")
ViolationsMap.set(28, "Toxic substances properly identified, stored, & used")
ViolationsMap.set(29, "Compliance with variance/specialized process/HACCP")
ViolationsMap.set(30, "Pasteurized eggs used where required")
ViolationsMap.set(31, "Water & ice from approved source")
ViolationsMap.set(32, "Variance obtained for specialized processing methods")
ViolationsMap.set(33, "Proper cooling methods used; adequate equipment for temperature control")
ViolationsMap.set(34, "Plant food properly cooked for hot holding")
ViolationsMap.set(35, "Approved thawing methods used")
ViolationsMap.set(36, "Thermometers provided & accurate")
ViolationsMap.set(37, "Food properly labeled; original container")
ViolationsMap.set(38, "Insects, rodents, & animals not present")
ViolationsMap.set(39, "Contamination prevented during food preparation, storage & display")
ViolationsMap.set(40, "Personal cleanliness")
ViolationsMap.set(41, "Wiping cloths: properly used & stored")
ViolationsMap.set(42, "Washing fruits & vegetables")
ViolationsMap.set(43, "In-use utensils: properly stored")
ViolationsMap.set(44, "Utensils, equipment & linens: properly stored, dried, & handled")
ViolationsMap.set(45, "Single-use/single-service articles: properly stored & used")
ViolationsMap.set(46, "Gloves used properly")
ViolationsMap.set(47, "Food & non-food contact surfaces cleanable, properly designed, constructed & used")
ViolationsMap.set(48, "Warewashing facilities: installed, maintained & used; test strips")
ViolationsMap.set(49, "Non-food contact surfaces clean")
ViolationsMap.set(50, "Hot & cold water available; adequate pressure")
ViolationsMap.set(51, "Plumbing installed; proper backflow devices")
ViolationsMap.set(52, "Sewage & waste water properly disposed")
ViolationsMap.set(53, "Toilet facilities: properly constructed, supplied, & cleaned")
ViolationsMap.set(54, "Garbage & refuse properly disposed; facilities maintained")
ViolationsMap.set(55, "Physical facilities installed, maintained & clean")
ViolationsMap.set(56, "Adequate ventilation & lighting; designated areas used")
ViolationsMap.set(57, "All food employees have food handler training")
ViolationsMap.set(58, "All food employees have allergen training as required")
ViolationsMap.set(59, "Previous priority foundation violation corrected ")
ViolationsMap.set(60, "Previous core violation corrected")
ViolationsMap.set(61, "Summary Report displayed and visible to the public")
ViolationsMap.set(62, "Compliance with Clean Indoor Air Ordinance ")
ViolationsMap.set(63, "Removal of Suspension Sign")


export default MyFirstGrid;
