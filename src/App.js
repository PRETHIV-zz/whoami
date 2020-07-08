import React from 'react';
import logo from './logo.svg';
import profilepic from './profilepic.jpg';
import about from './about1.png';
import education from './education.png';
//import quickknow from './quickknow.png';
import './App.css';
import ReactModal from 'react-modal';
import exclamation from './exclamation.png';
import university from './university.png';
import ReactToolTip from 'react-tooltip';
import hrschool from './school.png';
import school from './school2.png';
import skills from './skills.png';
import cpp from './cpp.png';
import computerprogram from './computerprogram.png';
import c from './c.png';
import java from './java.png';
import python from './python.png';
import javascript from './javascript.png';
import chash from './chash.jfif';
import webdev from './webdev.jfif';
import html from './html.png';
import css from './css.png';
import bootstrap4 from './Bootstrap4.png';
import reacticon from './reactjs.png';
import nodeicon from './nodejs.png';
import phpicon from './php.png';
import scss from './scss.jfif';
import database from './database.png';
import mysql from './mysql.png';
import msaccess from './msaccess.png';
import elastic from './elastic.png';

const tag = {
  fontFamily: 'segoe UI',
  fontSize: 20,
  marginLeft: 30,
  marginTop: 20,
  fontWeight: 'bold',
  transition: 'all 0.5s linear'
}

const valueOfTag = {
  fontFamily: 'segoe UI',
  fontSize: 20,
  marginLeft: 30,
  marginTop: 20,
  transition: 'all 0.5s linear'
}

const cardStyle = {
  fontFamily: 'segoe UI',
  fontSize: 55,
  backgroundColor: '#ffffff',
  fontWeight: 'bold',
  boxShadow: '-30px 30px 20px rgba(0,0,0,0.3)',
  borderRadius: 0,
  transform: 'rotate(0deg)'
}



const cardContent = {
  fontFamily: 'segoe UI',
  fontSize: 20,
  margin: 30,
  fontWeight: '500',
  transition: 'all 0.5s linear'
}

