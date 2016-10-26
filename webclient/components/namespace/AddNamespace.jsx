import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AVAvTimer from 'material-ui/svg-icons/av/av-timer';
import ImageStraighten from 'material-ui/svg-icons/image/straighten';
import MediaQuery from 'react-responsive';

export default class AddNamespace extends React.Component {

  remove =() =>
  {
    console.log(this.props.index);
    this.props.remove(this.props.index);
  }
  
  render() {
   return (
      <div>
    {/*media query for mobile device starts*/}
       <MediaQuery query='(max-device-width: 487px)'>
                   <MediaQuery query='(max-width: 487px)'>
                        <TextField floatingLabelText="ALIAS*" />&emsp;&emsp;
                        <TextField floatingLabelText="DATA FIELD NAME*" /><br />
                        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" >
                        <RadioButton value="not_light" label={<span><i className="material-icons">3d_rotation</i></span>} />
                        <RadioButton value="light" label={<span><ImageStraighten/></span>} />
                        <RadioButton value="light1" label={<span><AVAvTimer/></span>} />
                        </RadioButtonGroup>
                        <FloatingActionButton mini={true} default={true} onClick={this.remove} style={{float:"right",marginTop:"-30px"}}> 
                        <ContentRemove/>
                        </FloatingActionButton>
                   </MediaQuery> 
       </MediaQuery> 
     {/*media query for mobile device ends*/}
     
     {/*media query for Desktops starts*/}    
       <MediaQuery query='(min-device-width: 487px)'>
                   <MediaQuery query='(min-width: 487px)'>
                        <TextField floatingLabelText="ALIAS*" value={this.props.value}/>&emsp;&emsp;
                        <TextField floatingLabelText="DATA FIELD NAME*" value={this.props.value}/>&emsp;
                        <div style={{display:"inline-flex"}}>
                        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" >
                        <RadioButton value="not_light" label={<span><i className="material-icons">3d_rotation</i></span>} />
                        <RadioButton value="light" label={<span><ImageStraighten/></span>} />
                        <RadioButton value="light1" label={<span><AVAvTimer/></span>} />
                        </RadioButtonGroup>
                        </div>
                        <FloatingActionButton mini={true} default={true} onClick={this.remove} style={{float:"right",marginRight:"60px",marginTop:"70px"}}>
                        <ContentRemove/>
                        </FloatingActionButton>
                   </MediaQuery> 
       </MediaQuery> 
     {/*media query for Desktops ends*/}  
      </div>
       );
}
}