import React from 'react';
import { Tag, Button } from 'antd';

export default function() {
  return [
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
        <a href={text} target="_blank">链接</a>
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
  ]
}