const educationCard = {
  fontFamily: 'segoe UI',
  fontSize: 20,
  margin: 30,
  boxShadow: '0px 20px 20px rgba(0,0,0,0.3)'
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      marginnameTop: 80,
      marginnameLeft: 100,
      secmargT: 50,
      namefontSize: 100,
      secfontSize: 48,
      openmodal: false,
      quickmodalopacity: 0,
      bioData: [{ tag: 'Name:', valueOfTag: 'Prethiv Nageswaran' },
      {
        tag: 'Highest Degree:',
        valueOfTag: 'Bachelor of Technology'
      },
      {
        tag: 'Stream:',
        valueOfTag: 'Information Technology'
      },
      {
        tag: 'CGPA:',
        valueOfTag: '8.37'
      },
      {
        tag: 'Nativity:',
        valueOfTag: 'Sirkazhi'
      },
      {
        tag: 'E-mail:',
        valueOfTag: 'prethiv191@gmail.com'
      },
      {
        tag: 'Work Experience:',
        valueOfTag: 'PayPal 2020-Present'
      },
      {
        tag: 'Good in:',
        valueOfTag: 'C++ ,C ,Python ,Java ,Javascript ,HTML5 ,CSS3 ,Bootstrap4 ,scss ,php ,NodeJs ,ReactJs ,MS-access ,Elasticsearch ,mysql ,VCS using git ,Selenium3'
      },
      {
        tag: 'College:',
        valueOfTag: 'Jeppiaar Engineering College'
      },
      {
        tag: 'Schooling-HSC:',
        valueOfTag: 'ARC Kamatchi matriculation hr.sec school'
      },
      {
        tag: 'HSC Percentage:',
        valueOfTag: '92.3%'
      },
      {
        tag: 'Schooling-SSLC:',
        valueOfTag: 'SMH Hindu Matriculation school'
      },
      {
        tag: 'SSLC Percentage:',
        valueOfTag: '96.4%'
      },
      {
        tag: 'Acheivements:',
        valueOfTag: '1.Won project expo 2017 2.Codekata star of the year 2019 3.Hackerrank profile with 5 star ratings in C++,python,java and 6 stars in problem solving '
      }
      ],
      skills: [
        {
          name: 'Programming Languages',icon:computerprogram, val: [
            { name: 'C++',icon:cpp, desc: 'c++ ,Good in STL and algorithm and core c++' },
            { name: 'C', icon:c,desc: 'C(Very good in C programming and its fundamentals)' },
            { name: 'Java',icon:java, desc: 'Java (Good in collections  and Object Oriented Programming in Java)' },
            { name: 'Python',icon:python, desc: 'Python (Good in Python (OOPS,DS,Popular libraries) ,developed an entire VPA from scratch using python)' },
            { name: 'Javascript',icon:javascript, desc: 'Good enough in javscript...how much...?Good enough to make this site:-)' },
            {name:'C#',icon:chash,desc:'Developed the game boxy using visual c# back in 2017 using ide vs 2015'}
          ]
        },
        {
          name:'Web development stacks',icon:webdev,val:[
            {name:'HTML5',icon:html,desc:'html5'},
            {name:'CSS3',icon:css,desc:'css3'},
            {name:'Bootstrap4',icon:bootstrap4,desc:'bootstrap4'},
            {name:'Php',icon:phpicon,desc:'Php'},
            {name:'ReactJS',icon:reacticon,desc:'ReactJS'},
            {name:'NodeJS',icon:nodeicon,desc:'NodeJS'},
            {name:'Scss',icon:scss,desc:'Compiled css using sass'}
          ]
        },
        {
          name:'Databases Worked with',icon:database,val:[
            {name:'MySQL',icon:mysql,desc:'mysql'},
            {name:'MS-Access',icon:msaccess,desc:'Ms-Access'},
            {name:'ElasticSearch',icon:elastic,desc:'ElasticSearch'}
          ]
        }
      ],
     
    };

    this.auxilary = {
          height: 0,
        width: 0
      }
  
    }
  
  updateDimension = () => {
          this.auxilary.width = window.innerWidth
    this.auxilary.height = window.innerHeight
        console.log(window.innerHeight, window.innerWidth)
        console.log('Dimension updated', this.auxilary.width, this.auxilary.height)
    
    if (this.auxilary.width < 768) {
          //It is a mobile phone

          this.setState({ marginnameTop: 50, marginnameLeft: 20, secmargT: 0, namefontSize: 75, secfontSize: 30 })

        }


        else if (this.auxilary.width >= 768 && this.auxilary.width < 992) {
          //It is a tablat
          this.setState({ marginnameTop: 50, marginnameLeft: 20, secmargT: 0, namefontSize: 75, secfontSize: 30 })
        }

        else if (this.auxilary.width >= 992 && this.auxilary.width < 1200) {
          //it is a small laptop
          this.setState({ marginnameTop: 100, marginnameLeft: 100, secmargT: 50, namefontSize: 100, secfontSize: 48 })
        }

        else {
          //Larger screen
          this.setState({ marginnameTop: 100, marginnameLeft: 100, secmargT: 50, namefontSize: 100, secfontSize: 48 })
        }


        }
      
  quickfire = () => {
          this.setState({ openmodal: true })
        }

        closequickfire = () => {
          this.setState({ openmodal: false, quickmodalopacity: 0 })
        }

        modalOpened = () => {
          //this.setState({ quickmodalopacity: 0 })
          this.setState({ quickmodalopacity: 1 })
        }

        modalClosed = () => {
          //this.setState({ quickmodalopacity: 1 })
          this.setState({ quickmodalopacity: 0 })
        }


        componentDidMount() {

          console.log(window.innerWidth, window.innerHeight);
        this.auxilary.height = window.innerHeight
        this.auxilary.width = window.innerWidth
        window.addEventListener('resize', this.updateDimension);
    
      }
    
  eduMouseOver = (event) => {
          console.log(event.target.name)
    console.log(event.target)
        console.log(event.target.value)
        console.log(event.target.style.boxShadow)
    if (event.target.style.boxShadow !== 'rgba(0, 0, 0, 0) 0px 0px 0px') {
          event.target.style.boxShadow = '0px 20px 20px rgba(0,0,0,0.7)'
        }
        }
      
      
  eduMouseLeave = (event) => {
    if (event.target.style.boxShadow !== 'rgba(0, 0, 0, 0) 0px 0px 0px') {
          event.target.style.boxShadow = '0px 20px 20px rgba(0,0,0,0.3)'
        }
        }

  techHover=(event)=>{
     event.target.height=70
     event.target.width=70
  }

  techLeave=(event)=>{
     event.target.height=50
     event.target.width=50
  }
      
      
  scrollWindow(x, y) {
          window.scrollBy(
            {
              top: y,
              left: x,
              behavior: 'smooth'
            }
          )
        }



        render() {
    return (
      <div className="container-fluid" style={{ backgroundColor: '#b3b8b2' }}>

          <ReactModal
            isOpen={this.state.openmodal}
            style={{ overlay: { marginLeft: '10%', marginRight: '10%', opacity: this.state.quickmodalopacity, transition: 'all 0.5s linear' } }}
            onAfterOpen={this.modalOpened}
            onAfterClose={this.modalClosed}
            closeTimeoutMS={500}
          >

            <button onClick={this.closequickfire} style={{ transition: 'all 0.5s linear', fontFamily: 'Segoe UI Black', fontSize: 20, marginTop: 30, marginLeft: 30 }} type="button" className="btn btn-success">

              Back</button><br />

            {this.state.bioData.map(item =>
              <div className="row">
                <div className="col-6">
                  <label style={tag}>
                    {item.tag}
                  </label>
                </div>
                <div className="col-6">
                  <label style={valueOfTag}>
                    {item.valueOfTag}
                  </label>
                </div>
              </div>)
            }

          </ReactModal>

          <div className="row">

            {/*Main intro page that contains my photo and text */}

            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">

              <button onClick={this.quickfire} style={{ transition: 'all 0.5s linear', fontFamily: 'Segoe UI Black', fontSize: this.state.namefontSize - 50, marginTop: 100, marginLeft: this.state.marginnameLeft }} type="button" className="btn btn-success">

                Know me at a click</button><br />

              <label style={{ transition: 'all 0.5s linear', fontFamily: 'Segoe UI Black', fontSize: this.state.namefontSize, fontWeight: 'bold', marginTop: this.state.marginnameTop, marginLeft: this.state.marginnameLeft }}>

                PRETHIV
  
          </label>

              <label onClick={this.power} style={{ transition: 'all 0.5s linear', color: 'rgb(127,127,127)', fontFamily: 'Segoe UI Black', fontSize: this.state.secfontSize, fontWeight: 'bold', marginTop: this.state.secmargT, marginLeft: this.state.marginnameLeft }}>
                Programmer by profession and passion
            </label>

            </div>

            <div className="col">
              <img style={{ transition: 'all 0.5s linear' }} className="img-fluid" style={{ float: 'right' }} src={profilepic} alt="prethiv" />
            </div>


          </div>

          <div className="row">

            {/* Navigation Card should be added here*/}

          </div>

          <div className="row" style={{ marginTop: 50 }}>

            {/* About me card */}
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" style={
              cardStyle
            } >
              <img style={{ marginLeft: 30 }} src={exclamation} alt='i' height={57} width={50} />
              <label>About me</label><br />
              <label style={cardContent}>
                Born in sirkazhi on jan 19,1999,a town in nagappatinam district of tamilnadu.<b>I am a passionate programmer,
              web developer and data structures Engineer</b>.Fell in love with computers during my <b>7th grade </b>
                when i resolved an issue while installing a<a href='https://en.wikipedia.org/wiki/WWE_SmackDown!_Here_Comes_the_Pain'> pc game</a>.Bought my first computer on <b>2011</b>.After finishing <b>12th grade </b>
                in <b>Computer Science </b> Stream,went to chennai for pursuing my Bachelor's programme at <b>Jeppiaar Engineering College</b>.
              Developed my first game and apk<b><a href="https://github.com/PRETHIV/MP3-Cutter-using-c"> mp3 cutter using pure c</a> and <a href='https://github.com/PRETHIV/BOXY'> boxy </a><i>(a puzzle based computer game with my own set of rules)</i></b> at the <b>age of 16</b>.
              Mastered computer programming with the book <b><i>'Fundamentals of Computer Programming' by anita goel and ajay mittal</i></b> and mastered Object
              Oriented Programming with the book <b><i>'Java 'The Complete Reference' by Herbert Schildt</i></b>.Done with two internships during my college period
              one with <b>Infosys Foundation Program </b> another one with <b>PayPal</b>,both internships are 5 months.
                Won project expo 2017 and got awarded as codekata star of the year by guvi for securing codekata's leaderboard
              and <u><label style={{ color: 'blue' }} onClick={() => { this.scrollWindow(0, 200) }}> much more</label></u>.
              Before passing out got offered by <b>Infosys</b> for clearing <b><i>#hackwithinfy</i></b> all india level coding contest for the role
              of <b>System Engineer Specialist(STG Unit of Infosys)</b> and <b>PayPal</b> for the role of <b>Software Engineer 1</b>.
                Currently working as a Software Engineer at Paypal.
            </label>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

          </div>

          <div className="row" style={{ marginTop: 50 }}>

            {/* About me card */}
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" style={
              cardStyle
            } >
              <img style={{ marginLeft: 30 }} src={education} alt='i' height={100} width={100} />
              <label>Education</label><br />

              <div className="row" >

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" style={educationCard}
                  onMouseOver={this.eduMouseOver} onMouseLeave={this.eduMouseLeave}
                >
                  <img className="img-fluid" style={{
                    margin: '20 %',
                    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
                  }} height={150} width={150} src={university} name='effectT'></img>
                  < label style={{ boxShadow: '0px 0px 0px rgba(0,0,0,0)' }} value='effectT'>
                    Jeppiaar Engineering College(2016- 2020)
                </ label>
                  <p style={{ boxShadow: '0px 0px 0px rgba(0,0,0,0)' }} name='effectT'>
                    Information Technology
                </p>
                  <p style={{ boxShadow: '0px 0px 0px rgba(0,0,0,0)' }} name='effectT'>
                    CGPA:8.37
                </p>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" style={educationCard}
                  onMouseOver={this.eduMouseOver} onMouseLeave={this.eduMouseLeave}
                >
                  <img className="img-fluid" style={{
                    margin: '20 %',
                    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
                  }} height={150} width={150} src={hrschool} name='effectT'></img>
                  < label style={{ boxShadow: '0px 0px 0px rgba(0,0,0,0)' }} value='effectT'>
                    ARC Kamatchi Matriculation Higher Secondary School (2014-2016)
                </ label>
                  <p style={{ boxShadow: '0px 0px 0px rgba(0,0,0,0)' }} name='effectT'>
                    Computer Science
                </p>
                  <p style={{ boxShadow: '0px 0px 0px rgba(0,0,0,0)' }} name='effectT'>
                    HSC Percentage:92.3%(1114/1200)
                </p>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" style={educationCard}
                  onMouseOver={this.eduMouseOver} onMouseLeave={this.eduMouseLeave}
                >
                  <img className="img-fluid" style={{
                    margin: '20 %',
                    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
                  }} height={150} width={150} src={school} name='effectT'></img>
                  < label style={{ boxShadow: '0px 0px 0px rgba(0,0,0,0)' }} value='effectT'>
                    SMH matriculation School (2003-2014)
                </ label>
                  <p style={{ boxShadow: '0px 0px 0px rgba(0,0,0,0)' }} name='effectT'>

                  </p>
                  <p style={{ boxShadow: '0px 0px 0px rgba(0,0,0,0)' }} name='effectT'>
                    SSLC Percentage:96.4%(481/500)
                </p>
                </div>

              </div>

            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

          </div>

          <div className="row" style={{ marginTop: 50 }}>

            {/* About me card */}
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" style={
              cardStyle
            } >
              <img style={{ marginLeft: 30 }} src={skills} alt='i' height={57} width={50} />
              <label style={{ marginLeft: 30 }}>Skills</label><br />


              {this.state.skills.map(
                item=>(
<div className="row" style={{ margin: 30, boxShadow: '-20px 20px 20px rgba(0,0,0,0.3)' }}>

<div className="col-12">
  <img className="img-fluid" style={{
    marginLeft: 50,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  }} height={50} width={50} src={item.icon} name='effectT'></img>

<label style={{ fontSize: 30, marginLeft: 50 }}>{item.name}</label>
</div>
{item.val.map(content=>(
  <div className="col-*">
  <img onMouseOver={this.techHover} onMouseLeave={this.techLeave} data-tip={content.desc} style={{ margin: 30 ,transition:'all 0.2s linear'}} className="img-fluid" height={50} width={50} src={content.icon} name='effectT'></img>
</div>
))
        }
<ReactToolTip />
        
</div>
                )
              )
              }
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

          </div>

          <br />
          <br />



        </div >
        );
    
      }
    
    
    
    
    }
    
    
    
export default App;