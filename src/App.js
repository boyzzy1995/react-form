import React from 'react';
import axios from 'axios';
import ChildTable from './ChildTable';
import './App.css';
import { Layout, Menu, Breadcrumb, Table, Tag, Button, Modal, Input } from 'antd';
const { Header, Content } = Layout;
const { Search } = Input;

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      visible: false,
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          align: 'center'
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
          ellipsis: true,
          width: 300,
          align: 'center'
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          align: 'center',
          render: url => (
            <img src={url} alt=""></img>
          )
        },
        {
          title: 'BaseURL',
          dataIndex: 'baseURL',
          key: 'baseURL',
          align: 'center',
          render: text => (
            <a href={text}>链接</a>
          )
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          align: 'center',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag} className="ant-tags">
                    {tag}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Properties',
          key: 'properties',
          dataIndex: 'properties',
          align: 'center',
          render: (obj, record) => (
            <Button onClick={this.handleClick.bind(this, record)}>Toggle</Button>
          ),
        },
      ],
      originalData: []
    }
  }
  componentDidMount() {
    axios.get('http://www.mocky.io/v2/5ea28891310000358f1ef182').then(res => {
      this.setState({
        data: res.data.apis
      })
    })
  }
  handleClick(record) {
    this.setState({
      visible: true,
      column: record
    })
  }
  handleOk(e) {
    this.setState({
      visible: false
    });
  };

  handleCancel(e) {
    this.setState({
      visible: false
    });
  }
  hanldeInputChange(e) {
    const value = e.target.value;
    if (this.state.originalData.length === 0) {
      const originalData = JSON.parse(JSON.stringify(this.state.data));
      this.setState((state) => {
        return {
          originalData
        }
      })
    }

    if (value !== '') {
      const filterData = this.state.originalData.filter(record => {
        return record.tags.indexOf(value) > -1;
      })
      console.log(filterData)
      this.setState({
        data: filterData,
      })
    } else {
      this.setState({
        data: this.state.originalData
      })
    }
  }
  render() {
    return (
      <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">导航1</Menu.Item>
          <Menu.Item key="2">导航2</Menu.Item>
          <Menu.Item key="3">导航3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
            className="search-input"
            onChange={this.hanldeInputChange.bind(this)}
          ></Search>
          <Table columns={this.state.columns} dataSource={this.state.data} />
        </div>
      </Content>
      <Modal
        title="Basic Modal"
        visible={this.state.visible}
        onOk={this.handleOk.bind(this)}
        onCancel={this.handleCancel.bind(this)}
      >
        <ChildTable data={this.state.column}></ChildTable>
      </Modal>
    </Layout>
    );
  }
}

export default App;
