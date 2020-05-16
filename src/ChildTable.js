import React from 'react';
import { Table } from 'antd';

class ChildTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Tyep',
          dataIndex: 'type',
          key: 'type',
          align: 'center'
        },
        {
          title: 'Url',
          dataIndex: 'url',
          key: 'url',
          align: 'center',
          ellipsis: true
        }
      ]
    }
  }
  render() {
    return (
      <Table columns={this.state.columns} dataSource={this.props.data.properties}></Table>
    )
  }
}

export default ChildTable;