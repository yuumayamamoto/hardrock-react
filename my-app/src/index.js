
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header,Menu,Image,Icon, Grid ,List} from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: "#ccc", fontSize: "22px" };
    return (
        <Menu className="topmenu">
          <Menu.Item>(Logo goes here)</Menu.Item>
          <Menu.Item style={itemStyle} position="right">CAFES</Menu.Item>
          <Menu.Item style={itemStyle}>HOTELS</Menu.Item>
        </Menu>
    )
  }
}

class Reacthead extends React.Component {
  render() {
    const itemStyle = { color: "#ccc", fontSize: "22px" };
    return (
        <Menu borderless className = "topmenu" >
          <Menu.Item><Image src = " http://courses.ics.hawaii.edu/ics314f17/morea/ui-frameworks/hard-rock-logo.png "></Image></Menu.Item>
          <Menu.Item style={itemStyle} position = "right"> CAFES</Menu.Item>
          <Menu.Item style={itemStyle}> HOTELS</Menu.Item>
          <Menu.Item style={itemStyle}> CASINOS</Menu.Item>
          <Menu.Item style={itemStyle}> LIVE</Menu.Item>
          <Menu.Item style={itemStyle}> SHOP</Menu.Item>
          <Menu.Item style={itemStyle}> BLOG</Menu.Item>
          <Menu.Item style={itemStyle}> REWARDS</Menu.Item>

        </Menu>
    )
  }
}
class Reactmain extends React.Component {
  render() {
    return (


              <Image src = "https://www.hardrockcafe.com/location/honolulu/files/5390/9967882_ImageMediumWidth.jpeg" className = "ui fluid image"></Image>


    )
  }
}
class Reactfoot extends React.Component {
  render() {
    return (
        <div className={"footer-background"}>
          <Grid stackable >
            <Grid.Column></Grid.Column>
            <Grid.Column width = "4" >  Lunch <hr/>
              <List>
                <List.Item>Monday – Friday: 11:00am – 2:30pm</List.Item>
                <List.Item>Saturday – Sunday: Not open for lunch</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column></Grid.Column>
            <Grid.Column width ="4" >  Lunch <hr/>
              <List>
                <List.Item>Monday – Friday: 11:00am – 2:30pm</List.Item>
                <List.Item>Saturday – Sunday: Not open for lunch</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column></Grid.Column>
            <Grid.Column width ="4" >
              Lunch <hr/>
              <List>
                <List.Item>Monday – Friday: 11:00am – 2:30pm</List.Item>
                <List.Item>Saturday – Sunday: Not open for lunch</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}
class Murphys extends React.Component {
  render() {
    return (
        <div textAlign="center">
          <Reacthead></Reacthead>
          <Reactmain></Reactmain>
          <Reactfoot></Reactfoot>
        </div>
    );
  }
}
ReactDOM.render(<Murphys/>, document.getElementById('root'));