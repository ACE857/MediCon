import React, {Component}  from 'react'
import { Dropdown } from 'semantic-ui-react'

var dropValues = [ ]


class DropdownExampleSelection extends Component {
    
    constructor(props) {
        super(props);
        const myArray = props.lst;
        dropValues = [];
        for (var index = 0; index < myArray.length; index++) {
            var x = {
                key: myArray[index],
                text: myArray[index],
                value: myArray[index],
                image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
              };
              dropValues.push(x);    
          }
    }

    render() {
        return (
            <Dropdown
            placeholder='Login As'
            fluid
            selection
            options={dropValues}
            />
        );
    }
}

export default DropdownExampleSelection

