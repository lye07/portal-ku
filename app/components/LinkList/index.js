/**
*
* LinkList
*
*/

import React from 'react';


import styles from './styles.css';

function LinkList({ links }) {
  const linkItem = links.map(i => (
    <div key={i.id}>
      {i.topicName}
      <p>{ i.description }</p>
    </div>
  ))
  return (
    <div className={styles.linkList}>
      { linkItem }
    </div>
  );
}

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })),
};

export default LinkList;
