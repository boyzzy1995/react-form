import React from 'react';

const table = getTableColumn()

function getTableColumn() {
  return [1, 2, 3].map(i => {
    return {
      title: `标题${i}`,
      key: `${i}`,
      render: item => <a href={`http://www.hello.com${i}`}>{`${item}[${i}]`}</a>
    }
  })
}
export default table;