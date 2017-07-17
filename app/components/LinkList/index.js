/**
*
* LinkList
*
*/

import React from 'react';

import Link from '../Link';
import styles from './styles.css';

function LinkList({ links }) {
  const linkNodes = links.map(i => (
    <Link
      key={i.id}
      link={i}
    />
  ))
  return (
    <div className={styles.linkList}>
      { linkNodes }
    </div>
  );
}

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    topicName: React.PropTypes.string.isRequired,
  })),
};

export default LinkList;
