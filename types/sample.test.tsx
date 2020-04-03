import React from 'react';

import {
  Autocomplete,
  Tabs,
  Tab,
  Section,
  Carousel,
  Textarea,
  Collapsible,
  CollapsibleItem,
  Container,
  DatePicker,
  Divider,
  Dropdown,
  Button,
  Footer,
  Icon,
  MediaBox,
} from 'react-materialize';

<>
  <Autocomplete options={{ data: { asd: '32' }, onAutocomplete: () => 32 }} s={3} />;
  <Tabs className="hello" defaultValue="what" options={{ duration: 32, onShow: () => {}, swipeable: true, responsiveThreshold: 32 }} onChange={() => {}} />
  <Tab idx="as" title="Hello" />
  <Section node="div" className="foo" id="bar" />
  <Carousel images={['one.jpg']} options={{ numVisible: 32, onCycleTo: () => {} }} centerImages={true} />
  <Textarea disabled={false} value="hello">foo</Textarea>
  <Collapsible options={{ accordion: true }} />
  <CollapsibleItem href="http://" active={false} />
  <Container className="hello" />
  <DatePicker options={{ isRTL: false }} id="asd" />
  <Divider />
  <Dropdown id="Dropdown_6" options={{
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      coverTrigger: true,
      hover: false,
      inDuration: 150,
      onOpenStart: () => {},
      outDuration: 250
    }}
    trigger={<Button>Drop Me!</Button>}>
    <a href="#">one</a>
  </Dropdown>
  <Footer
    className="example"
    copyrights="&copy 2015 Copyright Text"
    links={<ul><li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>}
    moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}>
    <h1>Footer Content</h1>
  </Footer>
  <Icon className="asd" left small large>cloud</Icon>
  <MediaBox id="MediaBox_7" options={{
      inDuration: 275,
      onOpenEnd: () => {},
      outDuration: 200
    }}>
    <img
      alt=""
      src="https://materializecss.com/images/sample-1.jpg"
      width="650"
    />
  </MediaBox>
</>
