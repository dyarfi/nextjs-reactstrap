import React, { memo } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  UncontrolledButtonDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const ButtonsPage = memo(props => {
  const {
    /* dropdowns */
    isOpen,
    stateDropUp,
    setStateDropUp,
    stateDropLeft,
    setStateDropLeft,
    stateDropRight,
    setStateDropRight,
    stateDropRightAlign,
    setStateDropRightAlign,
    toggle,
  } = props;

  return (
    <>
      <h1>Buttons</h1>
      <div className="hero-start">
        <h3>Sizes</h3>
        <Button color="primary" size="lg">
          Large Button
        </Button>
        <Button color="secondary" size="lg">
          Large Button
        </Button>
        <br />
        <br />
        <Button color="primary" size="md">
          Medium Button
        </Button>
        <Button color="secondary" size="md">
          Medium Button
        </Button>
        <br />
        <br />
        <Button color="primary" size="sm">
          Small Button
        </Button>
        <Button color="secondary" size="sm">
          Small Button
        </Button>
        <h3>Blocks</h3>
        <Button color="primary" size="lg" block>
          Block level button
        </Button>
        <Button color="secondary" size="md" block>
          Block level button
        </Button>
        <Button color="secondary" size="sm" block>
          Block level button
        </Button>
        <h3>Outline</h3>
        <div>
          <Button outline color="primary">
            primary
          </Button>{' '}
          <Button outline color="secondary">
            secondary
          </Button>{' '}
          <Button outline color="success">
            success
          </Button>{' '}
          <Button outline color="info">
            info
          </Button>{' '}
          <Button outline color="warning">
            warning
          </Button>{' '}
          <Button outline color="danger">
            danger
          </Button>
        </div>
        <div className="my-3">
          <Button outline color="primary" className="btn-ghost-light">
            rounded <Badge color="primary">2</Badge>
          </Button>{' '}
          <Button outline color="secondary" className="btn-ghost-light">
            secondary <Badge color="secondary">4</Badge>
          </Button>{' '}
          <Button outline color="success" className="btn-ghost-light">
            success
          </Button>{' '}
          <Button outline color="info" className="btn-ghost-light">
            info
          </Button>{' '}
          <Button outline color="warning" className="btn-ghost-light">
            warning
          </Button>{' '}
          <Button outline color="danger" className="btn-ghost-light">
            danger
          </Button>
        </div>
        <h3>Icons</h3>
        <div>
          <Button outline color="primary">
            <i className="fab fa-facebook"></i> primary
          </Button>{' '}
          <Button outline color="secondary">
            <i className="fab fa-github"></i> secondary
          </Button>{' '}
          <Button outline color="success">
            <i className="fab fa-twitter"></i> success
          </Button>{' '}
          <Button outline color="info">
            <i className="fab fa-linkedin"></i> info
          </Button>{' '}
          <Button outline color="warning">
            <i className="fab fa-yelp"></i> warning
          </Button>{' '}
          <Button outline color="danger">
            <i className="fab fa-yahoo"></i> danger
          </Button>
          <div className="my-2">
            <Button className="btn btn-danger btn-sm btn-square btn-hidden">
              <i className="fas fa-eye"></i>{' '}
              <span className="links">Read More</span>
            </Button>
            <Button className="btn btn-danger btn-sm btn-square btn-hidden">
              <i className="fas fa-trash"></i>{' '}
              <span className="links">Delete</span>
            </Button>
            <Button className="btn btn-danger btn-sm btn-square btn-hidden">
              <i className="fas fa-chevron-left"></i>{' '}
              <span className="links">Submit</span>
            </Button>
            <Button className="btn btn-danger btn-sm btn-square btn-hidden">
              <i className="fab fa-facebook"></i>{' '}
              <span className="links">Post</span>
            </Button>
            <Button className="btn btn-danger btn-sm btn-square btn-hidden">
              <i className="fab fa-twitter"></i>{' '}
              <span className="links">Twit</span>
            </Button>
            <Button className="btn btn-danger btn-sm btn-square btn-hidden">
              <i className="fab fa-github"></i>{' '}
              <span className="links">Commit</span>
            </Button>
          </div>
        </div>
        <h3>Dropdown</h3>
        <ButtonDropdown isOpen={isOpen} toggle={toggle}>
          <DropdownToggle caret color="primary">
            Button Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <Dropdown
          isOpen={stateDropRightAlign}
          toggle={() => setStateDropRightAlign(!stateDropRightAlign)}
        >
          <DropdownToggle caret>
            Dropdown's menu is right-aligned
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Another Really Really Long Action (Really!)
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <h3>Drop Direction</h3>
        <UncontrolledButtonDropdown>
          <ButtonDropdown
            direction="up"
            isOpen={stateDropUp}
            toggle={() => {
              setStateDropUp(!stateDropUp);
            }}
          >
            <DropdownToggle caret>Dropup</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <ButtonDropdown
            direction="left"
            isOpen={stateDropLeft}
            toggle={() => {
              setStateDropLeft(!stateDropLeft);
            }}
          >
            <DropdownToggle caret>Dropleft</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <ButtonDropdown
            direction="right"
            isOpen={stateDropRight}
            toggle={() => {
              setStateDropRight(!stateDropRight);
            }}
          >
            <DropdownToggle caret>Dropright</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </UncontrolledButtonDropdown>
        <h3>Button Group</h3>
        <ButtonGroup size="lg">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup size="sm">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    </>
  );
});

export default ButtonsPage;
